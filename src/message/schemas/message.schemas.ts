import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop({ required: true, type: String })
  content: string;

  @Prop({ required: true, type: String })
  date: string;

  @Prop({ required: true, type: Boolean })
  sate: boolean;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
