import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Step } from "../steps/step.entity";

@Entity('sites')
export class Site {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @OneToMany(() => Step, (step) => step.site)
    steps: Step[]
}
