import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {

    constructor(public layoutService: LayoutService, public router: Router) { }
    //modified
    getLogoPath(): string {
        const colorScheme = this.layoutService.config().colorScheme;
        return `assets/layout/images/${colorScheme === 'light' ? 'logo-dark' : 'logo-white'}.svg`;
    }
}
