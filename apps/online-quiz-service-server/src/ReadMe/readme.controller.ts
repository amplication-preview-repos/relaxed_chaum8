import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReadMeService } from "./readme.service";

@swagger.ApiTags("readMes")
@common.Controller("readMes")
export class ReadMeController {
  constructor(protected readonly service: ReadMeService) {}
}
