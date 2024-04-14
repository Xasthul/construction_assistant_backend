import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('project')
export class ProjectController {
    constructor(private projectService: ProjectService) { }

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
