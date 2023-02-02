import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  clicktohome(){
    this.router.navigateByUrl('/home-page')
    }
    clicktoProduct(){
      this.router.navigateByUrl('/product')
      }
    clicktotrash(){
      this.router.navigateByUrl('/trash')
      }
      Clicktosale(){
        this.router.navigateByUrl('/sale')
      }
}
