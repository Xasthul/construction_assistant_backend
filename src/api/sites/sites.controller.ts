import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequestUser } from '../common/decorators/request-user.decorator';
import { JwtPayload } from '../auth/dto/jwt-payload';

@Controller('sites')
@UseGuards(JwtAuthGuard)
@ApiTags('Sites')
@ApiBearerAuth('JWT-auth')
export class SitesController {
    constructor(private sitesService: SitesService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: "Create site for project" })
    @ApiResponse({ status: HttpStatus.CREATED })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Project with such id not found' })
    create(
        @Body() createSiteDto: CreateSiteDto,
        @RequestUser() user: JwtPayload,
    ) {
        return this.sitesService.create(createSiteDto, user.id);
    }
}
