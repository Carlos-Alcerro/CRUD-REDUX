const express = require("express");
const { conection } = require("./database/connection");
const cors = require("cors");
const routerProd = require("./routes/routesProd");

conection();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/prod", routerProd);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor Corriendo en el puerto ${PORT}`);
});
