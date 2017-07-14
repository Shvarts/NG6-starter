class ItemsListController {
  constructor() {
    this.items = [
      {
        name: 'Call of Duty: WWII - Xbox One Standard Edition',
        url: '#',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51bf24-MV4L._AC_US218_.jpg',
        description: 'description',
        platform: 'Xbox One',
        esrb: 'Rating Pending',
        studio: 'Activision',
        price: 0.00,
        priceWhole: 0.00,
        priceFractional: 0.00,
        prime: false,
        platforms: [
          {
            name: 'PC',
            prime: true,
            price: 59.99,
            priceWhole: 59,
            priceFractional: 99,
            retailPrice: 39.99,
            newUsedPrice: 49.99
          },
          {
            name: 'XBox',
            prime: false,
            price: 59.99,
            priceWhole: 59,
            priceFractional: 99,
            retailPrice: 39.99,
            newUsedPrice: 49.99
          },
          {
            name: 'PS4',
            prime: false,
            price: 0,
            priceWhole: 0,
            priceFractional: 0,
            retailPrice: 0,
            newUsedPrice: 0
          },
          {
            name: 'UFO Platform',
            prime: false,
            price: 0,
            priceWhole: 0,
            priceFractional: 0,
            retailPrice: 0,
            newUsedPrice: 25.99
          }
        ]
      },
      {
        name: 'Call of Duty: WWII - Xbox One Standard Edition',
        url: '#',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51bf24-MV4L._AC_US218_.jpg',
        description: 'description',
        platform: 'PS4',
        esrb: 'Rating Pending',
        studio: 'Activision',
        price: 59.99,
        priceWhole: 59,
        priceFractional: 99,
        prime: true,
        platforms: []
      }
    ];
  }
}

export default ItemsListController;
