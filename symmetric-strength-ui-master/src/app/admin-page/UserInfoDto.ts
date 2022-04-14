import {WeightAndReps} from "./WeightAndReps";

export class UserInfoDto {
  _id?: string;
  sex?: string;
  body_weight?: number;
  unit_system?: string;
  round_to?: number;
  age?: number;
  backSquat?: WeightAndReps;
  frontSquat?: WeightAndReps;
  deadlift?: WeightAndReps;
  sumoDeadlift?: WeightAndReps;
  powerClean?: WeightAndReps;
  benchPress?: WeightAndReps;
  inclineBenchPress?: WeightAndReps;
  dip?: WeightAndReps;
  overheadPress?: WeightAndReps;
  pushPress?: WeightAndReps;
  snatchPress?: WeightAndReps;
  chinup?: WeightAndReps;
  pullup?: WeightAndReps;
  pendlayRow?: WeightAndReps;
  updatedAt?: Date;
}
