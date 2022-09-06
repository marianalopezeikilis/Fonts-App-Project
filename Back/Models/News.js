
import {dataTypes, sequelize} from "../loadSequelize.js";

const News = sequelize.define('News', {
    titulo: dataTypes.STRING,
    subtitulo: dataTypes.STRING,
    articulo: dataTypes.STRING,
    img: dataTypes.STRING,
    img2: dataTypes.STRING,
}, { tableName: 'blog', timestamps: false });




export default News;