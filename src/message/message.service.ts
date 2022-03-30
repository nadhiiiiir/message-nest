import { HttpException, Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { Message, MessageDocument } from './schemas/message.schemas';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  async create(createMessageDto: CreateMessageDto): Promise<Message> {
    const createdMessage = new this.messageModel({
      ...createMessageDto,
    });
    return createdMessage.save();
  }

  async update(
    id: string,
    updateMessageDto: UpdateMessageDto,
  ): Promise</*UpdateResult*/ any> {
    return this.messageModel.updateOne({ _id: id }, updateMessageDto);
  }

  async findAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.messageModel.deleteOne({ _id: id });
  }
}
