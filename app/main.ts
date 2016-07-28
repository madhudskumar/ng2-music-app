import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http'
import { appRouterProvider } from './app.route'
import { AppComponent } from './app.component';

bootstrap(AppComponent,[
    HTTP_PROVIDERS,
    appRouterProvider
]);
