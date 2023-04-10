const yup = require("yup");
const validation = yup.object().shape({
    name: yup
        .string("Name must be a string")
        .required("Name is required"),
    telephone: yup
        .string("Telephone must be a string")
        .required("Telephone is required"),
    opening_hours: yup
        .string("Opening hours must be a string")
        .optional(),
    description: yup
        .string("Description must be a string")
        .optional(),
    latitude: yup.number("Latitude must be a number").optional(),
    longitude: yup.number("Longitude must be a number").optional()
})

function validateNewPlace(request, response, next) {
    console.log("original data", request.body)

    try {
        validation.validateSync(request.body)
        next()
    } catch (error) {
        response.status(400).json({ message: error.message })
    }
}

module.exports = { validateNewPlace }