import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileService: ProfileService) { }

  username: string;
  profile: any;
  ngOnInit() {



  }

  getUserProfile() {
    if (this.username) {
      this.profileService.getUserProfile(this.username).subscribe(res => {
        this.profile = res;
        console.log(JSON.stringify(this.profile));
      }, error => {
        console.log(error);

      });
    }
  }

}
