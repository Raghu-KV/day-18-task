let row = document.querySelector(".row")


fetch("https://restcountries.com/v2/all")
.then((res)=>{
  return res.json()
})
.then((datas)=>{
    for (const data of datas) {
        row.innerHTML += `
        <div class = "col-4 mt-4 text-center">
        <div class="card" style="width: 18rem;">
        <img src="${data.flag}" class="card-img-top" alt="..." style="width:18rem; height:200px;">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">Capital : ${data.capital}</p>
          <p class="card-text">Region : ${data.region}</p>
          <p class="card-text">Country Code : ${data.alpha3Code}</p>
          <a href="#" class="btn btn-primary">Click for weather</a>
        </div>
      </div>
      </div>`
    }
    return datas
})
.then((data1)=>{
    let btns = document.querySelectorAll(".btn")
    for (let i = 0 ; i <btns.length; i++) {
        btns[i].addEventListener("click",(e)=>{
            e.preventDefault()
            // console.log(data1[i].latlng[0], data1[i].latlng[1])
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data1[i].latlng[0]}&lon=${data1[i].latlng[1]}&appid=5dfe9b8c82ffada8cdb62b96a75b00cd`)
            .then((responce)=>{
                return responce.json()
            })
            .then((responce2)=>{
                console.log(responce2.main.temp)
                alert(`the temperature(K) is ${responce2.main.temp}`)
            })
            .catch((err)=>{
                alert(`indru poi nalai vaa ${err}`)
            })

        })
    }


})


    .catch((err)=>{
    console.log(err)
})

// let btns = document.querySelectorAll(".btn")
// console.log(btns)
