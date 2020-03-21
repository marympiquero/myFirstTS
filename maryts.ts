class Year{
    myYear: number;

    constructor(myYear: number){
        this.myYear = myYear;
    }

   isLeapYear(){
        return ((this.myYear % 4 == 0) && (this.myYear % 100 != 0)) || (this.myYear % 400 == 0);
    }

}

let y:number = 2020;
let myYear = new Year(y);
let isLY:boolean = myYear.isLeapYear();

let webHeading = document.querySelector('h1');
if(isLY)
    webHeading!.textContent = 'Year ' + y + ' is a leap year'
else
    webHeading!.textContent = 'Year ' + y + ' is not a leap year'
