const moonPath="M19.5 28.0501C19.5 43.2379 27.5 52 27.5 55.5501C12.3122 55.5501 0 43.2379 0 28.0501C0 12.8623 12.3122 0.550095 27.5 0.550095C27.5 0.550095 19.5 12.8623 19.5 28.0501Z";
const sunPath="M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
const darkMode=document.querySelector("#darkMode")
let toggle=false;
darkMode.addEventListener('click',()=>{
    // we need to use Anim.js
    // here we set up the timeline
    const timeline=anime.timeline({
        duration:750,
        easing:"easeOutExpo"
    })
    // add different animation to the timeline
    timeline.add({
        targets:".sun",
        d:[{
            value: toggle ? sunPath : moonPath
        }]
    })


.add({
    targets:"#darkMode",
    rotate:toggle ? 0 : 320,

},"-=350")
.add({
    targets:'section',
    background:toggle ? "rgb(199,199,199)" :"rgb(22,22,22)",
    color: toggle ? "rgb(22,22,22)" : "rgb(199,199,199)"
},"-=700")

// evry time we click on the sun i want that toggle to switch
if(toggle==false){
    toggle=true;
}
else{
    toggle=false;
}
})

