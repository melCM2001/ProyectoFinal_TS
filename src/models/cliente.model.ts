//Modelado de los datos de la tabla de cliente
import { IsString, IsInt, IsNumberString, IsDateString, IsEmail } from 'class-validator';
export class ICliente{
    @IsInt()
    id: number;

    @IsString()
    nombre: string;

    @IsEmail()
    correo: string;

    @IsNumberString()
    telefono: string;

    @IsString()
    domicilio: string;

    @IsDateString()
    fecha_nacimiento: string;
}