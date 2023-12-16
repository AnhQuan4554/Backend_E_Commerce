import { PartialType } from '@nestjs/mapped-types';
import { CreateNotifycationDto } from './create-notifycation.dto';

export class UpdateNotifycationDto extends PartialType(CreateNotifycationDto) {}
