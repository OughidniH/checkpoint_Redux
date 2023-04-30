import {
  ADD_ToDo,
  COMPLETE_ToDo,
  EDIT_ToDo,

} from "../actionTypes/actionTypes";

const initialState = {
  tasks: [
    {
      id: Math.random(),
      description: "Code a todo list",
      isDone: true,
    },
    { id: Math.random(), description: "Learn something else", isDone: false },
  ],
};

const reducersToDo = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ToDo:
      const newTask = {
        id: Math.random(),
        description: payload,
        isDone: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case COMPLETE_ToDo:
      const toggleTask = state.tasks.map((task) =>
        task.id === payload.id ? { ...payload, isDone: !payload.isDone } : task
      );
      return {
        ...state,
        tasks: toggleTask,
      };
    case EDIT_ToDo:
      const editedtask = state.tasks.map((task) => {
        if (task.id === payload.id) {
          task.id = payload.id;
          task.description = payload.description;
          task.isDone = payload.isDone;
        }

        return task;
      });
      return {
        ...state,
        tasks: editedtask,
      };
   
    default:
      return state;
  }
};
export default reducersToDo;
