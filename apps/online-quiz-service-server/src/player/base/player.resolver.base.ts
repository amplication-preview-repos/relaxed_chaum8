/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Player } from "./Player";
import { PlayerCountArgs } from "./PlayerCountArgs";
import { PlayerFindManyArgs } from "./PlayerFindManyArgs";
import { PlayerFindUniqueArgs } from "./PlayerFindUniqueArgs";
import { CreatePlayerArgs } from "./CreatePlayerArgs";
import { UpdatePlayerArgs } from "./UpdatePlayerArgs";
import { DeletePlayerArgs } from "./DeletePlayerArgs";
import { Room } from "../../room/base/Room";
import { PlayerService } from "../player.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Player)
export class PlayerResolverBase {
  constructor(
    protected readonly service: PlayerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "any",
  })
  async _playersMeta(
    @graphql.Args() args: PlayerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Player])
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "any",
  })
  async players(@graphql.Args() args: PlayerFindManyArgs): Promise<Player[]> {
    return this.service.players(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Player, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "read",
    possession: "own",
  })
  async player(
    @graphql.Args() args: PlayerFindUniqueArgs
  ): Promise<Player | null> {
    const result = await this.service.player(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Player)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "create",
    possession: "any",
  })
  async createPlayer(@graphql.Args() args: CreatePlayerArgs): Promise<Player> {
    return await this.service.createPlayer({
      ...args,
      data: {
        ...args.data,

        room: args.data.room
          ? {
              connect: args.data.room,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Player)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "update",
    possession: "any",
  })
  async updatePlayer(
    @graphql.Args() args: UpdatePlayerArgs
  ): Promise<Player | null> {
    try {
      return await this.service.updatePlayer({
        ...args,
        data: {
          ...args.data,

          room: args.data.room
            ? {
                connect: args.data.room,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Player)
  @nestAccessControl.UseRoles({
    resource: "Player",
    action: "delete",
    possession: "any",
  })
  async deletePlayer(
    @graphql.Args() args: DeletePlayerArgs
  ): Promise<Player | null> {
    try {
      return await this.service.deletePlayer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Room, {
    nullable: true,
    name: "room",
  })
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "read",
    possession: "any",
  })
  async getRoom(@graphql.Parent() parent: Player): Promise<Room | null> {
    const result = await this.service.getRoom(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
