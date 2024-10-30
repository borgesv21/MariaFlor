<<<<<<< HEAD
import { consultarCliente } from "../../repository/clienteRepository.js";


export default async function consultarClienteService(){

    let registros = await consultarCliente()

    return registros


=======
import { consultarClienteService } from "../repository/clienteRepository";

export default async function consultarClienteService(id){

    let registros = await consultarClienteService(id);

    let cliente = registros[0];

    return cliente;
    
>>>>>>> 9f29a9d16d96f10b316eefc16bb4a48a8cd2c164
}