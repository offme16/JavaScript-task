import { HeaderComponent } from "./components/headerComponent.js";
import { render, RenderPosition } from "./render.js";
import { FormAddTaskComponent } from "./components/addTaskComponent.js";
import { ListBoardComponent } from "./components/listBoardContainer.js";
import { taskComponent } from "./components/taskComponent.js";

const bodyElement = document.querySelector(".board-app");
const addTaskElement = document.querySelector(".addtask-app");
const boardElement = document.querySelector(".board-app__list");

render(new HeaderComponent(), bodyElement, RenderPosition.BEFOREBEGIN);
render(new FormAddTaskComponent(), addTaskElement);

function createList() {
  for (let i = 0; i < 4; i++) {
    const listBoardComponent = new ListBoardComponent();
    render(listBoardComponent, boardElement);
    for (let j = 0; j < 3; j++) {
      const taskElement = new taskComponent();
      render(taskElement, listBoardComponent.getElement());
    }
  }
}

createList();
