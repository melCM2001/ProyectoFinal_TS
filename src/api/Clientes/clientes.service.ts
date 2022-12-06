import { Cliente } from './../../entities/cliente.entity';
import { ConsumoService } from './../Consumos/consumos.service';
//La idea principal de un proveedor es que se puede inyectar como una dependencia
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ICliente } from 'src/models/cliente.model';
/*Este servicio sera responsable del almacenamiento y recuperacion de datos, 
y esta diseñado para ser utilizado por ClienteController, por lo que es un buen candidato para ser definido como proveedor.*/

@Injectable()// El @Injectable()decorador adjunta metadatos, que declaran que ClienteService es una clase que puede administrar el contenedor de Nest IoC .
export class ClienteService {
    constructor(
        //El Servicio se inyecta a traves del constructor de clases. 
        @InjectRepository(Cliente) private clientEntity : Repository<Cliente>
    ){}
    private readonly Clientes : Cliente[] = []; 

    async createCliente(cliente: ICliente){
        return await this.clientEntity.save(cliente)
    }

    getAll(){
        return this.clientEntity.find();
    } 

    clienteExists(id: number):boolean{
        const index = this.Clientes.findIndex((Cliente) => Cliente.id === id)
        return index !== -1
    }

    async getClienteById(id: number):Promise<Cliente>{
        return await this.clientEntity.findOne( {where : {id:id}})
    }

    getReporteCliente(){
        return this.clientEntity.find({
            relations: {
                consumo: {
                    pago: true
                },
            },
        })
    }

    //Se debe obtener un reporte de detalles de consumo por cliente
}

