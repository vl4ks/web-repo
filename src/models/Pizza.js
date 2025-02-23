class Pizza {
    constructor(name, basePrice, baseCalories) {
        this.name = name;
        this.basePrice = basePrice;
        this.baseCalories = baseCalories;
        this.size = null;
        this.toppings = [];
    }

    setSize(size) {
        this.size = size;
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    removeTopping(topping) {
        this.toppings = this.toppings.filter(t => t !== topping);
    }

    getToppings() {
        return this.toppings;
    }

    getSize() {
        return this.size;
    }

    calculatePrice() {
        let price = this.basePrice;
        if (this.size === 'large') {
            price += 200;
        } else if (this.size === 'small') {
            price += 100;
        }

        this.toppings.forEach(topping => {
            if (topping === 'cheeseBord') {
                price += this.size === 'large' ? 300 : 150;
            } else if (topping === 'cheddarParmesan') {
                price += this.size === 'large' ? 300 : 150;
            } else if (topping === 'mozzarella') {
                price += 50;
            }
        });

        return price;
    }

    calculateCalories() {
        let calories = this.baseCalories;
        if (this.size === 'large') {
            calories += 200;
        } else if (this.size === 'small') {
            calories += 100;
        }

        this.toppings.forEach(topping => {
            if (topping === 'cheeseBord' || topping === 'cheddarParmesan') {
                calories += 50;
            } else if (topping === 'mozzarella') {
                calories += 20;
            }
        });

        return calories;
    }
}