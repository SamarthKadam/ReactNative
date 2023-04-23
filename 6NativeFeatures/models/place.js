export class Place{
    constructor(title,imageUri,location,id)
    {
        this.title=title;
        this.imageUri=imageUri;
        this.location={lat:location.latitude,lng:location.longitude}
        this.id=id;
    }
}