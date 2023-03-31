//getting the navbar html code onto the screen.
document.getElementById("navbar-html-code").innerText = 
`
<div>
    <b class="nav-bar"> Navigation Bar! </b>
</div>
<div class="nav-output">
    <b class="nav-bar-title"> Title </b>
<nav class="nav-bar-links">
    <a href="page1"> Page1</a>
    <a href="page2"> Page2</a>
    <a href="page3"> Page3</a>
</nav>
</div>
<div>
`;

//getting the navbar css code onto the screen
document.getElementById("navbar-css-code").innerText =
`.nav-bar
{
    font-size: large;
}
.nav-output
{
    width: 400px;
    height: 50px;
    border: 2px solid black;
    padding: 10px;
    margin: 40px;
    font-family: 'Lucida Sans';
    font-size: 15px;
    display: flex;
    flex-direction: column;
}
.nav-bar-title
{
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.nav-bar-links
{
    margin: 10px;
    display: flex;
    justify-content: space-between;
}
`;

//navigation-drawer
const menuButton = document.getElementById("menu-icon");
const menuButtonList = document.getElementById("menu-icon-list");
menuButton.addEventListener("click", () =>
{
    menuButtonList.classList.toggle("menu-icon-list"); 
});

document.getElementById("nd-html-code").innerText = 
`<div>
<b class="nav-draw"> Navigation Drawer!</b>
</div>
<div class="nav-draw-output">
<button class="menu-icon" id="menu-icon">
    <span class="menu-icon-box">
        <span class="menu-icon-inside"></span>
    </span>
</button>
<ul class="menu-icon-list" id="menu-icon-list">
    <li><a href="link1">Link1</a></li>
    <li><a href="link2">Link2</a></li>
    <li><a href="link3">Link3</a></li>
</ul>
</div>`;

document.getElementById("nd-css-code").innerText = 
`.nav-draw
{
    margin: 20px;
    display: flex;
    justify-content: center;
    font-size: large;
}
.nav-draw-output
{
    width: 400px;
    height: 100px;
    border: 2px solid grey;
    padding: 10px;
    font-family: 'Lucida Sans';
    font-size: 15px;
    display: flex;
    flex-direction: column;
    margin: 20px;
}
.menu-icon
 {
    display: flex;
    justify-content: flex-start;
    background-color: transparent;
    border: 0px;
    cursor: pointer;
  } 
  .menu-icon-box 
  {
    display: block;
    position: relative;
    height: 34px;
    width: 30px;
  }
  .menu-icon-inside 
  {
    display: block;
    position: absolute;
    top: 50%;
    width: 30px;
    height: 2px;
    background-color: black;
    transition: all 0.4s ease-in-out;
  }
  .menu-icon-inside::before 
  {
    content: "";
    display: block;
    position: absolute;
    top: -8px;
    width: 30px;
    height: 2px;
    background-color: black;
    transition: all 0.4s ease-in-out;
  }
  .menu-icon-inside::after 
  {
    content: "";
    display: block;
    position: absolute;
    bottom: -8px;
    width: 30px;
    height: 2px;
    background-color: black;
    transition: all 0.4s ease-in-out;
  }
  .menu-icon-list 
  {
    display: none;
    list-style: none;
  }

  .menu-icon-list.open 
  {
    display: flex;
    flex-direction: row;
    
  }`;

document.getElementById("nd-js-code").innerText = 
`const menuButton = document.getElementById("menu-icon");
const menuButtonList = document.getElementById("menu-icon-list");
menuButton.addEventListener("click", () =>
{
    menuButtonList.classList.toggle("menu-icon-list");
});`;

//For the button
const button1 = document.getElementById("button1");

button1.addEventListener("click", (e) => 
{
    e.target.dataset.pressed = "true";
});
button1.addEventListener("mousedown", (e) => 
{
    e.target.dataset.pressed = "false";
});

document.getElementById("button-html-code").innerText = 
`<div class="the-button"> 
    <b> A regular button!</b>
</div>
<div>
    <button class="button1" id="button1"> 
        Hover and click me!</button>
</div>`;

