const petro = document .getElementById('Petro')
const Tucson = document .getElementById('Tucson')
const Tokyo = document .getElementById('Tokyo')

async function Api() {
    const respons_petro =await fetch('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m')
    const respons_tucson =await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.2217&longitude=-110.9265&current=temperature_2m')
    const respons_Tokyo =await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current=temperature_2m')
    const data_petro = await respons_petro.json()
    const data_tucson = await respons_tucson.json()
    const data_tokyo = await respons_Tokyo.json()
    return [data_petro, data_tokyo, data_tucson]
}

async function output() {
    try{
        let out = await Api()
        console.log(out)
        petro.textContent = `Air Temperature: ${out[0].current.temperature_2m} \u00B0C`
        Tucson.textContent = `Air Temperature: ${out[2].current.temperature_2m} \u00B0C`
        Tokyo.textContent = `Air Temperature: ${out[1].current.temperature_2m} \u00B0C`
    }   
     catch(error){
        console.log(error)
    }
    finally{
        setTimeout(output,10000)
    }
}
output()