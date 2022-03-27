import {LiftFieldsDto} from "./LiftFieldsDto";

export class AnalyzeRequestDto {
  bodyweight?: number
  age?: number
  round?: number
  sex ?: string
  unitsystem ?: string
  liftfields ?: LiftFieldsDto;
}
