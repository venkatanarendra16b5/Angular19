import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID); // Inject PLATFORM_ID to check the platform

  if (isPlatformBrowser(platformId)) { // Check if running in the browser
    const loggedUserId = localStorage.getItem('userId');

    if (loggedUserId) {
      return true;
    } else {
      router.navigateByUrl('login');
      return false;
    }
  }

  // If SSR, allow navigation (or handle differently)
  return true;
};
