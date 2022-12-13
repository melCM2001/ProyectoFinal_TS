//Modelado de los datos de la tabla de consumo
import { IPago } from './pago.model';
import { IsString, IsInt, IsNumberString, IsDateString, IsEmail,  IsBoolean} from 'class-validator';

export interface IConsumo{
    //no es necesario especificar id
    @IsInt()
    consumo: number;

    @IsInt()
    id_cliente: number;

    @IsBoolean()
    pagado: boolean;
}