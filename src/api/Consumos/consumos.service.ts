import { ClienteService } from './../Clientes/clientes.service';
import { Consumo } from './../../entities/consumo.entity';
import { PagoService } from './../Pagos/pagos.service';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IConsumo} from 'src/models/consumo.model';

@Injectable()
export class ConsumoService {
    constructor(
        @InjectRepository(Consumo) private consumoEntity : Repository<Consumo>,
        private pagoService : PagoService, private clienteService : ClienteService
    ){

    }
    // Se debe registrar el consumo energetico por cliente por periodo. Ej: Cliente "A" consumio: "155 Kw" en el periodo: "Fecha"
    async createConsumo(consumo: IConsumo){
        const date = new Date();
        const pago = consumo.pagado;
        const fecha = new Date((await this.clienteService.getClienteById(consumo.id_cliente)).fecha_nacimiento)
        let edad = this.getEdad(fecha)
        //se calcula el total del pago
        let total_pago = 0
        //Los rangos de costo por consumo son: 1 a 100Kw el costo por KW es de 150, 101 a 300 es de 170 de 300 en adelante 190.
        //Pero si el cliente tiene mas de 50 años su consumo tiene un 10% de descuento.
        if(consumo.consumo >= 1 && consumo.consumo <=100){
            total_pago = consumo.consumo * 150
            
        }else{
            if(consumo.consumo >= 101 && consumo.consumo <=300){
                total_pago = consumo.consumo * 170
            }else{
                if(consumo.consumo > 300){
                    total_pago = consumo.consumo * 190
            }
        }
        if(edad > 50){
            total_pago = total_pago - (total_pago * .10)
        }
        }
        //se hace la inserción
        const response =  await this.consumoEntity.save({
            fecha: date, 
            consumo: consumo.consumo, 
            id_Cliente : consumo.id_cliente
        })
        //creo pago
        await this.pagoService.createPago(response.id, pago , total_pago)
        return true;
    }

    //Se debe obtener un reporte general de todos los consumos.
    getAll(){
        return this.consumoEntity.find();
    }

    //Se debe obtener un reporte el cual indique que usuario consumio mas Kw y quien consumio menos Kw.
    getMinimoConsumo(){
        return this.consumoEntity.find({
            order: {
                consumo: "ASC",
            },
            skip: 0,
            take: 1,
        })
    }
    getMaximoConsumo(){
        return this.consumoEntity.find({
            order: {
                consumo: "DESC",
            },
            skip: 0,
            take: 1,
        })
    }
    // Se debe obtener un reporte de detalles de consumo por cliente.
    getReporteCliente(){
        return this.clienteService.getReporteCliente()
            
    }

    getEdad(fecha : Date) {
        let hoy = new Date()
        let fechaNacimiento = new Date(fecha)
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
        if (
        diferenciaMeses < 0 ||
        (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
        edad--
        }
        return edad
    }
}