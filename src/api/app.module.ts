import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Step } from '../domain/models/step.entity';
import { StepsModule } from './steps/steps.module';
import { SitesModule } from './sites/sites.module';
import { Site } from '../domain/models/site.entity';
import { Project } from '../domain/models/project.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nestjs',
      entities: [Project, Site, Step],
      // TODO(nazhon): remove in production
      synchronize: true,
    }),
    ProjectsModule,
    StepsModule,
    SitesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) {
    console.log('Connection with database established successfully.')
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('projects')
  }
}
