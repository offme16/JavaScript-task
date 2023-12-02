import { createElement } from "../render.js";

function createlistBoardComponentTemplate() {
  return `
        <div class="box">
            <h2 class="box__title">Бэклог</h2>
        </div>
              `;
}

export class ListBoardComponent {
  getTemplate() {
    return createlistBoardComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }
  removeElement() {
    this.element = null;
  }
}
