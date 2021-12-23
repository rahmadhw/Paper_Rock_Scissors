let skorken = 0;
let skorPlayer = 0;
let timeOut = "";

let ken = document.getElementById("ninja-ken");

let splashScreen = document.getElementsByClassName("splash")[0];
let startGame = document.getElementsByClassName('start')[0];
let displaySkorKen = document.getElementsByClassName("skor-ken")[0];
let displayskorPlayer = document.getElementsByClassName("skor-player")[0];


let reset = document.getElementById("reset");
let batu = document.getElementById("batu");
let gunting = document.getElementById("gunting");
let kertas = document.getElementById("kertas");


if (localStorage.getItem("skorken"))
{
  skorken = localStorage.getItem("skorken");
  displaySkorKen.innerHTML = skorken;
}

if (localStorage.getItem(skorPlayer))
{
  skorPlayer = localStorage("skorPlayer");
  displayskorPlayer.innerHTML = skorPlayer;
}

startGame.addEventListener("click",() => {
  splashScreen.style.top = "-120vh";
  splashScreen.style.transition = ".75s";
});

batu.addEventListener("click", () =>{
  janken(0);
});

gunting.addEventListener("click", () =>{
  janken(1);
});

kertas.addEventListener("click", () => {
  janken(2);
});


function janken(tangan) {
  let jariken = Math.floor(Math.random() * 3);

  switch (jariken) 
  {
    case 0:
      ken.style.backgroundImage = "url(gambar/ken-batu.png)";
      break;
    case 1:
      ken.style.backgroundImage = "url(gambar/ken-gunting.png)";
      break;
    case 2:
      ken.style.backgroundImage = "url(gambar/ken-kertas.png)";
      break;
  }

  ken.classList.remove("goyang");


  switch (tangan) 
  {
    case 0:
      if (jariken == 0)
      {
        result("draw");
      }
      else if (jariken == 1)
      {
        result("player");
      }else
      {
        result("ken");
      }
      break;
    case 1:
      if (jariken == 0)
      {
        result("ken");
      }
      else if (jariken == 1)
      {
        result("draw");
      }
      else
      {
        result("player")
      }
      break;
    default:
      if (jariken == 0)
      {
        result("player");
      }
      else if (jariken == 1)
      {
        result("ken");
      }
      else
      {
        result("draw")
      }
      break;
  }
}

function result(who)
{
  clearTimeout(timeOut);

  switch (who)
  {
    case "ken":
      skorken++;
      localStorage.setItem("skorken", skorken);
      displaySkorKen.innerHTML = skorken;
      console.log("Ninja Ken Menang");
      break;
    case "player":
      skorPlayer++
      localStorage.setItem("skorPlayer", skorPlayer);
      displayskorPlayer.innerHTML = skorPlayer;
      console.log("Anda menang");
      break;
    default:
      console.log("seri");
      break;
  }

  timeOut = setTimeout(() => {
    ken.style.removeProperty("background-image");
    ken.classList.add("goyang");
  }, 3000);
}


reset.addEventListener("click", function() {
  if (confirm("ini akan memulai ulang permainan, Anda yakin ? ")){
    skorken = 0;
    skorPlayer = 0;
    displaySkorKen.innerHTML = skorken;
    displayskorPlayer.innerHTML = skorPlayer;
    localStorage.clear();
  };
});