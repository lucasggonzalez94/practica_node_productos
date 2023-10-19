const { Router } = require("express");
const { check } = require("express-validator");

const {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");
const { validateFields } = require("../middlewares/validate-fields");
const { isValidRole } = require("../helpers/db-validators");

const router = Router();

router.get("/", getUsers);

router.post("/", [
  check('name', 'El nombre es obligatorio').not().isEmpty(),
  check('password', 'La contraseña es obligatoria y más de 6 caracteres').isLength({ min: 6 }),
  check('email', 'El email no es válido').isEmail(),
  // check('role', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
  check('role').custom(isValidRole),
  validateFields
],postUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
