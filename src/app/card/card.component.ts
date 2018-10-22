import { Component, Input } from '@angular/core';

export class UserProfile {
  name: string;
  profession: string;
  motto: string;
}

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
})
export class UserProfileCard {

  @Input() profile: UserProfile;
  
}
