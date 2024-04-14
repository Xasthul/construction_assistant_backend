import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('steps')
export class Step {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    details: string

    @Column('varchar', { array: true })
    assets: string[]

    @Column()
    isCompleted: boolean
}
