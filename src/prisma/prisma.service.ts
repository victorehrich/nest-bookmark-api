import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(configuration:ConfigService) {
        super({
            datasources:{
                db:{
                    url:configuration.get('DATABASE_URL')
                }
            }
        })
    }
}
