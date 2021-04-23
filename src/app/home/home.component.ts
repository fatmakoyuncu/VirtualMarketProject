import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productArray = []

  constructor() { }

  ngOnInit(): void {
    this.productArray = [
      { name: "Kuru Soğan", price: 3.99, sale: "%15", img: "https://market.eticaret.webdeneme.com/siteler/market/image/cache/catalog/sogan-kuru-kg-250x250.jpg" },
      { name: "Kıyma", price: 50, sale: "%12", img: "https://market.eticaret.webdeneme.com/siteler/market/image/cache/catalog/kiyma-250x250.jpg" },
      { name: "Sek Günlüt Süt Cam Şişe 1 lt", price: 11, sale: "%10", img: "https://market.eticaret.webdeneme.com/siteler/market/image/cache/catalog/sek-gunlut-sut-cam-sise-1-lt-250x250.jpg" },
    ]
  }

}
