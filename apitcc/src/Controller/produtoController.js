import * as db from '../repository/produtoRepository.js'
import { Router } from "express"
const endpoints = Router();

endpoints.post('/produto/', async (req, resp) =>{
    try{
        let produto = req.body
        let id = await db.inserirProduto(produto)

        resp.send({
            idProduto: id
        })
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/produto', async (req, resp) =>{
    try{
        let produto = await db.buscarProduto();
        resp.send(produto);
    }
    catch(err){
        resp.status(400).send({
            erro : err.message
        })
    }
})

endpoints.put('/produto/:id', async (req, resp)=> {
    try{
        let id = req.params.id;
        let produto = req.body;

        let LinhasAfetadas = await db.alterarProduto(produto, id);
        if (LinhasAfetadas >= 1){
            resp.send();
        }
        else {
            resp.status(404).send ({error: 'Nenhum registro encontrado'})
        }
    }
    catch(err){
        resp.status(400).send ({
            erro : err.message
        })
    }
})


endpoints.delete('/produto/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let LinhasAfetadas = await db.deletarProduto(id);
        if(LinhasAfetadas >= 1){
            resp.send();
        }
        else {
            resp.status(404).send({error: 'Nenhum registro encontrado'})
        }
    
    }
    catch (err){
        resp.status(400).send({
            erro : err.message
        })
    }
})


export default endpoints;