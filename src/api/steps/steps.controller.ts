import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { StepsService } from './steps.service';
import { CreateStepDto } from './dto/create-step.dto';
import { StepIdParam } from './dto/step-id.param';
import { UpdateStepDto } from './dto/update-step.dto';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('steps')
@UseGuards(JwtAuthGuard)
@ApiTags('Steps')
@ApiBearerAuth('JWT-auth')
export class StepsController {
    constructor(readonly stepsService: StepsService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create new step' })
    @ApiResponse({ status: 201 })
    create(@Body() createStepDto: CreateStepDto) {
        return this.stepsService.create(createStepDto);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get all steps' })
    @ApiResponse({ status: 200 })
    findAll() {
        return this.stepsService.findAll();
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Update step' })
    @ApiResponse({ status: 200 })
    update(
        @Param() stepIdParam: StepIdParam,
        @Body() updateStepDto: UpdateStepDto,
    ) {
        return this.stepsService.update(stepIdParam.id, updateStepDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Remove step' })
    @ApiResponse({ status: 200 })
    delete(@Param() stepIdParam: StepIdParam) {
        return this.stepsService.delete(stepIdParam.id);
    }

    @Put('complete/:id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Complete step' })
    @ApiResponse({ status: 200 })
    complete(@Param() stepIdParam: StepIdParam) {
        return this.stepsService.complete(stepIdParam.id);
    }
}
