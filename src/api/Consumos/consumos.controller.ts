import { Body, Controller, Post, Get } from '@nestjs/common';
import { IConsumo } from 'src/models/consumo.model';
import { ConsumoService } from './consumos.service';

@Controller('consumo')
export class ConsumoController {
    constructor(private consumoService: ConsumoService){}

    @Post()
    Create(@Body() params: IConsumo): boolean {
        try {
            this.consumoService.create(params)
            return true
        } catch (error) {
            console.log({error})
        }
         
    }

    @Get('/all')
    getClient(){
        return this.consumoService.getAll()
    }

    @Get('/maximoConsumo')
    getMaxConsumo(){
        return this.consumoService.getMaximoConsumo()
    }

    @Get('/minimoConsumo')
    getMinConsumo(){
        return this.consumoService.getMinimoConsumo()
    }
}