const { response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const getUsers = (req, res = response) => {
  const queryParams = req.query;

  res.json({
    msg: 'get API',
    queryParams
  })
};

const postUser = async (req, res = response) => {
  const { name, email, password, img, role, status } = req.body;
  const user = new User({
    name,
    email,
    password,
    img,
    role,
    status
  });

  const emailExist = await User.findOne({
    email
  });
  if (emailExist) {
    return res.status(400).json({
      msg: 'El correo ya existe'
    })
  }

  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(password, salt);

  await user.save();

  res.status(201).json({
    user
  })
};

const updateUser = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: 'put API',
    id
  })
};

const deleteUser = (req, res = response) => {
  res.json({
    msg: 'delete API'
  })
};

module.exports = {
  getUsers,
  postUser,
  updateUser,
  deleteUser
}