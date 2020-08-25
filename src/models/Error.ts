import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'error' })
export class Error extends Document {
  @Prop()
  category: string;

  @Prop()
  createTime: string;

  @Prop()
  description: string;

  @Prop()
  tag: string;

  @Prop()
  title: string;
}

export const ErrorSchema = SchemaFactory.createForClass(Error);
