import {Component, OnInit} from '@angular/core';
import {GiphyService} from "../services/giphy.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  gifs: any[];
  busqueda: string;
  constructor(private giphy: GiphyService) {

  }

ngOnInit(){
    this.giphy.getRandom().subscribe((data: any) =>
    {
      console.log(data);
      this.gifs = data;
    })
}

  getEnter(ev){
    console.log(ev)
    if (ev.key === 'Enter') {
        this.giphy.getSearch(this.busqueda).subscribe((data: any) =>
        {
          console.log(data);
          this.gifs = data;
        })
    }
  }
}
