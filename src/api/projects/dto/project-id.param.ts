import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class ProjectIdParam {

    @IsUUID()
    @ApiProperty({ description: 'Project id' })
    id: string
}
