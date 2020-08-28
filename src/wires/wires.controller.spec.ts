import { Test, TestingModule } from '@nestjs/testing';
import { WiresController } from './wires.controller';
import { WiresService } from './wires.service';

describe('WiresController', () => {
  let controller: WiresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WiresController],
      providers: [WiresService],
    }).compile();

    controller = module.get<WiresController>(WiresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
