export class AnalyzeResponseDto {
  totalScore?: number
  symmetryScore?: number
  powerliftingWilks?: number
  powerliftingTotal?: number
  strongestLift?: string
  weakestLift?: string
  strongestMuscleGroups?: string
  weakestMuscleGroups?: string
  scoreClass?: string
  chartHeight?: number
  lifts?: {
    'backSquat'?: {
      user1RM?: number
      userScore?: number
      expected?: number
    }
    frontSquat?: {
      user1RM?: number
      userScore?: number
      expected?: number
    }
    deadlift?: {
      user1RM?: number
      userScore?: number
      expected?: number
    }
    sumoDeadlift?: {
      user1RM?: number
      userScore?: number
      expected?: number
    }
    powerClean?: {
      user1RM?: number
      userScore?: number
      expected?: number
    }
    benchPress?: {
      user1RM?: number
      userScore?: number
      expected?: number
    }
    inclineBenchPress?: {
      user1RM?: number
      userScore?: number
      expected?: number
    }
    dip?: {
      user1RM?: number
      special1RM?: number
      userScore?: number
      expected?: number
    }
    overheadPress?: {
      user1RM?: number
      userScore?: number
      expected?: number
    }
    pushPress?: {
      user1RM?: number
      userScore?: number
      expected?: number
    }
    snatchPress?: {
      user1RM?: number
      userScore?: number
      expected?: number
    }
    chinup?: {
      user1RM?: number
      special1RM?: number
      userScore?: number
      expected?: number
    }
    pullup?: {
      user1RM?: number
      special1RM?: number
      userScore?: number
      expected?: number
    }
    pendlayRow?: {
      user1RM?: number
      userScore?: number
      expected?: number
    }
  }
  categories?: {
    squat?: number
    floorPull?: number
    horizontalPress?: number
    pullup?: number
  }
  muscleGroups?: {
    upperTraps?: number
    middleTraps?: number
    lowerTraps?: number
    frontDelts?: number
    sideDelts?: number
    rearDelts?: number
    rotatorCuff?: number
    upperChest?: number
    lowerChest?: number
    biceps?: number
    triceps?: number
    forearms?: number
    serratusAndObliques?: number
    abdominals?: number
    latsAndTeresMajor?: number
    spinalErectors?: number
    glutes?: number
    hamstrings?: number
    quads?: number
    hipFlexors?: number
    hipAdductors?: number
    calves?: number
  }
}
