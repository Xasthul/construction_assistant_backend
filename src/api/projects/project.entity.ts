import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Step } from "../steps/step.entity";
import { Site } from "../sites/site.entity";

@Entity('projects')
export class Project {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @OneToMany(() => Site, (site) => site.project)
    sites: Site[]
}
