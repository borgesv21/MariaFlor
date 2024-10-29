import { consultarClienteService } from "../repository/clienteRepository";

export default async function consultarClienteService(id){

    let registros = await consultarClienteService(id);

    let cliente = registros[0];

    return cliente;
    
}