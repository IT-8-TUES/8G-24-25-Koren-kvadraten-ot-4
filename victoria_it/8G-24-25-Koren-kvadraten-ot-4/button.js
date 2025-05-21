function showSpecial(){
    const coffees= ["Latte", "Cappucino", "Mocha", "Cold brew"];
    const pick = coffees[Math.floor(Math.random()*coffees.length)]
    document.getElementById("special").innerText="Todays special is: " + pick;
}