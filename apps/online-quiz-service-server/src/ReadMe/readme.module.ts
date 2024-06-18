import { Module } from "@nestjs/common";
import { ReadMeService } from "./readme.service";
import { ReadMeController } from "./readme.controller";
import { ReadMeResolver } from "./readme.resolver";

@Module({
  controllers: [ReadMeController],
  providers: [ReadMeService, ReadMeResolver],
  exports: [ReadMeService],
})
export class ReadMeModule {}
