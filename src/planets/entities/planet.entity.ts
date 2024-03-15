import { ObjectType, Field, Int, ID, Float } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({name: 'planets'})
@ObjectType()
export class Planet {

  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field( () => String )
  @Column({ unique: true })
  name: string;

  @Field( () => Int )
  @Column()
  moons: number;

  @Field( () => Float )
  @Column()
  sizeRadiusInMiles: number;

  @Field( () => Float )
  @Column()
  sizeRadiusInKilometers: number;
}


// @Field(() => Int, { description: 'Example field (placeholder)' })
// exampleField: number;