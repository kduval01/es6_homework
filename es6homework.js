class Cat {
    constructor(species, lifespan, vision, fur, hunting, habitat) {
        this.species = species;
        this.lifespan = lifespan;
        this.vision = vision;
        this.fur = fur;
        this.hunting = hunting;
        this.habitat = habitat;
        this.grooming = 10;
    }

}
        
        class Wildcat extends Cat {
            constructor(species, lifespan, vision, fur, hunting, habitat) {
                super(species, lifespan, vision, fur, hunting, habitat);
                
                this.sleepingHabit = 10;
                
                
                
            }
        }

        const Cat2 = new Cat("domestic", 15, "night vision", "yes", "none", "homes")
        const Cat3 = new Wildcat("wild", 5, "night vision", "yes", "yes", "wild")

        console.log(Cat2);
        console.log(Cat3);
