let currentLang = localStorage.getItem("healthLang") || "en";
function applyLanguage(){
  document.documentElement.lang=currentLang;
  document.querySelectorAll("[data-en][data-te]").forEach(el=>{
    el.innerHTML=currentLang==="te"?el.dataset.te:el.dataset.en;
  });
  const btn=document.getElementById("langBtn");
  if(btn) btn.textContent=currentLang==="te"?"English":"తెలుగు";
  localStorage.setItem("healthLang",currentLang);
}
function toggleLanguage(){currentLang=currentLang==="en"?"te":"en";applyLanguage();}
function toggleMenu(){const n=document.getElementById("navMenu");if(n)n.classList.toggle("active");}
document.addEventListener("DOMContentLoaded",()=>{
  applyLanguage();
  document.querySelectorAll("#navMenu a").forEach(a=>a.addEventListener("click",()=>document.getElementById("navMenu")?.classList.remove("active")));
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

  const steps=[...document.querySelectorAll(".step")], hands=document.getElementById("washAnimation");
  if(steps.length){
    let step=0;
    const labels={
      en:["Soap + Water","Apply Soap","Rub Palms","Between Fingers","Nails + Thumbs","Rinse","Dry"],
      te:["సబ్బు + నీరు","సబ్బు రాయండి","అరచేతులను రుద్దండి","వేళ్ల మధ్య","గోర్లు + బొటనవేళ్లు","కడగండి","ఆరబెట్టండి"]
    };
    function showStep(){
      steps.forEach((s,i)=>s.classList.toggle("active",i===step));
      hands.className="wash-animation step-"+step+" reveal visible";
      document.getElementById("stepCounter").textContent=(step+1)+" / 7";
      document.getElementById("washLabel").textContent=labels[currentLang][step];
    }
    document.getElementById("nextStep").onclick=()=>{step=(step+1)%7;showStep()};
    document.getElementById("prevStep").onclick=()=>{step=(step+6)%7;showStep()};
    steps.forEach((s,i)=>s.onclick=()=>{step=i;showStep()});
    showStep();
  }
});
