function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let productCategories = [
  'Raw Honey',
  'Cooking oil',
  'A2 Desi Cow Ghee',
  'Apple Cider Vinegar',
  'Herbal Juices',
  'Hill Turmeric',
  'Jaggery Amla candy',
  'Wellness Oils',
  'Nuts in Honey',
  'Hing',
  'Stevia',
  'Shilajit',
  'Tea'
];



const AllData = [
  {
    id: 1,
    name: "",
    price: "",
    description: "",
    category: "",
    inStock: true,
    rating: 4.6
  }
]

for (let i = 2; i < 200; i++) {
  AllData.push({
    id: i,
    name: `Product ${i}`,
    price: getRandomNumber(300, 1500),
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem dolor aliquid voluptates eligendi provident aliquam, maiores ipsum libero perferendis repellat?",
    category: productCategories[getRandomNumber(0, productCategories.length)],
    inStock: true,
    rating: 4.6,
  })
}


export default AllData