import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form-ip',
  templateUrl: './form-ip.component.html',
  styleUrls: ['./form-ip.component.scss']
})
export class FormIpComponent implements OnInit {
  @Output() onNewIp: EventEmitter<string> = new EventEmitter<string>();
ip: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  handlerOnClick() {
    this.onNewIp.emit(this.ip)
  }
}
