const increment1 = document.querySelector('.btn5')
const decrement2 = document.querySelector('.btn6')
const section2 = document.querySelector('.section-2')
const section3 = document.querySelector('.section-3')
const section4 = document.querySelector('.section-4')
const section5 = document.querySelector('.section-5')
const section6 = document.querySelector('.section-6')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
let appendContaine=document.querySelector('.appendContainer')
let count=0

appendContaine.innerHTML=array[count]

increment1.addEventListener('click',()=>{
   count++

   if(count>=array.length){
      count=array.length
   }else{
   appendContaine.innerHTML=array[count]

}

// in four section add confirm btn
if(count===3){
   increment1.innerText='Confirm'
   increment1.style.backgroundColor = 'rgb(94, 94, 231)'

}else{
   increment1.innerText='Next step' 
}

// for last section hide increment and decremetn hide
if(count===4){
   increment1.classList.add('hide')
   decrement2.classList.add('hide')

}else{
   increment1.classList.add('btn5')
   decrement2.classList.add('btn6')
}

if(count===0 ){
    btn1.style.color = "black"
   btn1.style.backgroundColor = "white"

}else{
   
  
   btn1.style.backgroundColor = "#1100fff1"
   btn1.style.color = "white"
}

if(count===1 ){
   decrement2.classList.remove('hide')

   btn2.style.color = "black"
   btn2.style.backgroundColor = "white"
}else{
   btn2.style.backgroundColor = "#1100fff1"
   btn2.style.color = "white"

}

if(count===2 ){
   btn3.style.color = "black"
   btn3.style.backgroundColor = "white"
}else{
   btn3.style.backgroundColor = "#1100fff1"
   btn3.style.color = "white"

}

if(count===3 ){
   btn4.style.color = "black"
   btn4.style.backgroundColor = "white"
}else{
   btn4.style.backgroundColor = "#1100fff1"
   btn4.style.color = "white"

}

});

decrement2.addEventListener('click',()=>{
   count--
   if(count<=0){
      count=0
   }else{
   appendContaine.innerHTML=array[count]
}
})




































// Alll Files is Working

// let container = document.querySelector(".input-container")
// console.log(container)
// container.innerHTML =`  <div class="sec2-div1">
// <h1>Personal info</h1> 

// <p>Please provide your name, email address, and phone number.</p> 
// </div> 
// <div class="sec2-div2">
// <label for="name"> Name </label> <br>
// <input type="text" placeholder="Devilal" class="input" name="fname" value="" id="name"> <br> <br>
// <label for="email">Email Address</label> <br>
// <input type="text" placeholder="devilalpanchal@"  class="input" name="lname " id="lname"><br> <br>
// <label for="phone"> Phone number</label> <br>
// <input type="text" name="phone" class="input" placeholder="e.g. +91  6895258596" id="phonemumber"  required>

// </div>`

// let currentPage = 2
// let button = document.querySelector(".btn5")
// button.addEventListener("click",()=>{
// // console.log("hello")
// if (currentPage == 2){
//     container.innerHTML =` <div class="section-3">
//     <div class="section3-start">
//         <h1>Select your plan </h1>
//         <p> You have the option of monthly or yearly billing.</p>
//     </div>
//     <div class="sec3-div1">
//         <div class="sec3-div2">
//             <div class="image2"> <img src="./images/icon-arcade.svg" alt="">
//                 <div class="imagestatement">
//                     <h4> Arcade</h4>
//                     <p>$9/mo </p>
//                 </div>
//             </div>
//             <div class="image2">
//                 <img src="./images/icon-advanced.svg" alt="">
//                 <div class="imagestatement">
//                     <h4> Advanced</h4>
//                     <p>$12/mo</p>
//                 </div>

//             </div>
//             <div class="image2">
//                 <img src="./images/icon-pro.svg" alt="">
//                 <div class="imagestatement">
//                     <h4> Pro</h4>

//                     <p> $15/mo</p>
//                 </div>

//             </div>
//         </div>

//         <div class="sec3-div3">
//             <div class="class-toggle" ></div>
//             <div>
//                 <p class="monthly"> Monthly</p>
//             </div>
//             <div><label class="switch" onclick="startbuttoon">
//                     <input type="checkbox" checked>
//                     <span class="slider round"></span>
//                 </label></div>
//             <div>
//                 <p>Yearly</p>
//             </div>
//         </div>
//     </div>
   
// </div> `

// }
// currentPage++;
// if (currentPage == 4){
//     container.innerHTML =`  <div class="section-4">
//     <div class="sec4-div1">
//         <h1> Pick add-ons
//         </h1>
//         <p> Add-ons help enhance your gaming experience.</p>
//     </div>
//     <div class="sec4-div2">
//         <div class="sec4-1">
//             <div>
//                 <label class="container">
//                     <input type="checkbox" checked="checked">
//                     <span class="checkmark"></span>
//                 </label>
//             </div>
//             <div>
//                 <div>Online service</div>
//                 <div>
//                     <p>Access to multiplayer games</p>
//                 </div>
//             </div>
//             <div class="sec4-rupee  rsd1">+$1/mo</div>
//         </div> <br>
//         <div class="sec4-1">
//             <div> <label class="container">
//                     <input type="checkbox" checked="checked">
//                     <span class="checkmark"></span>
//                 </label>
//             </div>
//             <div>
//                 <div>Larger storage</div>
//                 <div>
//                     <p>Extra 1TB of cloud save</p>
//                 </div>
//             </div>

