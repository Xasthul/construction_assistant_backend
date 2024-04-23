import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectIdParam } from './dto/project-id.param';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { User } from '../common/decorators/user.decorator';
import { JwtPayload } from '../auth/dto/jwt-payload';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('projects')
@UseGuards(JwtAuthGuard)
@ApiTags('Projects')
@ApiBearerAuth('JWT-auth')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) { }

    @Get()
    findAll(@User() user: JwtPayload) {
        return user.id
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
