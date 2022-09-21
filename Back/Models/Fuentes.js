
import {dataTypes, sequelize} from "../loadSequelize.js";

const Fuentes = sequelize.define('Fuentes', {
   datos_fuente: dataTypes.STRING,
}, { tableName: 'fuentes', timestamps: false });




export default Fuentes;