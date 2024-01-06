const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.listen(3030);

app.get("/api/data", (req, res) => {
  fetch(
    "https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=bd69b808d3c5476da9f8ef92232619b0&client_secret=1D76C3082055495bAD3e6B655fE2CC7f"
  )
    .then((requ) => requ.json())
    .then((data) => res.json(data));
});
