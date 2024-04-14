import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('steps')
export class Step {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({ nullable: true })
    details: string

    @Column('varchar', { array: true, nullable: true })
    assets: string[]

    @Column({ default: false })
    isCompleted: boolean
}
