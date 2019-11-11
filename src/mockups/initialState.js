const initialState = {
  user: {},
  cart: [],
  productsByCategory: "",
  products: [
      {
        id: "1",
        title: "El pollo volador",
        image: "https://live.staticflickr.com/46/132554707_97e9e0f1c4_w.jpg",
        price: 2.33,
        description: "BBQ Chicken Pizza",
        labels: ["pizza", "bbq", "chicken"]
      },
      {
        id: "2",
        title: "Hongos para volar",
        image: "https://live.staticflickr.com/8242/8487666183_75e2e25206_t.jpg",
        price: 9.57,
        description: "Mushroom pizza",
        labels: ["pizza", "Mushroom"]
      },
      {
        id: "3",
        title: "Salchichón brutal",
        image: "https://live.staticflickr.com/8215/8314519232_af6b7bed29_t.jpg",
        price: 5.29,
        description: "Salami pizza",
        labels: ["pizza"]
      },
      {
        id: "4",
        title: "Barquito de Chocolate",
        image: "https://live.staticflickr.com/1646/26680445546_9086b7cd27_t.jpg",
        price: 7.02,
        description: "Chocolate con nueces",
        labels: ["dessert"]
      },
      {
        id: "5",
        title: "Don't worry its low fat",
        image: "https://live.staticflickr.com/2083/1616104514_8c12518912_t.jpg",
        price: 2.00,
        description: "West-ward Pharmaceutical Corp",
        labels: ["burger"]
      },
      {
        id: "6",
        title: "Tradicional Sushi",
        image: "https://live.staticflickr.com/729/32762213142_fb28993753_t.jpg",
        price: 15.00,
        description: "Dos variantes básicas de sushi",
        labels: ["sushi"]
      },
      {
        id: "7",
        title: "Coffee Hearts",
        image: "https://live.staticflickr.com/6183/6083139179_728921bccc.jpg",
        price: 1.60,
        description: "Capuchino de corazones",
        labels: ["drink"]
      },
      {
        id: "8",
        title: "Artabria postre",
        image: "https://live.staticflickr.com/3065/3064798535_1aab23750c_t.jpg",
        price: 5.24,
        description: "milhoja de mascarpone con fresas y salsa de frambuesa",
        labels: ["dessert"]
      },
      {
        id: "9",
        title: "Fanta Naranja - lata",
        image: "https://live.staticflickr.com/8509/8563942072_01b5850567_t.jpg",
        price: "3.24",
        description: "Fanta Naranja en lata 250ml",
        labels: ["drink"]
      },
      ,
      {
        id: "10",
        title: "Camaron en la nube voladora",
        image: "https://live.staticflickr.com/5464/8960691111_6bae8ae117_t.jpg",
        price: 10.00,
        description: "Camaron sobre arroz y cinta dulce",
        labels: ["sushi"]
      },
      ,
      {
        id: "11",
        title: "Mini spicy burger",
        image: "https://live.staticflickr.com/8863/18127010258_36f7c87c63_t.jpg",
        price: 6.00,
        description: "Pequeñas hamburguesas picantes x2",
        labels: ["burger"]
      },
      {
        id: "12",
        title: "Hongos para volar doble",
        image: "https://live.staticflickr.com/8242/8487666183_75e2e25206_t.jpg",
        price: 18.20,
        description: "Mushroom pizza doble diámetro",
        labels: ["pizza", "Mushroom"]
      }
  ],
  categories: [
    {
      id: "pizza",
      title: "PIZZA",
      logo: "https://live.staticflickr.com/3618/3495871394_b779997772_t.jpg"
    },
    {
      id: "dessert",
      title: "PASTELES",
      logo: "https://cdn.pixabay.com/photo/2016/03/27/22/38/cake-1284548_960_720.jpg"
    },
    {
      id: "burger",
      title: "HAMBURGUESAS",
      logo: "https://live.staticflickr.com/8631/16505521041_b7d25f7dc8_t.jpg"
    },
    {
      id: "bowl",
      title: "BOWLS",
      logo: "https://live.staticflickr.com/7187/6968734877_ea96b6f678_t.jpg"
    },
    {
      id: "sushi",
      title: "SUSHI",
      logo: "https://live.staticflickr.com/5552/15282573441_2f6e4ef876_t.jpg"
    },
    {
      id: "drink",
      title: "BEBIDAS",
      logo: "https://cdn.pixabay.com/photo/2018/04/08/13/17/glass-3301200_960_720.jpg"
    },
  ],
};

export default initialState;
