function showSpecial(){
    const coffees= [ "Cappucino", "Espresso", "Cold brew"];
    const pick = coffees[Math.floor(Math.random()*coffees.length)]
    document.getElementById("special").innerText="Today's special is: " + pick;
}