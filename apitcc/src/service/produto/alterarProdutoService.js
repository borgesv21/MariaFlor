import { alterarProduto } from "../../repository/produtoRepository.js";

export default async function alterarProdutoService(produto, idProduto){

    let LinhasAfetadas = await alterarProduto(produto, idProduto)

    if(LinhasAfetadas == 0){
        throw new Error('nenhum produto alterado');
    }

}