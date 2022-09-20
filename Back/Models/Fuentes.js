
import {dataTypes, sequelize} from "../loadSequelize.js";

const Fuentes = sequelize.define('Fuentes', {
    fuentes: dataTypes.STRING,
}, { tableName: 'fuentes', timestamps: false });




export default Fuentes;