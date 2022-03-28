import {Component, OnInit} from '@angular/core';
import {AnalyzeService} from "../shared/analyze.service";
import {AnalyzeRequestDto} from "../shared/AnalyzeRequestDto";
import {AnalyzeResponseDto} from "../shared/AnalyzeResponseDto";
import {LiftFieldsDto} from "../shared/LiftFieldsDto";
import {TrainingDetails} from "../shared/TrainingDetails";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    units: any[] = [];
    selectedUnit: any = {};
    selectedValue: number = 0;
    values: any[] = [];
    selectedCategories: TrainingDetails[] = [];
    squats: any[] = [{liftName: 'Back Squat', key: 'A'}, {liftName: 'Front Squad', key: 'M'}];
    floorPull: any[] = [{liftName: 'Deadlift', key: 'D'}, {
        liftName: 'Sumo Deadlift',
        key: 'SD'
    }, {liftName: 'Power Clean', key: 'PC'}];
    horizontalPress: any[] = [{liftName: 'Bench Press', key: 'BP'}, {
        liftName: 'Incline Bench Press',
        key: 'IBP'
    }, {liftName: 'Dip', key: 'Di'}];
    verticalPress: any[] = [{liftName: 'Overhead Press', key: 'OP'}, {
        liftName: 'Push Press',
        key: 'PP'
    }, {liftName: 'Snatch Press', key: 'Sp'}];
    pullUps: any[] = [{liftName: 'Chin-up', key: 'Cu'}, {liftName: 'Pull-up', key: 'Pu'}, {
        liftName: 'Pendlay Row',
        key: 'Pr'
    }];
    genders: any[] = [{type: 'Male'}, {type: 'Female'}];
    selectedGender: any;
    bodyWeight: any;
    age: any;
    analyzeRequest: AnalyzeRequestDto = {};
    analyzeResponse: AnalyzeResponseDto = {};
    liftFields: LiftFieldsDto = {};
    respLiftFields: LiftFieldsDto = {};
    horizontalOptions: any;
    liftVsAverageChart: any;

    constructor(
        private analyzeService: AnalyzeService
    ) {
        this.units = [
            {name: 'Metric', label: 'KG'},
            {name: 'Imperial', label: 'LBS'}
        ]

        this.values = [
            {number: 1, unit: 'KG'},
            {number: 2.5, unit: 'KG'},
            {number: 5, unit: 'KG'},
            {number: 10, unit: 'KG'}
        ]
    }

    ngOnInit(): void {
        this.selectedUnit = this.units[0];
        this.liftFields.backSquat = this.squats[0];
        this.liftFields.frontSquat = this.squats[1]
        this.liftFields.deadlift = this.floorPull[0]
        this.liftFields.sumoDeadlift = this.floorPull[1]
        this.liftFields.powerClean = this.floorPull[2]
        this.liftFields.benchPress = this.horizontalPress[0]
        this.liftFields.inclineBenchPress = this.horizontalPress[1]
        this.liftFields.dip = this.horizontalPress[2]
        this.liftFields.overheadPress = this.horizontalPress[0]
        this.liftFields.pushPress = this.horizontalPress[1]
        this.liftFields.snatchPress = this.horizontalPress[2]
        this.liftFields.chinup = this.pullUps[0]
        this.liftFields.pullup = this.pullUps[1]
        this.liftFields.pendlayRow = this.pullUps[2]

        this.liftVsAverageChart = {
            labels: [],
            datasets: [
                {
                    label: 'Average',
                    backgroundColor: '#999',
                    data: []
                },
                {
                    label: 'You',
                    backgroundColor: '#c425a2',
                    data: []
                }
            ]
        };

        this.horizontalOptions = {
            indexAxis: 'y',
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };
    }

    changeUnit(event: any) {
        if (event.value.name == 'Metric') {
            this.values = [
                {number: 1, unit: 'KG'},
                {number: 2.5, unit: 'KG'},
                {number: 5, unit: 'KG'},
                {number: 10, unit: 'KG'}
            ]
        } else {
            this.values = [
                {number: 1, unit: 'LBS'},
                {number: 2.5, unit: 'LBS'},
                {number: 5, unit: 'LBS'},
                {number: 10, unit: 'LBS'}
            ]
        }
    }

    // changeValue(event: any) {
    //   this.selectedValue = event.value.number;
    //   console.log(this.selectedValue)
    //   // this.selectedValue = event.value.number + ' ' + this.selectedUnit.label
    // }
    submit() {

        this.analyzeRequest.unitsystem = this.selectedUnit.name;
        this.analyzeRequest.bodyweight = this.bodyWeight;
        this.analyzeRequest.sex = this.selectedGender.type;
        this.analyzeRequest.age = this.age;

        this.selectedCategories.forEach(
            value => {
                if (value.liftName === 'Back Squat') {
                    this.liftFields.backSquat = value;
                    this.liftFields.backSquat.checked = true;
                } else if (value.liftName === 'Front Squat') {
                    this.liftFields.frontSquat = value;
                    this.liftFields.frontSquat.checked = true;
                } else if (value.liftName === 'Deadlift') {
                    this.liftFields.deadlift = value;
                    this.liftFields.deadlift.checked = true;
                } else if (value.liftName === 'Sumo Deadlift') {
                    this.liftFields.sumoDeadlift = value;
                    this.liftFields.sumoDeadlift.checked = true;
                } else if (value.liftName === 'Power Clean') {
                    this.liftFields.powerClean = value;
                    this.liftFields.powerClean.checked = true;
                } else if (value.liftName === 'Bench Press') {
                    this.liftFields.benchPress = value;
                    this.liftFields.benchPress.checked = true;
                } else if (value.liftName === 'Incline Bench Press') {
                    this.liftFields.inclineBenchPress = value;
                    this.liftFields.inclineBenchPress.checked = true;
                } else if (value.liftName === 'Dip') {
                    this.liftFields.dip = value;
                    this.liftFields.dip.checked = true;
                } else if (value.liftName === 'Overhead Press') {
                    this.liftFields.overheadPress = value;
                    this.liftFields.overheadPress.checked = true;
                } else if (value.liftName === 'Push Press') {
                    this.liftFields.pushPress = value;
                    this.liftFields.pushPress.checked = true;
                } else if (value.liftName === 'Snatch Press') {
                    this.liftFields.snatchPress = value;
                    this.liftFields.snatchPress.checked = true;
                } else if (value.liftName === 'Chin-up') {
                    this.liftFields.chinup = value;
                    this.liftFields.chinup.checked = true;
                } else if (value.liftName === 'Pull-up') {
                    this.liftFields.pullup = value;
                    this.liftFields.pullup.checked = true;
                } else if (value.liftName === 'Pendlay Row') {
                    this.liftFields.pendlayRow = value;
                    this.liftFields.pendlayRow.checked = true;
                }
            }
        )

        this.analyzeRequest.liftfields = this.liftFields;
        console.log('req: ', this.analyzeRequest)

        this.analyzeService.analyze(this.analyzeRequest).subscribe(data => {
            if (data.success) {
                this.analyzeResponse = data.data;

                console.log('kir: ', this.analyzeResponse)

                this.selectedCategories.forEach(value => {
                    if (value.reps) {
                        this.liftVsAverageChart.labels.push(value.liftName);
                        this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.backSquat?.userScore);
                        this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.backSquat?.expected);
                    }
                })
            }
        })
    }
}
