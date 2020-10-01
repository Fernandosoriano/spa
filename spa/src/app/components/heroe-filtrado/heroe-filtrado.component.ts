import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroe-filtrado',
  templateUrl: './heroe-filtrado.component.html',
  styleUrls: ['./heroe-filtrado.component.css']
})
export class HeroeFiltradoComponent implements OnInit {
  heroeFiltrado:any[] = [];
  termino:string;
  constructor
             ( private activatedRoute: ActivatedRoute,
               private _heroesService:HeroesService,
               private router:Router) 
               
               {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{ 
      this.termino = params.term
      // console.log('paso paramétro', params.term);
      this.heroeFiltrado=this._heroesService.buscarHeroes(params['term']);
      console.log('heroeFiltradotrae:', this.heroeFiltrado);
    })
    
  }
  verHeroe(idx:number){
    // console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }


}
