import express from "express";
import passport from "passport";

import { createPersonaRoute, deletePersonaRoute, editPersonaRoute, getPersonaRoute, getPersonasRoute } from "../../services/persona";

const router = express.Router();

// create a persona
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await createPersonaRoute(req, res);
});

// get selected persona
router.get('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await getPersonaRoute(req, res);
});

// edit selected persona
router.patch('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await editPersonaRoute(req, res);
});

// delete persona
router.delete('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await deletePersonaRoute(req, res);
});

// get all personas
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    await getPersonasRoute(req, res);
});

export default router;