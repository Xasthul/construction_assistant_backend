import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Site } from "./site.entity";


@Entity('projects')
export class Project {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @OneToMany(() => Site, (site) => site.projectId)
    sites: Site[]
}
