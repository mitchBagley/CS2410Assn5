//displaying the navbar code
document.getElementById("navbar-html-code").innerText = 
`
<div>
    <b class="nav-bar"> Navigation Bar! </b>
</div>
<div class="nav-output">
    <b class="nav-bar-title"> Title </b>
<div class="nav-bar-links">
    <a href="page1"> Page1</a>
    <a href="page2"> Page2</a>
    <a href="page3"> Page3</a>
</div>
</div>
<div>
`;

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




