import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tasksActions } from './tasks.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { TaskServices } from '../services/task-services';

@Injectable()
export class TasksEffects {
  private actions$ = inject(Actions);
  private _taskServices = inject(TaskServices);

  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(tasksActions.loadTasks),
      switchMap(() =>
        this._taskServices.getTasks().pipe(
          tap((res) => console.log(res)),
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
          tap((res) => console.log(res)),
          map((res) => tasksActions.toggleSuccess({ task: res })),
          catchError((error) => of(tasksActions.toggleFailure({ error: error }))),
        ),
      ),
    );
  });
}
