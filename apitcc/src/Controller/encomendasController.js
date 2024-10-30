
import inserirEncomendasService from "../service/encomenda/inserirEncomendasService.js";
import consultarEncomendaService from "../service/encomenda/consultarEncomendaService.js";
import alterarEncomendaService from "../service/encomenda/alterarEncomendaService.js";
import deletarEncomendasService from "../service/encomenda/deletarEncomendaService.js";

import {Router} from "express"
const endpoints = Router();





endpoints.post('/encomendas/', async (req, resp) =>{
    try{
        let encomendas = req.body
        let id = await inserirEncomendasService(encomendas)
        resp.send({
            idEncomendas: id
        })
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})







endpoints.get('/encomendas', async (req, resp) =>{
    try{
        let encomendas = await consultarEncomendaService();
        resp.send(encomendas);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})







endpoints.put('/encomendas/:id', async (req, resp)=> {
    
    try{
        let idEncomendas = req.params.id;
        let encomendas = req.body;

        await alterarEncomendaService(encomendas, idEncomendas);
        resp.send()
        
    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
    
    // try{
    //     let idEncomendas = req.params.id;
    //     let encomendas = req.body;

    //     await alterarEncomendaService(encomendas, idEncomendas);
    //     resp.send()
        
    // }
    // catch(err){
    //     resp.status(400).send ({
    //         erro : err.message
    //     })
    // }
})






endpoints.delete('/encomendas/:id', async (req, resp) => {
    try{
        let id = req.params.id;

        await deletarEncomendasService(id);

        resp.send()
        
    }
    catch (err){
        resp.status(400).send({
            erro : err.message
        })
    }
})



export default endpoints;