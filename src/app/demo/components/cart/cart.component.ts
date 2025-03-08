import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { CartService } from 'src/app/demo/components/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  
  headerItems = [
    { name: 'Accueil', route: '/landing' },
    { name: 'Categories', route: '/landing', fragment: 'categories' },
    { name: 'Menu', route: '/landing', fragment: 'menu' },
    { name: 'Article', route: '/landing', fragment: 'article' },
    { name: 'Commande', route: '/landing', fragment: 'commande' }
  ];

  cartItems = [];
  
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

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

  removeFromCart(index) {
    this.cartService.removeFromCart(index);
  }
  //modifier
  proceedToCheckout() {
    this.router.navigate(['/ {orderSection.id}']);
  }
}
