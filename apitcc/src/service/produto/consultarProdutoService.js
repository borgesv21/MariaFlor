import { consultarProdutoService } from "../repository/produtoRepository";

export default async function consultarProdutoService(id){

    let registros = await consultarProdutoService(id);

    let produto = registros[0];

    return produto;
    
}