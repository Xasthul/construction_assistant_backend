import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class SiteIdParam {

    @IsUUID()
    @ApiProperty({ name: 'siteId' })
    id: string
}
