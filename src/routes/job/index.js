import express from "express";
import passport from "passport";

import { createJobRoute, deleteJobRoute, editJobRoute, getJobRoute, getJobsRoute, getJobsByPersonaRoute } from "../../services/jobs";

const router = express.Router();

// get all jobs
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await getJobsRoute(req, res);
});

// create a job
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await createJobRoute(req, res);
});

// get selected job
router.get('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await getJobRoute(req, res);
});

// edit selected job
router.patch('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await editJobRoute(req, res);
});

// delete job
router.delete('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await deleteJobRoute(req, res);
});

// get the list of jobs for a persona
router.get('/personaJobs/:personaId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await getJobsByPersonaRoute(req, res);
});

export default router;