import * as graphql from "@nestjs/graphql";
import { ReadMeService } from "./readme.service";

export class ReadMeResolver {
  constructor(protected readonly service: ReadMeService) {}
}
