import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) { }

    @Get()
    findAll() {
        return 'Projects array'
    }

    @Get(':id')
    findOne() {
        return 'Project by id'
    }

    @Post()
    create(@Body() createProjectDto: CreateProjectDto) {
        return 'Create project'
    }

    @Put(':id')
    update() {
        return 'Update project'
    }

    @Delete(':id')
    delete() {
        return 'Delete project'
    }
}
