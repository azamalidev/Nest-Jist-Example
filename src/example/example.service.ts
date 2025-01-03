import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  getHello(): string {
    return 'Hello World!';
  }
  getTest(): any[] {
    const data= []
    return data;
  }
}
