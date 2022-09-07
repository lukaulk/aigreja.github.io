const bars = document.querySelector(".show-other");
const navOptions = document.querySelector(".navOptions");
      bars.onclick = (e) =>{
        e.target.style = `
        position: absolute;
        right: 10px;
        top: -5px;
        `;
        e.target.classList.toggle("fa-times");
        navOptions.classList.toggle("hide-desktop");
        document.querySelector(".ig-navbar").classList.toggle("h-2");
      }
      