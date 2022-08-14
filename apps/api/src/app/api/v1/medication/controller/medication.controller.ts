import { Controller, Get, Query } from '@nestjs/common';
import { MedicationService } from '../services/medication.service';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';

@Controller({
  version: "1",
  path: "medication",
})
export class MedicationController {
  constructor(private readonly medicationService: MedicationService) {
  }

  @Get()
  @ApiImplicitQuery({
    name: "count",
    required: false,
    type: Number,
  })
  @ApiImplicitQuery({
    name: "page",
    required: false,
    type: Number,
  })
  getMedication(
    @Query("name") name: string,
    @Query("count") count: number,
    @Query("page") page: number
  ) {
    return this.medicationService.getMedication(name, count, page);
  }
}
