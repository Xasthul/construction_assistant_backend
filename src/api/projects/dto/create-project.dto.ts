import { IsArray, IsNotEmpty, IsObject, IsString } from "class-validator";

export class CreateProjectDto {

    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsArray()
    @IsObject()
    @IsNotEmpty()
    readonly sites: string[];
}
