import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({
        length: 256,
        unique: true
    })
    email: string;

    @Column()
    telefone: string;

    @Column()
    endereco: string;
}
