import {Data} from '../models/data.model';
import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {IpContentService} from '../ipContent.service';
import {GetData} from '../actions/data.action';
import {tap} from 'rxjs/operators';

export class IpDataStateModel {
  ipData!: Data[];
  ip!: string
}

@Injectable()
@State<IpDataStateModel>({
name: 'data',
  defaults: {
  ipData: [{
    ip: '',
    version: '',
    city: '',
    region: '',
    region_code: '',
    country_code: '',
    country_name: '',
    country_capital: '',
    country_tld: '',
    continent_code: '',
    in_eu: true,
    postal: '',
    latitude: 0,
    longitude: 0,
    timezone: '',
    utc_offset: '',
    country_calling_code: '',
    currency: '',
    currency_name: '',
    languages: '',
    country_area: 0,
    country_population: 0,
    asn: '',
    org: ''
  }],
    ip: ''
  }
  })
export class IpDataState {
  constructor(private ipContentService: IpContentService) {
  }
  @Selector()
  static getIpData(state: IpDataStateModel) {
    return state.ipData;
  }
  @Action(GetData)
  addTodo({getState, patchState}: StateContext<IpDataStateModel>, {newIp}: GetData) {
    return this.ipContentService.fetchIpContent(newIp).pipe(tap((result) => {
      console.log(result)
      patchState({
        ipData: [result]
      });
    }));
  }
}
