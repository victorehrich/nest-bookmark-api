import { Body, Controller, Post, Req } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { AuthDto } from "./Dto/auth.dto";

@ApiTags('AuthController')
@Controller('auth')
export class AuthController{
    constructor( private authService:AuthService) {}

    @Post('signup')
    signup(@Body() authDto:AuthDto){
       return this.authService.signup(authDto)
    }

    @Post('signin')
    signin(@Body() authDto:AuthDto){
       return this.authService.signin(authDto)
    }
}