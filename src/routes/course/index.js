import express from "express";
import passport from "passport";

import { createCourseRoute, deleteCourseRoute, editCourseRoute, getCoursesRoute, getCourseRoute } from "../../services/course";
const router = express.Router();

// get all courses
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await getCoursesRoute(req, res);
});

// create a course
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await createCourseRoute(req, res);
});

// get selected course
router.get('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await getCourseRoute(req, res);
});

// edit selected course
router.patch('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await editCourseRoute(req, res);
});

// delete course
router.delete('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await deleteCourseRoute(req, res);
});


export default router;