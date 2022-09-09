import express from 'express';

import {sequelize} from "../loadSequelize.js";

import News from '../Models/News.js';


const router = express.Router();

// GET lista de todos los alumnes
// vinculamos la ruta /api/alumnes a la función declarada
// si todo ok devolveremos un objeto tipo:
//     {ok: true, data: [lista_de_objetos_alumne...]}
// si se produce un error:
//     {ok: false, error: mensaje_de_error}


//COGER TODAS LAS NOVEDADES
router.get('/', function (req, res, next) {

    sequelize.sync().then(() => {
        News.findAll()
            .then(news => res.json({
                ok: true,
                data:   news
            }))
            .catch(error => res.json({
                ok: false,
                error: error
            }))
    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });

})

//COGER SOLO UNA NOVEDAD

router.get('/:id', function (req, res, next) {
    sequelize.sync().then(() => {

        News.findOne({ where: { id: req.params.id }})
            .then(al => res.json({
                ok: true,
                data: al
            }))
            .catch(error => res.json({
                ok: false,
                error: error
            }))

    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });
});


// CREAR UNA NOVEDAD
router.post('/', function (req, res, next) {
    sequelize.sync().then(() => {
console.log(req.body);
        News.create(req.body)
            .then((item) => res.json({ ok: true, data: item }))
            .catch((error) => res.json({ ok: false, error: error.message }))


    }).catch((error) => {
        res.json({
            ok: false,
            error: error.message
        })
    });
});


// MODIFICAR NOTICIA
router.put('/:id', function (req, res, next) {
    sequelize.sync().then(() => {

        News.findOne({ where: { id: req.params.id } })
            .then(news_modificada =>
                news_modificada.update(req.body)
            )
            .then(news_modificada => res.json({
                ok: true,
                data: news_modificada
            }))
            .catch(error => res.json({
                ok: false,
                error: error.message
            }));

    }).catch((error) => {
        res.json({
            ok: false,
            error: error.message
        })
    });
});



// ELIMINAR INFORMACION NOTICIA
router.delete('/:id', function (req, res, next) {

    sequelize.sync().then(() => {

        News.destroy({ where: { id: req.params.id } })
            .then((data) => res.json({ ok: true, data }))
            .catch((error) => res.json({ ok: false, error }))

    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });

})


;

export default router;


