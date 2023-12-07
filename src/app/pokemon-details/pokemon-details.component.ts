import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  name:string='';
  height :any;
  weight: any;
  version:any;
  ability:any;
  type : any;

  constructor(private route: ActivatedRoute, private router: Router,  private  http : HttpClient,

  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const url = params['url'];
      if (url) {
        // Now you have the 'url' value from the query parameters
        console.log('URL:', url);
      } else {
        // Handle the case when 'url' is not present in the query parameters
      }

      this.http.get<any>(url).subscribe((doc:any)=>{
        console.log("docccyyyyyy",doc.types[0].type.name);
        
      this.name = doc.species.name
      this.version = doc.game_indices[0].version.name
      this.height = doc.height
      this.weight = doc.weight
      this.ability = doc.abilities[0].ability.name
      this.type = doc.types[0].type.name
        
      })

    });



  }

}
