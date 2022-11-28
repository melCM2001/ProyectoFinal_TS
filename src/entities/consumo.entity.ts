//
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./cliente.entity";
import { Pago } from './pago.entity';

@Entity()
export class Consumo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: Date;

    @Column()
    consumo: number;

    @ManyToOne(() => Cliente, (cliente) => cliente.consumo)
    @JoinColumn({name:'id_Cliente'})
    id_Cliente: number;

    @OneToMany(() => Pago, (pago) => pago.id_Consumo  )
    pago: Pago[];
}