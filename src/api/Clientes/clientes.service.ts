//La idea principal de un proveedor es que se puede inyectar como una dependencia
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/entities/cliente.entity';
import { ICliente } from 'src/models/cliente.model';
/*Este servicio sera responsable del almacenamiento y recuperacion de datos, 
y esta diseñado para ser utilizado por ClienteController, por lo que es un buen candidato para ser definido como proveedor.*/

@Injectable()// El @Injectable()decorador adjunta metadatos, que declaran que ClienteService es una clase que puede administrar el contenedor de Nest IoC .
export class ClienteService {
    constructor(
        //El Servicio se inyecta a traves del constructor de clases. 
        @InjectRepository(Cliente) private clientEntity : Repository<Cliente>
    ){}

    private readonly Clientes : Cliente[] = []
     
    async create(cliente: ICliente){
        return await this.clientEntity.save(cliente)
    }

    getAll(){
        return this.clientEntity.find()
    } 

    clienteExists(id: number):boolean{
        const index = this.Clientes.findIndex((Cliente) => Cliente.id === id)
        return index !== -1
    }
}

