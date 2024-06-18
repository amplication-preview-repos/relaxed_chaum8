/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { QuizService } from "../quiz.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuizCreateInput } from "./QuizCreateInput";
import { Quiz } from "./Quiz";
import { QuizFindManyArgs } from "./QuizFindManyArgs";
import { QuizWhereUniqueInput } from "./QuizWhereUniqueInput";
import { QuizUpdateInput } from "./QuizUpdateInput";
import { QuestionFindManyArgs } from "../../question/base/QuestionFindManyArgs";
import { Question } from "../../question/base/Question";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";
import { RoomFindManyArgs } from "../../room/base/RoomFindManyArgs";
import { Room } from "../../room/base/Room";
import { RoomWhereUniqueInput } from "../../room/base/RoomWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuizControllerBase {
  constructor(
    protected readonly service: QuizService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Quiz })
  @nestAccessControl.UseRoles({
    resource: "Quiz",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createQuiz(@common.Body() data: QuizCreateInput): Promise<Quiz> {
    return await this.service.createQuiz({
      data: {
        ...data,

        admin: data.admin
          ? {
              connect: data.admin,
            }
          : undefined,
      },
      select: {
        admin: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Quiz] })
  @ApiNestedQuery(QuizFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Quiz",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async quizzes(@common.Req() request: Request): Promise<Quiz[]> {
    const args = plainToClass(QuizFindManyArgs, request.query);
    return this.service.quizzes({
      ...args,
      select: {
        admin: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Quiz })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Quiz",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async quiz(
    @common.Param() params: QuizWhereUniqueInput
  ): Promise<Quiz | null> {
    const result = await this.service.quiz({
      where: params,
      select: {
        admin: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Quiz })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Quiz",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateQuiz(
    @common.Param() params: QuizWhereUniqueInput,
    @common.Body() data: QuizUpdateInput
  ): Promise<Quiz | null> {
    try {
      return await this.service.updateQuiz({
        where: params,
        data: {
          ...data,

          admin: data.admin
            ? {
                connect: data.admin,
              }
            : undefined,
        },
        select: {
          admin: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Quiz })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Quiz",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQuiz(
    @common.Param() params: QuizWhereUniqueInput
  ): Promise<Quiz | null> {
    try {
      return await this.service.deleteQuiz({
        where: params,
        select: {
          admin: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/questions")
  @ApiNestedQuery(QuestionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "any",
  })
  async findQuestions(
    @common.Req() request: Request,
    @common.Param() params: QuizWhereUniqueInput
  ): Promise<Question[]> {
    const query = plainToClass(QuestionFindManyArgs, request.query);
    const results = await this.service.findQuestions(params.id, {
      ...query,
      select: {
        content: true,
        correctAnswer: true,
        createdAt: true,
        id: true,
        options: true,

        quiz: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/questions")
  @nestAccessControl.UseRoles({
    resource: "Quiz",
    action: "update",
    possession: "any",
  })
  async connectQuestions(
    @common.Param() params: QuizWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        connect: body,
      },
    };
    await this.service.updateQuiz({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questions")
  @nestAccessControl.UseRoles({
    resource: "Quiz",
    action: "update",
    possession: "any",
  })
  async updateQuestions(
    @common.Param() params: QuizWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        set: body,
      },
    };
    await this.service.updateQuiz({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questions")
  @nestAccessControl.UseRoles({
    resource: "Quiz",
    action: "update",
    possession: "any",
  })
  async disconnectQuestions(
    @common.Param() params: QuizWhereUniqueInput,
    @common.Body() body: QuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questions: {
        disconnect: body,
      },
    };
    await this.service.updateQuiz({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/rooms")
  @ApiNestedQuery(RoomFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Room",
    action: "read",
    possession: "any",
  })
  async findRooms(
    @common.Req() request: Request,
    @common.Param() params: QuizWhereUniqueInput
  ): Promise<Room[]> {
    const query = plainToClass(RoomFindManyArgs, request.query);
    const results = await this.service.findRooms(params.id, {
      ...query,
      select: {
        admin: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        quiz: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/rooms")
  @nestAccessControl.UseRoles({
    resource: "Quiz",
    action: "update",
    possession: "any",
  })
  async connectRooms(
    @common.Param() params: QuizWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        connect: body,
      },
    };
    await this.service.updateQuiz({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/rooms")
  @nestAccessControl.UseRoles({
    resource: "Quiz",
    action: "update",
    possession: "any",
  })
  async updateRooms(
    @common.Param() params: QuizWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        set: body,
      },
    };
    await this.service.updateQuiz({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/rooms")
  @nestAccessControl.UseRoles({
    resource: "Quiz",
    action: "update",
    possession: "any",
  })
  async disconnectRooms(
    @common.Param() params: QuizWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        disconnect: body,
      },
    };
    await this.service.updateQuiz({
      where: params,
      data,
      select: { id: true },
    });
  }
}
