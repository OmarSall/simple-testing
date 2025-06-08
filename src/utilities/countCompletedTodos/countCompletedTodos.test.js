import { countCompletedTodos } from './countCompletedTodos';

describe('countCompletedTodos', () => {
  it('should return 0 when the array is empty', () => {
    const result = countCompletedTodos([]);
    expect(result).toBe(0);
  });

  it('should return 0 when no todos are completed', () => {
    const todos = [
      { id: 1, completed: false },
      { id: 2, completed: false },
      { id: 3, completed: false },
    ];

    const result = countCompletedTodos(todos);
    expect(result).toBe(0);
  });

  it('should return the correct count when some todos are completed', () => {
    const todos = [
      { id: 1, completed: true },
      { id: 2, completed: false },
      { id: 3, completed: true },
    ];

    const result = countCompletedTodos(todos);
    expect(result).toBe(2);
  });

  it('should return the total number when all todos are completed', () => {
    const todos = [
      { id: 1, completed: true },
      { id: 2, completed: true },
      { id: 3, completed: true },
    ];

    const result = countCompletedTodos(todos);
    expect(result).toBe(3);
  });
});