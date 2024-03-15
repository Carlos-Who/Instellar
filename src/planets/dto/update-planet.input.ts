import { CreatePlanetInput } from './create-planet.input';
import { InputType, Field, Int, PartialType, ID } from "@nestjs/graphql";
import { IsString, IsUUID } from "class-validator";

@InputType()
export class UpdatePlanetInput extends PartialType(CreatePlanetInput) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}
