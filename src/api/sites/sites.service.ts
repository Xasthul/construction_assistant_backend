import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Site } from './site.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SitesService {
    constructor(
        @InjectRepository(Site)
        private siteRepository: Repository<Site>
    ) { }
}
