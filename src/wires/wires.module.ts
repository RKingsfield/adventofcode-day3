import { Module } from '@nestjs/common';
import { WiresController } from './wires.controller';
import { WiresService } from './wires.service';

@Module({
  controllers: [WiresController],
  providers: [WiresService]
})
export class WiresModule {}
