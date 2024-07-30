import express from "express";
import passport from "passport";
import { createUserRoute, deleteUserRoute, editUserRoute, getUserRoute, getUsersRoute, udpateUserRoute } from "../../services/users";
import jwt from 'jsonwebtoken';
const router = express.Router();

router.get("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
  await getUsersRoute(req, res);
})

router.post("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
  await createUserRoute(req, res);
})

router.get("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
  await getUserRoute(req, res);
});

router.patch("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
  await udpateUserRoute(req, res);
});

router.delete("/:id", passport.authenticate("jwt", { session: false }), async (req, res) => {
  await deleteUserRoute(req, res);
});

export default router;
