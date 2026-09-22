import { Component } from '@angular/core';
import { TaskList } from '../../components/task-list/task-list';
import { FilterButtonsGroup } from '../../components/filter-buttons-group/filter-buttons-group';

@Component({
  selector: 'app-tasks-view',
  imports: [TaskList, FilterButtonsGroup],
  templateUrl: './tasks-view.html',
  styleUrl: './tasks-view.scss',
})
export class TasksView {}
