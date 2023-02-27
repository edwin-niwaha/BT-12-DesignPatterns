// Create a MobileShop interface.
interface MobileShop {
  modelNo(): string;
  price(): string;
}

// Create a Iphone implementation class that will implement Mobileshop interface.
class Iphone implements MobileShop {
  modelNo() {
    console.log(`Model No and Price(UgX)`);
    console.log(`--------------------------------------`);
    console.log(`Iphone 12`);
    return ``;
  }
  price() {
    console.log(`3,000,000`);
    console.log(`--------------------------------------`);
    return ``;
  }
}

// Create a Samsung implementation class that will implement Mobileshop interface.
class Samsung implements MobileShop {
  modelNo() {
    console.log(`Samsung galaxy tab 3`);
    return ``;
  }
  price() {
    console.log(`2,000,000`);
    console.log(`--------------------------------------`);
    return ``;
  }
}

//   Create a Blackberry implementation class that will implement Mobileshop interface .
class Blackberry implements MobileShop {
  modelNo() {
    console.log(`Blackberry Z10`);
    return ``;
  }
  price() {
    console.log(`1,000,000`);
    return ``;
  }
}
//   Create a ShopKeeper concrete class that will use MobileShop interface.
class ShopKeeper {
  private iphone: Iphone;
  private samsung: Samsung;
  private blackberry: Blackberry;

  //   create a contructor to initialize the values of the class ShopKeeper
  constructor(iphone: Iphone, samsung: Samsung, blackberry: Blackberry) {
    this.iphone = iphone;
    this.samsung = samsung;
    this.blackberry = blackberry;
  }
  //   Create a client that can purchase the mobiles from MobileShop through ShopKeeper.
  public Client() {
    this.iphone.modelNo();
    this.iphone.price();

    this.samsung.modelNo();
    this.samsung.price();

    this.blackberry.modelNo();
    this.blackberry.price();
  }
}
// create an instances of the facade
let iphone = new Iphone();
let samsung = new Samsung();
let blackberry = new Blackberry();
let shopkeeper = new ShopKeeper(iphone, samsung, blackberry);
shopkeeper.Client();
