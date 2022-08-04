import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";

@ApiTags('AuthController')
@Controller('auth')
export class AuthController{
    constructor( private authService:AuthService) {}

    @Post('signup')
    signup(){
       return this.authService.signup()
    }

    @Post('signin')
    signin(){
       return this.authService.signin()
    }
}