console.log("This is index.js file")
let apiKey="03f30fc7c2bb441e93f9d1f116aa3c50";
let newsAccordian = document.querySelector("#newsAccordion");

let xhr=new XMLHttpRequest();
xhr.open("GET",`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${apiKey}`,true);

xhr.onload = function(){
if(this.status === 200){
    let newsReport = JSON.parse(this.responseText);
    let articles = newsReport.articles;
    let html=``;
    articles.forEach((article,index)=>{
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
   
}else{
    console.log("some error");
}
}
xhr.send();