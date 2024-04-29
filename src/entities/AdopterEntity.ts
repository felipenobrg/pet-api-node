import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export default class AdopterEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    name: string;
    @Column()
    password: string;
    @Column()
    cellphone: string;
    @Column()
    photo: string;
    @Column()
    address: string;

    constructor(
        name: string,
        password: string,
        cellphone: string,
        photo: string,
        address: string
    ) {
        this.name = name;
        this.password = password;
        this.photo = photo;
        this.cellphone = cellphone;
        this.address = address;
    }
}