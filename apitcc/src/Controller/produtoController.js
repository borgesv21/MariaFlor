
import alterarProdutoService from "../service/produto/alterarProdutoService.js";
import consultarProdutoServices from "../service/produto/consultaProdutoService.js";
import deletarProdutoService from "../service/produto/deletarProdutoService.js";
import inserirProdutoService from "../service/produto/inserirProdutoService.js";


import { Router } from "express"
const endpoints = Router();

endpoints.post('/produto', async (req, resp) =>{
    try{
        let produto = req.body
        let id = await inserirProdutoService(produto)

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
        let produto = await consultarProdutoServices();
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
        let idProduto = req.params.id;
        let produto = req.body;

<<<<<<< HEAD
        await alterarProdutoService(produto, idProduto);

        resp.send()
        
=======
        let LinhasAfetadas = await db.alterarProduto(produto, id);
        if (LinhasAfetadas >= 1){
            resp.send();
        }
        else {
            resp.status(404).send ({error: 'Nenhum registro encontrado'})
        }
>>>>>>> 9f29a9d16d96f10b316eefc16bb4a48a8cd2c164
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
        await deletarProdutoService(id);

        resp.send
    
    }
    catch (err){
        resp.status(400).send({
            erro : err.message
        })
    }
})

export default endpoints;