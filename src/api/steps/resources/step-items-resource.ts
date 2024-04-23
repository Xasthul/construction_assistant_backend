import { ApiProperty } from "@nestjs/swagger"
import { Step } from "src/domain/models/step.entity"
import { StepResource } from "./step-resource";

export class StepItemsResource {

    @ApiProperty({ description: 'Array of steps' })
    readonly data: StepResource[]

    constructor(steps: Step[]) {
        this.data = steps;
    }

    static from(steps: Step[]): StepItemsResource {
        return new StepItemsResource(steps);
    }
}