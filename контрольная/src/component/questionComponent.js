import { AbstractComponent } from "./abstractComponent.js";

export class QuestionComponent extends AbstractComponent {
  constructor({ id, title }) {
    super();
    this._id = id;
    this._title = title;
    this._isBool = false;
  }

  getTemplate() {
    return `
      <div class="accordion" data-id="${this._id}">
        <div class="accordion-item">
          <button class="accordion-button">${this._title}</button>
          <div class="accordion-content"></div>
        </div>    
      </div>
    `;
  }

  setHandler() {
    const accordion = this.getElement();
    accordion.addEventListener("click", (event) => {
      if (event.target.classList.contains("accordion-button")) {
        const content = accordion.querySelector(".accordion-content");
        console.log("jisdhvsudvsdvuis");
        content.style.display =
          content.style.display === "block" ? "none" : "block";
      }
    });
  }
}
