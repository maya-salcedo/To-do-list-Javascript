
exports.getDate = function() {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }; //a javascript object:  Date#toLocaleDateString https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date

    return today.toLocaleDateString("en-US", options);
 
}


exports.getDay = function () {
    const today = new Date();

    const options = {
        weekday: "long",
    }; //a javascript object:  Date#toLocaleDateString https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date

    return today.toLocaleDateString("en-US", options);
    
}

