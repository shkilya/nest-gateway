import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentClientModule } from '../utils/content-client/content-client.module';

@Module({
  controllers: [ContentController],
  imports: [ContentClientModule],
})
export class ContentModule {}
