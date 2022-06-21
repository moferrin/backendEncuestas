const Encuesta1 = require("../models/encuesta1.model");

const encuesta1Ctrl = {};

encuesta1Ctrl.getEncuesta1s = async (req, res, next) => {
  const encuesta1s = await Encuesta1.find();
  res.json(encuesta1s);
};

encuesta1Ctrl.createEncuesta1 = async (req, res, next) => {
  const encuesta1 = new Encuesta1({
    nombres: req.body.nombres,
    direccion: req.body.direccion,
    comunidad: req.body.comunidad,
    barrio: req.body.barrio,
    juntaAgua: req.body.juntaAgua,
    tipoVivienda: req.body.tipoVivienda,
    tipoViviendaOtros: req.body.tipoViviendaOtros,
    numeroPisos: req.body.numeroPisos,
    tipoTecho: req.body.tipoTecho,
    tipoParedes: req.body.tipoParedes,
    tipoPiso: req.body.tipoPiso,
    edad: req.body.edad,
    sexo: req.body.sexo,
    viviendaEs: req.body.viviendaEs,
    viviendaOtros: req.body.viviendaOtros,
    numPersonasHabitan: req.body.numPersonasHabitan,
    problemasEstomacales: req.body.problemasEstomacales,
    enfermedadesPiel: req.body.enfermedadesPiel,
    abastecimientoAguaConsumo: req.body.abastecimientoAguaConsumo,
    nombreRio: req.body.nombreRio,
    abastecimientoAguaConsumoOtros: req.body.abastecimientoAguaConsumoOtros,
    tieneCisternaTanqueElevado: req.body.tieneCisternaTanqueElevado,
    tieneCisternaTanqueElevadoOtros: req.body.tieneCisternaTanqueElevadoOtros,
    aguaBeberEs: req.body.aguaBeberEs,
    tratamientoAguaBeber: req.body.tratamientoAguaBeber,
    usoAgua_cocina: req.body.usoAgua_cocina,  
    usoAgua_aseoPersonal: req.body.usoAgua_aseoPersonal,  
    usoAgua_lavado: req.body.usoAgua_lavado,  
    usoAgua_animales: req.body.usoAgua_animales,  
    usoAgua_riego: req.body.usoAgua_riego
  });
  await encuesta1.save();
  res.json({ status: "encuesta1 created" });
};

encuesta1Ctrl.getEncuesta1 = async (req, res, next) => {
  const { id } = req.params;
  const encuesta1 = await Encuesta1.findById(id);
  res.json(encuesta1);
};

encuesta1Ctrl.editEncuesta1 = async (req, res, next) => {
  const { id } = req.params;
  await Encuesta1.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "encuesta1 Updated" });
};

encuesta1Ctrl.deleteEncuesta1 = async (req, res, next) => {
  await Encuesta1.findByIdAndRemove(req.params.id);
  res.json({ status: "encuesta1 Deleted" });
};

module.exports = encuesta1Ctrl;