document.getElementById("button-css-code").innerText = 
`.the-buttons-text
{
    font-size: large;
}
.the-button
{
    display: flex;
    justify-content: space-between;
    margin: 20px;
}
.button1
{
    background-color: blue;
    margin: 20px;
}
.button1:hover
{
    background-color: red;
    animation: rotate .5s ease infinite;
    /*You want animation? I give you animation*/
}
@keyframes rotate 
{
    from {transform: rotate(0turn)}
    to {transform: rotate(5turn)}    
}
.button1[data-pressed = "true"]
{
    width: 300px;
}
.button1[data-pressed = "false"]
{
    width: 150px;
}
`;

document.getElementById("button-js-code").innerText = 
`const button1 = document.getElementById("button1");

button1.addEventListener("click", (e) => 
{
    e.target.dataset.pressed = "true";
});
button1.addEventListener("mousedown", (e) => 
{
    e.target.dataset.pressed = "false";
});`;

//The fab button
document.getElementById("fab-html-code").innerText = 
`<div> 
<b class="fab">
The Floating Action Button!</b>
</div>
<div>
    <button class="cancel-button">
        <span class="material-icons-outlined">
        cancel
        </span>
    </button>
</div>
<div>`;

document.getElementById("fab-css-code").innerText = 
`.fab
{
    font-size: large;
    margin: 20px;
}
.cancel-button
{
    margin: 20px;
    border-radius: 64px;
    box-shadow: 2px 5px 7px rgba(0, 0, 3, 4);
    transition: transform 1s ease-in;
}
.cancel-button:hover
{
    background-color: rebeccapurple;
    transform: scale(1.5);
}`;

//image carousel
document.getElementById("img-html-code").innerText = 
` 
<div>
<b class="img-carousel-text">An Image Carousel!</b>
</div>
<div class="img-carousel">
<div class="carousel">
  <img src="mntimage.jpg" alt="image 1">
  <img src="mntimage2.jpg" alt="image 2">
  <img src="mntimage3.jpg" alt="image 3">
  <img src="sunset1.jpg" alt="image 4">
  <img src="sunset2.jpg" alt="image 5">
  <img src="sunset3.jpg" alt="image 6">
</div>
</div>`;

document.getElementById("img-css-code").innerText = 
`.img-carousel-text
{
    font-size: large;
    margin: 20px;
}
.carousel
{
    display: flex;
    flex-direction: row;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    margin: 20px;
}`;

//loading spinners!
document.getElementById("spin-html-code").innerText = 
`
<div>
<b class="lspin-text"> Three Loading Spinners!</b>
</div>
<div class="animated-loader"></div>
<div class="text-loader"> 
Hover over the rotating green square!</div>
<div class="last-spinner"></div> `;

document.getElementById("spin-css-code").innerText = 
`
.lspin-text
{
    font-size: large;
    margin: 20px;
}
.animated-loader
{
    margin: 30px;
    width: 100px;
    height: 100px;
    background-color: green;
    animation: loading 0.75s ease infinite;
}
.animated-loader:hover
{
    background-color: blue;
}
@keyframes loading 
{
    from {transform: rotate(0turn)}
    to {transform: rotate(1turn)}    
}
.text-loader
{
    color: blue;
    font-size: larger;
    animation: largest 1s ease infinite;
    
}
@keyframes largest
{
    0%
    {
        width: 500px;
    }
}
.last-spinner
{
    margin: 20px;
    width: 50px;
    height: 50px;
    background-color: red;
    animation: lagging 0.75s ease infinite;
}
  @keyframes lagging 
  {
    0% 
    {
      transform: translateX(0) translateY(0);
    }
    25% 
    {
      transform: translateX(20px) translateY(0);
    }
    50% 
    {
      transform: translateX(20px) translateY(10px);
    }
    75% 
    {
      transform: translateX(10) translateY(10px);
    }
    100% 
    {
      transform: translateX(0) translateY(0);
    }
  }
`;



