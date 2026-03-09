import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject,PLATFORM_ID } from '@angular/core';
import { catchError } from 'rxjs';
import { CustomerService } from '../services/customer-service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  let customerService = inject(CustomerService)
  let router = inject(Router)
  const platformId = inject(PLATFORM_ID);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        if (isPlatformBrowser(platformId)) {
          const isContinue = window.confirm('Are you sure you want to continue')
          if (isContinue)
            customerService.tokenExpired$.next(true)
          else
            router.navigateByUrl('login')
        }
      }
      throw error
    })
  );
};
