import { Park } from "../../app/inteface/park";
declare var google;

export class CustomMarker extends google.maps.Marker{
  parkData:Park

  constructor(theParkData:Park){
    super();
    this.parkData = theParkData;
  }
}
