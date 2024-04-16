import { IsNotEmpty, IsNumberString } from "class-validator";

export class ProjectIdParam {

    @IsNumberString()
    @IsNotEmpty()
    id: number
}
 