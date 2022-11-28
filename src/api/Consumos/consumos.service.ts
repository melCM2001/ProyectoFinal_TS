
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Consumo } from 'src/entities/consumo.entity';
import { IConsumo} from 'src/models/consumo.model';

@Injectable()
export class ConsumoService {
    constructor(
        @InjectRepository(Consumo) private consumoEntity : Repository<Consumo>
    ){}
     
    async create(consumo: IConsumo){
        const date = new Date;
        
        return await this.consumoEntity.save({
            fecha: date , consumo: consumo.consumo, id_Cliente : consumo.id_cliente
        })
    }

    getAll(){
        return this.consumoEntity.find()
    }

    getMinimoConsumo(){
        return this.consumoEntity.find()
    }

    getMaximoConsumo(){
        return this.consumoEntity.find()
    }

    
    
}