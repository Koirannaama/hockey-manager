import { Component, OnInit, Input } from '@angular/core';
import { TeamPerformance } from 'src/app/models/team-performance';

@Component({
    selector: 'app-standings',
    templateUrl: './standings.component.html',
    styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

    @Input() public performances: TeamPerformance[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
