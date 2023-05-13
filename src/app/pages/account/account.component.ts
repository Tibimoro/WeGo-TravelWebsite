import { Component,OnInit } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  faFacebook=faFacebookF;
  faInstagram=faInstagram;
  faTwitter=faTwitter;
  faGoogle=faGoogle;
  faLinkedin=faLinkedinIn;
  faMail=faEnvelope;
  faLock=faLock;
  faUser=faUser;

  ngOnInit() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    if (sign_up_btn) {
      sign_up_btn.addEventListener("click", () => {
        if (container) {
          container.classList.add("sign-up-mode");
        }
      });
    }

    if (sign_in_btn) {
      sign_in_btn.addEventListener("click", () => {
        if (container) {
          container.classList.remove("sign-up-mode");
        }
      });
    }
  }
}
