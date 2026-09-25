import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tasksActions } from './tasks.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { TaskServices } from '../services/task-services';
import { TaskCard } from '../components/task-card/task-card';

@Injectable()
export class TasksEffects {
  private actions$ = inject(Actions);
  private _taskServices = inject(TaskServices);

  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(tasksActions.loadTasks),
      switchMap(() =>
        this._taskServices.getTasks().pipe(
          map((res) => tasksActions.loadSuccess({ tasks: res })),
          catchError((error) => of(tasksActions.loadFailure({ error: error }))),
        ),
      ),
    );
  });

  toggleTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(tasksActions.toggle),
      switchMap((params) =>
        this._taskServices.toggleTaskCompletion(params.taskID, !params.completedStatus).pipe(
          map((res) => tasksActions.toggleSuccess({ task: res })),
          catchError((error) => of(tasksActions.toggleFailure({ error: error }))),
        ),
      ),
    );
  });

  addTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(tasksActions.addTask),
      switchMap(({ task }) => {
        return this._taskServices.createTask(task).pipe(
          map((res) => tasksActions.taskAddedSuccessfully({ task: res })),
          catchError((error) => of(tasksActions.taskAddFailed({ error }))),
        );
      }),
    );
  });
  deleteTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(tasksActions.deleteTask),
      switchMap(({ taskID }) =>
        this._taskServices.deleteTask(taskID).pipe(
          map((res) => tasksActions.taskDeletedSuccessfully({ taskID })),
          catchError((error) => of(tasksActions.taskDeleteFailed(error))),
        ),
      ),
    );
  });
}
