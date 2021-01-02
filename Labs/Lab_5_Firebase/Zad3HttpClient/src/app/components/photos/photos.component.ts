import {Component, OnInit} from '@angular/core';
import {GetPhotosService} from '../../services/photos-service/get-photos.service';
import {PhotoModel} from '../../models/photo.model';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: PhotoModel [];
  imagesOnPage = 10;
  currentMax = 10;
  i: number;

  constructor(
    private photosService: GetPhotosService
  ) {
  }


  getListOfPhotos() {
    this.photosService.getPhotos()
      .subscribe(photos => this.photos = photos);
  }

  ngOnInit() {
    this.getListOfPhotos();
  }

  turnPrev() {
    this.currentMax -= this.imagesOnPage;
    if (this.currentMax <= this.imagesOnPage) {
      this.currentMax = this.imagesOnPage;
    }
  }

  turnNext() {
    this.currentMax += this.imagesOnPage;
  }

  getPhotosToShow() {
    return this.photos.slice(this.currentMax - this.imagesOnPage, this.currentMax);
  }


}
