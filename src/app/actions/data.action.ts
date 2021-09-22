import { Data } from '../models/data.model';

export class GetData {
  static readonly type = '[Data] Get';
  constructor(public newIp: string, public payload: Data) {
  }
}
