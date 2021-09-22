import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IpContentService} from './ipContent.service';
import {Data} from './models/data.model';
import {IpDataState} from './state/data.state';
import {Select, Store} from '@ngxs/store';
import {GetData} from './actions/data.action';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
// @ts-ignore

  title = 'geo-ang';
  ip: string = '';

  // @ts-ignore
  @Select(IpDataState.getIpData) ipData$: Observable<Data[]>;

  constructor(private ipService: IpContentService, private store: Store) {
  }
  ngOnChanges(){

  }
  ngOnInit(): void {

  }

  updateIp(newIp: string) {
    // @ts-ignore
    this.store.dispatch(new GetData(newIp))
  }
}
