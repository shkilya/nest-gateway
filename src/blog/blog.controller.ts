import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Response,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './request-dto/create-blog.dto';
import { Blog } from './models/Blog';
import { Response as Res } from 'express';
import { ListFilterDto } from './request-dto/list-filter.dto';
import { BlogFilter } from './models/blog-filter';
import { ContentManager } from '../utils/content-client/content-manager';

@Controller('blog')
export class BlogController {
  constructor(
    private readonly blogService: BlogService,
    private readonly contentManager: ContentManager,
  ) {}

  @Get('/')
  getAll(@Query() listFilter: ListFilterDto, @Response() res: Res) {
    const list = this.blogService.getAll({
      q: listFilter.q,
    } as BlogFilter);

    return res
      .set({
        'Access-Control-Expose-Headers': ['Content-Range', 'X-Total-Count'],
        'Content-Range': 'bytes: 0-9/*',
        'X-Total-Count': list.length,
      })
      .set({
        // 'Access-Control-Expose-Headers': ,
      })
      .json(list);
  }

  @Get('/content')
  getContent() {
    return this.contentManager.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: string): Blog {
    console.log(id);
    return this.blogService.getItem(id);
  }

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    try {
      return this.blogService.createItem(createBlogDto);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
  update() {}
  delete() {}
}
