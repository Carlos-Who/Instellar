import { Module } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { PlanetsResolver } from './planets.resolver';
import { Planet } from './entities/planet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PlanetsResolver, PlanetsService],
  imports: [
    TypeOrmModule.forFeature([Planet]),
  ],
})
export class PlanetsModule {}
