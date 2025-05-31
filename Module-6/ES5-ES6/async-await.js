//promise

function getCountries() {
    const url = "https://restcountries.com/v3.1/all";

    //fetch data using promise
    fetch(url)
        .then((res) => res.json())
        // .then((data) => console.log("Country Names=>", data[0].name.common, "Population =>", data[0].population))
        .then((data) =>
            data.forEach((country) => {
                console.log("Country Names=>", country.name.common, "Population =>", country.population)

            })
        )

}

getCountries()

//async await

async function getCountries1() {
    const url = "https://restcountries.com/v3.1/all";

    let res = await fetch(url);
    let data = await res.json()
    console.log(data[0].name.common)
    data.forEach((country) => {
        console.log("Country Names=>", country.name.common, "Population =>", country.population)

    })

}
getCountries1()