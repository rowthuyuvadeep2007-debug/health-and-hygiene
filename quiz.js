const questions=[
 {en:"What should you use to wash your hands?",te:"చేతులు కడుక్కోవడానికి ఏమి ఉపయోగించాలి?",opts:[["Soap and clean water","సబ్బు మరియు శుభ్రమైన నీరు"],["Only mud","మట్టి మాత్రమే"],["Dirty water","మురికి నీరు"],["Only a dry towel","పొడి తువ్వాలు మాత్రమే"]],a:0},
 {en:"When is an important time to wash your hands?",te:"చేతులు కడుక్కోవడానికి ముఖ్యమైన సమయం ఏది?",opts:[["Before eating and after using the toilet","తినే ముందు మరియు టాయిలెట్ ఉపయోగించిన తర్వాత"],["Only when hands look dirty","చేతులు మురికిగా కనిపించినప్పుడు మాత్రమే"],["Only at night","రాత్రి మాత్రమే"],["Once a week","వారానికి ఒకసారి"]],a:0},
 {en:"Why is hand hygiene important?",te:"చేతుల పరిశుభ్రత ఎందుకు ముఖ్యం?",opts:[["It helps remove germs","ఇది క్రిములను తొలగించడంలో సహాయపడుతుంది"],["It makes hands heavier","చేతులు బరువుగా మారుతాయి"],["It increases pollution","కాలుష్యాన్ని పెంచుతుంది"],["It replaces healthy food","ఆరోగ్యకరమైన ఆహారానికి బదులవుతుంది"]],a:0},
 {en:"What is a good oral hygiene habit?",te:"మంచి నోటి పరిశుభ్రత అలవాటు ఏది?",opts:[["Brush your teeth regularly","క్రమం తప్పకుండా పళ్ళు తోముకోవడం"],["Never clean your teeth","పళ్ళు ఎప్పుడూ శుభ్రం చేయకపోవడం"],["Eat only sweets","తీపి పదార్థాలు మాత్రమే తినడం"],["Share one toothbrush","ఒకే టూత్ బ్రష్‌ను పంచుకోవడం"]],a:0},
 {en:"Which water is safest for drinking?",te:"తాగడానికి ఏ నీరు సురక్షితమైనది?",opts:[["Safe, clean drinking water","సురక్షితమైన, శుభ్రమైన తాగునీరు"],["Dirty standing water","మురికి నిల్వ నీరు"],["Unknown water","తెలియని నీరు"],["Water from a polluted source","కాలుష్యమైన నీటి వనరు"]],a:0},
 {en:"What should you do with household waste?",te:"ఇంటి చెత్తను ఏమి చేయాలి?",opts:[["Put it in the proper waste bin","సరైన డస్ట్‌బిన్‌లో వేయాలి"],["Throw it on the road","రోడ్డుపై వేయాలి"],["Throw it into a river","నదిలో వేయాలి"],["Leave it near food","ఆహారం దగ్గర వదిలేయాలి"]],a:0},
 {en:"Which is a healthy daily habit?",te:"ప్రతిరోజూ పాటించాల్సిన ఆరోగ్యకరమైన అలవాటు ఏది?",opts:[["Stay active and rest well","చురుకుగా ఉండి బాగా విశ్రాంతి తీసుకోవడం"],["Skip sleep","నిద్రను మానేయడం"],["Skip meals every day","ప్రతిరోజూ భోజనం మానేయడం"],["Avoid drinking safe water","సురక్షితమైన నీటిని తాగకపోవడం"]],a:0},
 {en:"What should you do before preparing food?",te:"ఆహారం తయారు చేసే ముందు ఏమి చేయాలి?",opts:[["Wash your hands","చేతులు కడుక్కోవాలి"],["Touch waste first","ముందుగా చెత్తను తాకాలి"],["Use dirty utensils","మురికి పాత్రలు ఉపయోగించాలి"],["Leave food uncovered","ఆహారాన్ని మూత లేకుండా ఉంచాలి"]],a:0},
 {en:"Which food choice supports a healthy lifestyle?",te:"ఏ ఆహార ఎంపిక ఆరోగ్యకరమైన జీవనశైలికి సహాయపడుతుంది?",opts:[["A variety of nutritious foods","వివిధ రకాల పోషకమైన ఆహారం"],["Only sugary drinks","తీపి పానీయాలు మాత్రమే"],["Only fried snacks","వేపుడు చిరుతిళ్లు మాత్రమే"],["Skipping meals","భోజనం మానేయడం"]],a:0},
 {en:"What is the main purpose of hygiene?",te:"పరిశుభ్రత యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",opts:[["To support cleanliness and health","శుభ్రత మరియు ఆరోగ్యాన్ని కాపాడటం"],["To spread germs","క్రిములను వ్యాప్తి చేయడం"],["To create pollution","కాలుష్యాన్ని సృష్టించడం"],["To avoid all physical activity","అన్ని శారీరక కార్యకలాపాలను నివారించడం"]],a:0}
];
let qIndex=0, answers=Array(questions.length).fill(null);
function renderQuiz(){
  const q=questions[qIndex], te=currentLang==="te";
  document.getElementById("progressText").textContent=te?`ప్రశ్న ${qIndex+1} / ${questions.length}`:`Question ${qIndex+1} of ${questions.length}`;
  document.getElementById("progressBar").style.width=((qIndex+1)/questions.length*100)+"%";
  document.getElementById("scoreLive").textContent=answers.filter(x=>x!==null && questions[answers.indexOf(x)]?.a===x).length+"/10";
  const area=document.getElementById("questionArea");
  area.innerHTML=`<h2 class="question-title">${te?q.te:q.en}</h2>`+q.opts.map((o,i)=>`<label class="option ${answers[qIndex]===i?"selected":""}"><input type="radio" name="answer" value="${i}" ${answers[qIndex]===i?"checked":""}><span>${te?o[1]:o[0]}</span></label>`).join("");
  area.querySelectorAll("input").forEach(input=>input.addEventListener("change",e=>{answers[qIndex]=Number(e.target.value);renderQuiz()}));
  document.getElementById("prevBtn").disabled=qIndex===0;
  document.getElementById("prevBtn").style.opacity=qIndex===0?".45":"1";
  document.getElementById("nextBtn").textContent=qIndex===questions.length-1?(te?"ఫలితం చూడండి":"See Result"):(te?"తర్వాత →":"Next →");
}
function finishQuiz(){
  if(answers.some(a=>a===null)){alert(currentLang==="te"?"దయచేసి అన్ని ప్రశ్నలకు సమాధానం ఇవ్వండి.":"Please answer all questions.");return;}
  const score=answers.reduce((s,a,i)=>s+(a===questions[i].a?1:0),0);
  document.querySelector(".quiz-card").classList.add("hidden");
  const r=document.getElementById("quizResult");r.classList.remove("hidden");
  const te=currentLang==="te";document.getElementById("finalScore").textContent=score+"/10";
  document.getElementById("resultIcon").textContent=score>=8?"🏆":score>=5?"👏":"📚";
  document.getElementById("resultTitle").textContent=score>=8?(te?"అద్భుతం!":"Excellent!"):score>=5?(te?"చాలా బాగుంది!":"Good job!"):(te?"మరింత నేర్చుకోండి!":"Keep learning!");
  document.getElementById("resultMessage").textContent=score>=8?(te?"మీ ఆరోగ్య జ్ఞానం చాలా బాగుంది.":"Your health knowledge is excellent."):score>=5?(te?"కొంచెం మరింత సాధన చేయండి.":"A little more practice will help."): (te?"మళ్లీ నేర్చుకుని ప్రయత్నించండి.":"Review the lessons and try again.");
}
document.addEventListener("DOMContentLoaded",()=>{
  if(!document.getElementById("questionArea"))return;
  applyLanguage();renderQuiz();
  document.getElementById("nextBtn").onclick=()=>qIndex<questions.length-1?(answers[qIndex]===null?(alert(currentLang==="te"?"ముందుకు వెళ్లడానికి సమాధానం ఎంచుకోండి.":"Please choose an answer before continuing.")):(qIndex++,renderQuiz())):finishQuiz();
  document.getElementById("prevBtn").onclick=()=>{if(qIndex>0){qIndex--;renderQuiz()}};
  document.getElementById("restartBtn").onclick=()=>{answers=Array(questions.length).fill(null);qIndex=0;document.getElementById("quizResult").classList.add("hidden");document.querySelector(".quiz-card").classList.remove("hidden");renderQuiz()};
});
