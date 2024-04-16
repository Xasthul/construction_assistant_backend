import { IsEmail, IsStrongPassword } from "class-validator";

export class CreateUserDto {

    @IsEmail()
    readonly email: string

    // @IsStrongPassword({
    //     minLength: 8,
    //     minLowercase: 1,
    //     minNumbers: 1,
    //     minSymbols: 1,
    //     minUppercase: 1
    // })
    @IsStrongPassword()
    readonly password: string
}