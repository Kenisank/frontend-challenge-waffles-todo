import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TodoStatus } from 'src/app/modules/store/todo/todo.reducer';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      imports: [MatIconModule, MatButtonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display todos', () => {
    component.todos = [
      { id: 1, name: 'Test Todo', status: TodoStatus.InProgress }
    ];
    fixture.detectChanges();

    const todoElements = fixture.debugElement.queryAll(By.css('.todo-item'));
    expect(todoElements.length).toBe(1);
    expect(todoElements[0].nativeElement.textContent).toContain('Test Todo');
  });

  it('should emit statusChange event when status button is clicked', () => {
    spyOn(component.statusChange, 'emit');
    component.todos = [{ id: 1, name: 'Test Todo', status: TodoStatus.InProgress }];
    fixture.detectChanges();

    const statusButton = fixture.debugElement.query(By.css('.todo-actions button'));
    statusButton.triggerEventHandler('click', null);

    expect(component.statusChange.emit).toHaveBeenCalledWith(component.todos[0]);
  });

  // Similar tests can be written for edit and delete buttons
});
