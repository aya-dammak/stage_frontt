import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { CartService } from 'src/app/demo/components/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  
  headerItems = [
    { name: 'Accueil', route: '/landing' },
    { name: 'Categories', route: '/landing', fragment: 'categories' },
    { name: 'Menu', route: '/landing', fragment: 'menu' },
    { name: 'Article', route: '/landing', fragment: 'article' },
    { name: 'Commande', route: '/landing', fragment: 'commande' }
  ];

  menuItems = [
    {
      image: 'pizza_margaritta.jpg',
      alt: 'Pizza Margaritta',
      title: 'Pizza Margaritta',
      backgroundColor: 'rgba(255, 207, 161, 0.2)',
      price: '12dt',
      category: 'Pizza'
    },
    {
      image: 'Pizza_Végétarienne.jpg',
      alt: 'Pizza Végétarienne',
      title: 'Pizza Végétarienne',
      backgroundColor: 'rgba(160, 237, 145, 0.2)',
      price: '14dt',
      category: 'Pizza'
    },
    {
      image: 'Pizza_Thon.jpg',
      alt: 'Pizza Thon',
      title: 'Pizza Thon',
      backgroundColor: 'rgba(255, 207, 161, 0.2)',
      price: '17dt',
      category: 'Pizza'
    },
    {
      image: 'Pizza_Pepperoni.jpg',
      alt: 'Pizza Pepperoni',
      title: 'Pizza Pepperoni',
      backgroundColor: 'rgba(160, 237, 145, 0.2)',
      price: '18dt',
      category: 'Pizza'
    },
    {
      image: 'Pizza_ViandeHaché.jpg',
      alt: 'Pizza Viande Haché',
      title: 'Pizza Viande Haché',
      backgroundColor: 'rgba(255, 207, 161, 0.2)',
      price: '18dt',
      category: 'Pizza'
    },
    {
      image: 'Pizza_4Fromages.jpg',
      alt: 'Pizza 4Fromages',
      title: 'Pizza 4Fromages',
      backgroundColor: 'rgba(160, 237, 145, 0.2)',
      price: '19dt',
      category: 'Pizza'
    },
    /*
    {
      image: 'panozzo.webp',
      alt: 'Panozzo Mexican',
      title: 'Panozzo Mexican',
      backgroundColor: 'rgba(255, 207, 161, 0.2)',
      price: '14dt',
      category: 'Panozzo'
    },
    {
      image: 'panozzo.webp',
      alt: 'Panozzo Grillée',
      title: 'Panozzo Grillée',
      backgroundColor: 'rgba(160, 237, 145, 0.2)',
      price: '12dt',
      category: 'Panozzo'
    },
    {
      image: 'panozzo.webp',
      alt: 'Panozzo Crispy',
      title: 'Panozzo Crispy',
      backgroundColor: 'rgba(255, 207, 161, 0.2)',
      price: '12dt',
      category: 'Panozzo'
    },
    {
      image: 'panozzo.webp',
      alt: 'Panozzo Crevette Panée',
      title: 'Panozzo Crevette Panée',
      backgroundColor: 'rgba(160, 237, 145, 0.2)',
      price: '14dt',
      category: 'Panozzo'
    },*/
    {
      image: 'Salade_Végéterienne.jpg',
      alt: 'Salade Végéterienner',
      title: 'Salade Végéterienne',
      backgroundColor: 'rgba(255, 207, 161, 0.2)',
      price: '8dt',
      category: 'Salades'
    },
    {
      image: 'salade mechouia.jpg',
      alt: 'Salade_mechouia',
      title: 'Salade Mechouia',
      backgroundColor: 'rgba(160, 237, 145, 0.2)',
      price: '10dt',
      category: 'Salades'
    },
    {
      image: 'salade cesar.jpg',
      alt: 'Salade Cesar',
      title:'Salade Cesar',
      backgroundColor: 'rgba(255, 207, 161, 0.2)',
      price: '14dt',
      category: 'Salades'
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
      image: 'Salade_FruitDeMer.jpg',
      alt: 'Salade Fruit De Mer',
      title: 'Salade Fruit De Mer',
      backgroundColor: 'rgba(255, 207, 161, 0.2)',
      price: '22dt',
      category: 'Salades'
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
      image: 'Pasta_Alfredo.jpg',
      alt: 'Pasta Alfredo',
      title: 'Pasta Alfredo',
      backgroundColor: 'rgba(255, 207, 161, 0.2)',
      price: '18dt',
      category: 'Pasta'
    },
    {
      image: 'Pasta_FruitDeMer.jpg',
      alt: 'Pasta Fruit De Mer',
      title: 'Pasta Fruit De Mer',
      backgroundColor: 'rgba(160, 237, 145, 0.2)',
      price: '27dt',
      category: 'Pasta'
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
      image: 'Cordon_Bleu.jpg',
      alt: 'Cordon Bleu',
      title: 'Cordon Bleu',
      backgroundColor: 'rgba(160, 237, 145, 0.2)',
      price: '15dt',
      category: 'Plat'
    },
    {
      image: 'poisson.jpg',
      alt: 'Poisson',
      title: 'Poisson Grillé',
      backgroundColor: 'rgba(255, 207, 161, 0.2)',
      price: '19dt',
      category: 'Plat'
    }
  ];

  menuCategories = ['All', 'Pizza', 'Salades'/*, /*'Panozzo'*/, 'Pasta', 'Plat'];
  selectedCategory: string = 'All';

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

  getImagePath(image: string): string {
    return `assets/demo/images/landing/${image}`;
  }
  getRouterLink(item: any) {
    return item.fragment ? [item.route, { fragment: item.fragment }] : [item.route];
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  getFilteredMenuItems(): any[] {
    if (this.selectedCategory === 'All') {
      return this.menuItems;
    } else {
      return this.menuItems.filter(item => item.category === this.selectedCategory);
    }
  }
   //modifier
  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  // Add the function
  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}
