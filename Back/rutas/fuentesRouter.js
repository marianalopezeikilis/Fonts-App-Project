import express from 'express';
import { sequelize } from "../loadSequelize.js";
import Fuentes from '../Models/Fuentes.js';
const router = express.Router();

// CREAR UNA FUENTE
router.post('/nuevafuente', function (req, res, next) {
    sequelize.sync().then(async() => {
        console.log(req.body);
        console.log(req.body.datos_fuente);
         Fuentes.create({datos_fuente:req.body.datos_fuente})
            .then((item) => res.json({ ok: true, data: item }))
            .catch((error) => res.json({ ok: false, error: error.message }))


    }).catch((error) => {
        res.json({
            ok: false,
            error: error.message
        })
    });
});

    ;

    //COGER FUENTES

    router.get('/', function (req, res, next) {

        sequelize.sync().then(() => {
            Fuentes.findAll()
                .then(fuente => res.json({
                    ok: true,
                    data: fuente.map((e)=>{return JSON.parse(e.datos_fuente)})
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

export default router;
