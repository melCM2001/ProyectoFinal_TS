//Una entidad hace referencia a una tabla
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Consumo } from './consumo.entity';

@Entity() //tabla en la bd, El esquema de la bd se pasara a todo aquello que tenga en decorador @Entity()
export class Cliente {
    //PK
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    correo: string;

    @Column()
    telefono: string;

    @Column()
    domicilio: string;

    @Column()
    fecha_nacimiento: string;

    //FK, Un cliente puede tener muchos consumos 
    @OneToMany(() => Consumo, (consumo) => consumo.id_Cliente )
    consumo: Consumo[];
}