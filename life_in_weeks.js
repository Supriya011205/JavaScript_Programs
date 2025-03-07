function lifeInWeeks(age) {
    var age_left = 90 - age;
    var days = 365*age_left;
    var weeks = 52*age_left;
    var months = 12*age_left;
    
    console.log("You have "+days+" days, "+weeks+" weeks, and "+months+" months left.");

}

lifeInWeeks(18);
