import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('myModal') myModal;
  imgSrc = '';
  modalTitle = '';
  
  ngOnInit() {
  }
  
  openModal(event: any) {
    this.modalTitle = event.path[0].alt;
    this.imgSrc = event.path[0].currentSrc;
    this.myModal.nativeElement.className = 'modal open';
  };

  closeModal() {
    this.myModal.nativeElement.className = 'modal';
  };
}
