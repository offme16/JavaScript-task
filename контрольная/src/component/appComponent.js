// appComponent.js
import { AbstractComponent } from "./abstractComponent.js";

export class AppComponent extends AbstractComponent {
  constructor({ id, quastion }) {
    super();
    this._id = id;
    this._quastion = quastion;
  }

  getTemplate() {
    return ` <p>${this._quastion}</p>`;
  }
}
