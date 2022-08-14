import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { MyDocController } from "./api/v1/my-doc/controller/my-doc.controller";
import { MyDocService } from "./api/v1/my-doc/services/my-doc.service";
import { MedicationController } from "./api/v1/medication/controller/medication.controller";
import { MedicationService } from "./api/v1/medication/services/medication.service";
import { ConfigModule } from "@nestjs/config";
import configuration from "./config/configuration";
import { CookbookController } from "./api/v1/cookbook/controller/cookbook.controller";
import { CookbookService } from "./api/v1/cookbook/services/cookbook.service";

const v1Controllers = [
  MyDocController,
  MedicationController,
  CookbookController,
];

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AppController, ...v1Controllers],
  providers: [MyDocService, MedicationService, CookbookService],
})
export class AppModule {}
