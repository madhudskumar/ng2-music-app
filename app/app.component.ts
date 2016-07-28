import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { headerComponent } from './common/header.component';
import { footerComponent } from './common/footer.component';

@Component({
    selector: 'my-app',
    template: `
        <header-component></header-component>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        <footer-component></footer-component>
    `,
    directives:[ ROUTER_DIRECTIVES, headerComponent, footerComponent]
})
export class AppComponent { }
