import { alterarUnidade } from "../../repository/unidadeRepository.js";

export default async function alterarUnidadeService(unidade, idUnidade){

    let LinhasAfetadas = await alterarUnidade(unidade, idUnidade)

    if(LinhasAfetadas == 0){
        throw new Error('nenhuma unidade alterada');
    }

}