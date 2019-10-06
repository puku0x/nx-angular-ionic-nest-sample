import { Injectable } from '@nestjs/common';
import { Data } from '@workspace/data';

@Injectable()
export class AppService {
  getData(): Data {
    return { message: 'Welcome to nx!' };
  }
}
