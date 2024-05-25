const express = require('express');
const cors = require('cors');
const accountRoutes = require("./routes/account.routes")//***
require('dotenv').config()
const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
app.use("/api/account", accountRoutes);

app.listen(port, console.log(`Server started at port ${port}`));