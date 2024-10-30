import { inserirUnidade } from "../../repository/unidadeRepository.js";

export default async function inseriUnidadeService(unidade){

    let id = await inserirUnidade(unidade);

    return id;

}