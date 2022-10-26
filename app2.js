let row = document.querySelector(".row") 
const country = async() =>{
    try{
    let res = await fetch("https://restcountries.com/v2/all")
    let data = await res.json()
    console.log(data)
    for(let singleData of data){
        row.innerHTML += `
        <div class = "col-4 mt-4 text-center">
        <div class="card" style="width: 18rem;">
        <img src="${singleData.flag}" class="card-img-top" alt="..." style="width:100%; height:200px;">
        <div class="card-body">
          <h5 class="card-title">${singleData.name}</h5>
          <p class="card-text">Capital : ${singleData.capital}</p>
          <p class="card-text">Region : ${singleData.region}</p>
          <p class="card-text">Country Code : ${singleData.alpha3Code}</p>
          <a href="#" class="btn btn-outline-primary">Click for weather</a>
        </div>
      </div>
      </div>`
    }
    let btns = document.querySelectorAll(".btn")
    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener("click",async (e) =>{
            e.preventDefault()
            try{
            let res2 = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${data[i].latlng[0]}&lon=${data[i].latlng[1]}&appid=5dfe9b8c82ffada8cdb62b96a75b00cd`)
            let data2 = await res2.json()
            alert (`the tempature(K) : ${data2.main.temp}`)
            }catch(err){
                alert(`Indru Poi Nali Vaa the erroe : ${err}`)
            }
        })
    }
    }catch(err){
        console.log(err)
    }

}
country()