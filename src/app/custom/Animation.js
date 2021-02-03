import Cow from "./Cow";
import Saucer from "./Saucer";

export default class Animation {
  constructor() {
    this.saucer = new Saucer();
    this.cow = new Cow();
  }

  async start() {
    await this.saucer.moveTo(true);
    await this.saucer.toggleBeam(true);
    await this.cow.moveTo();
    this.cow.hide();
    await this.saucer.toggleBeam(false);
    await this.saucer.moveTo(false);
  }
}
