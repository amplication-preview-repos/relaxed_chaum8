/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoomWhereUniqueInput } from "../../room/base/RoomWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PlayerUpdateInput {
  @ApiProperty({
    required: false,
    type: () => RoomWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RoomWhereUniqueInput)
  @IsOptional()
  @Field(() => RoomWhereUniqueInput, {
    nullable: true,
  })
  room?: RoomWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { PlayerUpdateInput as PlayerUpdateInput };
