import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BlogModule } from './blog/blog.module';
import { HttpModule } from '@nestjs/axios';
import { UtilsModule } from './utils/utils.module';
import { ContentModule } from './content/content.module';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [UsersModule, BlogModule, HttpModule, ContentModule, StatisticsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
