import { createElement } from "../render.js";

function createHeaderComponentTemplate() {
  return `<div class='list'>
        <div class="box">
            <h2 class="box-backlog">Бэклог</h2>
            <ul class="box-backlog__item">
                <li>Выучить JS</li>
                <li>Понять Redux</li>
                <li>Съездить домой</li>
            </ul>
        </div>
        <div class="box">
            <h2 class="box-procces">В процессе</h2>
            <ul class="box-procces__item">
                <li>Попить смузи</li>
                <li>Приготовить обед</li>
            </ul>
        </div>
        <div class="box">
            <h2 class="box-done">Готово</h2>
            <ul class="box-done__item">
                <li>Таска по РПИ</li>
                <li>Приготовить ужин</li>

            </ul>
        </div>
        <div class="box">
            <h2 class="box-delete">Корзина</h2>
            <ul class="box-del__item">
                <li>Помыть посуду</li>
                <li>Попить смузи</li>
                <button><span>X</span> Очистить</button>
            </ul>
        </div>
        </div>`;
}

export class ListBoardComponent {
  getTemplate() {
    return createHeaderComponentTemplate();
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
