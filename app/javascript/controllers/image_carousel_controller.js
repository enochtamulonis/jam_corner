import { Controller } from "stimulus"

let images

export default class extends Controller {
  static targets = ["image"]

  initialize() {
    images = ["/home_background_1.jpg", "/home_background_2.jpg", "/home_background_3.jpg",
    "/home_background_4.jpg", "/home_background_5.jpg", "/home_background_6.jpg"]
  }

  connect() {
    this.imageTarget.src = images[0];
    this.showImage(1);
  }

  showImage(number) {
    setInterval(() => {
      if ( number < images.length ) {
        this.imageTarget.src = images[number];
        number++;
      } else {
        this.imageTarget.src = images[0];
        number = 0;
      }
    }, 15000);
  }
}
