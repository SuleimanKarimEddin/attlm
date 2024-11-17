import { PartialType } from '@nestjs/mapped-types';
import { CreateCacheFqaDto } from './create-cache-fqa.dto';

export class UpdateCacheFqaDto extends PartialType(CreateCacheFqaDto) {}
