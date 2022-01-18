import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import  {UserserviceService} from '../user-service/user-service.service'
import { Repository } from '../repository'
import {  ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repo!: Repository;

  constructor(private route:ActivatedRoute, private service:UserserviceService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.repo= this.service.getRepository(id)
  }

}