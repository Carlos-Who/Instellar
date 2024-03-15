import { Resolver, Query, Mutation, Args, Int, ID } from "@nestjs/graphql";
import { PlanetsService } from './planets.service';
import { Planet } from './entities/planet.entity';
import { ParseUUIDPipe } from "@nestjs/common";
import { CreatePlanetInput } from './dto/create-planet.input';
import { UpdatePlanetInput } from './dto/update-planet.input';

@Resolver(() => Planet)
export class PlanetsResolver {
  constructor(private readonly planetsService: PlanetsService) {}

  @Mutation(() => Planet)
  createPlanet(@Args('createPlanetInput') createPlanetInput: CreatePlanetInput) {
    return this.planetsService.create(createPlanetInput);
  }

  @Query(() => [Planet], { name: 'planets' })
  async findAll(): Promise<Planet[]> {
    return this.planetsService.findAll();
  }

  @Query(() => Planet, { name: 'planet' })
  findOne(@Args('id', { type: () => ID }, ParseUUIDPipe) id: string): Promise<Planet> {
    return this.planetsService.findOne(id);
  }

  @Mutation(() => Planet)
  async updatePlanet(@Args('updatePlanetInput') updatePlanetInput: UpdatePlanetInput): Promise<Planet> {
    return this.planetsService.update(updatePlanetInput.id, updatePlanetInput);
  }

  @Mutation(() => Planet)
  removePlanet(@Args('id', { type: () => ID }) id: string): Promise<Planet> {
    return this.planetsService.remove(id);
  }
}
