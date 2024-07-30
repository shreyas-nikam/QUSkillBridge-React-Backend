import { jobModel } from "../../schemas/job.schema";
import { userModel } from "../../schemas/user.schema";

export const getJobsRoute = async (req, res) => {
    let jobsObjectArray = [];
    let jsonArrayJobs = {};

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
    let fieldsJob;
    if (req.query.fields) {
        if (req.query.fields.jobs) {
            fieldsJob = req.query.fields.jobs.split(",");
        }
    }

    const allJobs = await jobModel
        .find(filters)
        .select(fieldsJob)
        .limit(paginationSize)
        .skip((pageNumber - 1) * paginationSize)
        .sort(sortValue);

    jobsObjectArray = allJobs.map((element) => {
        let jsonObj = {
            type: "jobs",
            id: element.id,
            attributes: {
                ...element._doc,
            },
        };
        return (jsonArrayJobs = { ...jsonArrayJobs, ...jsonObj });
    });

    const sentData = { data: [...jobsObjectArray] };
    return res.status(200).send(sentData);
};

export const getJobRoute = async (req, res) => {
    const { id } = req.params;
    const job = await jobModel.findById(id);
    if (!job) {
        return res.status(404).send({ message: "Job not found" });
    }
    return res.status(200).send(job);
};

export const createJobRoute = async (req, res) => {
    const job = new jobModel(req.body);
    await job.save();
    return res.status(201).send(job);
};

export const editJobRoute = async (req, res) => {
    const { id } = req.params;
    const job = await jobModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!job) {
        return res.status(404).send({ message: "Job not found" });
    }
    return res.status(200).send(job);
};

export const deleteJobRoute = async (req, res) => {
    const { id } = req.params;
    const job = await jobModel.findByIdAndDelete(id);
    if (!job) {
        return res.status(404).send({ message: "Job not found" });
    }
    return res.status(200).send({ message: "Job deleted" });
};

export const getJobsByPersonaRoute = async (req, res) => {
    const { userId } = req.params;
    const user = await userModel.find({ _id: userId });
    if (!user) {
        return res.status(404).send({ message: "User not found" });
    }
    const personaId = user.persona;
    const jobs = await jobModel.find({
        persona: personaId
    });
    if (!jobs) {
        return res.status(404).send({ message: "Jobs not found" });
    }

    return res.status(200).send(jobs);
};

