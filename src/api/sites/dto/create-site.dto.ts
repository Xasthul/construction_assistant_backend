import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSiteDto {

    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNumber()
    @IsNotEmpty()
    readonly projectId: number;
}
