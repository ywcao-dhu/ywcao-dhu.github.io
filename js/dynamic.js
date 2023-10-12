// for liuguijun to fill the index.html parts:teammates and rearch project 
let rearchpros=[
    `Congratulations! Our manuscript has been accepted for publication in the IEEE TCOM. [J1] Y. Cao, S. Maghsudi, T. Ohtsuki and T. Q. S. Quek, "Mobility-Aware Routing and Caching in Small Cell Networks using Federated Learning," in IEEE Transactions on Communications.`,
    "mmwave",
    "transfer learning",
	"machine learning"
]
let rearch=document.getElementById("re1");
let publishlist=document.getElementById('publishes')
let essayes=[
    `Y. Cao, S. Maghsudi, T. Ohtsuki and T. Q. S. Quek, "Mobility-Aware Routing and Caching in Small Cell Networks using Federated Learning," in IEEE Transactions on Communications.`,
    `Y. Cao, T. Ohtsuki, S. Maghsudi and T. Q. S. Quek, “Deep Learning and Image Super-Resolution-Guided Beam and Power Allocation for mmWave Networks,” in IEEE Transactions Vehicular Communications, to appear, 2023. （IF: 6.24）`,
    `H. Echigo, Y. Cao, M. Bouazizi and T. Ohtsuki, "A Deep Learning-Based Low Overhead Beam Selection in mmWave Communications," in IEEE Transactions on Vehicular Technology, vol. 70, no. 1, pp. 682-691, Jan. 2021, https://ieeexplore.ieee.org/document/9314253/. （Corresponding author, IF: 6.24）`,
    `Y. Cao, T. Ohtsuki and T. Q. S. Quek, “Dual-Ascent Inspired Transmit Precoding for Evolving Multiple-Access Spatial Modulation,” in IEEE Transactions on Communications, vol. 68, no. 11, pp. 6945-6961, Nov. 2020, https://ieeexplore.ieee.org/document/9153033/. （IF: 6.17）`,
    `Y. Cao and T. Ohtsuki, "Orthogonality Structure Designs for Generalized Precoding Aided Spatial Modulation," in IEEE Wireless Communications Letters, vol. 8, no. 5, pp. 1406-1409, Oct. 2019. （IF: 5.281）`,
     `Y. Cao, X. Jiang, H. Wang and E. Bai, "MIMO Wiretap Channels Based on Generalized Extended Orthogonal STBCs and Feedback," in IEEE Transactions on Vehicular Technology, vol. 67, no. 3, pp. 2454-2463, Mar. 2018. （IF: 6.24）`,
	"专利：蒋学芹，曹誉文等， 一种MIMO窃听信道下基于反馈的保密通信方法，授权号：201710127779.7。",
]
essayes.forEach((val,index,array)=>{
    publishlist.innerHTML+=`(${index+1}) ${val}<br/>`
})

rearchpros.forEach((val,index,array)=>{
    if(index%2==0){
        rearch.innerHTML=rearch.innerHTML+`
        <div class="row">
        <div class="col-md-6">
          <div class="cc-porfolio-image img-raised aos-init aos-animate" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div style="background-image: url('images/project-1.jpg');width: 100%;height: 40vh;background-size: cover;">
                  <div class="h4 title text-white text-center">Recent Project</div>
                  <p class="title" style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;${val}</p>
                </div>
          </div>
        </div>
      <div class="col-md-6">
      <div class="cc-porfolio-image img-raised aos-init aos-animate" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div style="background-image: url('images/project-1.jpg');width: 100%;height: 40vh;background-size: cover;">
              <div class="h4 title text-white text-center">Recent Project</div>
              <p class="title" style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;${array[index+1]}</p>
            </div>
    </div>
    </div>
        `
    }

})
