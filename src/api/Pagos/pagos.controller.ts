import { IPago } from './../../models/pago.model';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PagoService } from './pagos.service';

@Controller('pago')
export class PagoController {
    constructor(private pagoService: PagoService){}

    @Get('/all')
    getClientPago(){
        return this.pagoService.getAll()
    }

    @Get('/ReportePagado')
    getClientPagado(){
        return this.pagoService.getReportePagado()
    }

    @Get('/ReporteNoPagado')
    getClientNoPagado(){
        return this.pagoService.getReporteNoPagado()
    }
}