import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoorbellService } from '../../services/doorbell.service';
@Component({
  selector: 'app-doorbell',
  templateUrl: './doorbell.component.html',
  styleUrls: ['./doorbell.component.scss'],
})
export class DoorbellComponent implements OnInit {
  phoneNumber: string;
  bellHasRung: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public doorbell: DoorbellService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.hasOwnProperty('number')) {
        this.phoneNumber = params.number;
      }
    });
  }

  ringBell() {
    this.doorbell.ringDoorbell(this.phoneNumber).subscribe((data) => {
      console.log(data);
      this.bellHasRung = true;
    });
  }
}
