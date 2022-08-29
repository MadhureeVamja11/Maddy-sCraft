
import {
  v4 as uuidv4
} from "uuid";


export const state = () => ({
  cart: [],
  images: ["http://localhost:3000/name-scrapbook.jpg", "http://localhost:3000/name-scrapbook1.jpg", "http://localhost:3000/name-scrapbook2.jpeg", "http://localhost:3000/birthdate-scrapbook.jpg", "http://localhost:3000/anniversary-scrapbook.jpg","http://localhost:3000/explosion-box.jpg","http://localhost:3000/chocolate-box.jpg"],
  itemdata: [{
    name: "Scrapbooks",
    slug:"scrapbooks",
    deliveryTime: "4 weeks",
    rating: 4.7,
    freeDelivery: true,
    id: "f71400ed-26b1-43d0-940c-7cabd3546dc6",
    menu: [{
      item: "Name Scrapbook",
      img: ["name-scrapbook.jpg", "name-scrapbook1.jpg", "name-scrapbook2.jpeg"],
      price: 15.00,
      id: "e85dbacc-f721-44e6-af8c-eda2835e2e50",
      description: "Name Scrpbook, Customization as per requirement."
    },
    {
      item: "Birthday Scrapbook",
      img: ["birthdate-scrapbook.jpg"],
      price: 25.00,
      id: "e956a779-941f-41ef-874e-d5f6a6c6e0cb",
      description: "Scrapbook for birthday of your loved once."
    },
    {
      item: "Anniversary Scrapbook",
      img: ["anniversary-scrapbook.jpg"],
      price: 50.00,
      id: "ecd7c207-acd7-4b58-8685-894ba622949e",
      description: "Anniversary Scrapbook."
    }
    ]
  },
  {
    name: "Gift Boxes",
    deliveryTime: "2 weeks",
    slug:"gift boxes",
    rating: 4.5,
    freeDelivery: false,
    themes : [],
    id: "e1e569e5-7b75-42cf-8fc3-7638d6c940f8",
    menu: [{
      item: "Explosion Box",
      img: ["explosion-box.jpg"],
      price: 25.00,
      id: "7644eba9-d6a8-466f-bd49-781bc005cfe5",
      description: "Design your own explosion box with 1 layer."
    },
    {
      item: "chocolate Box",
      img: ["chocolate-box.jpg"],
      price: 30.00,
      id: "70ceec44-3ccb-4f92-b149-0ebe2c10704b",
      description: "A chocolate box with different chocolates."
    },
    ]
  },
    // {
    //   name: "All that and Dim Sum",
    //   deliveryTime: 35,
    //   meal: ["breakfast", "lunch", "dinner"],
    //   rating: 4.9,
    //   freeDelivery: true,
    //   id: "1f9500d2-fd27-422e-acc6-48198d0de5c2",
    //   menu: [{
    //       item: "Shrimp Dumplings",
    //       img: "dimsum-shrimp.jpg",
    //       price: 6.49,
    //       addOns: [
    //         "None",
    //         "Steamed Sesame Ball",
    //         "Mango Pudding",
    //         "Sweet Tofu"
    //       ],
    //       id: "22672b93-2c65-4fd9-b151-683f7eb7df4a",
    //       description: "Whole shrimp in a translucent wrapper."
    //     },
    //     {
    //       item: "Soup Dumplings",
    //       img: "dimsum-soup.jpg",
    //       price: 9.99,
    //       addOns: [
    //         "None",
    //         "Steamed Sesame Ball",
    //         "Mango Pudding",
    //         "Sweet Tofu"
    //       ],
    //       id: "3a6da02c-2354-4eb8-af07-f9f2d26fa7c2",
    //       description: "Dumplings filled with pork, crab meat and broth."
    //     },
    //     {
    //       item: "Stuffed Eggplant",
    //       img: "dimsum-eggplant.jpg",
    //       price: 5.59,
    //       addOns: [
    //         "None",
    //         "Steamed Sesame Ball",
    //         "Mango Pudding",
    //         "Sweet Tofu"
    //       ],
    //       id: "cadd2903-b9cb-4053-9720-c096cc95e8a5",
    //       description: "Chinese eggplant filled with ground shrimp in sauce"
    //     }
    //   ]
    // }
  ]
})

export const getters = {
  cartCount: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.count, 0);
  },
  totalPrice: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + +next.combinedPrice, 0);
  }
};

export const mutations = {
  updateValue: (state, payload) => {
    state.value = payload
  },
  addToCart: (state, formOutput) => {
    const indx = state.cart.findIndex(v => v.item == formOutput.item);
    if (indx != -1) {
      let item = state.cart[indx]
      item.count = item.count + formOutput.count
      item.combinedPrice = item.combinedPrice + formOutput.combinedPrice
    } else {
      formOutput.id = uuidv4();
      state.cart.push(formOutput);
    }
  },
  removeToCart(state, id) {
    const indx = state.cart.findIndex(v => v.id == id);
    state.cart.splice(indx, indx >= 0 ? 1 : 0);
  }
}

  // export const actions = {
  //   updateActionValue({ commit }) {
  //     commit('updateValue', payload)
  //   }
  // }
