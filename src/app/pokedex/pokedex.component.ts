import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  pokemonList :any[]= []
  

  constructor(
  private  http : HttpClient,
  private router: Router
  ) { }

  async ngOnInit(): Promise<void> {

    
    await this.http.get<any>(`${this.apiUrl}?limit=10`).subscribe((doc:any)=>{
      console.log("new dodccy",doc.results);
      this.pokemonList = doc.results
      const typeArray = ["Normal", "Fire", "Water", "Grass", "Flying", "Fighting", "Poison", "Electric", "Ground", "Rock"];
      this.pokemonList.forEach(pokemon => {
        const randomTypeIndex = Math.floor(Math.random() * typeArray.length);
        const randomType = typeArray[randomTypeIndex];
        pokemon.type = randomType;
    });
    
    console.log("-----------list------------",this.pokemonList);
      
    })
    
    
    
  }
  viewPokemonDetails(url:any){
    // console.log("id",id);
    // this.router.navigateByUrl('pokemon-details');
    this.router.navigate(['pokemon-details'], {
      queryParams: {
        url: url,
       
      },
    });
    
  }

}
