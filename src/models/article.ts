import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'article' })
export class Article extends Document {
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

export const ArticleSchema = SchemaFactory.createForClass(Article);
