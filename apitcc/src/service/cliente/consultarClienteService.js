
import { consultarCliente } from "../../repository/clienteRepository.js";

export default async function consultarClienteService(id){

    let registros = await consultarCliente(id);

    let cliente = registros[0];

    return cliente;
    

}