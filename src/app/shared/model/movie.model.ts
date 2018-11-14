import { ReqHeaderModel } from "./common/reqheader.model";
import { MovieVenues } from "./movievenues.model";

export class NowShowing{
    movieId: String;
    movieName: String;
    synopsis:String;
    overAllRating:String;
    releaseDate:String;
    duration:String;
    censorCertificate:String;
    upVotes:String;
    downVotes:String;
    posterUrl:String;
    trailerUrl:String;
    language:String;
    dimension:String;
    active:String;
    createdUser:String;
    createdTimestamp:String;
    modifiedUser:String;
    modifiedTimestamp:String;
    venues:MovieVenues[];
 }
