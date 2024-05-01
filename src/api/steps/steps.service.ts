import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Step } from '../../domain/models/step.entity';
import { Repository } from 'typeorm';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';

@Injectable()
export class StepsService {
    constructor(
        @InjectRepository(Step)
        private stepRepository: Repository<Step>
    ) { }

    async findAll(
        projectId: string,
        siteId: string,
        userId: string
    ): Promise<Step[]> {
        return await this.stepRepository.find({
            where: {
                site: {
                    project: {
                        id: projectId,
                        userId: userId,
                    },
                    id: siteId,
                },
            }
        });
    }

    async create(createStepDto: CreateStepDto): Promise<Step> {
        const step = new Step();
        step.title = createStepDto.title;
        step.details = createStepDto.details;
        step.assets = createStepDto.assets;
        return await this.stepRepository.save(step);
    }

    async update(id: string, updateStepDto: UpdateStepDto) {
        return await this.stepRepository.update({ id: id }, updateStepDto);
    }

    async delete(id: string) {
        await this.stepRepository.delete({ id: id });
    }

    async complete(id: string) {
        return await this.stepRepository.update({ id: id }, { isCompleted: true });
    }
}
