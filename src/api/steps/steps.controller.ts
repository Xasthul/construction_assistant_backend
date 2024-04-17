import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { StepsService } from './steps.service';
import { CreateStepDto } from './dto/create-step.dto';
import { StepIdParam } from './dto/step-id.param';
import { UpdateStepDto } from './dto/update-step.dto';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@Controller('steps')
@UseGuards(JwtAuthGuard)
export class StepsController {
    constructor(readonly stepsService: StepsService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
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
