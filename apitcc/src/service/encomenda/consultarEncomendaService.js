import { consultarEncomendas } from "../../repository/encomendasRepository"


export default async function consultarEncomendasService(){

    let registros = await consultarEncomendas()

    return registros


}