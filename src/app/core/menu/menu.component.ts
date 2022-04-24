import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Category, Item } from './menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class MenuComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  nonAlcohol: string[] = ['Shakes', 'Juices', 'Energy Drinks', 'Aerated Drinks ', 'Mineral Water, Soda & F/L/S'];


  liquorLeft: Category[] = [
    {
      Title: 'Chilled Beer',
      Item: [
        { ItemName: 'Budweiser Magnum', ItemPrice: {PriceSmall: '₹448', PriceMedium: '₹298', PriceLarge: '₹548'}},
        { ItemName: 'Budweiser Premium', ItemPrice: {PriceSmall: '₹448', PriceMedium: '₹298', PriceLarge: '₹548'}},
        { ItemName: 'Tuborg', ItemPrice: {PriceSmall: '₹448', PriceMedium: '₹298', PriceLarge: '₹548'}},
        { ItemName: 'Cussburg', ItemPrice: {PriceSmall: '₹448', PriceMedium: '₹298', PriceLarge: '₹548'}},
        { ItemName: 'Corona', ItemDescription: 'Pint', ItemPrice: {PriceLarge: '₹498'}},
      ]
    },
    {
      Title: 'Vodka',
      Item: [
        { ItemName: 'Magic Moment', ItemPrice: {PriceMedium: '₹188', PriceLarge: '₹248'}},
        { ItemName: 'Absolut', ItemPrice: {PriceMedium: '₹398', PriceLarge: '₹698'}},
      ]
    },
    {
      Title: 'Gin',
      Item: [
        { ItemName: 'Bombay Saphire', ItemPrice: {PriceMedium: '₹428', PriceLarge: '₹748'}},
      ]
    },
    {
      Title: 'Tequila',
      Item: [
        { ItemName: 'Camino', ItemDescription: '30ml Shot', ItemPrice: {PriceMedium: '₹448'}},
      ]
    },
    {
      Title: 'Rum/Brandy',
      Item: [
        { ItemName: 'Bacardi White', ItemPrice: {PriceMedium: '₹198', PriceLarge: '₹348'}},
        { ItemName: 'Bacardi Black', ItemPrice: {PriceMedium: '₹198', PriceLarge: '₹348'}},
        { ItemName: 'Old Monk', ItemPrice: {PriceMedium: '₹168', PriceLarge: '₹298'}},
      ]
    },
    {
      Title: 'Shots (60ml)',
      Item: [
        { ItemName: 'Kamikaze', ItemDescription: 'Absolut', ItemPrice: {PriceLarge: '₹448'}},
        { ItemName: 'Fire Shot', ItemDescription: 'Absolut', ItemPrice: {PriceLarge: '₹448'}},
        { ItemName: 'Aura Special Shot', ItemDescription: 'Any Flavour', ItemPrice: {PriceLarge: '₹248'}},
        { ItemName: 'B-52', ItemDescription: 'Vodka, Baileys, Jagemeister', ItemPrice: {PriceLarge: '₹498'}},
      ]
    },
  ];
  liquorRight: Category[] = [
    {
      Title: 'Breezer',
      Item: [
        { ItemName: 'Any Flavours', ItemDescription: 'Pint', ItemPrice: {PriceLarge: '₹298'}},
      ]
    },
    {
      Title: 'Liqueurs',
      Item: [
        { ItemName: 'Baileys', ItemPrice: {PriceLarge: '₹698'}},
        { ItemName: 'Jagermeister', ItemPrice: {PriceLarge: '₹698'}},
        { ItemName: 'Cointreau', ItemPrice: {PriceLarge: '₹698'}},
      ]
    },
    {
      Title: 'Whisky',
      Item: [
        { ItemName: 'Blenders Pride', ItemPrice: {PriceMedium: '₹168', PriceLarge: '₹298'}},
        { ItemName: '100 Pipers', ItemPrice: {PriceMedium: '₹218', PriceLarge: '₹398'}},
        { ItemName: 'Black Dog', ItemPrice: {PriceMedium: '₹218', PriceLarge: '₹398'}},
        { ItemName: 'Teacher\'s 50', ItemPrice: {PriceMedium: '₹298', PriceLarge: '₹548'}},
        { ItemName: 'Ballentines', ItemPrice: {PriceMedium: '₹298', PriceLarge: '₹548'}},
        { ItemName: 'Red Label', ItemPrice: {PriceMedium: '₹298', PriceLarge: '₹548'}},
        { ItemName: 'Black Label', ItemPrice: {PriceMedium: '₹448', PriceLarge: '₹848'}},
        { ItemName: 'Chivas Regal', ItemDescription: '12 years', ItemPrice: {PriceMedium: '₹478', PriceLarge: '₹898'}},
        { ItemName: 'Glenlivit', ItemDescription: '12 years', ItemPrice: {PriceMedium: '₹498', PriceLarge: '₹949'}},
      ]
    },
    {
      Title: 'Wine',
      Item: [
        { ItemName: 'Sula', ItemDescription: 'Red/White', ItemPrice: {PriceMedium: '₹498', PriceLarge: '₹2498'}},
        { ItemName: 'Jacobs Creek', ItemDescription: 'Red', ItemPrice: {PriceMedium: '₹668', PriceLarge: '₹3498'}},
      ]
    }
  ];
  nonLiquor: Category[] = [
    {
      Title: 'Shakes',
      Item: [
        { ItemName: 'Chocolate Shake', ItemPrice: {PriceLarge: '₹240'}},
        { ItemName: 'Banana Shake', ItemPrice: {PriceLarge: '₹240'}},
      ]
    },
    {
      Title: 'Juices',
      Item: [
        { ItemName: 'Mix Juice', ItemPrice: {PriceLarge: '₹150'}},
        { ItemName: 'Litchi', ItemPrice: {PriceLarge: '₹150'}},
        { ItemName: 'Pineapple', ItemPrice: {PriceLarge: '₹150'}},
        { ItemName: 'Orange', ItemPrice: {PriceLarge: '₹150'}},
        { ItemName: 'Cranberry', ItemPrice: {PriceLarge: '₹150'}},
        { ItemName: 'Guava', ItemPrice: {PriceLarge: '₹150'}},
        { ItemName: 'Mango', ItemPrice: {PriceLarge: '₹150'}},
      ]
    },
    {
      Title: 'Energy Drinks',
      Item: [
        { ItemName: 'Red bull', ItemPrice: {PriceLarge: '₹300'}},
      ]
    },
    {
      Title: 'Aerated Drinks',
      Item: [
        { ItemName: 'Coca Cola', ItemDescription: 'Can', ItemPrice: {PriceLarge: '₹150'}},
        { ItemName: 'Diet Coke', ItemDescription: 'Can', ItemPrice: {PriceLarge: '₹150'}},
        { ItemName: 'Limca', ItemPrice: {PriceLarge: '₹100'}},
        { ItemName: 'Sprite', ItemPrice: {PriceLarge: '₹100'}},
        { ItemName: 'Fanta', ItemPrice: {PriceLarge: '₹100'}},
        { ItemName: 'Ginger Ale', ItemPrice: {PriceLarge: '₹200'}},
        { ItemName: 'Tonic Water', ItemPrice: {PriceLarge: '₹200'}},
      ]
    },
    {
      Title: 'Mineral Water, Soda & F/L/S',
      Item: [
        { ItemName: 'Fresh Lime Soda', ItemPrice: {PriceLarge: '₹150'}},
        { ItemName: 'Fresh Lime Water', ItemPrice: {PriceLarge: '₹150'}},
        { ItemName: 'Mineral Water', ItemPrice: {PriceLarge: '₹50'}},
        { ItemName: 'Soda', ItemPrice: {PriceLarge: '₹100'}},
        { ItemName: 'Tea', ItemPrice: {PriceLarge: '₹150'}},
        { ItemName: 'Coffee', ItemPrice: {PriceLarge: '₹150'}},
      ]
    }
  ];
  Mocktail: Item[] = [
    { ItemName: 'Blue Lagoon', ItemDescription: 'Blue Curacao, Lemon Juice, Top Up with Limca', ItemPrice: {PriceLarge: '₹200'}},
    { ItemName: 'Mint Lemonade', ItemDescription: 'Fresh Mint Leaves, Sugar Syrup, Lemon Juice, Crushed Ice', ItemPrice: {PriceLarge: '₹200'}},
    { ItemName: 'Fruit Punch', ItemDescription: 'Mixed fruit Juice, Milk, Vanilla Ice Cream, Strawberry Puree', ItemPrice: {PriceLarge: '₹230'}},
    { ItemName: 'Kiwi Punch' , ItemDescription: 'Kiwi Puree, Coconut Puree, Pineapple juice', ItemPrice: {PriceLarge: '₹250'}},
    { ItemName: 'Virgin Mojito', ItemDescription: 'Lemon Chunks, Fresh Mint, Brown Sugar, Mojito Syrup, Top Up with Lemonade', ItemPrice: {PriceLarge: '₹225'}},
    { ItemName: 'Pina Colada', ItemDescription: 'Pineapple, Juice, Coconut Milk, Strawberry/Kiwi', ItemPrice: {PriceLarge: '₹225'}},
    { ItemName: 'Guava Merry', ItemDescription: 'Guava Juice, Coriander, Tabasco, Salt, W Sauce', ItemPrice: {PriceLarge: '₹250'}},
    { ItemName: 'Amelia', ItemDescription: 'Cranberry Juice, Mint Leaves, Triple Sec, Raspberry Puree', ItemPrice: {PriceLarge: '₹250'}},
    { ItemName: 'Detox', ItemDescription: 'Cranberry Juice, Mint Leaves, Green Lime, Fresh Ginger', ItemPrice: {PriceLarge: '₹270'}},
    { ItemName: 'Virgin Sangria', ItemDescription: 'Cranberry Juice, Apple Juice, Sangria Syrup, Lemon Juice, Fresh Orange Chunks, Orange Juice', ItemPrice: {PriceLarge: '₹225'}},
    { ItemName: 'Italian Smotch', ItemDescription: 'Mint Leaves, Lemon Juice, Lemon Chunks, Ginger Ale, Lime Cordial, Top Up with Coke', ItemPrice: {PriceLarge: '₹225'}},
  ]

  Cocktail: Item[] = [
    { ItemName: 'Mojito', ItemDescription: 'White Rum/Absolut, Mint Leaves, Brown Sugar, Lime Juice', ItemPrice: {PriceMedium: '₹398', PriceLarge: '₹498'}},
    { ItemName: 'Whisky Sour', ItemDescription: 'Whisky, Lime Juice, Egg White', ItemPrice: {PriceLarge: '₹498'}},
    { ItemName: 'Lychee & Passion Fruit Martini', ItemDescription: 'Lychee & Passion Fruit Puree, Lime Juice, Vodka', ItemPrice: {PriceLarge: '₹498'}},
    { ItemName: 'Bloody Mary', ItemDescription: 'Vodka, Tomato Juice, Salt, Pepper, Tobacco Sauce', ItemPrice: {PriceLarge: '₹498'}},
    { ItemName: 'Aura Special Detox', ItemDescription: 'Vodka, Lime Juice, Cranberry Juice, Fresh Ginger & Mint', ItemPrice: {PriceLarge: '₹468'}},
    { ItemName: 'Green Apple Martini', ItemDescription: 'Vodka, Olive, Lime Juice, Green Apple Syrup', ItemPrice: {PriceLarge: '₹498'}},
    { ItemName: 'Pink Lady', ItemDescription: 'Gin, Fresh Cream, StrawBerry Puree', ItemPrice: {PriceLarge: '₹498'}},
    { ItemName: 'L.I.I.T', ItemDescription: 'Bacardi, Vodka, Tequila, Gin, Coke', ItemPrice: {PriceLarge: '₹698'}},
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
