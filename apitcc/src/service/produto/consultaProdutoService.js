import { consultarProduto } from "../../repository/produtoRepository.js";


export default async function consultarProdutoServices(){

    let registros = await consultarProduto()

    return registros


}