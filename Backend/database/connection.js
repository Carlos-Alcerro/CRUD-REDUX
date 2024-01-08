const mongoose = require("mongoose");

const conection = async () => {
  try {
    const conection = await mongoose.connect(
      "mongodb+srv://carlosalcerrolainez2017:Carlos1999.@cluster0.gvrzcbm.mongodb.net/productos?retryWrites=true&w=majority"
    );
    console.log("Conectado a la BD");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { conection };
