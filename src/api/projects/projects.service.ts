import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../../domain/models/project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>
    ) { }

    async findAll(userId: string): Promise<Project[]> {
        return await this.projectRepository.find({
            where: { user: { id: userId } },
            relations: { user: false, sites: false },
        });
    }

    async findById(projectId: string, userId: string): Promise<Project> {
        const project = await this.projectRepository.findOne({
            where: {
                id: projectId,
                user: { id: userId },
            },
            relations: { user: false, sites: false },
        });

        if (!project) {
            throw new NotFoundException();
        }
        return project;
    }

    async create(createProjectDto: CreateProjectDto) {
        const project = new Project();
        project.title = createProjectDto.title;
        return await this.projectRepository.save(project);
    }

    async delete(id: string) {
        return await this.projectRepository.delete({ id: id });
    }
}
