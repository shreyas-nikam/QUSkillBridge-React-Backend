import { courseModel } from "../../schemas/course.schema";

export const getCoursesRoute = async (req, res) => {
    let coursesObjectArray = [];
    let jsonArrayCourses = {};

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
    let fieldsCourse;
    if (req.query.fields) {
        if (req.query.fields.courses) {
            fieldsCourse = req.query.fields.courses.split(",");
        }
    }

    const allCourses = await courseModel
        .find(filters)
        .select(fieldsCourse)
        .limit(paginationSize)
        .skip((pageNumber - 1) * paginationSize)
        .sort(sortValue);

    coursesObjectArray = allCourses.map((element) => {
        let jsonObj = {
            type: "courses",
            id: element.id,
            attributes: {
                ...element._doc,
            },
        };
        return (jsonArrayCourses = { ...jsonArrayCourses, ...jsonObj });
    });

    const sentData = { data: [...coursesObjectArray] };
    
    return res.status(200).send(sentData);
};

export const getCourseRoute = async (req, res) => {
    const course = await courseModel.findById(req.params.id);
    if (!course) {
        return res.status(404).send({ message: "Course not found" });
    }
    return res.status(200).send({ data: course });
};

export const createCourseRoute = async (req, res) => {
    const course = new courseModel(req.body);
    await course.save();
    return res.status(201).send({ data: course });
};

export const editCourseRoute = async (req, res) => {
    const course = await courseModel.findByIdAndUpdate(req.params)
    if (!course) {
        return res.status(404).send({ message: "Course not found" });
    }
    return res.status(200).send({ data: course });
};

export const deleteCourseRoute = async (req, res) => {
    const course = await courseModel.findByIdAndDelete(req.params.id);
    if (!course) {
        return res.status(404).send({ message: "Course not found" });
    }
    return res.status(200).send({ data: course });
};
