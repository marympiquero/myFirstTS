var Year = /** @class */ (function () {
    function Year(myYear) {
        this.myYear = myYear;
    }
    Year.prototype.isLeapYear = function () {
        return ((this.myYear % 4 == 0) && (this.myYear % 100 != 0)) || (this.myYear % 400 == 0);
    };
    return Year;
}());
var y = 1998;
var myYear = new Year(y);
var isLY = myYear.isLeapYear();
var webHeading = document.querySelector('h1');
if (isLY)
    webHeading.textContent = 'Year ' + y + ' is a leap year';
else
    webHeading.textContent = 'Year ' + y + ' is not a leap year';
//# sourceMappingURL=maryts.js.map