import { IsNumberString } from "class-validator";

export class StepIdParam {

    @IsNumberString()
    id: number
}
