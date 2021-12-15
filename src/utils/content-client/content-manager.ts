import { HttpService } from '@nestjs/axios';
import { Content } from './model/content';
import { map, Observable } from 'rxjs';
import { Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';

export class ContentManager {
  private readonly logger = new Logger(ContentManager.name);
  constructor(private httpService: HttpService) {}

  getAll(): Observable<AxiosResponse<Content[]>> {
    try {
      return this.httpService.get<Content[]>('/api/content');
    } catch (e) {
      this.logger.error(`${ContentManager.name} getAll error`, {
        message: e.message,
      });
      throw e;
    }
  }
  getOne(id: number): Observable<AxiosResponse<Content>> {
    try {
      return this.httpService.get<Content>(`/api/content/${id}`);
    } catch (e) {
      this.logger.error(`${ContentManager.name} getOne error`, {
        message: e.message,
      });
      throw e;
    }
  }
}
