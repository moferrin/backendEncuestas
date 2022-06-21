const Encuesta2 = require("../models/encuesta2.model");

const encuesta2Ctrl = {};

encuesta2Ctrl.getEncuesta2s = async (req, res, next) => {
  const encuesta2s = await Encuesta2.find();
  res.json(encuesta2s);
};

encuesta2Ctrl.createEncuesta2 = async (req, res, next) => {
  const encuesta2 = new Encuesta2({
    nombres: req.body.nombres,
    lugar: req.body.lugar,
    hora: req.body.hora,
    aspecto_turbia: req.body.aspecto_turbia,
    aspecto_solidosS: req.body.aspecto_solidosS,
    aspecto_coloracion: req.body.aspecto_coloracion,
    aspecto_observaciones: req.body.aspecto_observaciones,
    cloroLibre: req.body.cloroLibre,
    ph: req.body.ph,
    monocloroaminas: req.body.monocloroaminas,
    conductividad: req.body.conductividad
  });
  await encuesta2.save();
  res.json({ status: "encuesta2 created" });
};

encuesta2Ctrl.getEncuesta2 = async (req, res, next) => {
  const { id } = req.params;
  const encuesta2 = await Encuesta2.findById(id);
  res.json(encuesta2);
};

encuesta2Ctrl.editEncuesta2 = async (req, res, next) => {
  const { id } = req.params;
  await Encuesta2.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "encuesta2 Updated" });
};

encuesta2Ctrl.deleteEncuesta2 = async (req, res, next) => {
  await Encuesta2.findByIdAndRemove(req.params.id);
  res.json({ status: "encuesta2 Deleted" });
};

module.exports = encuesta2Ctrl;

