import EventEmitter from "eventemitter3";
import gsap from "gsap/gsap-core";

export default class Saucer extends EventEmitter {
  constructor() {
    super();
    this._saucerElement = document.querySelector(".ufo");
    this._beamTopElement = document.querySelector("#beam-top");
    this._beamBottomElement = document.querySelector("#beam-bottom");
  }

  static get events() {
    return {
      FLY_IN: "fly_in",
      FLY_AWAY: "fly_away",
      BEAM_SHOW: "beam_showed",
      BEAM_HIDE: "beam_hide",
    };
  }

  async moveTo(flag) {
    if (flag) {
      await gsap.to(this._saucerElement, { x: -835, duration: 3, id: "flyIn" });
      this.emit("FLY_IN");
    } else {
      await gsap.to(this._saucerElement, {
        x: -1800,
        duration: 3,
        id: "flyOut",
      });
      this.emit("FLY_AWAY");
    }
  }

  async toggleBeam(flag) {
    if (flag) {
       gsap.to(this._beamTopElement, {
        opacity: 0.6,
        id: "showTopBeam",
      });
      await gsap.to(this._beamBottomElement, {
        opacity: 0.6,
        id: "showBottomBeam",
      });
      this.emit("BEAM_SHOW");
    } else {
       gsap.to(this._beamTopElement, {
        opacity: 0,
        id: "hideTopBeam",
      });
      await gsap.to(this._beamBottomElement, {
        opacity: 0,
        id: "hideBottomBeam",
      });
      this.emit("BEAM_HIDE");
    }
  }
}
