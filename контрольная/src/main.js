import { render } from "./render.js";
import { QuestionComponent } from "./component/questionComponent.js";
import { date } from "../src/mock/date.js";
import { AppComponent } from "./component/appComponent.js";

const bodyElement = document.querySelector(".app-body");

date.forEach((date) => {
  const boardContainer = new QuestionComponent({
    id: date.id,
    title: date.title,
  });
  render(boardContainer, bodyElement);

  const appComponent = new AppComponent({
    id: date.id,
    quastion: date.quastion,
  });
  render(
    appComponent,
    boardContainer.getElement().querySelector(".accordion-content")
  );
  boardContainer.setHandler();
});
