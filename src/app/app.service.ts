import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { UserProfile } from './card/card.component';

const profiles: UserProfile[] = [{
  "name": "Arjay Elbore",
  "profession": "Framework Developer",
  "motto": "I never wanted to be famous, I wanted to be great."
},
{
  "name": "Aivan Monceller",
  "profession": "Developer",
  "motto": "When in doubt, iterate faster!"
},
{
  "name": "Christopher Lloyd",
  "profession": "UX Developer",
  "motto": "Genius is the ability to reduce the complicated to the simple."
},
{
  "name": "Martin Llaneza",
  "profession": "UI Developer",
  "motto": "The key to performance is elegance, not battalions of special cases."
},
{
  "name": "Melvin Vivas",
  "profession": "Manager - Solutions Engineering",
  "motto": "When in Doubt, Iterate Faster."
},
{
  "name": "Murali Pusuluri",
  "profession": "UI Developer",
  "motto": "To iterate is human, to recurse is divine."
},
{
  "name": "Nox Mendina",
  "profession": "Sr. Manager - Solutions Engineering",
  "motto": "When in doubt, iterate faster!"
}]


@Injectable()
export class AppService {

  getProfiles(username: string): Observable<UserProfile[]> {
    const result = profiles.filter(value => value.name.includes(username));
    return of(result);
  }

}