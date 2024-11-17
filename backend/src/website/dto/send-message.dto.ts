import { IsString } from "class-validator";

export class SendMessageDto {
  @IsString()
    guestId: string;
    @IsString()
    message: string;
  }
  