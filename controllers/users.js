const { response } = require('express');

const getUsers = (req, res = response) => {
  const queryParams = req.query;

  res.json({
    msg: 'get API',
    queryParams
  })
};

const postUser = (req, res = response) => {
  const body = req.body;

  res.status(201).json({
    msg: 'post API',
    body
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