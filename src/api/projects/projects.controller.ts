import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectIdParam } from './dto/project-id.param';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { RequestUser } from '../common/decorators/request-user.decorator';
import { JwtPayload } from '../auth/dto/jwt-payload';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProjectItemsResource } from './resources/project-items';
import { ProjectResource } from './resources/project';

@Controller('projects')
@UseGuards(JwtAuthGuard)
@ApiTags('Projects')
@ApiBearerAuth('JWT-auth')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ description: "Get all user's projects" })
    @ApiResponse({ status: HttpStatus.OK, type: ProjectItemsResource })
    async findAll(@RequestUser() user: JwtPayload) {
        const projects = await this.projectsService.findAll(user.id);

        return ProjectItemsResource.from(
            projects.map(
                (project) => ProjectResource.from(project),
            ),
        );
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
