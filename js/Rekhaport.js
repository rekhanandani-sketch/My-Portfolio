const items=document.querySelectorAll(".card");
items.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".4s";

});


});

<svg viewBox="0 0 300 300" className="circle-text">
  <defs>
    <path
      id="circlePath"
      d="M 150,150
         m -90,0
         a 90,90 0 1,1 180,0
         a 90,90 0 1,1 -180,0"
    />
  </defs>
  <text fill="#d6b37a" fontSize="12" fontWeight="700">
    <textPath href="#circlePath">
      ✦ FRONTEND DEVELOPER ✦ REKHA NAMBAR THINDI ✦
    </textPath>
  </text>
</svg>

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.style.opacity=1;
e.target.style.transform="translateY(0)";
}
});
});

document.querySelectorAll("section,.card")
.forEach(el=>{

el.style.opacity=0;

el.style.transform="translateY(40px)";

el.style.transition=".8s";

observer.observe(el);

});