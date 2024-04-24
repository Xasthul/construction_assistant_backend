import { ApiProperty } from "@nestjs/swagger"
import { Step } from "src/domain/models/step.entity"

export class StepResource {

    @ApiProperty({ description: 'Step id' })
    readonly id: string

    @ApiProperty({ description: 'Step title' })
    readonly title: string

    @ApiProperty({ description: 'Step details' })
    readonly details: string

    @ApiProperty({ description: 'Array of base64 encoded assets' })
    readonly assets: string[]

    @ApiProperty({ description: 'Is step completed' })
    readonly isCompleted: boolean

    @ApiProperty({ description: "Related site's id" })
    readonly siteId: string

    constructor(step: Step) {
        this.id = step.id;
        this.title = step.title;
        this.details = step.details;
        this.assets = step.assets;
        this.isCompleted = step.isCompleted;
        this.siteId = step.siteId;
    }

    static from(step: Step): StepResource {
        return new StepResource(step);
    }
}