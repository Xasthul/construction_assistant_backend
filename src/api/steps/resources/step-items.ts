import { ApiProperty } from "@nestjs/swagger"
import { Step } from "src/domain/models/step.entity"
import { StepResource } from "./step";

export class StepItemsResource {

    @ApiProperty({
        description: 'Array of steps',
        isArray: true,
        type: StepResource
    })
    readonly data: StepResource[]

    constructor(steps: Step[]) {
        this.data = steps;
    }

    static from(steps: Step[]): StepItemsResource {
        return new StepItemsResource(steps);
    }
}