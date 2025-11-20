export const orders = [
  {
    id: 'ORD-2024-001',
    date: '2024-01-15',
    status: 'Livré',
    total: 548,
    items: [
      {
        id: '1',
        name: 'Réfrigérateur Samsung 350L',
        price: 299,
        quantity: 1,
        image: 'https://readdy.ai/api/search-image?query=modern%20stainless%20steel%20samsung%20refrigerator%20in%20pristine%20condition%20with%20clean%20white%20background%20professional%20product%20photography%20studio%20lighting%20showing%20front%20view%20with%20sleek%20metallic%20finish%20and%20contemporary%20design&width=200&height=200&seq=order1&orientation=squarish',
      },
      {
        id: '2',
        name: 'Lave-linge Bosch 8kg',
        price: 249,
        quantity: 1,
        image: 'https://readdy.ai/api/search-image?query=white%20bosch%20front%20loading%20washing%20machine%208kg%20capacity%20in%20good%20condition%20with%20clean%20white%20background%20professional%20product%20photography%20studio%20lighting%20showing%20front%20panel%20and%20door&width=200&height=200&seq=order2&orientation=squarish',
      },
    ],
    shippingAddress: {
      name: 'Jean Dupont',
      street: '123 Rue de la République',
      city: 'Paris',
      postalCode: '75001',
      country: 'France',
    },
  },
  {
    id: 'ORD-2024-002',
    date: '2024-01-20',
    status: 'En cours',
    total: 189,
    items: [
      {
        id: '5',
        name: 'Aspirateur Dyson V8',
        price: 189,
        quantity: 1,
        image: 'https://readdy.ai/api/search-image?query=purple%20dyson%20v8%20cordless%20vacuum%20cleaner%20in%20excellent%20condition%20with%20clean%20white%20background%20professional%20product%20photography%20studio%20lighting%20showing%20full%20length%20view%20with%20attachments&width=200&height=200&seq=order3&orientation=squarish',
      },
    ],
    shippingAddress: {
      name: 'Jean Dupont',
      street: '123 Rue de la République',
      city: 'Paris',
      postalCode: '75001',
      country: 'France',
    },
  },
  {
    id: 'ORD-2024-003',
    date: '2024-01-25',
    status: 'En préparation',
    total: 278,
    items: [
      {
        id: '8',
        name: 'Congélateur Liebherr 200L',
        price: 279,
        quantity: 1,
        image: 'https://readdy.ai/api/search-image?query=white%20liebherr%20upright%20freezer%20200%20liters%20in%20excellent%20condition%20with%20clean%20white%20background%20professional%20product%20photography%20studio%20lighting%20showing%20front%20view%20with%20clean%20finish&width=200&height=200&seq=order4&orientation=squarish',
      },
    ],
    shippingAddress: {
      name: 'Jean Dupont',
      street: '123 Rue de la République',
      city: 'Paris',
      postalCode: '75001',
      country: 'France',
    },
  },
];
