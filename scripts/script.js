const hoy = async function(hoy){
    const estado = await fetch(`http://api.weatherapi.com/v1/current.json?key=e335895002784e1d9a2120406252804&q=Floridablanca&lang=es`);
    if(estado.status == 200){
        const data = await estado.json();
        return data;
    }
}
hoy.open('GET',url)
