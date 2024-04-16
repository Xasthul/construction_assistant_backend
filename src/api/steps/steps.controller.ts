import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { StepsService } from './steps.service';
import { CreateStepDto } from './dto/create-step.dto';
import { StepIdParam } from './dto/step-id.param';
import { UpdateStepDto } from './dto/update-step.dto';

@Controller('steps')
export class StepsController {
    constructor(readonly stepsService: StepsService) { }

    @Post()
    create(@Body() createStepDto: CreateStepDto) {
        return this.stepsService.create(createStepDto);
    }

    @Get()
    findAll() {
        return this.stepsService.findAll();
    }

    @Put(':id')
    update(
        @Param() stepIdParam: StepIdParam,
        @Body() updateStepDto: UpdateStepDto,
    ) {
        return this.stepsService.update(stepIdParam.id, updateStepDto);
    }

    @Delete(':id')
    delete(@Param() stepIdParam: StepIdParam) {
        return this.stepsService.delete(stepIdParam.id);
    }

    @Put('complete/:id')
    complete(@Param() stepIdParam: StepIdParam) {
        return this.stepsService.complete(stepIdParam.id);
    }
}
