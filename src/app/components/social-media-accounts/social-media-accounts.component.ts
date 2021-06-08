import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from 'src/app/services/social-media.service'
import { AuthService } from 'src/app/services/auth.service';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-media-accounts',
  templateUrl: './social-media-accounts.component.html',
  styleUrls: ['./social-media-accounts.component.css']
})
export class SocialMediaAccountsComponent implements OnInit {

  LoggedTwitter : boolean = false;

  constructor(private SocialMediaService : SocialMediaService, private AuthService : AuthService, private Router : Router) { }

  ngOnInit(): void {
    this.isLoggedTwitter();
  }

  // loginTwitter() {
  //   let userTwitter = this.SocialMediaService.loginTwitter();

  //   userTwitter ? console.log(userTwitter) : console.log("error login twitter");
  // }

  async loginTwitter() {
    let userID = this.AuthService.getUserID();

    // try {
    //   const response = await axios.get("https://karmic-koala-backend.vercel.app/auth/twitter", {
    //     params: {
    //       id: userID
    //     }
    //   });
    //   return response ? console.log(response.data) : console.log("Error en el login");
    // } catch (err) {
    //   return console.error(err);
    // }
    window.location.href = `https://karmic-koala-backend.vercel.app/auth/twitter?_id=${userID}`;
  }

  isLoggedTwitter() {
    this.SocialMediaService.isLoggedTwitter()
      .then(logged => this.LoggedTwitter = logged);
  }
}
