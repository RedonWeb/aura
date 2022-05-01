import { Component, OnInit } from '@angular/core';
import { Review } from './home.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  cards = [2, 3, 4, 5, 6].map((n) => '/assets/img/card(' + n + ').jpg');
  responsiveOptions: any;
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  ngOnInit(): void {
  }

  reviews: Review[] = [
    { review: 'This place has just entered the market and surely has come to leave a mark on the food industry market of doon.Be it ambience, food, service the plethora of things at offer the Rooftop for parties every thing shows how premium the place is.. Its my favourite place to visit and soon should be on everyone\'s list.', reviewBy: 'Navraj Jolly', profile: 'https://b.zmtcdn.com/data/user_profile_pictures/2c8/2c8256cab3c5f861235809c1c9cde2c8.jpg?fit=around%7C400%3A400&crop=400%3A400%3B%2A%2C%2A' },
    { review: 'Its a newly structured resturant at ballupur. Its has situated at very top floor and at tarrace too❤. Very well decorated with great stuff👌.We had lunch over here.A dum aloo kashmiri Daal handi Aloo raita Plain naan Ice cream. A full tummy food with yummy taste😍. Staffs are really polite and nice. Khana was also above average,aloo raita i loved the most.', reviewBy: 'Aishwarya Singh', profile: 'https://b.zmtcdn.com/data/user_profile_pictures/cff/8fecbff1ab6c376b82feae839f6f7cff.jpg?fit=around%7C400%3A400&crop=400%3A400%3B%2A%2C%2A' },
    { review: 'This is just an amazing place newly opened in dehadun. The ambience is just ravishing😍 The staff is very much friendly and the Owner is also very hospitable❤️. Saturday and Sunday they have live music as well. We ordered butter chicken masala that was tasted really good and the cold coffee was also nice. All the hookah lovers in town this is a place to go and have an awesome hookah with dual flavours in one 💕.', reviewBy: 'Shivangi Singh', profile: 'https://b.zmtcdn.com/data/user_profile_pictures/c8c/3dfd9acd04b96433808002a165246c8c.jpg?fit=around%7C400%3A400&crop=400%3A400%3B%2A%2C%2A' },
    { review: 'Had chicken wings and beer. Went there just spend an hour or two. We sat in the rooftop area. Since turquoise is my favorite colour, I liked the place as their seats were of that colour. Ambience is good, with music playing in d background. Overall a good experience.', reviewBy: 'Akankshya', profile: 'https://b.zmtcdn.com/data/user_profile_pictures/b0b/a2f8577e47d6c18f74af55ad7b9a4b0b.jpg?fit=around%7C400%3A400&crop=400%3A400%3B%2A%2C%2A' },
    { review: 'OMG ! It is such an amazing place. The ambience is simply wow. Great music. Delectable food. Awesome service. What else do you need !! Must must visit. We ordered Non Veg Platter, Pasta in white sauce, Spaghetti in red sauce and Sizzling Brownies with ice cream. Everything was yummy and the quantity they serve is more than sufficient.', reviewBy: 'Priyanka Roy', profile: 'https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A' },
  ]

}
