import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Site } from "../sites/site.entity";

@Entity('steps')
export class Step {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    title: string

    @Column({ nullable: true })
    details: string

    @Column('varchar', { array: true, nullable: true })
    assets: string[]

    @Column({ default: false })
    isCompleted: boolean

    @ManyToOne(() => Site, (site) => site.steps)
    site: Site
}
