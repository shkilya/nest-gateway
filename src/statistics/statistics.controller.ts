import { Controller, Get, Response } from '@nestjs/common';
import { Response as Res } from 'express';

@Controller('statistics')
export class StatisticsController {
  @Get('/')
  index(@Response() res: Res) {
    const list = [
      { id: '12', meta_title: 'te' },
      { id: '13', meta_title: 'tcxze' },
    ];
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
}
