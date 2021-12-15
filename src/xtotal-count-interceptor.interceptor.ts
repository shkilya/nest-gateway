import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class XtotalCountInterceptorInterceptor implements NestInterceptor {
  private readonly X_TOTAL_COUNT = 'X-Total-Count';

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const resp = context.switchToHttp().getResponse();
    return next.handle().pipe(
      map((item) => {
        const { data, headers } = item;
        if (data) {
          if (headers && headers['x-total-count']) {
            resp.setHeader(this.X_TOTAL_COUNT, headers['x-total-count']);
            resp.setHeader('Access-Control-Expose-Headers', [
              'Content-Range',
              'X-Total-Count',
            ]);
          }
          return data;
        }
        return item;
      }),
    );
  }
}
