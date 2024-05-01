import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from '../../domain/models/site.entity';
import { Repository } from 'typeorm';
import { CreateSiteDto } from './dto/create-site.dto';
import { Project } from '../../domain/models/project.entity';

@Injectable()
export class SitesService {
    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>,
        @InjectRepository(Site)
        private siteRepository: Repository<Site>
    ) { }

    async findAll(projectId: string, userId: string): Promise<Site[]> {
        return await this.siteRepository.find({
            where: {
                project: {
                    id: projectId,
                    userId: userId
                }
            },
            relations: { project: false, steps: false },
        });
    }

    async create(createSiteDto: CreateSiteDto, userId: string): Promise<void> {
        const project = await this.projectRepository.findOne({
            where: {
                id: createSiteDto.projectId,
                userId: userId,
            },
            relations: { user: false, sites: false },
        });
        if (!project) {
            throw new NotFoundException('Project with such id was not found');
        }
        const site = new Site();
        site.title = createSiteDto.title;
        site.projectId = project.id;
        await this.siteRepository.save(site);
    }
}
