import Warriors from "./classes/warrior.json";

export class Warrior {
  constructor() {
    this.life = Warriors.Life;
    this.prot = Warriors.Prot;
  }

  get warriorLife() {
    return this.life ? this.life : null;
  }

  get warriorProt() {
    return this.prot ? this.prot : null;
  }

  set warriorLife(newLife) {
    newLife ? (this.life = newLife) : null;
  }

  set warriorProt(newProt) {
    newProt ? (this.prot = newProt) : null;
  }
}
