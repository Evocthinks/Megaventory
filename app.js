//import product from "./routes/product.js";
//import supplierClient from "./routes/supplierClient.js";
//import inventoryLocation from "./routes/inventoryLocation.js";

import express from "express";
import router from './routes/routes.js';
import { apiKey, apiUrl, port } from './config.js';

const app = express();

app.use(express.json())

app.use('/megaventory', router);

app.listen(port, ()=>console.log("server gestartet"));