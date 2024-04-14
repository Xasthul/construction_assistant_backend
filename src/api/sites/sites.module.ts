import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesController } from './sites.controller';
import { Site } from './site.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Site])],
  providers: [SitesService],
  controllers: [SitesController]
})
export class SitesModule { }
