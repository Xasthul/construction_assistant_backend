import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Step } from "../steps/step.entity";
import { Project } from "../projects/project.entity";

@Entity('sites')
export class Site {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @OneToMany(() => Step, (step) => step.site)
    steps: Step[]

    @ManyToOne(() => Project, (project) => project.sites)
    project: Project
}
