import { consultarEncomendas } from "../../repository/encomendasRepository.js"


export default async function consultarEncomendasService(){

    let registros = await consultarEncomendas()

    return registros


}