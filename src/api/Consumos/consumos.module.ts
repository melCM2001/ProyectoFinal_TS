//Un módulo es una clase anotada con un @Module()decorador. 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Consumo } from './../../entities/consumo.entity';
import { Cliente } from './../../entities/cliente.entity';
import { Pago } from 'src/entities/pago.entity';
import { ConsumoController } from './consumos.controller';
import { ConsumoService } from './consumos.service';

//El @Module()decorador proporciona metadatos que Nest utiliza para organizar la estructura de la aplicación.
@Module({
  imports: [TypeOrmModule.forFeature([Cliente,Consumo,Pago])],
  providers: [ConsumoService],
  controllers: [ConsumoController],
  exports:[ ]
})
export class ConsumoModule {}