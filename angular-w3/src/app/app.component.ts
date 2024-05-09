import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public index = -1;

  public modelTitle='';
  public modelNote='';

  public selectedNote=-1;

  public inputCheck=true;

  public notesArr = [
    {
      title: 'MyNote',
      notes: 'to do list'
    }
  ];

  public AddNote() {
    if(this.modelTitle.length>5&&this.modelNote.length>7){
      this.notesArr.push({title:this.modelTitle, notes:this.modelNote});
      this.resetTempData();
      }
      else{
        this.inputCheck=false;
      }
  }

  public SaveNote(){
    if(this.modelTitle.length>5&&this.modelNote.length>7){
    this.notesArr[this.index].title=this.modelTitle;
    this.notesArr[this.index].notes=this.modelNote;
    this.resetTempData();
    }
    else{
      this.inputCheck=false;
    }
  }
  
  public editNote(index){
    this.index=index;
    this.modelTitle=this.notesArr[this.index].title;
    this.modelNote=this.notesArr[this.index].notes;
  }

  public ShowOptions(index){
    this.selectedNote=index;
  }

  public deleteNote(index){
    this.notesArr.splice(index,1);
  }

  private resetTempData(){
    this.modelTitle='';
    this.modelNote='';
    this.inputCheck=true;
  }

}
