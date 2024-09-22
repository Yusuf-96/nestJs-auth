import {  Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LoginToken{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    token:string

}