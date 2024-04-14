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
        try {
            return this.stepsService.create(createStepDto);
        } catch (error) {
            throw new HttpException('Internal error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get()
    findAll() {
        try {
            return this.stepsService.findAll();
        } catch (error) {
            throw new HttpException('Internal error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Put(':id')
    update(
        @Param() stepIdParam: StepIdParam,
        @Body() updateStepDto: UpdateStepDto,
    ) {
        try {
            return this.stepsService.update(stepIdParam.id, updateStepDto);
        } catch (error) {
            throw new HttpException('Internal error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Delete(':id')
    delete(@Param() stepIdParam: StepIdParam) {
        try {
            return this.stepsService.delete(stepIdParam.id);
        } catch (error) {
            throw new HttpException('Internal error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Put('complete/:id')
    complete(@Param() stepIdParam: StepIdParam) {
        try {
            return this.stepsService.complete(stepIdParam.id);
        } catch (error) {
            throw new HttpException('Internal error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
