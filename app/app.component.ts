import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { headerComponent } from './common/header.component';
import { footerComponent } from './common/footer.component';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <header-component ></header-component>
        </div>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        <div class="container">
            <footer-component class="container"></footer-component>    
        </div>
    `,
    directives:[ ROUTER_DIRECTIVES, headerComponent, footerComponent]
})
export class AppComponent { }
