const mongoose = require("mongoose");
const { Schema } = mongoose;

const encuesta1Schema = new Schema({
    nombres: { type: String, required: true },
    direccion: { type: String, required: true },
    comunidad: { type: String, required: true },
    barrio: { type: String, required: true },
    juntaAgua: { type: String, required: true },
    tipoVivienda: { type: String, required: true },
    tipoViviendaOtros: { type: String, required: false },
    numeroPisos: { type: String, required: true },
    tipoTecho: { type: String, required: true },
    tipoParedes: { type: String, required: true },
    tipoPiso: { type: String, required: true },
    edad:{ type: String, required: true },
    sexo: { type: String, required: true },
    viviendaEs: { type: String, required: true },
    viviendaOtros: { type: String, required: false },
    numPersonasHabitan: { type: String, required: true },
    problemasEstomacales: { type: String, required: true },
    enfermedadesPiel: { type: String, required: true },
    abastecimientoAguaConsumo: { type: String, required: true },
    nombreRio: { type: String, required: false },
    abastecimientoAguaConsumoOtros: { type: String, required: false },
    tieneCisternaTanqueElevado: { type: String, required: true },
    tieneCisternaTanqueElevadoOtros: { type: String, required: false },
    aguaBeberEs: { type: String, required: true },
    tratamientoAguaBeber: { type: String, required: true },
    usoAgua_cocina: { type: String, required: false },  
    usoAgua_aseoPersonal: { type: String, required: false },  
    usoAgua_lavado: { type: String, required: false },  
    usoAgua_animales: { type: String, required: false },  
    usoAgua_riego: { type: String, required: false }
});

module.exports = mongoose.model("Encuesta1", encuesta1Schema);
