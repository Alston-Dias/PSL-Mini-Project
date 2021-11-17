import { BooksdataService } from './booksdata.service';
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms'


@Injectable({
  providedIn: 'root'
})

export class UniquebookidService {

  constructor(private BooksdataService:BooksdataService) { }


  validBookId(IDs:Array<any>): ValidatorFn {
 
    return (control: AbstractControl): ValidationErrors | null => {

      let v: any = control.value;
      for (let i of IDs){
        if(i==v){return{dupID:true}}
      }
      return null;
    }
  }


}
