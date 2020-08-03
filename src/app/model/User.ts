export class User {
    
    userId : String;
    username: String;
    firstname : String;
    lastname: String;
    email :String;
    bio: String;
    image: File;
    backgroundImage : File;
    profileType : boolean;

    constructor (){
        this.userId = "";
        this.username = "";
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.bio = "";
        this.image = null;
        this.backgroundImage = null;
        this.profileType = false;
    }

}