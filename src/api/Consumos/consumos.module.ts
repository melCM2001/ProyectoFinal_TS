import { PagoService } from './../Pagos/pagos.service';
import { Pago } from './../../entities/pago.entity';
import { ClienteService } from './../Clientes/clientes.service';
import { Cliente } from './../../entities/cliente.entity';
//Un módulo es una clase anotada con un @Module()decorador. 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Consumo } from './../../entities/consumo.entity';
import { ConsumoController } from './consumos.controller';
import { ConsumoService } from './consumos.service';

//El @Module()decorador proporciona metadatos que Nest utiliza para organizar la estructura de la aplicación.
@Module({
  imports: [TypeOrmModule.forFeature([Consumo,Cliente,Pago])],
  providers: [ConsumoService, PagoService, ClienteService],
  controllers: [ConsumoController],
  exports:[ ]
})
export class ConsumoModule {}