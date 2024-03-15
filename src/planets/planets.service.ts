import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePlanetInput } from './dto/create-planet.input';
import { UpdatePlanetInput } from './dto/update-planet.input';
import { Planet } from "./entities/planet.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PlanetsService {


  constructor(
    @InjectRepository(Planet)
    private readonly planetsRepository: Repository<Planet>,
  ) { }

  async create(createPlanetInput: CreatePlanetInput): Promise<Planet> {
    const newPlanet: Planet = this.planetsRepository.create(createPlanetInput);
    return this.planetsRepository.save(newPlanet);
  }

  async findAll(): Promise<Planet[]> {
    // TODO: Paginate, Filter, etc...
    return this.planetsRepository.find();
  }

  async findOne(id: string): Promise<Planet> {
    const planet = await this.planetsRepository.findOneBy({id});
    if(!planet) {
      throw new NotFoundException(`Planet with id [${id}] was not found.`)
    }
    return planet;
  }

  async update(id: string, updatePlanetInput: UpdatePlanetInput): Promise<Planet> {
    const planet = await this.planetsRepository.preload(updatePlanetInput);
    if(!planet) throw new NotFoundException(`Planet with id [${id}] was not found.`);
    return this.planetsRepository.save(planet);
  }

  async remove(id: string) {
    const planet: Planet = await this.findOne(id);
    const planetCopy = {...planet};
    await this.planetsRepository.remove(planet);
    return planetCopy;
  }
}

