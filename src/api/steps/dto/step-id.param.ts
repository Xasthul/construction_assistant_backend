import { IsInt } from "class-validator";

export class StepIdParam {

    @IsInt()
    id: number
}
