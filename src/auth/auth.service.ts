import { ForbiddenException, Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./Dto/auth.dto";

@Injectable()
export class AuthService{
    constructor(
        private privaService:PrismaService
        ){}
    async signin(authDto:AuthDto){
        // busca o usuário pelo email
        // se não for encontrado, ou caso a senha passada seja diferente, será lançado um erro
        const user = await this.privaService.user.findUnique({
            where:{
                email: authDto.email
            }
        })
        if(!user)
            throw new ForbiddenException("Credenciais inválidas")
        else if(user.hash != authDto.password){
            throw new ForbiddenException("Credenciais inválidas")
        }
        console.log(user.hash,authDto.password,user.hash === authDto.password)
        delete user.hash

        return {msg:"Usuário se logou com sucesso",User:user}
    }

    async signup(authDto:AuthDto){
        try{
            const user = await this.privaService.user.create({
                data: {
                    email: authDto.email,
                    hash: authDto.password
                }
            })
            delete user.hash
            return user

        }
        catch(err){
            if(err instanceof PrismaClientKnownRequestError)
                return "campo " + err.meta.target + " inválido"
            throw err
        }

    }
}