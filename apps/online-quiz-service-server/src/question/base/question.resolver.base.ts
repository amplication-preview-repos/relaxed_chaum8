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
import { Question } from "./Question";
import { QuestionCountArgs } from "./QuestionCountArgs";
import { QuestionFindManyArgs } from "./QuestionFindManyArgs";
import { QuestionFindUniqueArgs } from "./QuestionFindUniqueArgs";
import { CreateQuestionArgs } from "./CreateQuestionArgs";
import { UpdateQuestionArgs } from "./UpdateQuestionArgs";
import { DeleteQuestionArgs } from "./DeleteQuestionArgs";
import { Quiz } from "../../quiz/base/Quiz";
import { QuestionService } from "../question.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Question)
export class QuestionResolverBase {
  constructor(
    protected readonly service: QuestionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "any",
  })
  async _questionsMeta(
    @graphql.Args() args: QuestionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Question])
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "any",
  })
  async questions(
    @graphql.Args() args: QuestionFindManyArgs
  ): Promise<Question[]> {
    return this.service.questions(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Question, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "own",
  })
  async question(
    @graphql.Args() args: QuestionFindUniqueArgs
  ): Promise<Question | null> {
    const result = await this.service.question(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Question)
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "create",
    possession: "any",
  })
  async createQuestion(
    @graphql.Args() args: CreateQuestionArgs
  ): Promise<Question> {
    return await this.service.createQuestion({
      ...args,
      data: {
        ...args.data,

        quiz: args.data.quiz
          ? {
              connect: args.data.quiz,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Question)
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "update",
    possession: "any",
  })
  async updateQuestion(
    @graphql.Args() args: UpdateQuestionArgs
  ): Promise<Question | null> {
    try {
      return await this.service.updateQuestion({
        ...args,
        data: {
          ...args.data,

          quiz: args.data.quiz
            ? {
                connect: args.data.quiz,
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

  @graphql.Mutation(() => Question)
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "delete",
    possession: "any",
  })
  async deleteQuestion(
    @graphql.Args() args: DeleteQuestionArgs
  ): Promise<Question | null> {
    try {
      return await this.service.deleteQuestion(args);
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
  @graphql.ResolveField(() => Quiz, {
    nullable: true,
    name: "quiz",
  })
  @nestAccessControl.UseRoles({
    resource: "Quiz",
    action: "read",
    possession: "any",
  })
  async getQuiz(@graphql.Parent() parent: Question): Promise<Quiz | null> {
    const result = await this.service.getQuiz(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
