## Descripcion del proyecto
Este proyecto es una simulacion sobre el consumo energetico de una vivienda. El objetivo es crear un API en NestJS levantada en un contenedor de docker.

## Puntos a evaluar
- Se debe registrar un cliente con los datos definidos en la estructura de la base de datos [LISTO_:)]
- Se debe registrar el consumo energetico por cliente por periodo. Ej: Cliente "A" consumio: "155 Kw" en el periodo: "Fecha" [LISTO_:)]
- Se debe calcular el total a pagar basado en el consumo; [LISTO_:)]
- dependiendo la edad sera el costo del consumo.[PENDIENTE_:(]
- Se debe obtener un reporte general de todos los consumos.[LISTO_:)]
- Se debe obtener un reporte el cual indique que usuario consumio mas Kw y quien consumio menos Kw.[LISTO_:)]
- Se debe obtener un reporte de los clientes que ya pagaron y los que aun deben.[LISTO_:)]
- Se debe obtener un reporte de detalles de consumo por cliente.[LISTO_:)]

## Puntos importantes
- Los datos de registro del cliente deben estar validados; por ejemplo: si un campo es numerico solo numeros debe aceptar[LISTO_:)]
- Los rangos de costo por consumo es: de 1 a 100Kw el costo por KW es de 150, de 101 a 300 es de 170 de 300 en adelante 190.
 Pero si el cliente tiene mas de 50 años su consumo tiene un 10% de descuento.[PENDIENTE_:(]