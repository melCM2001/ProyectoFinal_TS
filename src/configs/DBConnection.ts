import {TypeOrmModule} from "@nestjs/typeorm";
import { Cliente } from "src/entities/cliente.entity";
import { Consumo } from "src/entities/consumo.entity";
import { Pago} from 'src/entities/pago.entity';

export const Connection = TypeOrmModule.forRoot({
    /*type: 'mysql',
    host: 'localhost',
    port: 3306, //funcion number reservada para convertir el valor a numero
    username: 'root',
    password: '',
    database: 'proyecto_final',
    entities: [Cliente,Consumo,Pago],//aqui se llaman las entidades-> hace referencia a una tabla  
    synchronize: true*/
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT), //funcion number reservada para convertir el valor a numero
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Cliente,Consumo,Pago],//aqui se llaman las entidades 
    synchronize: true
})