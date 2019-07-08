import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  private api_key = '9beVqhXkFy8MK8HMXxa9ov261kZvUQfn';
  private header = new Headers();

  constructor(private http: HttpClient) {

  }

  getRandom(){
     let url = 'http://api.giphy.com/v1/gifs/search?api_key=' + this.api_key +'&lang=es&q=random';
    // let url = 'http://api.giphy.com/v1/gifs/search?api_key=9beVqhXkFy8MK8HMXxa9ov261kZvUQfn&lang=es&q=random';
    return this.http.get(url);
  }

  getSearch(search){
    let url = 'http://api.giphy.com/v1/gifs/search?api_key=' + this.api_key +'&lang=es&q='+ search+ '&limit=20&offset=30';
    return this.http.get(url);
  }


}
