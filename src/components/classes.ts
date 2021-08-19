export class Fruit {
  name: string
  sweetness: number
  private isEdible: boolean = true
  
  constructor(name: string, sweetness: number = 50) {
    this.name = name
    this.sweetness = sweetness
  }

  get tasty() {
    return this.sweetness > 60 ? true : false
  }

  static cook(fruit: Fruit) {
    return `Cooked ${fruit.name}`
  }
}

export class Apple extends Fruit {
  constructor(public variety: string) {
    super("Apple", 60)
  }
}