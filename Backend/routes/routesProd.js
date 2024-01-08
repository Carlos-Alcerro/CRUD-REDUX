const express = require("express");
const router = express.Router();
const {
  addProducto,
  mostrarProductos,
  eliminarProducto,
  actualizarProducto,
} = require("../controllers/productos");

router.post("/addProducts", addProducto);
router.get("/Productos", mostrarProductos);
router.delete("/Productos/:id", eliminarProducto);
router.put("/Productos/:id", actualizarProducto);

module.exports = router;
