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
    const persona = await personaModel.findById(req.params.id);
    if (!persona) {
        return res.status(404).send({ message: "Persona not found" });
    }
    return res.status(200).send(persona);
};

export const createPersonaRoute = async (req, res) => {
    const persona = new personaModel(req.body);
    await persona.save();
    return res.status(201).send(persona);
};

export const editPersonaRoute = async (req, res) => {
    const persona = await personaModel.findById(req.params.id);
    if (!persona) {
        return res.status(404).send({ message: "Persona not found" });
    }
    persona.set(req.body);
    await persona.save();
    return res.status(200).send(persona);
};

export const deletePersonaRoute = async (req, res) => {
    const persona = await personaModel.findById(req.params.id);
    if (!persona) {
        return res.status(404).send({ message: "Persona not found" });
    }
    await persona.delete();
    return res.status(204).send();
};
