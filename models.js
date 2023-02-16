const mongoose = require('mongoose');

const Empleado = mongoose.model('Empleado',
  new mongoose.Schema({ nombre: String, apellidos: String })
);

const Zapato = mongoose.model('Zapato',
  new mongoose.Schema({ nombre: String, precio: Number })
);

module.exports = {
  Empleado: Empleado,
  Zapato: Zapato
}