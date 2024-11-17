import { PartialType } from '@nestjs/mapped-types';
import { CreateFAQDto } from './create-faq.dto';

export class UpdateFaqDto extends PartialType(CreateFAQDto) {}
