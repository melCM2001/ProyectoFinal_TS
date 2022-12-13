import { IsBoolean, IsNumber } from 'class-validator';
//Modelado de los datos de la tabla de consumo
import { IPago } from './pago.model';
import { IsString, IsInt, IsNumberString, IsDateString, IsEmail,  } from 'class-validator';

export class IConsumo{
    //no es necesario especificar id
    @IsNumber()
    consumo: number;

    @IsNumber()
    id_cliente: number;

    @IsBoolean()
    pagado: boolean;
}