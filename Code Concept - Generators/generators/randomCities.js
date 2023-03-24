const cities = ['Canberra','Brazilia','Auckland','Xian','Athens','Madrid'];


function* getRandomCity()
{
    // yield a random city from my cities array
    while(true)
    {
    yield(cities[Math.floor(Math.random()*6)]);
    }
}


const randomCityGen = getRandomCity();
console.log(randomCityGen.next());
console.log(randomCityGen.next());
console.log(randomCityGen.next());
console.log(randomCityGen.next());
console.log(randomCityGen.next());

// Make this output a random city - and it should do so every time I call .next()