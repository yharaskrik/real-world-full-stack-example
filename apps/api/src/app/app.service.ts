import { Injectable } from '@nestjs/common';
import { Message } from '@real-world-full-stack-example/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
