import { Cliente } from './../../entities/cliente.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pago } from 'src/entities/pago.entity';
import { IPago } from 'src/models/pago.model';
import { Consumo } from 'src/entities/consumo.entity';
import { IConsumo} from 'src/models/consumo.model';
import { ICliente } from 'src/models/cliente.model';
@Injectable()
export class PagoService {
    constructor(
        @InjectRepository(Pago) private pagoEntity : Repository<Pago>
    ){} 

    async createPago(idConsumo : number, pago: boolean, total: number){
        console.log(pago)
        this.pagoEntity.insert({
            pagado : pago,
            id_Consumo : idConsumo  ,
            total: total          
        })
    }
    
    getAll(){
        return this.pagoEntity.find()
    }

    //Se debe obtener un reporte de los clientes que ya pagaron y los que aun deben.
    getReportePagado(){
        return this.pagoEntity.find({
            where:
            {
                pagado: true
            }
        })
    }

    getReporteNoPagado(){
        return this.pagoEntity.find({
            where:
            {
                pagado: false
            }
        })
    }
}