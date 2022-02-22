import { Injectable } from "@nestjs/common";

type Todo = any;

async function simulate<T>(command: () => T) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // const min = 1;
  // const max = 3;

  // const random = Math.floor(Math.random() * (max - min + 1)) + min;

  // if (random <= max - 1) {
  //   throw new Error('Error processing request!');
  // }

  return command();
}

const initialTodos: Todo[] = [
  {id: 1, title: 'Todo 1', description: 'Description 1'}, {id: 2, title: 'Todo 2', description: 'Description 2'}, {id: 3, title: 'Todo 3', description: 'Description 3'}
].map(todo => [todo.id, todo]);

@Injectable()
export class TodosService {
  private static _items = new Map<number, Todo>(initialTodos);

  async getAll() {
    return simulate(() => [...TodosService._items.values()]);
  }

  async add(todo: Todo) {
    const items = await simulate(() => {
      if (TodosService._items.has(todo.id)) {
        throw new Error('Todo already in list!');
      }

      TodosService._items.set(todo.id, todo);

      return Array.from(TodosService._items.values());
    });

    return items;
  }


  async update(todo: Todo) {
    const items = await simulate(() => {
      if (!TodosService._items.has(todo.id)) {
        throw new Error('Todo not in list!');
      }

      TodosService._items.set(todo.id, todo);

      return Array.from(TodosService._items.values());
    });
    return items;
  }

  async remove(id: number) {
    const items = await simulate(() => {
      if (!TodosService._items.has(id)) {
        throw new Error('Todo not in list!');
      }

      TodosService._items.delete(id);

      return Array.from(TodosService._items.values());
    });

    return items;
  }
}
