import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'decorate'})
export class DecoratePipe implements PipeTransform {
   //filtervalue:any = ['english'];
   
  transform(value: any,filter:any): any {
   
    let checkedItems = filter.filter(item => { return item.checked; });
    //console.log("checkedItems::::"+checkedItems.length);
    
    if (Array.isArray(value)){
      if (!checkedItems || checkedItems.length === 0) { return value; }
         else{
            if(value != undefined){
              console.log("fitering....");
              return value.filter(item =>{
                  return checkedItems.some((a) => {
                      //console.log(item.language +"$$$"+a.value);
                      return new RegExp(item.language, 'gi').test(a.value) || a === "";
                  });
              });
            }
        }
      }else{return value;}
  }
}