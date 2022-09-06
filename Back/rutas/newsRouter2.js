
// import { dataTypes, sequelize } from "../loadSequelize.js";

// export const seq = sequelize;

// export const News = sequelize.define('News', {
    
//     informacio: dataTypes.STRING

// }, { // opcions
//     tableName: 'cursos',
//     timestamps: false,
//     name: {
//         singular: 'curs',
//         plural: 'cursos',
//     }
// });

// export const Edicio = sequelize.define('Edicio', {
//     titol: dataTypes.STRING,
//     datainici: dataTypes.DATEONLY
// }, { // opcions
//     tableName: 'edicions',
//     timestamps: false,
//     name: {
//         singular: 'edicio',
//         plural: 'edicions',
//     }
// });


// export const Alumne = sequelize.define('Alumne', {
//     nom: dataTypes.STRING,
//     datanaix: dataTypes.DATEONLY,
//     email: dataTypes.STRING
// }, { tableName: 'alumnes', timestamps: false });



// export const Matricula = sequelize.define('Matricula', {
//     id: {
//         type: dataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false
//       },
     
//     alumnes_id: {
//         name: "alumnes_id",
//         type: dataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: Alumne,
//             key: 'id'
//         }
//     },
//     edicions_id: {
//         name: "edicions_id",
//         type: dataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: Edicio,
//             key: 'id'
//         }
//     },
//     preu: dataTypes.FLOAT(10, 2)
// }, {
//     tableName: 'matricula', 
//     name: {
//         singular: 'matricula',
//         plural: 'matricules',
//     },
//     timestamps: false
// });


