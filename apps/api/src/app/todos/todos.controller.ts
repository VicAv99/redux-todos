import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { TodosService } from "./todos.service";

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getAll() {
    return this.todosService.getAll();
  }

  @Post()
  add(@Body() todo: any) {
    return this.todosService.add(todo);
  }

  @Put(':id')
  update(@Body() todo: any) {
    return this.todosService.update(todo);
  }

  @Delete(':id')
  remove(@Body() id: number) {
    return this.todosService.remove(id);
  }

}
