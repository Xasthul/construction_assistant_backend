import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateStepDto {

    @IsString()
    @IsNotEmpty()
    readonly title: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    readonly details: string

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    readonly assets: string[]
}