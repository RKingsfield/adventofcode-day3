import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WiresModule } from './wires/wires.module';

@Module({
  imports: [WiresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
