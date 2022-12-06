import { Cliente } from './entities/cliente.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Connection } from './configs/DBConnection';
import { ClienteModule } from './api/Clientes/clientes.module';
import { ConsumoModule } from './api/Consumos/consumos.module';
import { PagoModule } from './api/Pagos/pagos.module';

@Module({
  imports: [Connection, ClienteModule, ConsumoModule, PagoModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
