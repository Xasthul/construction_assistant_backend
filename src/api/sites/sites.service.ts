import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from './site.entity';
import { Repository } from 'typeorm';
import { CreateSiteDto } from './dto/create-site.dto';
import { Project } from '../projects/project.entity';

@Injectable()
export class SitesService {
    constructor(
        @InjectRepository(Project)
        private projectRepository: Repository<Project>,
        @InjectRepository(Site)
        private siteRepository: Repository<Site>
    ) { }

    async create(createSiteDto: CreateSiteDto) {
        const project = await this.projectRepository.findOneBy({ id: createSiteDto.projectId });
        if (!project) {
            throw new Error('Project with such id not found');
        }
        const site = new Site();
        site.title = createSiteDto.title;
        site.projectId = createSiteDto.projectId;
        return await this.siteRepository.save(site);
    }
}
