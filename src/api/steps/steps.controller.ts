import { Body, Controller, Post } from '@nestjs/common';
import { StepsService } from './steps.service';
import { CreateStepDto } from './dto/create-step.dto';

@Controller('steps')
export class StepsController {
    constructor(readonly stepsService: StepsService) { }

    @Post()
    create(@Body() createStepDto: CreateStepDto) {
        return this.stepsService.create(createStepDto);
    }
}
