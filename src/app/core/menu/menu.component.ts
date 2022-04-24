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
        { ItemName: 'Budweiser Magnum', ItemPrice: { Price2: '₹448', Price1: '₹298', Price3: '₹548' } },
        { ItemName: 'Budweiser Premium', ItemPrice: { Price2: '₹448', Price1: '₹298', Price3: '₹548' } },
        { ItemName: 'Tuborg', ItemPrice: { Price2: '₹448', Price1: '₹298', Price3: '₹548' } },
        { ItemName: 'Cussburg', ItemPrice: { Price2: '₹448', Price1: '₹298', Price3: '₹548' } },
        { ItemName: 'Corona', ItemDescription: 'Pint', ItemPrice: { Price3: '₹498' } },
      ]
    },
    {
      Title: 'Vodka',
      Item: [
        { ItemName: 'Magic Moment', ItemPrice: { Price2: '₹188', Price3: '₹248' } },
        { ItemName: 'Absolut', ItemPrice: { Price2: '₹398', Price3: '₹698' } },
      ]
    },
    {
      Title: 'Gin',
      Item: [
        { ItemName: 'Bombay Sapphire', ItemPrice: { Price2: '₹428', Price3: '₹748' } },
      ]
    },
    {
      Title: 'Tequila',
      Item: [
        { ItemName: 'Camino', ItemDescription: '30ml Shot', ItemPrice: { Price3: '₹448' } },
      ]
    },
    {
      Title: 'Rum/Brandy',
      Item: [
        { ItemName: 'Bacardi White', ItemPrice: { Price2: '₹198', Price3: '₹348' } },
        { ItemName: 'Bacardi Black', ItemPrice: { Price2: '₹198', Price3: '₹348' } },
        { ItemName: 'Old Monk', ItemPrice: { Price2: '₹168', Price3: '₹298' } },
      ]
    },
    {
      Title: 'Shots (60ml)',
      Item: [
        { ItemName: 'Kamikaze', ItemDescription: 'Absolut', ItemPrice: { Price3: '₹448' } },
        { ItemName: 'Fire Shot', ItemDescription: 'Absolut', ItemPrice: { Price3: '₹448' } },
        { ItemName: 'Aura Special Shot', ItemDescription: 'Any Flavour', ItemPrice: { Price3: '₹248' } },
        { ItemName: 'B-52', ItemDescription: 'Vodka, Baileys, Jagemeister', ItemPrice: { Price3: '₹498' } },
      ]
    },
  ];
  liquorRight: Category[] = [
    {
      Title: 'Breezer',
      Item: [
        { ItemName: 'Any Flavours', ItemDescription: 'Pint', ItemPrice: { Price3: '₹298' } },
      ]
    },
    {
      Title: 'Liqueurs',
      Item: [
        { ItemName: 'Baileys', ItemPrice: { Price3: '₹698' } },
        { ItemName: 'Jagermeister', ItemPrice: { Price3: '₹698' } },
        { ItemName: 'Cointreau', ItemPrice: { Price3: '₹698' } },
      ]
    },
    {
      Title: 'Whisky',
      Item: [
        { ItemName: 'Blenders Pride', ItemPrice: { Price2: '₹168', Price3: '₹298' } },
        { ItemName: '100 Pipers', ItemPrice: { Price2: '₹218', Price3: '₹398' } },
        { ItemName: 'Black Dog', ItemPrice: { Price2: '₹218', Price3: '₹398' } },
        { ItemName: 'Teacher\'s 50', ItemPrice: { Price2: '₹298', Price3: '₹548' } },
        { ItemName: 'Ballentines', ItemPrice: { Price2: '₹298', Price3: '₹548' } },
        { ItemName: 'Red Label', ItemPrice: { Price2: '₹298', Price3: '₹548' } },
        { ItemName: 'Black Label', ItemPrice: { Price2: '₹448', Price3: '₹848' } },
        { ItemName: 'Chivas Regal', ItemDescription: '12 years', ItemPrice: { Price2: '₹478', Price3: '₹898' } },
        { ItemName: 'Glenlivit', ItemDescription: '12 years', ItemPrice: { Price2: '₹498', Price3: '₹949' } },
      ]
    },
    {
      Title: 'Wine',
      Item: [
        { ItemName: 'Sula', ItemDescription: 'Red/White', ItemPrice: { Price2: '₹498', Price3: '₹2498' } },
        { ItemName: 'Jacobs Creek', ItemDescription: 'Red', ItemPrice: { Price2: '₹668', Price3: '₹3498' } },
      ]
    }
  ];
  nonLiquor: Category[] = [
    {
      Title: 'Shakes',
      Item: [
        { ItemName: 'Chocolate Shake', ItemPrice: { Price3: '₹240' } },
        { ItemName: 'Banana Shake', ItemPrice: { Price3: '₹240' } },
      ]
    },
    {
      Title: 'Juices',
      Item: [
        { ItemName: 'Mix Juice', ItemPrice: { Price3: '₹150' } },
        { ItemName: 'Litchi', ItemPrice: { Price3: '₹150' } },
        { ItemName: 'Pineapple', ItemPrice: { Price3: '₹150' } },
        { ItemName: 'Orange', ItemPrice: { Price3: '₹150' } },
        { ItemName: 'Cranberry', ItemPrice: { Price3: '₹150' } },
        { ItemName: 'Guava', ItemPrice: { Price3: '₹150' } },
        { ItemName: 'Mango', ItemPrice: { Price3: '₹150' } },
      ]
    },
    {
      Title: 'Energy Drinks',
      Item: [
        { ItemName: 'Red bull', ItemPrice: { Price3: '₹300' } },
      ]
    },
    {
      Title: 'Aerated Drinks',
      Item: [
        { ItemName: 'Coca Cola', ItemDescription: 'Can', ItemPrice: { Price3: '₹150' } },
        { ItemName: 'Diet Coke', ItemDescription: 'Can', ItemPrice: { Price3: '₹150' } },
        { ItemName: 'Limca', ItemPrice: { Price3: '₹100' } },
        { ItemName: 'Sprite', ItemPrice: { Price3: '₹100' } },
        { ItemName: 'Fanta', ItemPrice: { Price3: '₹100' } },
        { ItemName: 'Ginger Ale', ItemPrice: { Price3: '₹200' } },
        { ItemName: 'Tonic Water', ItemPrice: { Price3: '₹200' } },
      ]
    },
    {
      Title: 'Mineral Water, Soda & F/L/S',
      Item: [
        { ItemName: 'Fresh Lime Soda', ItemPrice: { Price3: '₹150' } },
        { ItemName: 'Fresh Lime Water', ItemPrice: { Price3: '₹150' } },
        { ItemName: 'Mineral Water', ItemPrice: { Price3: '₹50' } },
        { ItemName: 'Soda', ItemPrice: { Price3: '₹100' } },
        { ItemName: 'Tea', ItemPrice: { Price3: '₹150' } },
        { ItemName: 'Coffee', ItemPrice: { Price3: '₹150' } },
      ]
    }
  ];
  Mocktail: Item[] = [
    { ItemName: 'Blue Lagoon', ItemDescription: 'Blue Curacao, Lemon Juice, Top Up with Limca', ItemPrice: { Price3: '₹200' } },
    { ItemName: 'Mint Lemonade', ItemDescription: 'Fresh Mint Leaves, Sugar Syrup, Lemon Juice, Crushed Ice', ItemPrice: { Price3: '₹200' } },
    { ItemName: 'Fruit Punch', ItemDescription: 'Mixed fruit Juice, Milk, Vanilla Ice Cream, Strawberry Puree', ItemPrice: { Price3: '₹230' } },
    { ItemName: 'Kiwi Punch', ItemDescription: 'Kiwi Puree, Coconut Puree, Pineapple juice', ItemPrice: { Price3: '₹250' } },
    { ItemName: 'Virgin Mojito', ItemDescription: 'Lemon Chunks, Fresh Mint, Brown Sugar, Mojito Syrup, Top Up with Lemonade', ItemPrice: { Price3: '₹225' } },
    { ItemName: 'Pina Colada', ItemDescription: 'Pineapple, Juice, Coconut Milk, Strawberry/Kiwi', ItemPrice: { Price3: '₹225' } },
    { ItemName: 'Guava Merry', ItemDescription: 'Guava Juice, Coriander, Tabasco, Salt, W Sauce', ItemPrice: { Price3: '₹250' } },
    { ItemName: 'Amelia', ItemDescription: 'Cranberry Juice, Mint Leaves, Triple Sec, Raspberry Puree', ItemPrice: { Price3: '₹250' } },
    { ItemName: 'Detox', ItemDescription: 'Cranberry Juice, Mint Leaves, Green Lime, Fresh Ginger', ItemPrice: { Price3: '₹270' } },
    { ItemName: 'Virgin Sangria', ItemDescription: 'Cranberry Juice, Apple Juice, Sangria Syrup, Lemon Juice, Fresh Orange Chunks, Orange Juice', ItemPrice: { Price3: '₹225' } },
    { ItemName: 'Italian Smotch', ItemDescription: 'Mint Leaves, Lemon Juice, Lemon Chunks, Ginger Ale, Lime Cordial, Top Up with Coke', ItemPrice: { Price3: '₹225' } },
  ]

  Cocktail: Item[] = [
    { ItemName: 'Mojito', ItemDescription: 'White Rum/Absolut, Mint Leaves, Brown Sugar, Lime Juice', ItemPrice: { Price2: '₹398', Price3: '₹498' } },
    { ItemName: 'Whisky Sour', ItemDescription: 'Whisky, Lime Juice, Egg White', ItemPrice: { Price3: '₹498' } },
    { ItemName: 'Lychee & Passion Fruit Martini', ItemDescription: 'Lychee & Passion Fruit Puree, Lime Juice, Vodka', ItemPrice: { Price3: '₹498' } },
    { ItemName: 'Bloody Mary', ItemDescription: 'Vodka, Tomato Juice, Salt, Pepper, Tobacco Sauce', ItemPrice: { Price3: '₹498' } },
    { ItemName: 'Aura Special Detox', ItemDescription: 'Vodka, Lime Juice, Cranberry Juice, Fresh Ginger & Mint', ItemPrice: { Price3: '₹468' } },
    { ItemName: 'Green Apple Martini', ItemDescription: 'Vodka, Olive, Lime Juice, Green Apple Syrup', ItemPrice: { Price3: '₹498' } },
    { ItemName: 'Pink Lady', ItemDescription: 'Gin, Fresh Cream, StrawBerry Puree', ItemPrice: { Price3: '₹498' } },
    { ItemName: 'L.I.I.T', ItemDescription: 'Bacardi, Vodka, Tequila, Gin, Coke', ItemPrice: { Price3: '₹698' } },
  ]

  tandoor: Category[] = [
    {
      Title: 'Vegetarian',
      Item: [
        { ItemName: 'Stuffed Dahi Kebab', ItemDescription: 'Minced cottage cheese mixed with Indian spices & Stuffed with hangcurd', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Seekh Subz Bahar', ItemDescription: 'Fine mixtures of mixed vegetables with Indian spices put on seekh & cooked in tandoor', ItemPrice: { Price3: '₹388' } },
        { ItemName: 'Stuffed Tandoori Khumb', ItemDescription: 'Large fresh mushrooms stuffed & marinated in yogurt masala, cooked in clay oven', ItemPrice: { Price3: '₹388' } },
        { ItemName: 'Kurkure Veg', ItemDescription: 'Finely chopped bell pepper, cheese & Indian herbs rolled in a thin sheet & deep fried', ItemPrice: { Price3: '₹388' } },
        { ItemName: 'Bhutte ke Kebab', ItemDescription: 'Deep fried corn dumplings served with mint chutney', ItemPrice: { Price3: '₹388' } },
        { ItemName: 'Surkh Paneer Tikka (Hariyali/Malai/Classic)', ItemDescription: 'Tempting cubes of paneer soaked overnight in yogurt marination & roasted in clay oven', ItemPrice: { Price3: '₹448' } },
        { ItemName: 'Soya Chaap', ItemDescription: 'Soya chunks marinated with Indian spices & yogurt', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Veg Kebab Platter', ItemDescription: 'An assortment of vegetarian kebabs in a platter', ItemPrice: { Price3: '₹798' } },
        { ItemName: 'Aloo Nazakat', ItemDescription: 'Scooped potato filled with cheese & dry fruit soaked in yogurt marination & cooked in clay oven', ItemPrice: { Price3: '₹398' } },
      ]
    },
    {
      Title: 'Non Vegetarian',
      Item: [
        { ItemName: 'Tandoori Chicken (half)', ItemDescription: 'An all time Favorite', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Tandoori Chicken (full)', ItemDescription: 'An all time Favorite', ItemPrice: { Price3: '₹748' } },
        { ItemName: 'Murgh Tikka', ItemDescription: 'Diced chicken chunks marinated with yogurt & Indian spices, cooked in tandoor', ItemPrice: { Price3: '₹448' } },
        { ItemName: 'Chicken Chaap', ItemDescription: 'Chicken chaap marinated with red masala & Indian herbs,cooked in tandoor', ItemPrice: { Price3: '₹498' } },
        { ItemName: 'Tangri Kebab', ItemDescription: 'Chicken leg stuffed with cashewnut & minced chicken, cooked in tandoor', ItemPrice: { Price3: '₹498' } },
        { ItemName: 'Mutton Galouti Kebab', ItemDescription: 'Minced mutton flavoured with cloves & ghee in Indian spices, cooked in tandoor', ItemPrice: { Price3: '₹598' } },
        { ItemName: 'Jugalbandi Seekh Kebab', ItemDescription: 'Mutton and chicken combination seekh marinated with Indian herbs, cooked in tandoor', ItemPrice: { Price3: '₹628' } },
        { ItemName: 'Mutton Seekh', ItemDescription: 'A traditional Seekh of minced mutton flavored with Indian masala, cooked in tandoor', ItemPrice: { Price3: '₹598' } },
        { ItemName: 'Fish Amritsari', ItemDescription: 'Basa fish marinated with traditional Indian masala, cooked in tandoor', ItemPrice: { Price3: '₹548' } },
        { ItemName: 'Lahsooni Fish Tikka', ItemDescription: 'Sole fish paired with classic Indian spices & herbs that complement this sole, cooked in clay oven', ItemPrice: { Price3: '₹648' } },
        { ItemName: 'Tandoori Jhinga', ItemDescription: 'Prawns marinated in red masala & served hot with mint chutney, cooked in tandoor', ItemPrice: { Price3: '₹828' } },
        { ItemName: 'Chicken Barrah Kebab', ItemDescription: 'Chicken marinated with hang curd & Indian spices, cooked in tandoor', ItemPrice: { Price3: '₹448' } },
        { ItemName: 'Non-Veg Kebab Platter', ItemDescription: 'Assorted non-vegetarian kebabs in a platter, cooked in tandoor', ItemPrice: { Price3: '₹898' } },
      ]
    },
  ]

  indian: Category[] = [
    {
      Title: 'Vegetarian',
      Item: [
        { ItemName: 'Malai Kofta', ItemDescription: 'A traditional combination of cottage cheese filled with khoya & raisins cooked in cashewnut gravy', ItemPrice: { Price3: '₹388' } },
        { ItemName: 'Paneer Makhani', ItemDescription: 'cottage cheese batons simmerd in creamy tomato gravy, enriched with butter & flavoured with kasoori methi', ItemPrice: { Price3: '₹448' } },
        { ItemName: 'Sabj Jaipuri', ItemDescription: 'Mixed Vegetables cooked with crushed fried papad, served with Indian gravy', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Matar Methi Malai (Seasonal)', ItemDescription: 'Green peas cooked in cashewnut gravy, flavoured with fresh methi', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Shahi Paneer', ItemDescription: 'An authentic mughlai cottage cheese preparation enriched with cashewnut & magaz based marination', ItemPrice: { Price3: '₹598' } },
        { ItemName: 'Kadhai Paneer', ItemDescription: 'Diced paneer stir fried with bell pepper,onion,tomato,ascented with coriander seeds & freshly ground black peppe', ItemPrice: { Price3: '₹498' } },
        { ItemName: 'Paneer Lababdar', ItemDescription: 'A soft paneer prepartion cooked in tomato gravy with chopped capsicum', ItemPrice: { Price3: '₹548' } },
        { ItemName: 'Dum Aloo Kashmiri', ItemDescription: 'Small scooped potato stuffed with cottage cheese,dry fruits,cooked in tomato gravy with fragrance of aniseed', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Veg Jalfrezi', ItemDescription: 'Diced mixed vegetables cooked in sweet & sour gravy', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Khumb Matar', ItemDescription: 'Fresh mushrooms cooked in tomato gravy, peas & Flavoured in Indian spices', ItemPrice: { Price3: '₹448' } },
        { ItemName: 'Paneer Changez', ItemDescription: 'Cubes of bell pepper cooked with cottage cheese and Indian spices', ItemPrice: { Price3: '₹598' } },
        { ItemName: 'Soya Chaap Masala', ItemDescription: 'Soya chunks cooked in chooped masala with Indian herbs', ItemPrice: { Price3: '₹418' } },
        { ItemName: 'Patiyala Vegetable', ItemDescription: 'It\'s an all time favorite spicy cuisine in patiyala style', ItemPrice: { Price3: '₹388' } },
        { ItemName: 'Veg Kolhapuri', ItemDescription: 'Cubes of vegetable and cottage cheese cooked in red spicy gravy, served with red chilli', ItemPrice: { Price3: '₹388' } },
      ]
    },
    {
      Title: 'Dal',
      Item: [
        { ItemName: 'Dal Tadka', ItemDescription: 'Yellow dal cooked with perfection by the chef', ItemPrice: { Price3: '₹308' } },
        { ItemName: 'Dal Makhani', ItemDescription: 'An all time favorite', ItemPrice: { Price3: '₹388' } },
        { ItemName: 'Dal Panchratan', ItemDescription: 'Five types of dal cooked in Indian spices', ItemPrice: { Price3: '₹388' } },
        { ItemName: 'Dal Handi', ItemPrice: { Price3: '₹388' } },
      ]
    },
    {
      Title: 'Non Vegetarian',
      Item: [
        { ItemName: 'Aura Special Chicken Curry', ItemDescription: 'An authentic preparation by house of Aura Kitchen', ItemPrice: { Price3: '₹448' } },
        { ItemName: 'Murgh Saagwal (Seasonal)', ItemDescription: 'Boneless chicken cooked in sarson leaf paste', ItemPrice: { Price3: '₹448' } },
        { ItemName: 'Butter Chicken (half)', ItemDescription: 'An all time favorite', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Butter Chicken (full)', ItemDescription: 'An all time favorite', ItemPrice: { Price3: '₹798' } },
        { ItemName: 'Chicken Patiyala', ItemDescription: 'Boneless Strips of chicken & bell pepper cooked with Indian spices & wrapped in thin omelette pieces, served with punjabi style gravy', ItemPrice: { Price3: '₹498' } },
        { ItemName: 'Kadhai Chicken', ItemDescription: 'Chicken cooked with onion, tomato, bell peppers in Indian gravy, flavored with red chilli', ItemPrice: { Price3: '₹648' } },
        { ItemName: 'Mutton Rara', ItemDescription: 'Minced Mutton cooked with mutton pieces in Indian spices', ItemPrice: { Price3: '₹468' } },
        { ItemName: 'Chicken Rara', ItemDescription: 'Minced Chicken cooked with chicken pieces in Indian spices', ItemPrice: { Price3: '₹598' } },
        { ItemName: 'Mutton Rogan Josh', ItemDescription: 'Mutton cooked in tomato gravy flavored with garlic & whole garam masala', ItemPrice: { Price3: '₹498' } },
        { ItemName: 'Chicken Kolhapuri', ItemDescription: 'Cubes of chicken cooked in red spicy gravy, served with red chilli', ItemPrice: { Price3: '₹598' } },
        { ItemName: 'Chicken Dumpukht', ItemDescription: 'Cubes of chicken marinated with yogurt & Indian herbs, cooked in onion and cashew gravy', ItemPrice: { Price3: '₹628' } },
        { ItemName: 'Mutton Korma', ItemDescription: 'Soft & mild mutton chunks cooked in cashewnut gravy', ItemPrice: { Price3: '₹388' } },
        { ItemName: 'Egg Curry or Masala', ItemDescription: 'Boiled eggs cooked in rich onion & tomato gravy', ItemPrice: { Price3: '₹278' } },
        { ItemName: 'Goan Fish Curry', ItemDescription: 'Tangy fish curry cooked with coconut milk, peprika, mustard seeds', ItemPrice: { Price3: '₹798' } },
      ]
    },
    {
      Title: 'Assorted Breads',
      Item: [
        { ItemName: 'Plain Naan', ItemPrice: { Price3: '₹68' } },
        { ItemName: 'Butter Naan', ItemPrice: { Price3: '₹78' } },
        { ItemName: 'Garlic Naan', ItemPrice: { Price3: '₹88' } },
        { ItemName: 'Missi Roti', ItemPrice: { Price3: '₹78' } },
        { ItemName: 'Tandoori Roti/Butter Roti', ItemPrice: { Price3: '₹48' } },
        { ItemName: 'Stuffed Kulcha (Aloo/Paneer)', ItemPrice: { Price3: '₹98' } },
        { ItemName: 'Amritsari Kulcha', ItemPrice: { Price3: '₹98' } },
        { ItemName: 'Tawa Roti', ItemPrice: { Price3: '₹38' } },
        { ItemName: 'Keema Naan', ItemPrice: { Price3: '₹128' } },
        { ItemName: 'Assorted Bread Basket', ItemDescription: '(Missi Roti, Stuffed Kulcha, Tandoori Roti, Laccha Parantha, Naan)', ItemPrice: { Price3: '₹288' } },
        { ItemName: 'Lachcha/Pudina Parantha', ItemPrice: { Price3: '₹78' } },
      ]
    },
    {
      Title: 'Rice',
      Item: [
        { ItemName: 'Plain Rice', ItemPrice: { Price3: '₹168' } },
        { ItemName: 'Jeera Rice', ItemPrice: { Price3: '₹188' } },
        { ItemName: 'Peas & Cheese Pulav', ItemPrice: { Price3: '₹298' } },
      ]
    },
    {
      Title: 'Biryani',
      Item: [
        { ItemName: 'Hyderabadi Dum Biryani(Matke Wali - Veg)', ItemDescription: 'Biryani Dum cooked and served in handi', ItemPrice: { Price3: '₹498' } },
        { ItemName: 'Hyderabadi Dum Biryani(Matke Wali - Chicken)', ItemDescription: 'Biryani Dum cooked and served in handi', ItemPrice: { Price3: '₹598' } },
        { ItemName: 'Hyderabadi Dum Biryani(Matke Wali - Mutton)', ItemDescription: 'Biryani Dum cooked and served in handi', ItemPrice: { Price3: '₹698' } },
        { ItemName: 'Veg Biryani', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Chicken Biryani', ItemPrice: { Price3: '₹498' } },
        { ItemName: 'Mutton Biryani', ItemPrice: { Price3: '₹598' } },
      ]
    },
    {
      Title: 'Raita',
      Item: [
        { ItemName: 'Aloo', ItemPrice: { Price3: '₹128' } },
        { ItemName: 'Boondi', ItemPrice: { Price3: '₹148' } },
        { ItemName: 'Mix', ItemPrice: { Price3: '₹168' } },
        { ItemName: 'Pineapple', ItemPrice: { Price3: '₹188' } },
      ]
    },
  ]
  chinese: Category[] = [
    {
      Title: 'Soups',
      Item: [
        { ItemName: 'Hot & Sour - Veg', ItemPrice: { Price3: '₹188' } },
        { ItemName: 'Hot & Sour - Non Veg', ItemPrice: { Price3: '₹218' } },
        { ItemName: 'Sweet Corn - Veg', ItemPrice: { Price3: '₹178' } },
        { ItemName: 'Sweet Corn - Non Veg', ItemPrice: { Price3: '₹198' } },
        { ItemName: 'Lung Fung - Veg', ItemPrice: { Price3: '₹178' } },
        { ItemName: 'Lung Fung - Non Veg', ItemPrice: { Price3: '₹208' } },
        { ItemName: 'Manchow - Veg', ItemPrice: { Price3: '₹168' } },
        { ItemName: 'Manchow - Non Veg', ItemPrice: { Price3: '₹188' } },
        { ItemName: 'Tom Yum - Veg', ItemPrice: { Price3: '₹188' } },
        { ItemName: 'Tom Yum - Non Veg', ItemPrice: { Price3: '₹218' } },
        { ItemName: 'Lemon Coriander - Veg', ItemPrice: { Price3: '₹178' } },
        { ItemName: 'Lemon Coriander - Non Veg', ItemPrice: { Price3: '₹208' } },
      ]
    },
    {
      Title: 'Veg Staters',
      Item: [
        { ItemName: 'Crispy Corn', ItemDescription: 'Deep fried corns tossed with chopped ginger, garlic onion & topped with chopped bell peppers', ItemPrice: { Price3: '₹188' } },
        { ItemName: 'Veg Manchurian', ItemDescription: 'Assorted vegetable balls deep fried & tossed in chinese spices', ItemPrice: { Price3: '₹188' } },
        { ItemName: 'Veg Dim Sum', ItemDescription: 'Finely chopped vegetables & cottage cheese, ginger, garlic, cooked in seasame oil & stuffed in refined flour sheets', ItemPrice: { Price3: '₹188' } },
        { ItemName: 'Veg Spring Roll', ItemPrice: { Price3: '₹188' } },
        { ItemName: 'Crispy Honey Chilli Potato', ItemDescription: 'Potatao Fingers tossed in honey chilli sauce', ItemPrice: { Price3: '₹188' } },
        { ItemName: 'Chilli Paneer', ItemDescription: 'Diced cottage cheese in bell pepper & onion with chilli hot garlic sauce', ItemPrice: { Price3: '₹188' } },
        { ItemName: 'Veg Salt & Pepper', ItemDescription: 'Assorted vegetables tossed with chopped onion, salt & pepper', ItemPrice: { Price3: '₹188' } },
        { ItemName: 'French Fries', ItemPrice: { Price3: '₹188' } },
      ]
    },
    {
      Title: 'Non-Veg Staters',
      Item: [
        { ItemName: 'Chilli Chicken', ItemDescription: 'Diced chicken, bell pepper, onion tossed in hot garlic sauce', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Chicken Manchurian', ItemDescription: 'Chicken mince balls deep fried & tossed in chinese spices', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Chicken Lolipop', ItemDescription: 'Chicken wings fried & tossed in hot garlic sauce with chinese flavors', ItemPrice: { Price3: '₹390' } },
        { ItemName: 'Chicken Dim Sum', ItemDescription: 'Minced chicken with finely chopped ginger, garlic cooked in seasame oil stuffed in refined flour sheets', ItemPrice: { Price3: '₹348' } },
        { ItemName: 'Chicken 65', ItemDescription: 'Chicken chunks cooked in coconut cream & south Indian assorted herbs', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Prawn Salt & Pepper', ItemDescription: 'Prawns tossed with chopped onion, salt & peppers', ItemPrice: { Price3: '₹498' } },
      ]
    },
    {
      Title: 'Sizzlers',
      Item: [
        { ItemName: 'Veg Chinese Sizzler', ItemDescription: 'Veg fried rice, chilli paneer in semi thick gravy on a hot sizzling plate', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Non-Veg Chinese Sizzler', ItemDescription: 'Chicken fried rice, chilli paneer in semi thick gravy on a hot sizzling plate', ItemPrice: { Price3: '₹498' } },
      ]
    },
    {
      Title: 'Main Course',
      Item: [
        { ItemName: 'Veg Manchurian Gravy', ItemDescription: 'Deep fried vegetables balls in soya sauce based gravy', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Exotic Vegetables in Hot Garlic Sauce', ItemDescription: 'Assorted vegetable in hot garlic sauce', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Thai Green Curry - Veg', ItemPrice: { Price3: '₹368' } },
        { ItemName: 'Thai Green Curry - Non Veg', ItemPrice: { Price3: '₹468' } },
        { ItemName: 'Thai Red Curry - Veg', ItemPrice: { Price3: '₹368' } },
        { ItemName: 'Thai Red Curry - Non Veg', ItemPrice: { Price3: '₹468' } },
        { ItemName: 'Veg Hakka Noodles', ItemDescription: 'Noodles tossed in garlic & Vegetables', ItemPrice: { Price3: '₹268' } },
        { ItemName: 'Veg Chowmein', ItemDescription: 'Noodles in desi style, sweet & spicy in taste', ItemPrice: { Price3: '₹278' } },
        { ItemName: 'Chilli Paneer Gravy', ItemDescription: 'Paneer chunks with assorted pepper, tossed in hot garlic sauc', ItemPrice: { Price3: '₹388' } },
        { ItemName: 'Veg Fried Rice', ItemPrice: { Price3: '₹268' } },
        { ItemName: 'Chilli Garlic Fried Rice', ItemPrice: { Price3: '₹298' } },
        { ItemName: 'Chilli Chicken Gravy', ItemDescription: 'Deep fried chicken in hot garlic sauce', ItemPrice: { Price3: '₹448' } },
        { ItemName: 'Schezwan Chicken', ItemDescription: 'Spicy gravy with schezwan sauce inside diced chicken', ItemPrice: { Price3: '₹498' } },
        { ItemName: 'Chicken Manchurian Gravy', ItemDescription: 'Chicken dumplings in soya sauce based gravy', ItemPrice: { Price3: '₹448' } },
        { ItemName: 'Kung Pao Chicken', ItemDescription: 'An, stir-fried chinese preparation, with boneless chicken, vegetable, dry nuts, chilli peppers', ItemPrice: { Price3: '₹448' } },
        { ItemName: 'Prawn Manchurian Gravy', ItemDescription: 'Batter fried golden prawns cooked in spicy manchurian style sauce', ItemPrice: { Price3: '₹598' } },
      ]
    },
  ]
  continental: Category[] = [
    {
      Title: 'Soup',
      Item: [
        { ItemName: 'Cream of Tomato', ItemPrice: { Price3: '₹188' } },
        { ItemName: 'Roasted Tomato Soup', ItemPrice: { Price3: '₹188' } },
        { ItemName: 'Wild Mushroom Soup', ItemPrice: { Price3: '₹198' } },
        { ItemName: 'Veg Clear Broth', ItemPrice: { Price3: '₹148' } },
      ]
    },
    {
      Title: 'Salad',
      Item: [
        { ItemName: 'Green Salad', ItemPrice: { Price3: '₹149' } },
        { ItemName: 'Caesaer Salad (Veg)', ItemPrice: { Price3: '₹248' } },
        { ItemName: 'Caesaer Salad (Non-Veg)', ItemPrice: { Price3: '₹348' } },
        { ItemName: 'Grilled Salad (Veg)', ItemPrice: { Price3: '₹298' } },
        { ItemName: 'Grilled Salad (Non-Veg)', ItemPrice: { Price3: '₹398' } },
        { ItemName: 'Chicken Salad in Cocktail Sauce & Cheese Stick', ItemDescription: '3 Olives and Cheese with sprinkled masala', ItemPrice: { Price3: '₹348' } },
      ]
    },
    {
      Title: 'Starter',
      Item: [
        { ItemName: 'Pasta (Penne)', ItemDescription: 'Choose your own sauce', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Pasta (Spaghetti)', ItemDescription: 'Choose your own sauce', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Arrabiata (Veg)', ItemPrice: { Price3: '' } },
        { ItemName: 'Arrabiata (Non-Veg)', ItemPrice: { Price3: '' } },
        { ItemName: 'Al-Pesto', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Afredo (Veg)', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Alfredo (Non-Veg)', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Garlic Bread with Cheese', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Nachos Grande', ItemDescription: 'Served with salsa and sour cream', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Beer Battard Fish', ItemDescription: 'Basa fish marinated with beer and western herbs , deep fried, served with tartar sauce', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Poutine (Veg)', ItemDescription: 'Crispy french fries topped with BBQ sauce,sour cream and gratinated with cheese', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Poutine (Non-Veg)', ItemDescription: 'Crispy french fries topped with BBQ sauce,sour cream and gratinated with cheese', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Chicken Finger with Chilly Mayo', ItemDescription: 'Chicken breast fingers coated with panko crumb & served with chilly mayo', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Chicken Wings', ItemDescription: 'Chicken wings tossed in bbq sauce', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Fish Finger with Tartar Sauce', ItemDescription: 'Basa fingers coated with panko crumb, coated and served with tartar sauce', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Crispy Fried Prawns with Mexican Salsa', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Hummus with Pitta Bread', ItemDescription: 'Authentic middle eastern starter', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Mexican Crispy Fried Chicken', ItemDescription: 'Crunchy shred pieces of mexican chicken served with mexican salsa', ItemPrice: { Price3: '₹' } },
        { ItemName: 'Stuffed Parmesan Chicken', ItemDescription: 'Cubes of chicken stuffed with paresan cheese and deep fried', ItemPrice: { Price3: '₹' } },
      ]
    },
    {
      Title: 'Main Course',
      Item: [
        { ItemName: 'Grilled Chicken with Rosemary Red Wine Sauce or Brown Sauce', ItemDescription: 'Served with mashed potato & saue vegetable', ItemPrice: { Price3: '₹798' } },
        { ItemName: 'Chicken Sttroganoff with Passley RIce', ItemPrice: { Price3: '₹498' } },
        { ItemName: 'Grilled Fish with Lemon Butter Sauce', ItemDescription: 'Served with mashed potato and saute vegetables', ItemPrice: { Price3: '₹598' } },
        { ItemName: 'Grilled Cottage Cheese Steak with BBQ Sauce', ItemPrice: { Price3: '₹498' } },
        { ItemName: 'Fish and Chips', ItemDescription: 'served with starter sauce and loaded with french fries', ItemPrice: { Price3: '₹598' } },
        { ItemName: 'Chicken Florentine', ItemDescription: 'Marinated chicken strips served on the bed of sauted mushrooms and creamy white sauce and baked', ItemPrice: { Price3: '₹448' } },
        { ItemName: 'Cannaloni', ItemDescription: 'Cannaloni(Pasta) stuffed with spinach and cheese covered with white sauce and baked', ItemPrice: { Price3: '₹498' } },
      ]
    },
    {
      Title: 'Dessert',
      Item: [
        { ItemName: 'Ice Cream Flavor with Price 2 Qty', ItemPrice: { Price3: '₹148' } },
        { ItemName: 'Sizzle Dazzle Brownie', ItemPrice: { Price3: '₹328' } },
        { ItemName: 'Tuti Frutti Ice Cream', ItemPrice: { Price3: '₹148' } },
        { ItemName: 'Gulab Jamun with Ice Cream', ItemPrice: { Price3: '₹148' } },
        { ItemName: 'Banana Split', ItemDescription: 'An assortments of ice cream, dry nuts, chocolate sauce served on the bed of banana', ItemPrice: { Price3: '₹210' } },
      ]
    },
  ]
  kidsCorner: Item[] = [
    { ItemName: 'Spider Web', ItemDescription: 'Mini portion of spaghetti in red sauce', ItemPrice: { Price3: '₹188' } },
    { ItemName: 'Chicken Nuggets', ItemDescription: 'Crispy chicken nuggets served with french fries', ItemPrice: { Price3: '₹228' } },
    { ItemName: 'Grilled Cottage Cheese Steak', ItemDescription: 'Crispy chicken nuggets served with french friesMini cheese steak with french fries', ItemPrice: { Price3: '₹228' } },
    { ItemName: 'Steamed Corn with Tomato Salsa', ItemDescription: 'Steamed sweet & sour American sweet corn with french fries', ItemPrice: { Price3: '₹198' } },
    { ItemName: 'Mini Portion Veg Pasta', ItemDescription: 'Mini portion of veg penne pasta with choice of sauce', ItemPrice: { Price3: '₹218' } },
    { ItemName: 'French Fries (Kids Portion)', ItemDescription: 'Crispy french fries served with tomato ketchup', ItemPrice: { Price3: '₹138' } },
  ]


  constructor() { }

  ngOnInit(): void {
  }
}
