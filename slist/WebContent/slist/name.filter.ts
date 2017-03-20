import { Pipe, PipeTransform } from '@angular/core';
import { StudentDetail } from './CardDetails';

@Pipe({

    name: 'namepipe'

})

export class NamePipe implements PipeTransform {

    transform(studentName: StudentDetail[], input: string) {
        return studentName.filter(item => {
            return item.name.indexOf(input) !== -1
        });
        // return users.filter((user) => {
        //                 if (caseInsensitive) {
        //                     return (user.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
        //                 } else {
        //                     return (user.name.indexOf(name) !== -1);
        //                 }


    }
}