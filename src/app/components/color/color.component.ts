import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/Colors/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color:Color[]=[];
  currentColor:Color;

  dataLoaded=false;
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.color=response.data
      this.dataLoaded=true;
    })
  }
  setCurrentColor(color:Color){
    this.currentColor = color;
  }
  getCurrentColorClass(color:Color){
    if(color==this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

}
