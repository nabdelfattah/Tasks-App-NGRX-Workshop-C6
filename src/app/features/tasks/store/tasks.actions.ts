import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { Task, TaskFilter, TaskPayload } from '../task.model';

// export const loadTasks = createAction('[Tasks] Load Tasks');

export const tasksActions = createActionGroup({
  source: 'Tasks',
  events: {
    'Load Tasks': emptyProps(),
    'Load Success': props<{ tasks: Task[] }>(),
    'Load Failure': props<{ error: string }>(),
    Toggle: props<{ taskID: string; completedStatus: boolean }>(),
    'Toggle Success': props<{ task: Task }>(),
    'Toggle Failure': props<{ error: string }>(),
    'Set Filter': props<{ filter: TaskFilter }>(),
    'Add Task': props<{ task: TaskPayload }>(),
    'Task Added Successfully': props<{ task: Task }>(),
    'Task Add failed': props<{ error: string }>(),
    'Delete Task': props<{ taskID: string }>(),
    'Task Deleted Successfully': props<{ taskID: string }>(),
    'Task delete failed': props<{ error: string }>(),
  },
});
