import { ApiProperty } from "@nestjs/swagger";

export class LoginResource {
    @ApiProperty({ description: "User's accessToken for authentication" })
    readonly accessToken: string

    constructor(accessToken: string) {
        this.accessToken = accessToken;
    }

    static from(accessToken: string): LoginResource {
        return new LoginResource(accessToken);
    }
}
