//Modelado de los datos de la tabla de consumo
import { IPago } from './pago.model';
export interface IConsumo{
    //no es necesario especificar id
    consumo: number;
    id_cliente: number;
    pagado: boolean;
}