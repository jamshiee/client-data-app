import express from "express";
import {
  getClients,
  createClients,
  updateClients,
  deleteClients,
  searchClients,
} from "../controller/client.controller.js";

const router = express.Router();

router.get("/clients", getClients);

router.post("/clients", createClients);

router.put("/clients/:id", updateClients);

router.delete("/clients/:id", deleteClients);

router.get("/clients/search", searchClients);

export default router;
