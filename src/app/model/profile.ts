import { privilage } from './privilage';
export class Profile {
profileId: string;
roleName: string;
status:string;
privilage:privilage;

constructor(_profileId: string,
    _roleName: string,
    _status:string,_privilage:privilage){
        this.profileId=_profileId,
        this.roleName=_roleName,
        this.status=_status;
        this.privilage=_privilage;
    }
}