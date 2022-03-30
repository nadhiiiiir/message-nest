import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import Message from './message.interface';

import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly MessageService: MessageService) {}
  @Get()
  findAll() {
    return this.MessageService.findAll();
  }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto): Promise<Message> {
    return this.MessageService.create(createMessageDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateMessageDto: UpdateMessageDto,
  ): Promise<Message> {
    return this.MessageService.update(id, updateMessageDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.MessageService.delete(id);
  }
}
