import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesController } from './sites.controller';
import { Site } from './site.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from '../projects/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Site])],
  providers: [SitesService],
  controllers: [SitesController]
})
export class SitesModule { }
