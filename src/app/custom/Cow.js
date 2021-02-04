import EventEmitter from "eventemitter3";
import gsap from "gsap/gsap-core";

export default class Cow extends EventEmitter {
  constructor() {
    super();
    this._cowElement = document.querySelector(".cow");
  }
  static get events() {
    return {
      ABDUCT_COMPLETED: "abduct_completed",
    };
  }

  async moveTo() {
    await gsap.to(this._cowElement, { y: -390, id:"cowAbduction", duration:3 });
    this.emit("abduct_completed");
    this.hide();
  }

  hide() {
    gsap.set(this._cowElement, { opacity: 0, id:"cowHide" });
  }
}
