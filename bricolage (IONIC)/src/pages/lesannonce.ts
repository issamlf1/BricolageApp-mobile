export class AnnonceData{
    username:String;
    titre_anonce:String;
    tag:String;
    tel:String;
    description:String;
    prix:Number;
    constructor(  username:String,
        titre_anonce:String,
        tag:String,
        tel:String,
        description:String,
        prix:Number) {
      this.username=username;
      this.titre_anonce=titre_anonce;
      this.tag=tag;
      this.tel=tel;
      this.description=description;
      this.prix=prix;
    }

}