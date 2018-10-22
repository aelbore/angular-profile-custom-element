import { Component, OnInit } from '@angular/core';

import { of, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { UserProfile } from './card/card.component';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  
  profiles: Observable<UserProfile[]>;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.profiles = this.appService.getProfiles("")
  }

  onSearch(e: CustomEvent | any) {
    of(e.detail.value)
      .pipe(
        debounceTime(700),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        if (text.length) {
          this.profiles = this.appService.getProfiles(text);
        } else {
          this.profiles = this.appService.getProfiles("")
        }
      });
  }

}
