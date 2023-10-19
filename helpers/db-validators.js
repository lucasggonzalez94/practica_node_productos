const Role = require("../models/role");

const isValidRole = async (role = '') => {
  const rolExist = await Role.findOne({ role });
  if (!rolExist) {
    throw new Error(`El rol ${role} no está registrado en la BD`);
  }
}

module.exports = {
  isValidRole
}