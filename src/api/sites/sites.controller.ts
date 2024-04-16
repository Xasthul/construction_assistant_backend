import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SitesService } from './sites.service';
import { CreateSiteDto } from './dto/create-site.dto';

@Controller('sites')
export class SitesController {
    constructor(private sitesService: SitesService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createSiteDto: CreateSiteDto) {
        return this.sitesService.create(createSiteDto);
    }
}
