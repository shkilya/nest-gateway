import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { UtilsModule } from '../utils/utils.module';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
  imports: [UtilsModule],
})
export class BlogModule {}
