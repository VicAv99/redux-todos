import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
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
  update(@Param('id') id: number, @Body() todo: any) {
    return this.todosService.update(todo);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    console.log(id)
    return this.todosService.remove(+id);
  }

}
