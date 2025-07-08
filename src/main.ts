import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { provideRouter, Router, NavigationEnd } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(App, {
  providers: [provideRouter(routes),
  provideAnimations()
  ]
}).then(appRef => {
  const injector = appRef.injector;
  const router = injector.get(Router);
  const viewportScroller = injector.get(ViewportScroller);

  router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd)
  ).subscribe(() => {
    viewportScroller.scrollToPosition([0, 0]);
  });
});
