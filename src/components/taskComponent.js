import { createElement } from "../render.js";
function createTaskComponentTemplate() {
  return `<ul class="box__task">
              <li>Task</li>
          </ul>`;
}

export class taskComponent {
  getTemplate() {
    return createTaskComponentTemplate();
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
