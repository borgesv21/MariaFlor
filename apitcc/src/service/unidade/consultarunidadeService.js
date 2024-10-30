import { consultarunidadeService } from "../repository/unidadeRepository";

export default async function consultar(id){

    let registros = await consultarunidadeService(id);

    let info = registros[0];

    return info;

}