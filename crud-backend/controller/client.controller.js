import * as clientService from "../service/client.service.js";

export const getClients = async (req, res) => {
  try {
    const clients = await clientService.getClients();
    res.status(200).json(clients);
  } catch (error) {
    res.status(400).json({ message: "Error in Fetching Clients", error });
    console.error("Error fetching clients:", error);
  }
};

export const createClients = async (req, res) => {
  try {
    const clientData = req.body;
    const newClient = await clientService.createClients(clientData);
    res.status(200).json(newClient);
  } catch (error) {
    res.status(400).json({ message: "Error adding clients", error });
    console.error("Error adding clients:", error);
  }
};
export const updateClients = async (req, res) => {
  try {
    const clientData = req.body;
    const clientId = req.params.id;
    const newClient = await clientService.updateClients(clientData, clientId);
    res.status(200).json(newClient);
  } catch (error) {
    res.status(400).json({ message: "Error updating clients", error });
    console.error("Error updating clients:", error);
  }
};

export const deleteClients = async (req, res) => {
  try {
    const clientId = req.params.id;
    const deleteClient = await clientService.deleteClients(clientId);
    res.status(200).json(deleteClient);
  } catch (error) {
    res.status(400).json({ message: "Error deleting clients", error });
    console.error("Error deleting clients:", error);
  }
};

export const searchClients = async (req, res) => {
  try {
    const searchQuery = req.body;
    const searchClient = await clientService.searchClients(searchQuery);
    res.status(200).json(searchClient);
  } catch (error) {
    res.status(400).json({ message: "Error searching clients", error });
    console.error("Error searching clients:", error);
  }
};
