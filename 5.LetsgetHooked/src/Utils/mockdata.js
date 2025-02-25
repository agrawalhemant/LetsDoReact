const restList = [
  {
    brand_id: 20,
    banner_image_es:
      'https://product-assets.faasos.io/eatsure_cms/production/ff45eb24-ff5d-49d5-8652-7f90aaee28f5.jpg',
    brand_name: 'Faasos',
    description: 'Indulgent wraps with high protein',
    rating: 4.2,
    main_offering: ['Wraps', 'Rolls'],
  },
  {
    brand_id: 21,
    banner_image_es:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/2048px-Dominos_pizza_logo.svg.png',
    brand_name: 'Dominos',
    description: 'Delicious pizzas with a lot toppings',
    rating: 4.6,
    main_offering: ['Pizza', 'Tacos'],
  },
  {
    brand_id: 22,
    banner_image_es:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/877px-McDonald%27s_Golden_Arches.svg.png',
    brand_name: 'McDonalds',
    description: 'Tasty Burgers and fries',
    rating: 4.9,
    main_offering: ['Fries', 'Wraps', 'Burgers'],
  },
  {
    brand_id: 23,
    banner_image_es:
      'https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/450px-KFC_logo.svg.png?20170615210441',
    brand_name: 'KFC',
    description: 'Crispy fried chicken and sides',
    rating: 3.6,
    main_offering: ['Chicken', 'Sides'],
  },
  {
    brand_id: 24,
    banner_image_es:
      'https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/2177px-Pizza_Hut_logo.svg.png',
    brand_name: 'Pizza Hut',
    description: 'Classic pizzas and pasta',
    rating: 4.3,
    main_offering: ['Pizza', 'Pasta'],
  },
  {
    brand_id: 25,
    banner_image_es:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzw451gda4CtAYJt-GcPeWdr1mrUH3pLwzPQ&s',
    brand_name: 'Subway',
    description: 'Customizable sandwiches and salads',
    rating: 4.1,
    main_offering: ['Sandwiches', 'Salads'],
  },
  {
    brand_id: 26,
    banner_image_es:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaE_cFiBwD4eqFgdwlnSOakyQ7oPfgA7UNw&s',
    brand_name: 'Starbucks',
    description: 'Coffee, pastries and more',
    rating: 4.7,
    main_offering: ['Coffee', 'Pastries'],
  },
  {
    brand_id: 27,
    banner_image_es:
      'https://static.cdnlogo.com/logos/b/90/burger-king-4199.svg',
    brand_name: 'Burger King',
    description: 'Flame-grilled burgers and sides',
    rating: 4.0,
    main_offering: ['Burgers', 'Fries'],
  },
  {
    brand_id: 28,
    banner_image_es: 'https://cdnlogo.com/logos/t/10/taco-bell.svg',
    brand_name: 'Taco Bell',
    description: 'Tacos, burritos and nachos',
    rating: 3.8,
    main_offering: ['Tacos', 'Burritos', 'Nachos'],
  },
  {
    brand_id: 29,
    banner_image_es: 'https://cdnlogo.com/logos/f/6/five-guys-burgers.svg',
    brand_name: 'Five Guys',
    description: 'Juicy burgers and fresh fries',
    rating: 4.4,
    main_offering: ['Burgers', 'Fries'],
  },
  {
    brand_id: 30,
    banner_image_es:
      'https://cdnlogo.com/logos/c/47/chipotle-mexican-grill.svg',
    brand_name: 'Chipotle',
    description: 'Mexican food with fresh ingredients',
    rating: 4.3,
    main_offering: ['Burritos', 'Bowls'],
  },
  {
    brand_id: 31,
    banner_image_es:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Shake_Shack_logo.svg/2560px-Shake_Shack_logo.svg.png',
    brand_name: 'Shake Shack',
    description: 'Gourmet burgers and shakes',
    rating: 3.6,
    main_offering: ['Burgers', 'Shakes'],
  },
  {
    brand_id: 32,
    banner_image_es: 'https://cdnlogo.com/logos/w/31/wendys.svg',
    brand_name: "Wendy's",
    description: 'Fresh, never frozen burgers',
    rating: 4.1,
    main_offering: ['Burgers', 'Salads'],
  },
  {
    brand_id: 33,
    banner_image_es: 'https://cdnlogo.com/logos/p/30/papa-johns-pizza.svg',
    brand_name: "Papa John's",
    description: 'Delicious pizza with a garlic butter crust',
    rating: 4.2,
    main_offering: ['Pizza', 'Garlic Bread'],
  },
  {
    brand_id: 35,
    banner_image_es: 'https://cdnlogo.com/logos/c/10/chick-fil-a.svg',
    brand_name: 'Chick-fil-A',
    description: 'Chicken sandwiches with a southern twist',
    rating: 4.7,
    main_offering: ['Chicken', 'Sandwiches'],
  },
  {
    brand_id: 36,
    banner_image_es:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Zaxbys_logo.png/1200px-Zaxbys_logo.png',
    brand_name: "Zaxby's",
    description: 'Chicken fingers and wings',
    rating: 4.0,
    main_offering: ['Chicken Fingers', 'Wings'],
  },
  {
    brand_id: 37,
    banner_image_es:
      'https://seeklogo.com/images/P/panda-express-logo-36D65EDE1C-seeklogo.com.png',
    brand_name: 'Panda Express',
    description: 'American Chinese cuisine fast',
    rating: 4.0,
    main_offering: ['Orange Chicken', 'Fried Rice'],
  },
  {
    brand_id: 38,
    banner_image_es:
      'https://1000logos.net/wp-content/uploads/2017/09/Nandos-Logo.png',
    brand_name: "Nando's",
    description: 'Flame-grilled peri-peri chicken',
    rating: 4.5,
    main_offering: ['Chicken', 'Peri-Peri'],
  },
  {
    brand_id: 39,
    banner_image_es:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IRN9nMYt0dZ7bltVDme2F1kxgYATHc-Tbw&s',
    brand_name: 'The Cheesecake Factory',
    description: 'American cuisine with a variety of desserts',
    rating: 4.3,
    main_offering: ['Burgers', 'Cheesecake'],
  },
  {
    brand_id: 40,
    banner_image_es: 'https://cdnlogo.com/logos/s/28/sonic.svg',
    brand_name: 'Sonic Drive-In',
    description: 'Fast food with retro vibes',
    rating: 3.9,
    main_offering: ['Burgers', 'Hot Dogs'],
  },
];

export default restList;
