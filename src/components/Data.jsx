const pizzaMenu = [
  {
    id:1,
    name: "Margherita",
    description: "Classic Neapolitan pizza with tomato, mozzarella, and fresh basil.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg",
    msp: 10.99,
    sellingPrice: 8.99
  },
  {
    id:2,
    name: "Pepperoni",
    description: "Thin crust pizza topped with spicy pepperoni and mozzarella cheese.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8bnpzQOP0j7G7CFRtJgdI1K2cIVbV-aZQ&s",
    msp: 12.99,
    sellingPrice: 10.49
  },
  {
    id:3,
    name: "Veggie Supreme",
    description: "Loaded with bell peppers, onions, olives, mushrooms, and sweet corn.",
    image: "https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png",
    msp: 11.99,
    sellingPrice: 9.99
  },
  {
    id:4,
    name: "BBQ Chicken",
    description: "Grilled chicken with tangy BBQ sauce, red onions, and mozzarella.",
    image: "https://breadboozebacon.com/wp-content/uploads/2023/05/BBQ-Chicken-Pizza-SQUARE.jpg",
    msp: 13.49,
    sellingPrice: 11.49
  },
  {
    id:5,
    name: "Four Cheese",
    description: "A rich blend of mozzarella, cheddar, parmesan, and gouda cheeses.",
    image: "https://youplateit.com.au/wp-content/uploads/2024/09/wp-contentuploads202409Four-Cheese-Pizza-0924-Plated.jpg",
    msp: 13.99,
    sellingPrice: 11.99
  },
  {
    id:6,
    name: "Hawaiian",
    description: "Sweet pineapple chunks with savory ham and cheese on a soft crust.",
    image: "https://youplateit.com.au/wp-content/uploads/2024/09/wp-contentuploads202409Four-Cheese-Pizza-0924-Plated.jpg",
    msp: 12.49,
    sellingPrice: 10.49
  },
  {
    id:7,
    name: "Paneer Tikka",
    description: "Spicy Indian-style paneer cubes with onions, capsicum, and masala.",
    image: "https://youplateit.com.au/wp-content/uploads/2024/09/wp-contentuploads202409Four-Cheese-Pizza-0924-Plated.jpg",
    msp: 12.99,
    sellingPrice: 10.99
  },
  {
    id:8,
    name: "Detroit-Style Pepperoni",
    description: "Thick and airy crust with caramelized cheese edges and crispy pepperoni.",
    image: "https://youplateit.com.au/wp-content/uploads/2024/09/wp-contentuploads202409Four-Cheese-Pizza-0924-Plated.jpg",
    msp: 14.49,
    sellingPrice: 12.49
  }
];

export const filterByMaxPrice = (maxPrice) => {
  return pizzaMenu.filter(pizza => pizza.sellingPrice <= maxPrice);
}

export const filterVegetarian = () => {
  const meatKeywords = ['chicken', 'pepperoni', 'ham'];
  return pizzaMenu.filter(pizza => 
    !meatKeywords.some(meat => pizza.description.toLowerCase().includes(meat))
  )
}

export const filterByKeyword = (keyword) => {
  const  lowerKeyword = keyword.toLowerCase();

  return pizzaMenu.filter(pizza => 
    pizza.name.toLowerCase().includes(lowerKeyword) ||
    pizza.description.includes(lowerKeyword)
  );
}

export default pizzaMenu