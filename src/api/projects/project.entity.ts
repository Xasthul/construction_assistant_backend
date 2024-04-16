import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Site } from "../sites/site.entity";

@Entity('projects')
export class Project {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    title: string

    @OneToMany(() => Site, (site) => site.projectId)
    sites: Site[]
}
