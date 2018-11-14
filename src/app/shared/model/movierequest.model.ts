import { ReqHeaderModel } from "./common/reqheader.model";

export class MovieRequest{
    locality_id:String;
    zone_id:String;
    header: ReqHeaderModel;
  
    constrctor(_locality_id:String,_zone_id:String,_header:ReqHeaderModel){
      this.locality_id = _locality_id;
      this.zone_id = _zone_id;
      this.header = _header;
    }
}