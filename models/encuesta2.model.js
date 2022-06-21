const mongoose = require("mongoose");
const { Schema } = mongoose;

const encuesta2Schema = new Schema({
    nombres: { type: String, required: true },
    lugar: {type: String, required: true},
    hora: {type: String, required: true},
    aspecto_turbia: {type: String, required: true},
    aspecto_solidosS: {type: String, required: true},
    aspecto_coloracion: {type: String, required: true},
    aspecto_observaciones: {type: String, required: true},
    cloroLibre: {type: String, required: true},
    ph: {type: String, required: true},
    monocloroaminas: {type: String, required: true},
    conductividad: {type: String, required: true}
});

module.exports = mongoose.model("Encuesta2", encuesta2Schema);