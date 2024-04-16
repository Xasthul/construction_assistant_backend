import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class UpdateStepDto {

    @IsString()
    @IsNotEmpty()
    @IsOptional()
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