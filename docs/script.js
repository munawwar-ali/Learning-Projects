const answers = document.querySelector("#answer");
const buttons = document.querySelectorAll("button");
const darkmood = document.querySelector("#darkmood");
const body = document.querySelector("body");
const containers = document.querySelector("#container");
const cal = document.querySelector("#cal");
const more = document.querySelector("#more");
const currency = document.querySelector("#currency");
let crrntmode = "light";
let str = "";





buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.textContent.trim());
    if (e.target.textContent.trim() === "AC") {
      str = "";
      answers.value = str;
    } else if (e.target.textContent.trim() === "DEL") {
      str = str.substring(0, str.length - 1);
      answers.value = str;
    } else if (e.target.textContent.trim() === "=") {
      str = eval(str);
      answers.value = str;
    }
    else if(e.target.textContent.trim() === "Calculator"){
      str = "";
      answers.value = str
    }else if(e.target.textContent.trim() === "More"){
      str = "";
      answers.value = str
    }else if(e.target.textContent.trim() === "Currency"){
      str = "";
      answers.value = str
    }
     else {
      str += e.target.textContent.trim();
      answers.value = str;
    }
  });
});

darkmood.addEventListener("click", () => {
  if (crrntmode === "light") {
    crrntmode = "dark";
    body.style.backgroundColor = "black";
    cal.style.color = "black";
    darkmood.style.color = "black";
    more.style.color = "black";
    currency.style.color = "black";
    document.querySelector(".calcul").style.color = "white"
    document.querySelector(".explore").style.color = "white"
    document.querySelector(".money").style.color = "white"
  } else {
    crrntmode = "light";
    body.style.backgroundColor = "#d8ebff";
    darkmood.style.color = "#b1d6fb";
    cal.style.color = "white";
    more.style.color = "white";
    currency.style.color = "white";
    document.querySelector(".calcul").style.color = "black"
     document.querySelector(".explore").style.color = "black"
      document.querySelector(".money").style.color = "black"
  }
  
});

more.addEventListener("click",()=>{
  alert("More and Currency under work (thank you)")
})
currency.addEventListener("click",()=>{
  alert("More and Currency under work (thank you)")
})



function showSection(sectionId) {
      // Sab section hide kar do
      document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));

      // Jo button click hua uska section show karo
      document.getElementById(sectionId).classList.add('active');
    }
    function showSection(sectionId) {
      // Sab section hide kar do
      document.querySelectorAll('.section2').forEach(sec => sec.classList.remove('active2'));

      // Jo button click hua uska section show karo
      document.getElementById(sectionId).classList.add('active2');
      
    }