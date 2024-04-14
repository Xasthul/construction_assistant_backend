import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class UpdateStepDto {

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly title: string

    @IsString()
    @IsOptional()
    readonly details: string

    @IsArray()
    @IsString()
    @IsOptional()
    readonly assets: string[]
}