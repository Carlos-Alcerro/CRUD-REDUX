const { Schema, model } = require("mongoose");

const SchemaProductos = Schema({
  nombre: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
    require: true,
  },
  categoria: {
    type: String,
    require: true,
  },
  precio: {
    type: String,
    require: true,
  },
  cantidad: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Productos", SchemaProductos, "producto");
