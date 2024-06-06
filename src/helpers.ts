import { TODO_TASKS_NAME } from './constants/ToDo';
import type { TToDo_Item } from './components/ToDoItem/types';

export const getTasks = () =>
    JSON.parse(localStorage.getItem(TODO_TASKS_NAME) || '[]') as TToDo_Item[];

export const setTasksToLocalStorage = (tasks: TToDo_Item[]) =>
    localStorage.setItem(TODO_TASKS_NAME, JSON.stringify(tasks));
