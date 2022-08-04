import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";

@Injectable()
export class AuthService{
    signin(){
        return 'sucessuful signin'
    }

    signup(){
        return 'sucessuful signup'
    }
}