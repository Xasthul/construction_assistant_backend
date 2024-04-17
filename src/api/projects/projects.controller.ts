import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectIdParam } from './dto/project-id.param';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@Controller('projects')
@UseGuards(JwtAuthGuard)
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
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createProjectDto: CreateProjectDto) {
        return this.projectsService.create(createProjectDto);
    }

    @Put(':id')
    update() {
        return 'Update project'
    }

    @Delete(':id')
    delete(@Param() projectIdParam: ProjectIdParam) {
        return this.projectsService.delete(projectIdParam.id);
    }
}
