const yup = require("yup");
const validation = yup.object().shape({
    name: yup
        .string("O nome deve ser uma string")
        .required("Nome é obrigatório"),
    telephone: yup
        .string("O telefone deve ser uma string")
        .required("Telefone é obrigatório"),
    opening_hours: yup
        .string("O horário de abertura deve ser uma string")
        .optional(),
    description: yup
        .string("A descrição deve ser uma string")
        .optional(),
    latitude: yup.number("Latitude deve ser um numero").optional(),
    longitude: yup.number('Longitude deve ser um numero').optional()
})

function validateNewPlace(request, response, next) {
    console.log("dado original", request.body)

    try {
        validation.validateSync(request.body)
        next()
    } catch (error) {
        response.status(400).json({ message: error.message })
    }
}

module.exports = { validateNewPlace }