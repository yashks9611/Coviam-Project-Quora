import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent{

  focus : boolean;
  image : File;

  constructor(public activeModal: NgbActiveModal) { }

  sendImage(){
    console.log(this.image);
    this.activeModal.close(this.image);
  }

  onFileChange(event){
    this.image = event.target.files[0];
  }

}
