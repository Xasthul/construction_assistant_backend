import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@Controller('sites')
@UseGuards(JwtAuthGuard)
export class SitesController {
    constructor(private sitesService: SitesService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createSiteDto: CreateSiteDto) {
        return this.sitesService.create(createSiteDto);
    }
}
