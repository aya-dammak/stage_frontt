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
            type: 'intro',
            Title: 'Welcome To Foody',
            SubTitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima sapiente, doloremque, voluptates vero atque ipsam at odit aliquid iste deleniti doloribus amet cum ab maiores? Natus atque rem reiciendis totam.',
            imageSrc: 'assets/demo/images/landing/image1.webp',
            background: 'linear-gradient(0deg, rgba(207, 102, 60, 0.2), rgba(101, 255, 96, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #ffd76a 100%)',
            clipPath: 'ellipse(150% 87% at 93% 13%)'
        },
    ];
    
    categories = {
        id: 'categories',
        title: 'Nos Catégories',
        titleStyle: 'font-family: \'Dancing Script\', cursive;',
        items: [
          {
            name: 'Pizza',
            carouselId: 'carouselPizza',
            images: [
              { src: 'f3.png', alt: 'pizza' },
              { src: 'f1.png', alt: 'pizza' },
              { src: 'f6.png', alt: 'pizza' }
            ]
          },
          {
            name: 'Salade',
            carouselId: 'carouselSalade',
            images: [
              { src: 'salade cesar.jpg', alt: 'salade cesar' },
              { src: 'salade mechouia.jpg', alt: 'salade mechouia' },
              { src: 'salade de riz.jpg', alt: 'salade de riz' }
            ]
          },
          {
            name: 'Plats',
            carouselId: 'carouselPlat',
            images: [
              { src: 'pasta.webp', alt: 'pasta' },
              { src: 'escalope_pané.png', alt: 'escalope pané' },
              { src: 'poisson.jpg', alt: 'poisson' }
            ]
          }
        ]
      };
    
    aboutUs = {
        title: 'A propos',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        backgroundStyle: 'linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)',
        textStyle: 'font-family: \'Dancing Script\', cursive;'
    };
    menuItems = [
        {
          image: 'f3.png',
          alt: 'pizza',
          title: 'Delicious Pizza',
          backgroundColor: 'rgba(255, 207, 161, 0.2)'
        },
        {
          image: 'baguette farcie.jpeg',
          alt: 'baguetteFarcie',
          title: 'Delicious Baguette Farcie',
          backgroundColor: 'rgba(160, 237, 145, 0.2)'
        },
        {
          image: 'f2.png',
          alt: 'Burger',
          title: 'Delicious Burger',
          backgroundColor: 'rgba(255, 207, 161, 0.2)'
        },
        {
          image: 'escalope_pané.png',
          alt: 'escalope_pané',
          title: 'Delicious Plat Escalope Pané',
          backgroundColor: 'rgba(160, 237, 145, 0.2)'
        },
        {
          image: 'salade cesar.jpg',
          alt: 'salade_cesar',
          title: 'Delicious Salade Cesar',
          backgroundColor: 'rgba(255, 207, 161, 0.2)'
        },
        {
          image: 'salade mechouia.jpg',
          alt: 'salade_mechouia',
          title: 'Delicious Salade Mechouia',
          backgroundColor: 'rgba(160, 237, 145, 0.2)'
        },
        {
          image: 'pasta.webp',
          alt: 'Pasta',
          title: 'Delicious Pasta',
          backgroundColor: 'rgba(255, 207, 161, 0.2)'
        },
        {
          image: 'poisson.jpg',
          alt: 'Poisson',
          title: 'Delicious Poisson Grillé',
          backgroundColor: 'rgba(160, 237, 145, 0.2)'
        },
        {
          image: 'f6.png',
          alt: 'pizza',
          title: 'Delicious Pizza',
          backgroundColor: 'rgba(255, 207, 161, 0.2)'
        }
      ];

      article = {
        id: 'article',
        title: 'Nouveautés',
        subtitle: '',
        imgSrc: 'article.jpg',
        imgAlt: 'mockup mobile',
        icon: 'pi pi-fw pi-mobile',
        iconColor: 'text-purple-700',
        iconBgColor: 'bg-purple-200',
        description: 'En vue de l\'avenir, nous prévoyons de développer ce site afin qu\'il soit relié à une application mobile, offrant ainsi une continuité parfaite entre votre expérience en ligne et sur mobile. Restez connectés pour découvrir nos futures mises à jour passionnantes !'
      };

      orderSection = {
        id: 'commande',
        icon: 'pi pi-fw pi-desktop',
        iconColor: 'text-yellow-700',
        iconBgColor: 'bg-yellow-200',
        title: 'Passer Une Commande',
        titleStyle: 'font-family: \'Dancing Script\', cursive;',
        form: {
          inputs: [
            { placeholder: 'Nom', type: 'text', icon: 'fa-solid fa-user', required: true },
            { placeholder: 'Email', type: 'email', icon: 'fa-solid fa-envelope', required: true },
            { placeholder: 'Address', type: 'text', icon: 'fa-solid fa-location-dot', required: true },
            { placeholder: 'Telephone', type: 'tel', icon: 'fa-solid fa-phone', required: true },
            { placeholder: 'Votre Commande', type: 'text', icon: '', required: true }
          ],
          buttonText: 'Envoyer'
        },
        imgSrc: 'mockup-desktop.svg',
        imgAlt: 'mockup'
      };
    

    constructor(public layoutService: LayoutService, public router: Router) { }
    //modified
    getLogoPath(): string {
        const colorScheme = this.layoutService.config().colorScheme;
        return `assets/layout/images/${colorScheme === 'light' ? 'logo-dark' : 'logo-white'}.svg`;
    }
    /*getImagePath(image: string): string {
        return `assets/demo/images/landing/${image}`;
    }

    getCarouselId(category: string): string {
        return `carousel${category.replace(/\s+/g, '')}`;
    }*/

    getImagePath(image: string): string {
        return `assets/demo/images/landing/${image}`;
    }
}
