import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-upload-background-image',
  templateUrl: './upload-background-image.component.html',
  styleUrls: ['./upload-background-image.component.scss']
})
export class UploadBackgroundImageComponent{
  focus : boolean;
  backgroundImage : File;

  constructor(public activeModal: NgbActiveModal) { }

  sendImage(){
    console.log(this.backgroundImage);
    this.activeModal.close(this.backgroundImage);
  }

  onFileChange(event){
    this.backgroundImage = event.target.files[0];
  }

}
