import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SubTitle } from 'chart.js';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { CartService } from 'src/app/demo/components/cart.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
    headerItems = [
        { name: 'Accueil', route: '/landing' },
        { name: 'Categories', route: '/landing', fragment: 'categories' },
        { name: 'Menu', route: '/landing', fragment: 'menu' },
        { name: 'Article', route: '/landing', fragment: 'article' },
        { name: 'Commande', route: '/landing', fragment: 'commande' }
      ];

    sections = [
        {
            
            type: 'intro',
            Title: 'Bienvenue à Foody,',
            SubTitle:' où la gastronomie rencontre la convivialité. Notre équipe passionnée vous invite à savourer une expérience culinaire exceptionnelle, inspirée par les saveurs authentiques et les ingrédients frais. Que vous soyez en quête d\'un déjeuner rapide, d\'un dîner entre amis ou d\'une soirée spéciale à deux, notre menu varié saura combler toutes vos envies. Plongez dans une atmosphère accueillante où chaque plat est préparé avec soin pour vous offrir une symphonie de goûts et de textures. Découvrez notre histoire à travers chaque assiette et laissez-vous séduire par notre passion pour la cuisine. Bienvenue chez nous !',
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
        description: 'Chez Foody, nous célébrons la passion pour la cuisine authentique. Chaque plat est une histoire racontée à travers des ingrédients locaux et des saveurs inspirées. Bienvenue dans notre univers gastronomique, où chaque repas est une expérience à savourer.',
        backgroundStyle: 'linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)',
        textStyle: 'font-family: \'Dancing Script\', cursive;'
    };
    menuItems = [
        {
          image: 'f3.png',
          alt: 'pizza',
          title: 'Pizza',
          backgroundColor: 'rgba(255, 207, 161, 0.2)',
          price: '12dt',
        },
        {
            image: 'Cordon_Bleu.jpg',
            alt: 'Cordon Bleu',
            title: 'Cordon Bleu',
            backgroundColor: 'rgba(160, 237, 145, 0.2)',
            price: '15dt',
        },
        {
            image: 'Salade_Riz.jpg',
            alt: 'Salade de Riz',
            title: 'Salade de Riz',
            backgroundColor: 'rgba(160, 237, 145, 0.2)',
            price: '15dt',
            category: 'Salades'
          },
        {
            image: 'Escaope_Pané.jpg',
            alt: 'Escaope Pané',
            title: 'Escaope Pané',
            backgroundColor: 'rgba(255, 207, 161, 0.2)',
            price: '14dt',
            category: 'Plat'
          },
        {
          image: 'salade cesar.jpg',
          alt: 'salade_cesar',
          title: 'Salade Cesar',
          backgroundColor: 'rgba(255, 207, 161, 0.2)',
          price: '15dt',
        },
        {
          image: 'salade mechouia.jpg',
          alt: 'salade_mechouia',
          title: 'Salade Mechouia',
          backgroundColor: 'rgba(160, 237, 145, 0.2)',
          price: '15dt',
        },
        {
            image: 'Pasta_Puttanesca.jpg',
            alt: 'Pasta Puttanesca',
            title: 'Pasta Puttanesca',
            backgroundColor: 'rgba(160, 237, 145, 0.2)',
            price: '16dt',
            category: 'Pasta'
          },
        {
          image: 'poisson.jpg',
          alt: 'Poisson',
          title: 'Poisson Grillé',
          backgroundColor: 'rgba(160, 237, 145, 0.2)',
          price: '15dt',
        },
        {
            image: 'Salade_Végéterienne.jpg',
            alt: 'Salade Végéterienner',
            title: 'Salade Végéterienne',
            backgroundColor: 'rgba(255, 207, 161, 0.2)',
            price: '8dt',
            category: 'Salades'
          },
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
        imgSrc: 'bg.png'
      };
      footerItems = [
        {
          title: 'Company',
          links: [
            { name: 'Accueil', route: '/landing' },
            { name: 'Categories', route: '/landing', fragment: 'categories' },
            { name: 'Menu', route: '/landing', fragment: 'menu' },
            { name: 'Article', route: '/landing', fragment: 'article' },
            { name: 'Commande', route: '/landing', fragment: 'commande' }
          ]
        },
        {
          title: 'Contact',
          contacts: [
            { icon: 'fa-location-dot', text: 'Sfax' },
            { icon: 'fa-phone', text: '+216 44 000 000' }
          ],
          socials: [
            { icon: 'fa-facebook', link: '#' },
            { icon: 'fa-instagram', link: '#' },
            { icon: 'fa-linkedin', link: '#' }
          ]
        },
        {
          title: 'Opening',
          timings: [
            'Lundi - Samedi 09AM - 09PM',
            'Dimanche 10AM - 08PM'
          ]
        }
      ];
      
    
    

    constructor(public layoutService: LayoutService, public router: Router,private cartService: CartService) { }
    getLogoPath(): string {
        const colorScheme = this.layoutService.config().colorScheme;
        return `assets/layout/images/${colorScheme === 'light' ? 'logo-dark' : 'logo-white'}.svg`;
    }
    getRouterLink(item: any) {
        return item.fragment ? [item.route, { fragment: item.fragment }] : [item.route];
      }

    getImagePath(image: string): string {
        return `assets/demo/images/landing/${image}`;
    }
    navigateTo(fragment: string) {
        this.router.navigate(['/landing'], { fragment: fragment });
    }
    navigateToMenu() {
        this.router.navigate(['/menu']);
    }
    addToCart(item) {
      this.cartService.addToCart(item);
      alert(`${item.title} has been added to the cart!`);
    }
    submitOrder() {
      alert('Votre commande a été envoyée avec succès !');
      this.cartService.clearCart();
    }
}
