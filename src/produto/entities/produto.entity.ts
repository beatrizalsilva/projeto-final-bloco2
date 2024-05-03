import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'tb_produtos' })
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 150, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column({ length: 200, nullable: false })
    descricao: string;

    @IsNotEmpty()
    @Column("decimal", {precision: 6, scale: 2, nullable: false})
    preco: number;

    @IsNotEmpty()
    @Column({nullable: false})
    quantidade: number;
}