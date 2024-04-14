import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Step } from './step.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StepsService {
    constructor(
        @InjectRepository(Step)
        private stepRepository: Repository<Step>
    ) { }
}
