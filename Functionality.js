let container = document.querySelector(".input-container")
console.log(container)
container.innerHTML =`  <div class="sec2-div1">
<h1>Personal info</h1> 

<p>Please provide your name, email address, and phone number.</p> 
</div> 
<div class="sec2-div2">
<label for="name"> Name </label> <br>
<input type="text" placeholder="Devilal" class="input" name="fname" value="" id="name"> <br> <br>
<label for="email">Email Address</label> <br>
<input type="text" placeholder="devilalpanchal@"  class="input" name="lname " id="lname"><br> <br>
<label for="phone"> Phone number</label> <br>
<input type="text" name="phone" class="input" placeholder="e.g. +91  6895258596" id="phonemumber"  required>

</div>`

let currentPage = 2
let button = document.querySelector(".btn5")
button.addEventListener("click",()=>{
console.log("hello")
if (currentPage == 2){
    container.innerHTML =` <div class="section-3">
    <div class="section3-start">
        <h1>Select your plan </h1>
        <p> You have the option of monthly or yearly billing.</p>
    </div>


    <div class="sec3-div1">
        <div class="sec3-div2">
            <div class="image2"> <img src="./images/icon-arcade.svg" alt="">
                <div class="imagestatement">
                    <h4> Arcade</h4>
                    <p>$9/mo </p>
                </div>
            </div>
            <div class="image2">
                <img src="./images/icon-advanced.svg" alt="">
                <div class="imagestatement">
                    <h4> Advanced</h4>
                    <p>$12/mo</p>
                </div>

            </div>
            <div class="image2">
                <img src="./images/icon-pro.svg" alt="">
                <div class="imagestatement">
                    <h4> Pro</h4>

                    <p> $15/mo</p>
                </div>

            </div>
        </div>

        <div class="sec3-div3">
            <div class="class-toggle" ></div>
            <div>
                <p class="monthly"> Monthly</p>
            </div>
            <div><label class="switch" onclick="startbuttoon">
                    <input type="checkbox" checked>
                    <span class="slider round"></span>
                </label></div>
            <div>
                <p>Yearly</p>
            </div>
        </div>
    </div>
   
</div> `
}
})

// for Toggle button functionality
let toggle = document.querySelector(".sec3-div3");
let monthly = document.querySelector(".monthly");
function startbutton(){
    toggle.classList("active");
    if(toggle.classList.contains("active")){
        monthly.innerHTML= "Monthly";
    }
    else{
        monthly.innerHTML= "Yearly";
    }
}
// console.log("toggle")