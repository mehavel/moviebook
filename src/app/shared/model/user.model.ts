
import { ReqHeaderModel } from "./common/reqheader.model";

export class UserModel{
    companyId: String;
    systemId: String;
    userId: String;
    userSecret: String;
    header: ReqHeaderModel;
  
    constrctor(companyId:String,systemId:String,userId:String,userSecret:String,header:ReqHeaderModel){
      this.companyId = companyId;
      this.systemId = systemId;
      this.userId = userId;
      this.userSecret = userSecret;
      this.header = header;
    }
}