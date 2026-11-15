import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MeklaModule } from './mekla/mekla.module';

@Module({
  imports: [ConfigModule . forRoot(), MeklaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
