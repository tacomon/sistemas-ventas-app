import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../pages/auth/services/auth.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  
  if (req.headers.get("requireToken")) {
    const authSvc = inject(AuthService);
    const token = authSvc.tokenValue;

    if (token) {
      const authReq = req.clone({
        setHeaders: {
          auth: `${token}`
        }
      });

      return next(authReq);
    }
  }
  return next(req);
};
