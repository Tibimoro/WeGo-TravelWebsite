import { Component } from '@angular/core';
import { faMap, faClipboard } from '@fortawesome/free-regular-svg-icons';
import {
  faFilter,
  faList,
  faExchangeAlt,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import * as Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  vddisc = '../../../assets/dis.mp4';

  cardImage1 = '../../../assets/cards/cam.jpg';
  cardImage2 = '../../../assets/cards/mo.jpg';
  cardImage3 = '../../../assets/cards/be.jpg';

  tourImage1 = '../../../assets/paris.jpg';
  tourImage2 = '../../../assets/sydney.jpg';
  tourImage3 = '../../../assets/paris.jpg';

  user1 = '../../../assets/usersimg/user1.jpg';

  faMap = faMap;
  faFilter = faFilter;
  faExchangeAlt = faExchangeAlt;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faList = faList;
  faClipboard = faClipboard;
  faStar = faStar;
}
Aos.init({
  duration: 2000,
});
