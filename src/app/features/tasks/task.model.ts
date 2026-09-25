export interface Task {
  _id: string;
  title: string;
  completed?: boolean;
  user: string;
}
export type TaskPayload = Omit<Task, '_id'>;

export type TaskFilter = 'all' | 'completed' | 'pending';

//
export interface TaskState {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
  filter: TaskFilter;
}
