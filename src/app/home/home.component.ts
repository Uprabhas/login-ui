import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories: any
  fashion_products: any
  constructor() {
    this.categories = [
      {
        'name': 'Grocery',
        'image': "../../assets/grocery.webp",
      },
      {
        'name': 'Mobiles',
        'image': "../../assets/mobile.webp",
      }, {
        'name': 'fashion',
        'image': "../../assets/fashion.webp",
      }, {
        'name': 'electronics',
        'image': "../../assets/electronics.webp",
      }, {
        'name': 'home & appliances',
        'image': "../../assets/home.webp",
      }
      , {
        'name': 'beauty products',
        'image': "../../assets/beauty.webp",
      },
      // {
      //   'name': 'baby products',
      //   'image': "../../assets/baby.webp",
      // }
    ]

    this.fashion_products = [
      {
        'name': 'I feel like Pablo',
        'company': 'Yeezy',
        'available': 'S , M , L , XL',
        'price': '$120',
      },
      {
        'name': 'I feel like Pablo',
        'company': 'Zara',
        'available': 'S , M , L ',
        'price': '$80',
      },
      {
        'name': 'I feel like Pablo',
        'company': 'H&M',
        'available': 'M , L , XL',
        'price': '$100',
      },
      {
        'name': 'I feel like Pablo',
        'company': 'peter england',
        'available': 'S , M , L , XL',
        'price': '$120',
      },
      {
        'name': 'I feel like Pablo',
        'company': 'zudio',
        'available': 'S , M , L , XL',
        'price': '$160',
      },
    ]
  }

}
