const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.appetizers;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get course() {
    return {
      appetizers: this.appetizer,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.Random * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your total price is ${totalPrice}`;
  },
};

menu.addDishToCourse("appetizers", "Salad", 1.99);
menu.addDishToCourse("appetizers", "Mozzerella Sticks", 2.99);
menu.addDishToCourse("appetizers", "Soup", 2.99);
menu.addDishToCourse("mains", "Steak", 20.99);
menu.addDishToCourse("mains", "Spaghetti", 12.99);
menu.addDishToCourse("mains", "Chicken Fettucini", 14.99);
menu.addDishToCourse("desserts", "Flan", 8.99);
menu.addDishToCourse("desserts", "Ice Cream", 6.99);
menu.addDishToCourse("deserts", "Cake", 8.99);

let meal = menu.generateRandomMeal();
console.log(meal);
