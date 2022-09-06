class person {
    constructor(language, hometown, favFood){
        this.language = language
        this.hometown = hometown
        this.favFood = favFood
    }
}
    class PostalWorker extends person {
        constructor (language, hometown, favFood ='Spanish'){
        super(language, hometown, favFood)
    //     this.favFood = pizza
    //     this.language = ['English', 'Spanish']
    //     console.log(`${favFood} is my favorite food!`);   
     }}
    // // Chef() {
    //     this.hometown = ['Chicago', 'Atlanta']
    //     this.favFood = ['steak', 'asparagus']
    //     console.log(`The chef\'s hometowns are ${}`);
         

    // }
let postMan = new PostalWorker('English', 'Atlanta', 'Spaghetti')
console.log(postMan.language);
let postMan2 = new PostalWorker('Spanish', 'Charlotte')
console.log(postMan2);