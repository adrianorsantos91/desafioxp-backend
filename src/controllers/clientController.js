const clientService = require('../services/clientService');

const getClientById = async (req, res) => {
  const { id } = req.params;
  const client = await clientService.getClientById(id);
  return res.status(200).json(client);
};

module.exports = {
  getClientById,
};
