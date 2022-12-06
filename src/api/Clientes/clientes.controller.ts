import { Cliente } from './../../entities/cliente.entity';
//Los controladores son responsables de manejar las solicitudes entrantes y devolver las respuestas al cliente.
import { Body, Controller,Param, Post, Get } from '@nestjs/common';
import { ICliente } from './../../models/cliente.model';
import { ClienteService } from './clientes.service';

@Controller('cliente') //
export class ClienteController {
    //El Servicio se inyecta a traves del constructor de clases. 
    constructor(private clientService: ClienteService){}

    @Post()//Esta accion agrega un nuevo cliente
    Create(@Body() params: ICliente):string | boolean {
        if(this.clientService.clienteExists(Number(params.id))){
            return "El cliente ya existe"
        }
        try {
            this.clientService.createCliente(params)
            return true
        } catch (error) {
            console.log({error})
        }
    }

    @Get('/all')//Esta accion devuelve todos los clientes
    getCliente(){
        return this.clientService.getAll()
    }

    @Get('/:id')
    getClientById(@Param('id') param){
        const client = this.clientService.getClienteById(param)
        return client ? client : "El cliente no existe" //operacion ternaria -> primer parametro se evalua a (verdadero) ?(si) :(else)
    }
}