import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('sites')
@UseGuards(JwtAuthGuard)
@ApiTags('Sites')
@ApiBearerAuth('JWT-auth')
export class SitesController {
    constructor(private sitesService: SitesService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createSiteDto: CreateSiteDto) {
        return this.sitesService.create(createSiteDto);
    }
}
