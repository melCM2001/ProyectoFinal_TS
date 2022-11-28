//
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Consumo } from "./consumo.entity";

@Entity()
export class Pago{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total: number;

    @Column()
    pagado: boolean

    @ManyToOne(() => Consumo, (consumo) => consumo.pago)
    @JoinColumn({name:'id_Consumo'})
    id_Consumo: number;
} 