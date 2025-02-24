import { Component, effect, inject, Injector, OnInit, signal } from '@angular/core';
import { MasterService } from '../../core/services/master.service';
import { IRole } from '../../core/model/interface/role';
import { APIResponseModel } from '../../core/model/interface/apiResponseModel';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent implements OnInit {

  ngOnInit(): void {
    this.getAllRoles();
  }

  masterService = inject(MasterService);
  role  = signal<IRole[]>([]);
  
  constructor(private injector: Injector){   
    this.counterEffect();
  }
  
counter = signal(0);
//counter = 0;
username = signal('');
users = signal ([
'John',
'Chris'
]);

videos = signal({
 title : 'youtube signal',
 description : 'Awesome Angular Signal tutorial'
});

increment(){

//this.counter ++;
this.counter.set(this.counter() +1);
//OR
//this.counter.update(counter  => counter +1);

}

setValuevideos(){
   this.videos.set({"title" : "New youtube signal",
    "description" : "New Discription Signal tutorial"  
  })
}

counterEffect(): void {
  effect(()=> {      
    console.log("The value of counter is changes" +this.counter())
    console.log("The value of Videos is changes" +this.videos().title)  
  }, {injector: this.injector})
}

getAllRoles(){
  this.masterService.getAllRoles().subscribe(( res: APIResponseModel) =>{
    this.role.set(res.data);
  });

}



}
