export class RestHeader {
    callingAPI: string;
    channel:string;
    transactionId:string;
    constructor(
      _callingAPI: string,
      _channel:string,
      _transactionId: string){
            this.callingAPI = _callingAPI;
            this.channel = _channel;
            this.transactionId = _transactionId;  
          }
  
  
  }