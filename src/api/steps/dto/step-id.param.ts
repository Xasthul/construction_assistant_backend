import { IsUUID } from "class-validator";

export class StepIdParam {

    @IsUUID()
    id: string
}
