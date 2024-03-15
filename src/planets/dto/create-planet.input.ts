import { InputType, Int, Field, Float } from "@nestjs/graphql";
import { IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

@InputType()
export class CreatePlanetInput {

  @Field( ()=> String )
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field( () => Int )
  @IsNumber()
  @Min(0)
  moons: number;

  @Field( () => Float )
  @IsNumber()
  @Min(0)
  sizeRadiusInMiles: number;

  @Field( () => Float )
  @IsNumber()
  @Min(0)
  sizeRadiusInKilometers: number;

}
