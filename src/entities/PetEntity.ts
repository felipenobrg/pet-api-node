import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import EnumSpecie from "../enum/EnumSpecie";

@Entity()
export default class PetEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name: string;
    @Column()
    specie: EnumSpecie;
    @Column()
    dateOfBirth: Date;
    @Column()
    isAdopted: boolean

    constructor(
        name: string,
        specie: EnumSpecie,
        dateOfBirth: Date,
        isAdopted: boolean) {
        this.name = name;
        this.specie = specie;
        this.dateOfBirth = dateOfBirth;
        this.isAdopted = isAdopted;
    }
}