import { Test, TestingModule } from '@nestjs/testing';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

describe('ExampleController', () => {
  let controller: ExampleController;
  let service: ExampleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleController],
      providers: [ExampleService],
    }).compile();

    controller = module.get<ExampleController>(ExampleController);
    service = module.get<ExampleService>(ExampleService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "Hello World!"', () => {
    jest.spyOn(service, 'getHello').mockImplementation(() => 'Hello World!');
    expect(controller.getHello()).toBe('Hello World!');
  });
  it('should return "Get Tested!"', () => {
    jest.spyOn(service, 'getTest').mockImplementation(() => []);
    expect(controller.getTest()).toStrictEqual([]);
  });
});
