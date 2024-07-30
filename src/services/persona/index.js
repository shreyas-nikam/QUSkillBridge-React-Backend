import { personaModel } from "../../schemas/persona.schema";

export const getPersonasRoute = async (req, res) => {
    let personasObjectArray = [];
    let jsonArrayPersonas = {};

    // pagination
    let paginationSize = null;
    let pageNumber = null;
    if (req.query.page) {
        if (req.query.page.number) {
            pageNumber = +req.query.page.number;
        }
        if (req.query.page.size) {
            paginationSize = +req.query.page.size;
        }
    }

    // filtering
    let filters = {};
    if (req.query.filter) {
        filters = req.query.filter;
    }

    // sorting
    let sortValue;
    if (req.query.sort) {
        sortValue = req.query.sort;
    }

    // choose fields
    let fieldsPersona;
    if (req.query.fields) {
        if (req.query.fields.personas) {
            fieldsPersona = req.query.fields.personas.split(",");
        }
    }

    const allPersonas = await personaModel
        .find(filters)
        .select(fieldsPersona)
        .limit(paginationSize)
        .skip((pageNumber - 1) * paginationSize)
        .sort(sortValue);

    personasObjectArray = allPersonas.map((element) => {
        let jsonObj = {
            type: "personas",
            id: element.id,
            attributes: {
                ...element._doc,
            },
        };
        return (jsonArrayPersonas = { ...jsonArrayPersonas, ...jsonObj });
    });

    const sentData = { data: [...personasObjectArray] };
    return res.status(200).send(sentData);
};

export const getPersonaRoute = async (req, res) => {
    const personaId = req.params.id;

    let fieldsPersona;
    if (req.query.fields) {
        if (req.query.fields.personas) {
            fieldsPersonas = req.query.fields.personas.split(",");
        }
    }

    const foundPersona = await personaModel.findOne({ _id: personaId }).select(fieldsPersona);
    if (!foundPersona) {
        return res
            .status(400)
            .send({ errors: [{ detail: "The persona can not be found" }] });
    }

    const sentData = {
        data: {
            type: "personas",
            id: foundPersona.id,
            attributes: {
                ...foundPersona._doc,
            },
        },
    };
    return res.status(200).send(sentData);
};

export const createPersonaRoute = async (req, res) => {
    const { name, description } = req.body.data.attributes;

    if (!name) {
        return res
            .status(400)
            .send({ errors: [{ detail: "The name is required" }] });
    }
    if (!description) {
        return res
            .status(400)
            .send({ errors: [{ detail: "The description is required" }] });
    }

    const existingPersona = await personaModel.findOne({ name: name });
    if (existingPersona) {
        return res
            .status(400)
            .send({ errors: [{ detail: "The persona already exists" }] });
    }
    const newPersona = new personaModel({
        name: name,
        description: description,
        created_at: Date.now(),
        updated_at: Date.now(),
    });
    newPersona.save();
    const sentData = {
        data: {
            type: "personas",
            id: newPersona.id,
            attributes: {
                ...newPersona._doc
            },
        },
    };
    return res.status(201).send(sentData);
};

export const editPersonaRoute = async (req, res) => {
    const personaId = req.params.id;
    const { name, description } = req.body.data.attributes;

    if (!name) {
        return res
            .status(400)
            .send({ errors: [{ detail: "The name is required" }] });
    }
    if (!description) {
        return res
            .status(400)
            .send({ errors: [{ detail: "The description is required" }] });
    }

    const foundPersona = await personaModel.findById(personaId);
    if (!foundPersona) {
        return res
            .status(400)
            .json({ errors: [{ detail: "No persona was found" }] });
    }
    const existingPersonasWithName = await personaModel.find({ name: name, _id: { $ne: personaId } });
    if (existingPersonasWithName.length > 0) {
        return res.status(400).send({
            errors: [{ detail: "Already exists a persona with this name" }],
        });
    }
    const updatedPersona = await personaModel.updateOne({ _id: personaId },
        {
            name: name,
            description: description,
            created_at: Date.now(),
            updated_at: Date.now(),
        }
    );

    const sentData = {
        data: {
            type: "personas",
            id: personaId,
            attributes: {
                ...updatedPersona._doc
            },
        },
    };
    return res.status(200).send(sentData);
};

export const deletePersonaRoute = async (req, res) => {
    const toDeletePersona = await personaModel.findById(req.params.id);

    if (!toDeletePersona) {
        return res
            .status(400)
            .send({ errors: [{ detail: "The persona does not exist" }] });
    }

    try {
        await personaModel.deleteOne({ _id: toDeletePersona._id });
        res.sendStatus(204);
    } catch (err) {
        console.error(err);
    }
};
