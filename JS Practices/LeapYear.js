function leapYear() {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Its a Leap Year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return " Is leap Year.";
        }
    } else {
        return "Not leap year.";
    }

}