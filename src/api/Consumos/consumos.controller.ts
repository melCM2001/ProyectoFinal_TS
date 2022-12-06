import { Consumo } from './../../entities/consumo.entity';
import { Body, Controller, Post, Get } from '@nestjs/common';
import { IConsumo } from 'src/models/consumo.model';
import { ConsumoService } from './consumos.service';

@Controller('consumo')
export class ConsumoController {
    constructor(private consumoService: ConsumoService){}

    @Post()
    CreateConsumo(@Body() params: IConsumo): boolean {
        try {
            this.consumoService.createConsumo(params)
            return true
        } catch (error) {
            console.log({error})
        }
    }
    //Se debe obtener un reporte general de todos los consumos.
    @Get('/all')
    getClient(){
        return this.consumoService.getAll()
    }
    //Se debe obtener un reporte el cual indique que usuario consumio mas Kw y quien consumio menos Kw.
    @Get('/maxConsumo')
    getMaxConsumo(){
        return this.consumoService.getMaximoConsumo()
    }
    @Get('/minConsumo')
    getMinConsumo(){
        return this.consumoService.getMinimoConsumo()
    }
    //Se debe obtener un reporte de detalles de consumo por cliente.
    @Get('/ReporteCliente')
    getReporteCLiente(){
        return this.consumoService.getReporteCliente()
    }
}