import { ADD_ToDo, COMPLETE_ToDo, EDIT_ToDo, DELETE_ToDo } from "../actionTypes/actionTypes";

export const addtodo = (task) => {
  return {
    type: ADD_ToDo,
    payload: task,
  };
};
export const completetodo = (task) => {
  return {
    type: COMPLETE_ToDo,
    payload: task,
  };
};
export const edittodo = (task) => {
  return {
    type: EDIT_ToDo,
    payload: task,
  };
};
export const deletetodo = (id) => {
  return {
    type: DELETE_ToDo,
    payload: id,
  };
};
