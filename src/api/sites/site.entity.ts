import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Step } from "../steps/step.entity";
import { Project } from "../projects/project.entity";

@Entity('sites')
export class Site {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @OneToMany(() => Step, (step) => step.site)
    steps: Step[]

    @ManyToOne(() => Project, (project) => project.sites, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'projectId' })
    projectId: string
}
