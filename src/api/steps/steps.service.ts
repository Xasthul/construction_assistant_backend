import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Step } from './step.entity';
import { Repository } from 'typeorm';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';

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

    async findAll() {
        return await this.stepRepository.find();
    }

    async update(id: number, updateStepDto: UpdateStepDto) {
        return await this.stepRepository.update({ id: id }, updateStepDto);
    }

    async delete(id: number) {
        return await this.stepRepository.delete({ id: id });
    }

    async complete(id: number) {
        return await this.stepRepository.update({ id: id }, { isCompleted: true });
    }
}
