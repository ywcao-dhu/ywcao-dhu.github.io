// for liuguijun to fill the index.html parts:teammates and rearch project 
let rearchpros=[
    'Massive MIMO',
    'Massive MIMO',
    "mmwave",
    "ml"
]
let rearch=document.getElementById("re1");


rearchpros.forEach((val,index,array)=>{
    if(index%2==0){
        rearch.innerHTML=rearch.innerHTML+`
        <div class="row">
        <div class="col-md-6">
          <div class="cc-porfolio-image img-raised aos-init aos-animate" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div style="background-image: url('images/project-1.jpg');width: 100%;height: 40vh;background-size: cover;">
                  <div class="h4 title text-white text-center">Recent Project</div>
                  <p class="title text-white">&nbsp;&nbsp;&nbsp;&nbsp;${val}</p>
                </div>
          </div>
        </div>
      <div class="col-md-6">
      <div class="cc-porfolio-image img-raised aos-init aos-animate" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div style="background-image: url('images/project-1.jpg');width: 100%;height: 40vh;background-size: cover;">
              <div class="h4 title text-white text-center">Recent Project</div>
              <p class="title text-white">&nbsp;&nbsp;&nbsp;&nbsp;${array[index+1]}</p>
            </div>
    </div>
    </div>
        `
    }

})
