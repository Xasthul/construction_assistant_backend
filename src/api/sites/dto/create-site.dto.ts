import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateSiteDto {

    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsUUID()
    readonly projectId: string;
}
