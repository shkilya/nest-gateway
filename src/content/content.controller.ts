import { Controller, Get, Param } from '@nestjs/common';
import { ContentManager } from '../utils/content-client/content-manager';
import { map } from 'rxjs';
import { ContentViewModel } from './view-model/content.view-model';

@Controller('content')
export class ContentController {
  constructor(private readonly contentManager: ContentManager) {}

  @Get('/')
  async getAllFilter() {
    return this.contentManager.getAll();
  }
  @Get('/f/:id')
  async getOneFilter(@Param('id') id: number) {
    return this.contentManager.getOne(id);
  }

  @Get('/:id')
  async getOneFilterF(@Param('id') id: number) {
    return this.contentManager.getOne(id).pipe(
      map((item) => {
        const { data } = item;

        const language = data.language;
        return {
          id: data.id,
          meta_title: { [language]: data.meta_title },
          meta_description: { [language]: data.meta_description },
          meta_keywords: { [language]: data.meta_keywords },
          crypto_title: { [language]: data.crypto_title },
          crypto_text: { [language]: data.crypto_text },
          how_to_title: { [language]: data.how_to_title },
          how_to_text: { [language]: data.how_to_text },
          bottom_how_to_title: { [language]: data.bottom_how_to_title },
          bottom_how_to_text: { [language]: data.bottom_how_to_text },
          bottom_advantages_title: { [language]: data.bottom_advantages_title },
          bottom_advantages_text: { [language]: data.bottom_advantages_text },
          url: data.url,
        } as ContentViewModel;
      }),
    );
  }
}
