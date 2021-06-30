console.log("This is index.js file")
// let apiKey="03f30fc7c2bb441e93f9d1f116aa3c50";
let newsAccordian = document.querySelector("#newsAccordion");
// xhr method
// let xhr=new XMLHttpRequest();
// xhr.open("GET",`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=03f30fc7c2bb441e93f9d1f116aa3c50`,true);

// xhr.onload = function(){
// if(this.status === 200){
//     let newsReport = JSON.parse(this.responseText);
//     let articles = newsReport.articles;
//     let html=``;
//     articles.forEach((article,index)=>{
//        html+=`<div class="card">
//        <div class="card-header" id="heading${index}">
//            <h2 class="mb-0">
//            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
//                aria-expanded="true" aria-controls="collapse${index}">
//               <b>Breaking News ${index+1}:</b> ${article.title}
//            </button>
//            </h2>
//        </div>

//        <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordion">
//            <div class="card-body"> ${article.description}. <a href="${article.url}" target="_blank" >Read more here</a>  </div>
//        </div>
//    </div>`
//    newsAccordian.innerHTML = html;
//     })
   
// }else{
//     console.log("some error");
// }
// }
// xhr.send();

// fetch api method
// fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=03f30fc7c2bb441e93f9d1f116aa3c50").then((response)=>{
//  return response.json();
// }).then((data)=>{
//     console.log(data.articles);
//         let html=``;
//    data.articles.forEach((article,index)=>{
//        html+=`<div class="card">
//        <div class="card-header" id="heading${index}">
//            <h2 class="mb-0">
//            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
//                aria-expanded="true" aria-controls="collapse${index}">
//               <b>Breaking News ${index+1}:</b> ${article.title}
//            </button>
//            </h2>
//        </div>

//        <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordion">
//            <div class="card-body"> ${article.description}. <a href="${article.url}" target="_blank" >Read more here</a>  </div>
//        </div>
//    </div>`
//    newsAccordian.innerHTML = html;
//     })
// })

// asyn await method
async function funct1(){
    let response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=03f30fc7c2bb441e93f9d1f116aa3c50");
    let data = await response.json();
    return data;
}
funct1().then(data=>{
    let html=``;
   data.articles.forEach((article,index)=>{
       html+=`<div class="card">
       <div class="card-header" id="heading${index}">
           <h2 class="mb-0">
           <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
               aria-expanded="true" aria-controls="collapse${index}">
              <b>Breaking News ${index+1}:</b> ${article.title}
           </button>
           </h2>
       </div>

       <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#newsAccordion">
           <div class="card-body"> ${article.description}. <a href="${article.url}" target="_blank" >Read more here</a>  </div>
       </div>
   </div>`
   newsAccordian.innerHTML = html;
    })
});