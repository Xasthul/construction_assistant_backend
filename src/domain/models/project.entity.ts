import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Site } from "./site.entity";
import { User } from "./user.entity";

@Entity('projects')
export class Project {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @ManyToOne(() => User, (user) => user.projects, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    userId: string

    @OneToMany(() => Site, (site) => site.projectId)
    sites: Site[]
}
