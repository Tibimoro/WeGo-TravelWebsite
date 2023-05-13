import { Component } from '@angular/core';
import {faMoneyBillTransfer} from '@fortawesome/free-solid-svg-icons'
import {faEarth,faAngleRight,faCopyright} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import * as Aos from 'aos';





@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  vdbg = '../../../assets/bgf.mp4';
  send=faMoneyBillTransfer;
  faEarth=faEarth;
  faFacebook=faFacebook;
  faInstagram=faInstagram;
  faTwitter=faTwitter;
  faArrowRight=faAngleRight;
  faYoutube=faYoutube;
  faCopyright=faCopyright;
}

Aos.init({
  duration: 2000,
});