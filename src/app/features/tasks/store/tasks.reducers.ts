import { TaskId } from './../../../../../node_modules/@angular-devkit/schematics/src/engine/interface.d';
import { createReducer, on } from '@ngrx/store';
import { initialTaskState } from './tasks.state';
import { tasksActions } from './tasks.actions';

export const tasksReducer = createReducer(
  initialTaskState,
  on(tasksActions.loadTasks, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(tasksActions.loadSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    isLoading: false,
  })),

  on(tasksActions.loadFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),

  on(tasksActions.toggle, (state) => ({
    ...state,
    isLoading: true,
  })),

  on(tasksActions.toggleSuccess, (state, { task }) => ({
    ...state,
    isLoading: false,
    tasks: state.tasks.map((t) => (t._id === task._id ? task : t)),
  })),

  on(tasksActions.toggleFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(tasksActions.setFilter, (state, { filter }) => ({
    ...state,
    filter,
  })),

  on(tasksActions.addTask, (state) => ({ ...state, isLoading: true, error: null })),
  on(tasksActions.taskAddedSuccessfully, (state, { task }) => ({
    ...state,
    isLoading: false,
    error: null,
    tasks: [...state.tasks, task],
  })),
  on(tasksActions.taskAddFailed, (state, { error }) => ({ ...state, isLoading: false, error })),

  on(tasksActions.deleteTask, (state) => ({ ...state, isLoading: true, error: null })),
  on(tasksActions.taskDeletedSuccessfully, (state, { taskID }) => ({
    ...state,
    isLoading: false,
    error: null,
    tasks: state.tasks.filter((task) => task._id !== taskID),
  })),
  on(tasksActions.taskDeleteFailed, (state, { error }) => ({ ...state, error, isLoading: false })),
);
