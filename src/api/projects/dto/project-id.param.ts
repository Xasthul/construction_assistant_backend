import { IsNotEmpty, IsUUID } from "class-validator";

export class ProjectIdParam {

    @IsUUID()
    id: string
}
