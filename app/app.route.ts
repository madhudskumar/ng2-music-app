import { RouterConfig, provideRouter } from '@angular/router';
import { testComponent } from './test/test.component';
import { albumbComponent } from './music/albumb.component';
import { albumbsComponent } from './music/albumbs.component';
import { loginComponent } from './user/login.component';
import { regestrationComponent } from './user/regestration.component';
import { welcomeComponent } from './common/welcome.component';


const routes:RouterConfig = [
    {path:'albumb', component:albumbComponent},
    {path:'albumbs', component:albumbsComponent},
    {path:'login', component:loginComponent},
    {path:'registration', component:regestrationComponent},
    {path:'test', component:testComponent},
    {path:'', component:welcomeComponent},
    {path:'**', redirectTo:'/test', pathMatch:'full'}
];

export const appRouterProvider = [
    provideRouter(routes)
];

