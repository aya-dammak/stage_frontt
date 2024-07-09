import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubTitle } from 'chart.js';
import { LayoutService } from 'src/app/layout/service/app.layout.service';


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {

    sections = [
        {
            id: 1,
            Title: 'Welcome To Foody',
            SubTitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima sapiente, doloremque, voluptates vero atque ipsam at odit aliquid iste deleniti doloribus amet cum ab maiores? Natus atque rem reiciendis totam.',
            imageSrc: 'assets/demo/images/landing/image1.webp',
            background: 'linear-gradient(0deg, rgba(207, 102, 60, 0.2), rgba(101, 255, 96, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #ffd76a 100%)',
            clipPath: 'ellipse(150% 87% at 93% 13%)'
        },

    ];

    constructor(public layoutService: LayoutService, public router: Router) { }
    //modified
    getLogoPath(): string {
        const colorScheme = this.layoutService.config().colorScheme;
        return `assets/layout/images/${colorScheme === 'light' ? 'logo-dark' : 'logo-white'}.svg`;
    }
}
