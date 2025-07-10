const fruitsData = [
  { id: 1, name: "Apple", color: "Red", taste: "Sweet" },
  { id: 2, name: "Banana", color: "Yellow", taste: "Sweet" },
  { id: 3, name: "Orange", color: "Orange", taste: "Citrusy" },
  { id: 4, name: "Grape", color: "Purple", taste: "Sweet" },
  { id: 5, name: "Lemon", color: "Yellow", taste: "Sour" },
  { id: 6, name: "Strawberry", color: "Red", taste: "Sweet" },
  { id: 7, name: "Blueberry", color: "Blue", taste: "Sweet" },
  { id: 8, name: "Pineapple", color: "Yellow", taste: "Sweet and Tangy" },
  { id: 9, name: "Mango", color: "Orange", taste: "Sweet" },
  { id: 10, name: "Watermelon", color: "Green", taste: "Sweet and Refreshing" },
];

export async function getFruits() {
  console.log("Fetching fruits from array");
  return fruitsData;
}