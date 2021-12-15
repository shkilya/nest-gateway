import { Module } from '@nestjs/common';
import { ContentClientModule } from './content-client/content-client.module';

@Module({
  imports: [ContentClientModule],
  exports: [ContentClientModule],
})
export class UtilsModule {}
