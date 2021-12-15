import { Injectable, Query } from '@nestjs/common';
import { Blog } from './models/Blog';
import { BlogFilter } from './models/blog-filter';

@Injectable()
export class BlogService {
  private list: Array<Blog> = [
    { id: '1', title: 'title1', description: 'description1' },
    { id: '2', title: 'title2', description: 'description2' },
    { id: '3', title: 'title3', description: 'description3' },
    { id: '4', title: 'title3', description: 'description3' },
    { id: '5', title: 'title3', description: 'description3' },
    { id: '6', title: 'title3', description: 'description3' },
    { id: '7', title: 'title3', description: 'description3' },
    { id: '8', title: 'title3', description: 'description3' },
    { id: '9', title: 'title3', description: 'description3' },
    { id: '10', title: 'title3', description: 'description3' },
    { id: '11', title: 'title3', description: 'description3' },
    { id: '12', title: 'title3', description: 'description3' },
  ];

  getAll(blogFilter: BlogFilter): Blog[] {
    let cloneList = this.list;
    if (blogFilter.q !== undefined) {
      cloneList = cloneList.filter((item) => item.title.includes(blogFilter.q));
    }
    return cloneList;
  }

  getItem(id: string): Blog {
    return this.list.find((blog) => blog.id === id);
  }

  createItem(blog: Partial<Blog>) {
    const index = (this.list.length + 1).toString();

    const newBlog: Blog = {
      id: index,
      title: blog.title,
      description: blog.description,
    };
    this.list.push(newBlog);
    return newBlog;
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
