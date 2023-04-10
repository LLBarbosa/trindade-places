
const yup = require("yup");

const validation = yup.object().shape({
    name: yup
        .string("Name must be a string")
        .required("Name is required"),
    email: yup
        .string("E-mail must te be a string")
        .required("E-mail is required"),
    username: yup
        .string("Username must be a string")
        .required("Username is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required")
})

function validateNewUser(request, response, next) {
  console.log("original data", request.body)

  try {
    validation.validateSync(request.body)
    next()
  } catch (error) {
    response.status(400).json({ message: error.message })
  }
}

module.exports = { validateNewUser }