import { Test, TestingModule } from '@nestjs/testing';
import { CookbookController } from './cookbook.controller';

describe('CookbookController', () => {
  let controller: CookbookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CookbookController],
    }).compile();

    controller = module.get<CookbookController>(CookbookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
