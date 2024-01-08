const Productos = require("../models/productos");

const addProducto = async (req, res) => {
  const parametros = req.body;
  try {
    if (!parametros) {
      return res.status(404).json({
        message: "No fueron proporcionados los datos",
      });
    }

    const producto = new Productos(parametros);
    const productoGuardado = await producto.save();

    return res.status(200).json({
      message: "Producto guardado exitosamente",
      productoGuardado,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Se produjo un error al realizar la peticion",
    });
  }
};

const mostrarProductos = async (req, res) => {
  try {
    const mostrarProductos = await Productos.find().exec();
    if (mostrarProductos.length === 0) {
      return res.status(404).json({
        message: "No se encontraron productos",
      });
    }
    return res.status(200).json({
      message: "Exito",
      mostrarProductos,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "No se pudo realizar esta peticion",
    });
  }
};

const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(404).json({
        message: "No se proporciono el identificador del producto",
      });
    }
    const productoEliminado = await Productos.deleteOne({ _id: id }).exec();
    return res.status(200).json({
      message: "Producto eliminado exitosamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "No se pudo realizar esta peticion",
    });
  }
};

const actualizarProducto = async (req, res) => {
  const parametros = req.body;
  const { id } = req.params;
  try {
    if (!id || !parametros) {
      return res.status(404).json({
        status: "Error",
        message: "No se enviaron los datos necesarios",
      });
    }

    const produtoActualizado = await Productos.findOneAndUpdate(
      { _id: id },
      parametros,
      { new: true, runValidators: true }
    ).exec();
    if (!produtoActualizado) {
      return res.status(400).json({
        status: "Error",
        message: "No se encontro el producto a actualizar",
      });
    }

    return res.status(200).json({
      status: "Exito",
      produtoActualizado,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Error",
      message: "Error interno en el servidor",
    });
  }
};

module.exports = {
  addProducto,
  mostrarProductos,
  eliminarProducto,
  actualizarProducto,
};
