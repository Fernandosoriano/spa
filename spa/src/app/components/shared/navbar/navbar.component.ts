import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe (termino:string){
    // console.log(termino)
    if(termino ==  '' ){
      alert('debes ingresar al menos un carácter para iniciar tu búsqueda.')
    }
    else{
    this.router.navigate(['/heroeFiltrado',termino]);}
  }

}
