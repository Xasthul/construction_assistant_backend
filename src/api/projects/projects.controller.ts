import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) { }

    @Get()
    findAll() {
        try {
            return 'Projects array'
        } catch (error) {
            throw new HttpException('Internal error', HttpStatus.INTERNAL_SERVER_ERROR)
        }
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
