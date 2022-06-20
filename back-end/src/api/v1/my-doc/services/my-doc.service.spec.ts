import { Test, TestingModule } from '@nestjs/testing';
import { MyDocService } from './my-doc.service';

describe('MyDocService', () => {
  let service: MyDocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyDocService],
    }).compile();

    service = module.get<MyDocService>(MyDocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
