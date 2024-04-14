import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Step } from './step.entity';
import { Repository } from 'typeorm';
import { CreateStepDto } from './dto/create-step.dto';

@Injectable()
export class StepsService {
    constructor(
        @InjectRepository(Step)
        private stepRepository: Repository<Step>
    ) { }

    async create(createStepDto: CreateStepDto) {
        const step = new Step();
        step.title = createStepDto.title;
        step.details = createStepDto.details;
        step.assets = createStepDto.assets;
        return await this.stepRepository.save(step);
    }
}
