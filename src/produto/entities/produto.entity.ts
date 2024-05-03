import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({ name: 'tb_produtos' })
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({ length: 150, nullable: false })
    nome: string;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    descricao: string;

    @IsNotEmpty()
    @Column("decimal", {precision: 6, scale: 2, nullable: false})
    preco: number;

    @IsNotEmpty()
    @Column({nullable: false})
    quantidade: number;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: 'CASCADE'
    })
    categoria: Categoria;

    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
        onDelete: "CASCADE"
    })
    usuario: Usuario;
}