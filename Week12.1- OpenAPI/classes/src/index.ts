import {once} from "helpful-decorators"

class DateClass{
    private timeZone: string;
    constructor(timeZone: string){
        this.timeZone= timeZone;
    }

    @once
    getTime(): number{
        var d= new Date();
        return d.getTime();
    }

    getMonth(){
        var d= new Date();
        return d.getMonth;
    }

    getTimezone(){
        return this.timeZone;
    }

    expensiveOperation(){
        const startTime= new Date().getTime();
        let ctr=0;

        for(let i=0; i<10000000000; i++){
            ctr++;
        }

        console.log(ctr);
        const endTime= new Date().getTime();
        
        console.log("total time taken is "+ (endTime-startTime) + " ms");
    }
}

const dateObject= new DateClass("IND");

const res = dateObject.getMonth();
console.log(res);

dateObject.getTime();
dateObject.getTime();
dateObject.getTime();
dateObject.getTime();
dateObject.getTime();
