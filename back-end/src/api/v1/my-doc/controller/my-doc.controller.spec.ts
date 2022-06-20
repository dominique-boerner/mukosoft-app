import { Test, TestingModule } from '@nestjs/testing';
import { MyDocController } from './my-doc.controller';

describe('MyDocController', () => {
  let controller: MyDocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyDocController],
    }).compile();

    controller = module.get<MyDocController>(MyDocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
