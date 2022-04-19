import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AnalyzeService} from "../shared/analyze.service";
import {AnalyzeRequestDto} from "../shared/AnalyzeRequestDto";
import {AnalyzeResponseDto} from "../shared/AnalyzeResponseDto";
import {LiftFieldsDto} from "../shared/LiftFieldsDto";
import {TrainingDetails} from "../shared/TrainingDetails";
import {StrengthStandardService} from "../../strength-standards/strength-standards/shared/strength-standard.service";
import {StandardResponseDto} from "../../strength-standards/strength-standards/shared/StandardResponseDto";
import {MessageService} from "primeng/api";
import {AuthService} from "../../shared/auth/auth.service";
import * as Highcharts from 'highcharts';
import * as echarts from 'echarts';
import {FriendsService} from "../shared/friends.service";
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  showResult: boolean = false;
  displayHelp: boolean = false;
  clicked = 0;
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
  horizontalOptions2: any;
  liftVsAverageChart: any;
  liftVsAverageChart2: any;
  reps: any = [];
  rounds: any = [];
  selectedRep: any = {};
  selectedRound: any = {};
  response: StandardResponseDto = {};
  isLoggedIn: boolean = false;
  xAuthToken: string | null = '';

  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'columnrange',
      inverted: true
    },

    accessibility: {
      description: 'Image description: A column range chart compares the monthly temperature variations throughout 2017 in Vik I Sogn, Norway. The chart is interactive and displays the temperature range for each month when hovering over the data. The temperature is measured in degrees Celsius on the X-axis and the months are plotted on the Y-axis. The lowest temperature is recorded in March at minus 10.2 Celsius. The lowest range of temperatures is found in December ranging from a low of minus 9 to a high of 8.6 Celsius. The highest temperature is found in July at 26.2 Celsius. July also has the highest range of temperatures from 6 to 26.2 Celsius. The broadest range of temperatures is found in May ranging from a low of minus 0.6 to a high of 23.1 Celsius.'
    },

    title: {
      text: 'Temperature variation by month'
    },

    subtitle: {
      text: 'Observed in Vik i Sogn, Norway, 2017'
    },

    xAxis: {},

    yAxis: {
      title: {
        text: 'Temperature ( °C )'
      }
    },

    tooltip: {
      valueSuffix: '°C'
    },

    plotOptions: {
      columnrange: {
        dataLabels: {
          enabled: true,
          format: '{y}°C'
        }
      }
    },

    legend: {
      enabled: false
    },

    series: [{
      name: 'Temperatures',
      type: 'column',
      data: [
        [10.3, -9.9],
        [8.5, -8.6],
        [11.8, -10.2],
        [12.2, -1.7],
        [23.1, -0.6],
        [25.4, 3.7],
        [26.2, 6.0],
        [21.4, 6.7],
        [19.5, 3.5],
        [16.0, -1.3],
        [9.4, -8.7],
        [8.6, -9.0]
      ]
    }]
  }

  //TODO Create friend objects
  friends: any = [];

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  hovering: any = {
    upperTraps: false,
    middleTraps: false,
    lowerTraps: false,
    frontDelts: false,
    sideDelts: false,
    rearDelts: false,
    rotatorCuff: false,
    upperChest: false,
    lowerChest: false,
    biceps: false,
    triceps: false,
    forearms: false,
    serratusAndObliques: false,
    abdominals: false,
    latsAndTeresMajor: false,
    spinalErectors: false,
    glutes: false,
    hamstrings: false,
    quads: false,
    hipFlexors: false,
    hipAdductors: false,
    calves: false
  }

  constructor(
    private toastr: MessageService,
    private analyzeService: AnalyzeService,
    private strengthStandardService: StrengthStandardService,
    private authService: AuthService,
    private friendsService: FriendsService,
    private changeDetector: ChangeDetectorRef
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

    this.reps = [
      {value: 1, label: '1 rep maxes'},
      {value: 2, label: '2 rep maxes'},
      {value: 3, label: '3 rep maxes'},
      {value: 4, label: '4 rep maxes'},
      {value: 5, label: '5 rep maxes'},
      {value: 6, label: '6 rep maxes'},
      {value: 7, label: '7 rep maxes'},
      {value: 8, label: '8 rep maxes'},
      {value: 9, label: '9 rep maxes'},
      {value: 10, label: '10 rep maxes'},
    ]
  }

  // Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {
  //
  //   chart: {
  //     renderTo: 'mohsen',
  //     marginLeft: 100,
  //     //  plotAreaWidth: 50,
  //     //   plotAreaHeight: 450,
  //   },
  //
  //   title: {
  //     text: 'Bar series - data sorting'
  //   },
  //
  //   yAxis: {
  //     title: {
  //       text: ''
  //     }
  //   },
  //
  //   xAxis: {
  //     type: 'category',
  //     min: 0,
  //     labels: {
  //       // animate: false
  //     }
  //   },
  //
  //   legend: {
  //     enabled: false
  //   },
  //
  //   series: [{
  //     type: 'bar',
  //     zoneAxis: 'x',
  //     zones: [{
  //       value: 2,
  //       color: 'red'
  //     }],
  //     dataLabels: {
  //       enabled: true,
  //       format: '{y:,.2f}'
  //     },
  //     dataSorting: {
  //       enabled: true,
  //       sortKey: 'y'
  //     },
  //     data: [["hello", 1], ["hello", 1], ["hello", 1], ["hello", 1],]
  //   }]
  // }


  dataForChart: any = [];

  ngOnInit(): void {
    if (localStorage.getItem('registerToken') != null) {
      this.xAuthToken = localStorage.getItem('registerToken')
      if (this.xAuthToken != null) {
        this.authService.getUser(this.xAuthToken).subscribe(data => {
          if (data.success) {
            this.isLoggedIn = true;
            if (this.xAuthToken != null) {
              this.friendsService.getAllFriends(this.xAuthToken).subscribe(data => {
                if (data.success) {
                  this.friends = data.data;
                  console.log('friends', this.friends)
                } else {
                  this.friends = [];
                }
              })
            }
          }
        })
      }
    }
    this.selectedUnit = this.units[0];
    this.selectedRep = this.reps[0];
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
  friendName: any;

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
        this.strengthStandardService.calculateStandard(this.selectedUnit.name, this.selectedGender.type, this.bodyWeight, this.age, this.selectedRep.value, this.selectedValue).subscribe(data => {
          if (data.success) {
            this.response = data.data;
            this.showResult = true;
            this.changeDetector.detectChanges()
            // console.log('****',this.strengthsAndWeaknessesChart)
            // setTimeout(() => { this.strengthsAndWeaknessesChart.nativeElement.focus(); })
            console.log('*****', document.getElementById('strengthsAndWeaknessesChart'))
            this.liftVsAverageChart2 = echarts.init(document.getElementById('strengthsAndWeaknessesChart')!);
          }
        })
        console.log('resp: ', this.analyzeResponse)

        this.selectedCategories.forEach(value => {
          if (value.reps) {
            this.liftVsAverageChart.labels.push(value.liftName);
          }
        })
        this.liftVsAverageChart.labels.forEach((val: string) => {
          if (val === 'Back Squat') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.backSquat?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.backSquat?.userScore);
          } else if (val === 'Front Squat') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.frontSquat?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.frontSquat?.userScore);
          } else if (val === 'Deadlift') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.deadlift?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.deadlift?.userScore);
          } else if (val === 'Sumo Deadlift') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.sumoDeadlift?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.sumoDeadlift?.userScore);
          } else if (val === 'Power Clean') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.powerClean?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.powerClean?.userScore);
          } else if (val === 'Bench Press') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.benchPress?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.benchPress?.userScore);
          } else if (val === 'Incline Bench Press') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.inclineBenchPress?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.inclineBenchPress?.userScore);
          } else if (val === 'Dip') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.dip?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.dip?.userScore);
          } else if (val === 'Overhead Press') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.overheadPress?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.overheadPress?.userScore);
          } else if (val === 'Push Press') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.pushPress?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.pushPress?.userScore);
          } else if (val === 'Snatch Press') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.snatchPress?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.snatchPress?.userScore);
          } else if (val === 'Chin-up') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.chinup?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.chinup?.userScore);
          } else if (val === 'Pull-up') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.pullup?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.pullup?.userScore);
          } else if (val === 'Pendlay Row') {
            this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.pendlayRow?.expected);
            this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.pendlayRow?.userScore);
          }

          this.liftVsAverageChart.datasets[0].data.forEach((val: any) => this.dataForChart.push(val));
          this.liftVsAverageChart.datasets[1].data.forEach((val: any) => this.dataForChart.push(val));
        })


        this.horizontalOptions2 = {
          title: {
            text: 'Relative strengths and weaknesses',
            subtext: 'How you compare to other lifters at your level'
          },
          tooltip: {
            trigger: 'axis',
            formatter: function (params: any[]) {
              var you = params[0];
              var strongWeakText = function (d: string | number) {
                if (d >= 0) {
                  return d + '% stronger';
                } else {
                  return Math.abs(<number>d) + '% weaker';
                }
              };
              var strongerOrWeaker = you.data < 0 ? 'weaker' : 'stronger';
              return '<div class="lift-vs-avg-tooltip"><div class="lift-name">' + you.name + '</div><div class="you"><span class="' + strongerOrWeaker + '">' + strongWeakText(you.data) + '</span> than the average<br />lifter at your level strength level</div></div>';
            }
          },
          grid: {
            x: 130,
            x2: 20
          },
          calculable: false,
          yAxis: [
            {
              type: 'category',
              data: this.liftVsAverageChart.labels
            }
          ],
          xAxis: [
            {
              type: 'value',
              axisLabel: {
                formatter: function (s: string | number) {
                  if (s <= 0) {
                    return s + '%';
                  } else {
                    return '+' + s + '%';
                  }
                }
              },
            }
          ],
          series: [
            {
              name: 'Comparison to avg lifter',
              type: 'bar',
              data: this.dataForChart,
              itemStyle: {
                normal: {
                  color: function (params: { data: number; }) {
                    var color1 = '#a94442';
                    var color2 = '#3c7630';
                    if (params.data < 0) {
                      return color1;
                    } else {
                      return color2;
                    }
                  },
                  label: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                      fontWeight: 'bold'
                    },
                    formatter: function (params: { data: string | number; }) {
                      if (params.data <= 0) {
                        return params.data + '%';
                      } else {
                        return '+' + params.data + '%';
                      }
                    }
                  }
                }
              }
            },
          ]
        };
      } else {
        this.toastr.add({severity: 'error', summary: 'Error', detail: JSON.stringify(data.errors[0].message)})
      }
    })
  }


  submitAndLogLifts() {
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

    if (this.xAuthToken != null) {
      this.analyzeService.analyzeAndLogLifts(this.analyzeRequest, this.xAuthToken).subscribe(data => {
        if (data.success) {
          this.analyzeResponse = data.data;
          this.strengthStandardService.calculateStandard(this.selectedUnit.name, this.selectedGender.type, this.bodyWeight, this.age, this.selectedRep.value, this.selectedValue).subscribe(data => {
            if (data.success) {
              this.response = data.data;
              this.showResult = true;
            }
          })
          console.log('resp: ', this.analyzeResponse)

          this.selectedCategories.forEach(value => {
            if (value.reps) {
              this.liftVsAverageChart.labels.push(value.liftName);
              this.liftVsAverageChart.datasets[1].data.push(this.analyzeResponse.lifts?.backSquat?.userScore);
              this.liftVsAverageChart.datasets[0].data.push(this.analyzeResponse.lifts?.backSquat?.expected);
            }
          })
        } else {
          this.toastr.add({
            severity: 'error',
            summary: 'Error',
            detail: JSON.stringify(data.errors[0].message)
          })
        }
      })
    }
  }

  onChangeRound(event: any) {
    this.selectedRound = event.value;
    this.submit();
  }

  onChangeRep(event: any) {
    this.selectedRep = event.value;
    this.submit();
  }

  select(i: any) {
    this.clicked = i;
  }

  compareStrengthScore(n: number) {
    if (n >= 125.0) {
      return 'World class';
    } else if (n >= 112.5) {
      return 'Elite';
    } else if (n >= 100.0) {
      return 'Exceptional';
    } else if (n >= 87.5) {
      return 'Advanced';
    } else if (n >= 75.0) {
      return 'Proficient';
    } else if (n >= 60.0) {
      return 'Intermediate';
    } else if (n >= 45.0) {
      return 'Novice';
    } else if (n >= 30.0) {
      return 'Untrained';
    } else {
      return 'Subpar';
    }
  };

  addFriend() {
    if (this.xAuthToken != null) {
      let friend = {"username" : this.friendName}
      this.friendsService.addFriend(this.xAuthToken, friend).subscribe(data => {
        if (data.success && this.xAuthToken != null) {
          this.toastr.add({severity:'success', summary:'Successfully', detail:'Successfully added!'})
          this.friendsService.getAllFriends(this.xAuthToken).subscribe(data => {
            if(data.success) {
              this.friends = data.data;
            } else {
              this.toastr.add({severity: 'error', summary: 'Error', detail: JSON.stringify(data.errors[0].message)})
            }
          })
        } else {
          this.toastr.add({severity: 'error', summary: 'Error', detail: JSON.stringify(data.errors[0].message)})
        }
      })
    }
    this.friendName = '';
  }

  removeFriend(username: string) {
    let friend = {"username" : username}
    if (this.xAuthToken != null) {
      this.friendsService.removeFriend(this.xAuthToken, friend).subscribe(data => {
        if(data.success) {
          this.toastr.add({severity:'success', summary:'Successfully', detail:'Successfully removed'})
          if (this.xAuthToken != null) {
            this.friendsService.getAllFriends(this.xAuthToken).subscribe(data => {
              if(data.success) {
                this.friends = data.data;
              } else {
                this.friends = [];
                this.toastr.add({severity: 'error', summary: 'Error', detail: JSON.stringify(data.errors[0].message)})
              }
            })
          }
        } else {
          this.toastr.add({severity: 'error', summary: 'Error', detail: JSON.stringify(data.errors[0].message)})
        }
      })
    }
  }
}
