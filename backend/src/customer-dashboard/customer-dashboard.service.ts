import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerDashboardService {

    validateCustomer(email:string , password:string){

        return true ;
    }
}
