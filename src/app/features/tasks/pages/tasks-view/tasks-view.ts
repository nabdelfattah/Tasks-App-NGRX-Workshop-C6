import { Component, inject } from '@angular/core';
import { TaskList } from '../../components/task-list/task-list';
import { FilterButtonsGroup } from '../../components/filter-buttons-group/filter-buttons-group';
import { AddTask } from '../../components/add-task/add-task';
import { Store } from '@ngrx/store';
import { tasksActions } from '../../store/tasks.actions';
import { TaskPayload } from '../../task.model';

@Component({
  selector: 'app-tasks-view',
  imports: [TaskList, FilterButtonsGroup, AddTask],
  templateUrl: './tasks-view.html',
  styleUrl: './tasks-view.scss',
})
export class TasksView {
  readonly store = inject(Store);

  addTask(task: TaskPayload) {
    this.store.dispatch(tasksActions.addTask({ task }));
  }
}
