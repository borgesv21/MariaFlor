import { consultarEncomendasService} from "../repository/encomendasRepository"; 

export default async function consultarEncomendasServic(id){

    let registros = await consultarEncomendasService(id);

    let encomendas = registros[0];

    return encomendas;
    
}