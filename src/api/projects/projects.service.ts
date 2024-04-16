import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>
    ) { }

    async create(createProjectDto: CreateProjectDto) {
        const project = new Project();
        project.title = createProjectDto.title;
        return await this.projectRepository.save(project);
    }

    async delete(id: number) {
        return await this.projectRepository.delete({ id: id });
    }
}
