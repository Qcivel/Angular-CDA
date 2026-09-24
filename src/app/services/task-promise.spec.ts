import { TestBed } from '@angular/core/testing';
import { TaskPromise } from './task-promise';

describe('TaskPromise', () => {
  let service: TaskPromise;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskPromise);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
