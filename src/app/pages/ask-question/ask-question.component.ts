import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ask-question-component',
    templateUrl: './ask-question.component.html',
    styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent{
    @Input() name;
    focus : boolean;

    constructor(public activeModal: NgbActiveModal) {}
}