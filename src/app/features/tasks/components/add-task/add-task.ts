import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {
  form = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  submit() {
    if (this.form.valid) {
      console.log('Emitting new task title:', this.form.value.title);
    }
  }
}
