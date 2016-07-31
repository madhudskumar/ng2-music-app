import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'elipis'
})

export class ElipisPipe implements PipeTransform{
    transform(value:string, args:any[]):any{
        if(value && args.length > 0 && value.length > <number>args[0]){
            return value.substring(0, args[0]) + '...';
        }
        return value;
    }
};