
import inserirClienteService from "../service/cliente/inserirClienteService.js";
import consultarClienteService from "../service/cliente/consultarClienteService.js";
import alterarClienteService from "../service/cliente/alterarClienteService.js";
import deletarClienteService from "../service/cliente/deletarClienteService.js";

import { Router } from "express"
const endpoints = Router();








endpoints.post('/cliente/', async (req, resp) =>{
    try{
        let cliente = req.body
        let id = await inserirClienteService(cliente)
        resp.send({
            idCliente: id
        })
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})







endpoints.get('/cliente', async (req, resp) =>{
    try{
        let cliente = await consultarClienteService();
        resp.send(cliente);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})







endpoints.put('/cliente/:id', async (req, resp)=> {
    try{
        let idCliente = req.params.id;
        let cliente = req.body;

        await alterarClienteService(cliente, idCliente);
        resp.send()
        
    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
})






endpoints.delete('/cliente/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        await deletarClienteService(id);

        resp.send()
    
    }
    catch (err){
        resp.status(400).send({
            erro : err.message
        })
    }
})







export default endpoints;