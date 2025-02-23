const margherita = new Margherita();
margherita.setSize('large');
margherita.addTopping('mozzarella');
margherita.addTopping('cheeseBord');

console.log(`Price: ${margherita.calculatePrice()} rub`);
console.log(`Calories: ${margherita.calculateCalories()} kcal`);

const pepperoni = new Pepperoni();
pepperoni.setSize('small');
pepperoni.addTopping('cheddarParmesan');

console.log(`Price: ${pepperoni.calculatePrice()} rub`);
console.log(`Calories: ${pepperoni.calculateCalories()} kcal`);