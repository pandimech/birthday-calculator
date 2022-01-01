var dateelement = document.createElement('input');
dateelement.setAttribute('type', 'date');
dateelement.setAttribute('id', 'date');
document.body.append(dateelement);


var button = document.createElement('button');
button.innerHTML = "Display data";
button.className = "btn btn-primary";
button.setAttribute('type', 'button');
button.addEventListener('click', displaydata);

document.body.append(button);


function displaydata() {
    let input = document.getElementById('date').value;
    if (Date.parse(input)) {
        var inputdate = new Date(input);
        var currentdate = new Date();
        // console.log(get.Time(inputdate, currentdate));
        var millsecdiff = currentdate.getTime() - inputdate.getTime();
        console.log(millsecdiff);

        var seconds = Math.floor(millsecdiff / 1000);
        console.log(seconds);

        var minutes = Math.floor(seconds / 60);
        console.log(minutes);

        var hours = Math.floor(minutes / 60);
        console.log(hours);

        var days = Math.floor(hours / 24);
        console.log(days);


        var years = currentdate.getFullYear() - inputdate.getFullYear();
        console.log(years);

        var month = (years * 12) + (currentdate.getMonth() - inputdate.getMonth())
        console.log(month);


    } else {
        let properinput = document.createElement('p');
        properinput.innerHTML = "given the proper input";
        document.body.append(properinput)

    }

    var division = document.createElement('div');
    division.innerHTML = `currentdate:${currentdate}<br>
    inputdate:${inputdate}<br>
    millseconds:${millsecdiff}<br>
    seconds:${seconds}<br>
    minutes:${minutes}<br>
    hours:${hours}<br>
    days:${days}<br>
    years:${years}<br>
    months:${month}`

    document.body.append(division);



}