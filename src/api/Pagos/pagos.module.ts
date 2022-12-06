import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PagoController } from './pagos.controller';
import { PagoService } from './pagos.service';
import { Pago } from 'src/entities/pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pago])],
  providers: [PagoService],
  controllers: [PagoController],
  exports:[]
})
export class PagoModule {}