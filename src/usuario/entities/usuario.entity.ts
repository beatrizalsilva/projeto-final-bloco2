import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({ name: 'tb_usuarios' })
export class Usuario {
    @PrimaryGeneratedColumn()
    public id: number;
  
    @IsNotEmpty()
    @Column({ length: 200, nullable: false })
    public nome: string;
  
    @IsEmail()
    @IsNotEmpty()
    @Column({ length: 200, nullable: false })
    public usuario: string;
  
    @MinLength(8)
    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    public senha: string;

    @OneToMany(() => Produto, (produto) => produto.usuario)
    produto: Produto[];
}