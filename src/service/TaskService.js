import { Constanats } from "../const.js";
import { Tasks } from '../api/api.js';

export class TasksService {
  #boardTasks = Tasks;
  getBoardTasks() {
    return this.#boardTasks;
  }

  getTasksByStatus(status) {
    return this.#boardTasks.filter((data) => data.status === status);
  }
  create(task) {
    task.status = Constanats.Status.BACKLOG;
    this.#boardTasks.push(task);
  }
}