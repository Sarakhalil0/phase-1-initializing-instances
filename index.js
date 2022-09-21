// Write your code here
class Breakfast{
    constructor(food ,drink){
        this.food=food
        this.drink=drink
}
}

const breakfast=new Breakfast('pitzza' ,'pepsi')
Breakfast.salad;

//
class Lunch{
    constructor(salad ,soup){
        this.salad=salad
        this.soup=soup
    }
}
const lunch=new Lunch('ceser salad' ,'chiken soup')
Lunch.salad;

//
class Dinner {
    #dissert;
    constructor(salad, soup, entree, dessert){
        this.salad=salad;
        this.soup=soup;
        this.entree=entree;
        this.#dissert=dissert;
    }
}

const dinner=new Dinner('ceser salad' ,'chiken soup')
Dinner.salad;