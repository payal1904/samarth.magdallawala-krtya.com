import { Component, Input, OnInit } from '@angular/core';
import { EcomService } from '../services/ecom/ecom.service';
import { Name } from 'src/app/shared/models/name';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  productPagetags?:string[];
  @Input()
  justifyContent:string='center'

  name?:Name[]=[];
  constructor(private fs:EcomService) { }

  ngOnInit(): void {
    if(!this.productPagetags)
    this.name=this.fs.getAllTag();
  }

}
