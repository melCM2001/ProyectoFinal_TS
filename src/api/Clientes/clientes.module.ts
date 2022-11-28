//Un módulo es una clase anotada con un @Module()decorador. 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Cliente } from 'src/entities/cliente.entity';
import { ClienteService } from './clientes.service';
import { ClienteController } from './clientes.controller';
//El @Module()decorador proporciona metadatos que Nest utiliza para organizar la estructura de la aplicación.
@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [ClienteService],
  controllers: [ClienteController],
  exports:[ ]
})
export class ClienteModule {}