//             <div class="sec4-rupee rsd2">+$2/mo</div>
//         </div> <br>
//         <div class="sec4-1">
//             <div> <label class="container">
//                     <input type="checkbox" checked="checked">
//                     <span class="checkmark"></span>
//                 </label>
//             </div>
//             <div>
//                 <div>Customizable Profile</div>
//                 <div>
//                     <p> Custom theme on your profile</p>
//                 </div>
//             </div>

//             <div class="sec4-rupee">+$2/mo</div>
//         </div>

//     </div>
// </div>`
// currentPage++;
// }

// if(currentPage==6){
//     container.innerHTML=`<div class="section-5">
//     <div class="sec5-div1">
//         <div>
//             <h1>Finishing up</h1>
//         </div> 
//         <div>
//             <p style="color: rgba(0, 0, 0, 0.274);margin-top: 10px;">Double-check everything looks OK before confirming.</p>
//         </div>
//     </div>
//     <div class="sec5-div01">
//         <div class="sec5-div2A">
//             <div class="sec5-div2 arc">
//                 <div> Arcade(Monthly)</div>
//                 <div> $9/mo</div>
//             </div>
//             <hr style="width:85%;text-align:center;margin-left:30px">

//             <div class="sec5-div2 online">
//                 <div>Online service</div>
//                 <div> +$1/mo</div>
//             </div>

//             <div class="sec5-div2 large">
//                 <div>Larger Storage</div>
//                 <div>+$2/mo</div>
//             </div>
//         </div>

//         <div class="sec5-div2 total">
//             <div>Total(per month)</div>
//             <div class="Rs1">+$12/mo</div>
//         </div>
//     </div>
//     <div> <button class="btn7 "> Confirm</button></div>
// </div> `
// }
// if(currentPage==8){
//     container.innerHTML=`<div class="section-6">
//     <div class="main-div">
//         <div>
//             <img class="image1-sec6" src="./images/icon-thank-you.svg" alt="thanks">
//         </div>
//         <div>
//             <h1 class="thanks"> Thank you!</h1>
//         </div>
//         <div>
//             <p class="para"> Thanks for confirming your subscription! We hope
//                 you have funusing our platform. If you ever need support, please feel
//                 free to email us at support@loremgaming.com.</p>
//         </div>
//     </div>
    

// </div> `
// }
// })

//  currentPage = 3
//  button = document.querySelector(".btn5")
// button.addEventListener("click",()=>{
// // console.log("hello")
// if (currentPage == 3){
//     container.innerHTML =`  <div class="section-4">
//     <div class="sec4-div1">
//         <h1> Pick add-ons
//         </h1>
//         <p> Add-ons help enhance your gaming experience.</p>
//     </div>
//     <div class="sec4-div2">
//         <div class="sec4-1">
//             <div>
//                 <label class="container">
//                     <input type="checkbox" checked="checked">
//                     <span class="checkmark"></span>
//                 </label>
//             </div>
//             <div>
//                 <div>Online service</div>
//                 <div>
//                     <p>Access to multiplayer games</p>
//                 </div>
//             </div>
//             <div class="sec4-rupee  rsd1">+$1/mo</div>
//         </div> <br>
//         <div class="sec4-1">
//             <div> <label class="container">
//                     <input type="checkbox" checked="checked">
//                     <span class="checkmark"></span>
//                 </label>
//             </div>
//             <div>
//                 <div>Larger storage</div>
//                 <div>
//                     <p>Extra 1TB of cloud save</p>
//                 </div>
//             </div>

//             <div class="sec4-rupee rsd2">+$2/mo</div>
//         </div> <br>
//         <div class="sec4-1">
//             <div> <label class="container">
//                     <input type="checkbox" checked="checked">
//                     <span class="checkmark"></span>
//                 </label>
//             </div>
//             <div>
//                 <div>Customizable Profile</div>
//                 <div>
//                     <p> Custom theme on your profile</p>
//                 </div>
//             </div>

//             <div class="sec4-rupee">+$2/mo</div>
//         </div>

//     </div>
// </div>`
// }

// })

// for Toggle button functionality
// let toggle = document.querySelector(".sec3-div3");
// let monthly = document.querySelector(".monthly");
// function startbutton(){
//     toggle.classList(".active");
//     if(toggle.classList.contains(".active")){
//         monthly.innerHTML= "Monthly";
//     }
//     else{
//         monthly.innerHTML= "Yearly";
//     }
// }
// console.log("toggle")