import { Logger, LoggerService, Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { ContentManager } from './content-manager';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://localhost:8015',
      timeout: 5000,
      maxRedirects: 5,
    }),
    ContentClientModule,
  ],
  exports: [ContentManager],
  providers: [
    {
      provide: ContentManager,
      useFactory: (httpService: HttpService) => new ContentManager(httpService),
      inject: [HttpService],
    },
  ],
})
export class ContentClientModule {}
