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
}
.button1[data-pressed = "true"]
{
    width: 300px;
}
.button1[data-pressed = "false"]
{
    width: 150px;
}`;

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