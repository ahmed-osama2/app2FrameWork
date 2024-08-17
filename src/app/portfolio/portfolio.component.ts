import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {


  isclicked:boolean = false

  imgeSrc:string=""

  open(myImage:string){
    this.isclicked=true
    this.imgeSrc=myImage

  }

  close(){
    this.isclicked=false
  }


}
