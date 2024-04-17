import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Step } from '../domain/models/step.entity';
import { StepsModule } from './steps/steps.module';
import { SitesModule } from './sites/sites.module';
import { Site } from '../domain/models/site.entity';
import { Project } from '../domain/models/project.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from 'src/domain/models/user.entity';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      load: [configuration]
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nestjs',
      entities: [User, Project, Site, Step],
      // TODO(nazhon): remove in production
      synchronize: true,
    }),
    ProjectsModule,
    StepsModule,
    SitesModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('projects')
  }
}
