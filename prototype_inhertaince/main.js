// Nike prodcut (brand,logo,seller---from flipkart)

const prodcut ={
    brand:"Nike",
    logo:"url",
    seller:"flipkart",

};
 
let p1 = Object.create(product);
console.log(p1);
//construct fuction
//creat to a constructor function to crate the blueprint

function prodcut(){
    this.brand="nike";
    (this.logo="url"),(this.seller="flipkart");
    
}
let p1 = new prodcut("shoe");
let p2 = new prodcut("sneaker");
console.log(p1);
console.log(p2);