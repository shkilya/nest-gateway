import { Injectable } from '@nestjs/common';
import { Blog } from './models/Blog';

@Injectable()
export class BlogService {
  private list: Array<Blog> = [
    { id: '1', title: 'title1', description: 'description1' },
    { id: '2', title: 'title2', description: 'description2' },
    { id: '3', title: 'title3', description: 'description3' },
  ];

  getAll(): Blog[] {
    return this.list;
  }

  getItem(id: string) {
    return this.list.find((blog) => blog.id === id);
  }

  createItem(blog: Blog) {
    return this.list.push(blog);
  }

  updateItem(blog: Blog) {
    const index = this.list.findIndex((el) => el.id === blog.id);

    this.list[index] = {
      ...this.list[index],
      title: blog.title,
      description: blog.description,
    };
  }

  delete(id: string) {
    this.list.filter((listItem) => listItem.id === id);
  }
}
