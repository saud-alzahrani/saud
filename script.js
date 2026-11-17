const U={kau:{n:["جامعة الملك عبدالعزيز","King Abdulaziz University"],c:["جدة","Jeddah"],w:[.3,.3,.4]},
ksu:{n:["جامعة الملك سعود","King Saud University"],c:["الرياض","Riyadh"],w:[.3,.3,.4]},
kfu:{n:["جامعة الملك فهد للبترول والمعادن","KFUPM"],c:["الظهران","Dhahran"],w:[.2,.3,.5]},
uqu:{n:["جامعة أم القرى","Umm Al-Qura University"],c:["مكة","Makkah"],w:[.4,.3,.3]}};
const F={med:["الطب","Medicine"],eng:["الهندسة","Engineering"],cs:["الحاسب","Computing"],biz:["الأعمال","Business"],sci:["العلوم","Science"],hlt:["العلوم الصحية","Health Sciences"],law:["الأنظمة والقانون","Law"],arc:["العمارة والتصميم","Architecture & Design"],edu:["التربية","Education"]};
// [uni, field, ar, en, min, ielts, step]  (تقديرية / sample)
const M=[["kau","med","الطب والجراحة","Medicine & Surgery",96,6,75],["kau","eng","الهندسة الكهربائية","Electrical Engineering",91,5.5,70],["kau","cs","علوم الحاسب","Computer Science",89,5.5,70],["kau","biz","إدارة الأعمال","Business Administration",82,0,0],["kau","sci","الأحياء","Biology",78,0,0],
["ksu","med","الطب والجراحة","Medicine & Surgery",97,6,75],["ksu","eng","الهندسة المدنية","Civil Engineering",90,5.5,70],["ksu","cs","هندسة البرمجيات","Software Engineering",92,5.5,70],["ksu","biz","المحاسبة","Accounting",84,0,0],["ksu","sci","الفيزياء","Physics",76,0,0],
["kfu","eng","هندسة الحاسب","Computer Engineering",95,5.5,75],["kfu","cs","علوم الحاسب","Computer Science",94,5.5,75],["kfu","biz","نظم المعلومات الإدارية","Management Information Systems",90,5.5,70],["kfu","sci","الكيمياء","Chemistry",84,5,65],
["uqu","med","الطب والجراحة","Medicine & Surgery",95,6,75],["uqu","cs","نظم المعلومات","Information Systems",84,0,0],["uqu","biz","التسويق","Marketing",79,0,0],["uqu","sci","الرياضيات","Mathematics",74,0,0],
["kau","hlt","الصيدلة","Pharmacy",93,5.5,70],["kau","hlt","طب الأسنان","Dentistry",94,6,75],["kau","hlt","التمريض","Nursing",80,5,65],["kau","hlt","العلوم الطبية التطبيقية","Applied Medical Sciences",83,5,65],
["kau","eng","الهندسة الميكانيكية","Mechanical Engineering",90,5.5,70],["kau","eng","الهندسة الكيميائية","Chemical Engineering",89,5.5,70],["kau","eng","الهندسة الصناعية","Industrial Engineering",87,5.5,70],
["kau","cs","الأمن السيبراني","Cybersecurity",90,5.5,70],["kau","cs","الذكاء الاصطناعي","Artificial Intelligence",91,5.5,70],
["kau","biz","الاقتصاد","Economics",80,0,0],["kau","biz","التسويق","Marketing",80,0,0],["kau","law","القانون","Law",83,0,0],["kau","arc","العمارة","Architecture",86,5,65],
["kau","edu","التربية الخاصة","Special Education",70,0,0],["kau","sci","الكيمياء","Chemistry",77,0,0],["kau","sci","الإحصاء","Statistics",74,0,0],
["ksu","hlt","الصيدلة","Pharmacy",94,5.5,70],["ksu","hlt","طب الأسنان","Dentistry",95,6,75],["ksu","hlt","التمريض","Nursing",82,5,65],["ksu","hlt","العلاج الطبيعي","Physical Therapy",88,5,65],
["ksu","eng","الهندسة الميكانيكية","Mechanical Engineering",91,5.5,70],["ksu","eng","الهندسة الكهربائية","Electrical Engineering",92,5.5,70],["ksu","eng","الهندسة الكيميائية","Chemical Engineering",90,5.5,70],
["ksu","cs","علوم الحاسب","Computer Science",90,5.5,70],["ksu","cs","الذكاء الاصطناعي","Artificial Intelligence",93,5.5,70],["ksu","cs","الأمن السيبراني","Cybersecurity",91,5.5,70],
["ksu","biz","التسويق","Marketing",82,0,0],["ksu","biz","المالية","Finance",85,0,0],["ksu","biz","الاقتصاد","Economics",83,0,0],["ksu","law","القانون","Law",85,0,0],["ksu","arc","العمارة","Architecture",88,5,65],
["ksu","edu","التربية","Education",72,0,0],["ksu","sci","الأحياء","Biology",78,0,0],["ksu","sci","الكيمياء","Chemistry",78,0,0],["ksu","sci","الإحصاء","Statistics",75,0,0],
["kfu","eng","الهندسة الميكانيكية","Mechanical Engineering",94,5.5,75],["kfu","eng","الهندسة الكهربائية","Electrical Engineering",94,5.5,75],["kfu","eng","الهندسة الكيميائية","Chemical Engineering",93,5.5,75],["kfu","eng","الهندسة المدنية","Civil Engineering",92,5.5,70],["kfu","eng","الهندسة الصناعية","Industrial Engineering",91,5.5,70],["kfu","eng","هندسة البترول","Petroleum Engineering",93,5.5,75],
["kfu","cs","الأمن السيبراني","Cybersecurity",93,5.5,75],["kfu","cs","الذكاء الاصطناعي","Artificial Intelligence",95,5.5,75],["kfu","biz","المحاسبة","Accounting",88,5.5,70],["kfu","biz","المالية","Finance",89,5.5,70],["kfu","biz","التسويق","Marketing",86,5.5,70],
["kfu","sci","الفيزياء","Physics",85,5,65],["kfu","sci","الرياضيات","Mathematics",85,5,65],["kfu","sci","الجيولوجيا","Geology",82,5,65],["kfu","arc","العمارة","Architecture",90,5.5,70],
["uqu","hlt","الصيدلة","Pharmacy",90,5.5,70],["uqu","hlt","طب الأسنان","Dentistry",92,6,75],["uqu","hlt","التمريض","Nursing",78,5,65],
["uqu","eng","الهندسة الميكانيكية","Mechanical Engineering",85,5.5,70],["uqu","eng","الهندسة الكهربائية","Electrical Engineering",86,5.5,70],["uqu","cs","علوم الحاسب","Computer Science",86,5.5,70],
["uqu","biz","المحاسبة","Accounting",80,0,0],["uqu","biz","إدارة الأعمال","Business Administration",78,0,0],["uqu","law","الأنظمة","Law",80,0,0],
["uqu","edu","رياض الأطفال","Early Childhood",70,0,0],["uqu","sci","الأحياء","Biology",72,0,0],["uqu","sci","الكيمياء","Chemistry",73,0,0]];
const T={ar:{ti:"مرشد التخصص",su:"أدخل درجاتك وشاهد أين تقبل",l1:"المعدل التراكمي (من 100)",l2:"القدرات العامة",l3:"التحصيلي",l4:"IELTS (اختياري)",l5:"STEP (اختياري)",
sm:["النسبة المرتبة","مقبول","قريب"],all:"كل الجامعات",allf:"كل المجالات",alls:"كل الحالات",ok:"مقبول",mid:"قريب",bad:"بعيد",lang:"تنقصك اللغة",min:"الحد الأدنى",yours:"نسبتك",w:"الأوزان",
need:"كم أحتاج؟",neT:"التحصيلي المطلوب",neQ:"القدرات المطلوبة",imp:"غير ممكن بهذه الدرجات",ielts:"يتطلب IELTS",step:"أو STEP",er:"أدخل قيمًا بين 0 و100",ne:"لا توجد نتائج",
nt:"البيانات تجريبية للتوضيح، وليست حدود القبول الرسمية. راجع موقع الجامعة قبل أي قرار.",pct:"نسبتك الموزونة (أعلى جامعة)"},
en:{ti:"Major Guide",su:"Enter your scores and see where you can get in",l1:"High school GPA (/100)",l2:"Qudrat (General Aptitude)",l3:"Tahsili",l4:"IELTS (optional)",l5:"STEP (optional)",
sm:["Ranked","Accepted","Close"],all:"All universities",allf:"All fields",alls:"All statuses",ok:"Accepted",mid:"Close",bad:"Far",lang:"Language needed",min:"Minimum",yours:"Your score",w:"Weights",
need:"How much do I need?",neT:"Tahsili needed",neQ:"Qudrat needed",imp:"Not reachable with these scores",ielts:"Requires IELTS",step:"or STEP",er:"Enter values between 0 and 100",ne:"No results",
nt:"Sample data for illustration, not official admission cutoffs. Check the university website before any decision.",pct:"Your weighted score (top university)"}};
let L="ar",open=null,fav=new Set();
try{fav=new Set(JSON.parse(localStorage.getItem("mf")||"[]"))}catch(e){}
const $=i=>document.getElementById(i),t=k=>T[L][k],n=x=>Number(x);
const wt=(u,h,q,a)=>{const w=U[u].w;return h*w[0]+q*w[1]+a*w[2]};
const f2=x=>(Math.round(x*100)/100).toString();
function ui(){const d=document.documentElement;d.lang=L;d.dir=L=="ar"?"rtl":"ltr";$("lg").textContent=L=="ar"?"EN":"ع";
["ti","su","l1","l2","l3","l4","l5"].forEach(k=>$(k).textContent=t(k));$("nt").textContent=t("nt");document.title=t("ti");
const i=L=="ar"?0:1;
$("fu").innerHTML=`<option value="">${t("all")}</option>`+Object.keys(U).map(k=>`<option value="${k}">${U[k].n[i]}</option>`).join("");
$("ff").innerHTML=`<option value="">${t("allf")}</option>`+Object.keys(F).map(k=>`<option value="${k}">${F[k][i]}</option>`).join("");
$("fs").innerHTML=`<option value="">${t("alls")}</option>`+["ok","mid","bad","lang"].map(k=>`<option value="${k}">${t(k)}</option>`).join("");
run()}
function run(){const h=$("hs").value,q=$("qu").value,a=$("ta").value,ie=$("ie").value,st=$("st").value;
const bad=v=>v!==""&&(n(v)<0||n(v)>100);
$("er").textContent=(bad(h)||bad(q)||bad(a)||bad(st)||(ie!==""&&(n(ie)<0||n(ie)>9)))?t("er"):"";
if($("er").textContent||h===""||q===""||a===""){$("res").hidden=true;return}
$("res").hidden=false;const H=n(h),Q=n(q),A=n(a),I=ie===""?null:n(ie),S=st===""?null:n(st),i=L=="ar"?0:1;
const fu=$("fu").value,ff=$("ff").value,fs=$("fs").value;
let r=M.map((m,x)=>{const sc=wt(m[0],H,Q,A),gap=sc-m[4],need=m[5]>0||m[6]>0;
const langOk=!need||(I!==null&&I>=m[5])||(S!==null&&S>=m[6]);
let s=gap>=0?"ok":gap>=-5?"mid":"bad";if(gap>=0&&!langOk)s="lang";return{m,x,sc,gap,s,langOk,need}});
const cnt=r.filter(o=>o.s=="ok").length,cl=r.filter(o=>o.s=="mid").length;
const top=Math.max(...Object.keys(U).map(u=>wt(u,H,Q,A)));
$("bg").textContent=f2(top)+"%";$("sm").innerHTML=`<span>${t("pct")}</span><br><span>✔ ${t("ok")}: ${cnt}</span><span>◐ ${t("mid")}: ${cl}</span>`;
r=r.filter(o=>(!fu||o.m[0]==fu)&&(!ff||o.m[1]==ff)&&(!fs||o.s==fs));
const ord={ok:0,mid:1,lang:2,bad:3};r.sort((a,b)=>ord[a.s]-ord[b.s]||b.gap-a.gap);
$("ls").innerHTML=r.length?r.map(o=>{const m=o.m,u=U[m[0]],w=u.w;
let nd="";if(open===o.x){const tn=(m[4]-H*w[0]-Q*w[1])/w[2],qn=(m[4]-H*w[0]-A*w[2])/w[1];
const fm=v=>v>100?t("imp"):v<=0?"✔":f2(v);nd=`<div class="need">${t("neT")}: <b>${fm(tn)}</b> &nbsp;|&nbsp; ${t("neQ")}: <b>${fm(qn)}</b></div>`}
const lg=o.need?`<span>${t("ielts")} ${m[5]} ${t("step")} ${m[6]}</span>`:"";
return`<div class="c ${o.s}"><div class="top"><div><div class="m">${m[2+i]}</div><div class="u">${u.n[i]} · ${u.c[i]}</div></div><span class="tag">${t(o.s)}</span></div>
<div class="row"><span>${t("yours")}: <b>${f2(o.sc)}</b></span><span>${t("min")}: <b>${m[4]}</b></span><span>${t("w")}: <b>${w.map(v=>v*100).join("/")}</b></span>${lg}</div>
<div class="bar"><i style="width:${Math.max(4,Math.min(100,o.sc/m[4]*100))}%"></i></div><div class="acts"><button data-n="${o.x}">${t("need")}</button><button data-d="${o.x}">${L=="ar"?"تفاصيل":"Details"}</button><button class="fav ${fav.has(o.x)?"on":""}" data-f="${o.x}">★</button></div>${nd}</div>`}).join(""):`<div class="empty">${t("ne")}</div>`}
$("ls").addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
if(b.dataset.n!==undefined){const x=+b.dataset.n;open=open===x?null:x}
if(b.dataset.f!==undefined){const x=+b.dataset.f;fav.has(x)?fav.delete(x):fav.add(x);try{localStorage.setItem("mf",JSON.stringify([...fav]))}catch(e){}}
run()});
["hs","qu","ta","ie","st","fu","ff","fs"].forEach(i=>$(i).addEventListener("input",run));
$("lg").onclick=()=>{L=L=="ar"?"en":"ar";ui()};
/* ---- Majors catalog + details ---- */
const IN={
med:["دراسة تشخيص الأمراض وعلاجها والوقاية منها، وتشمل سنوات أساسية وتدريبًا سريريًا.","Study of diagnosing, treating and preventing disease, with basic sciences and clinical training.",["طبيب عام","طبيب مقيم ثم أخصائي","باحث طبي"],["General practitioner","Resident then specialist","Medical researcher"]],
hlt:["تخصصات الرعاية الصحية المساندة للطب مثل الصيدلة والتمريض والعلاج.","Allied healthcare fields such as pharmacy, nursing and therapy.",["صيدلي","ممرض","أخصائي علاج طبيعي","فني مختبر"],["Pharmacist","Nurse","Physical therapist","Lab technologist"]],
eng:["تطبيق الرياضيات والفيزياء في تصميم الأنظمة والمنشآت والآلات.","Applying math and physics to design systems, structures and machines.",["مهندس تصميم","مهندس مشاريع","مهندس تشغيل وصيانة"],["Design engineer","Project engineer","Operations & maintenance engineer"]],
cs:["برمجة وتصميم الأنظمة وحماية البيانات وتطوير الذكاء الاصطناعي.","Programming, systems design, data protection and AI development.",["مطور برمجيات","محلل أنظمة","أخصائي أمن سيبراني","مهندس بيانات"],["Software developer","Systems analyst","Cybersecurity specialist","Data engineer"]],
biz:["إدارة الشركات والمال والتسويق والاقتصاد.","Managing companies, finance, marketing and economics.",["محاسب","محلل مالي","مسؤول تسويق","مدير مشاريع"],["Accountant","Financial analyst","Marketing manager","Project manager"]],
sci:["علوم أساسية تدرس الظواهر الطبيعية والرياضية وتؤهل للبحث.","Core sciences studying natural and mathematical phenomena, preparing for research.",["باحث","معلم","محلل بيانات","أخصائي مختبر"],["Researcher","Teacher","Data analyst","Lab specialist"]],
law:["دراسة الأنظمة والتشريعات والعقود والمرافعات.","Study of regulations, legislation, contracts and advocacy.",["محامٍ","مستشار قانوني","باحث قانوني"],["Lawyer","Legal counsel","Legal researcher"]],
arc:["تصميم المباني والمدن والمساحات وتخطيطها.","Designing and planning buildings, cities and spaces.",["مهندس معماري","مصمم داخلي","مخطط عمراني"],["Architect","Interior designer","Urban planner"]],
edu:["إعداد معلمين ومختصين في التعليم والتربية الخاصة والطفولة المبكرة.","Preparing teachers and specialists in education, special needs and early childhood.",["معلم","أخصائي تربية خاصة","مشرف تربوي"],["Teacher","Special-education specialist","Education supervisor"]]};
const T2={ar:{tc:"حاسبة النسبة",tk:"التخصصات",sr:"ابحث عن تخصص أو جامعة...",det:"تفاصيل",about:"عن التخصص",dur:"مدة الدراسة",yrs:"سنوات تقريبًا",car:"المجالات الوظيفية",req:"المتطلبات",min:"الحد الأدنى للنسبة (تقديري)",wts:"أوزان الحساب",need:"مطلوبة",none:"غير مشترط",hs:"المعدل التراكمي",qu:"القدرات",ta:"التحصيلي",ie:"IELTS",st:"STEP",langn:"أحد الاختبارين يكفي",yo:"نسبتك",gap:"الفارق",cl:"إغلاق",cnt:"تخصص",cn:"لا توجد نتائج",dis:"البيانات تقديرية، راجع موقع الجامعة الرسمي."},
en:{tc:"Calculator",tk:"Majors",sr:"Search a major or university...",det:"Details",about:"About",dur:"Study duration",yrs:"years (approx.)",car:"Career paths",req:"Requirements",min:"Minimum score (estimated)",wts:"Score weights",need:"Required",none:"Not required",hs:"High school GPA",qu:"Qudrat",ta:"Tahsili",ie:"IELTS",st:"STEP",langn:"Either test is enough",yo:"Your score",gap:"Difference",cl:"Close",cnt:"majors",cn:"No results",dis:"Estimated data. Check the official university site."}};
const t2=k=>T2[L][k];
const yrs=m=>/Medicine|Dentistry/.test(m[3])?6:/Pharmacy|Architecture|Engineering/.test(m[3])?5:4;
function mini(){const v=(i)=>$(i).value;const h=v("hs"),q=v("qu"),a=v("ta");return(h===""||q===""||a===""||[h,q,a].some(x=>n(x)<0||n(x)>100))?null:[n(h),n(q),n(a)]}
function showD(x){const m=M[x],u=U[m[0]],i=L=="ar"?0:1,f=IN[m[1]],s=mini(),w=u.w;
const ln=m[5]>0||m[6]>0;let you="";
if(s){const sc=wt(m[0],s[0],s[1],s[2]),g=sc-m[4];you=`<div class="yo ${g>=0?"p":"m"}">${t2("yo")}: <b>${f2(sc)}</b> · ${t2("gap")}: <b>${g>=0?"+":""}${f2(g)}</b></div>`}
$("sh").innerHTML=`<button class="x" id="xc" aria-label="${t2("cl")}">×</button>
<div class="dt">${m[2+i]}</div><div class="u">${u.n[i]} · ${u.c[i]} · ${F[m[1]][i]}</div>${you}
<h4>${t2("about")}</h4><p>${f[i]}</p>
<div class="two"><div><h4>${t2("dur")}</h4><p>${yrs(m)} ${t2("yrs")}</p></div><div><h4>${t2("car")}</h4><p>${f[2+i].join("، ")}</p></div></div>
<h4>${t2("req")}</h4><table class="rq">
<tr><td>${t2("min")}</td><td><b>${m[4]}</b></td></tr>
<tr><td>${t2("wts")}</td><td><b>${w.map(v=>v*100).join(" / ")}</b></td></tr>
<tr><td>${t2("hs")}</td><td>${t2("need")}</td></tr><tr><td>${t2("qu")}</td><td>${t2("need")}</td></tr><tr><td>${t2("ta")}</td><td>${t2("need")}</td></tr>
<tr><td>${t2("ie")}</td><td>${m[5]>0?"≥ "+m[5]:t2("none")}</td></tr><tr><td>${t2("st")}</td><td>${m[6]>0?"≥ "+m[6]:t2("none")}</td></tr></table>
${ln?`<div class="hint">${t2("langn")}</div>`:""}<div class="hint">${t2("dis")}</div>`;
$("dl").hidden=false;document.body.style.overflow="hidden";$("xc").onclick=cD}
function cD(){$("dl").hidden=true;document.body.style.overflow=""}
$("dl").addEventListener("click",e=>{if(e.target.id=="dl")cD()});
document.addEventListener("keydown",e=>{if(e.key=="Escape")cD()});
function cat(){const i=L=="ar"?0:1,q=$("ks").value.trim().toLowerCase(),fu=$("ku").value,ff=$("kf").value;
const r=M.map((m,x)=>({m,x})).filter(o=>(!fu||o.m[0]==fu)&&(!ff||o.m[1]==ff)&&(!q||(o.m[2]+" "+o.m[3]+" "+U[o.m[0]].n.join(" ")).toLowerCase().includes(q)));
$("kc").textContent=r.length+" "+t2("cnt");
$("kl").innerHTML=r.length?r.map(({m,x})=>`<div class="k" data-d="${x}"><div class="m">${m[2+i]}</div><div class="u">${U[m[0]].n[i]} · ${U[m[0]].c[i]}</div><div class="chips2"><span>${F[m[1]][i]}</span><span>${t2("min")}: <b>${m[4]}</b></span>${m[5]>0?`<span>IELTS ${m[5]}</span>`:""}</div></div>`).join(""):`<div class="empty">${t2("cn")}</div>`}
$("kl").addEventListener("click",e=>{const c=e.target.closest("[data-d]");if(c)showD(+c.dataset.d)});
$("ls").addEventListener("click",e=>{const b=e.target.closest("button[data-d]");if(b)showD(+b.dataset.d)});
function tab(k){$("pcalc").hidden=k!="calc";$("pcat").hidden=k!="cat";document.querySelectorAll(".tb").forEach(b=>b.classList.toggle("on",b.dataset.t==k))}
document.querySelectorAll(".tb").forEach(b=>b.onclick=()=>tab(b.dataset.t));
["ks","ku","kf"].forEach(i=>$(i).addEventListener("input",cat));
const _ui=ui;ui=function(){_ui();const i=L=="ar"?0:1;$("tc").textContent=t2("tc");$("tk").textContent=t2("tk");$("ks").placeholder=t2("sr");
$("ku").innerHTML=`<option value="">${t("all")}</option>`+Object.keys(U).map(k=>`<option value="${k}">${U[k].n[i]}</option>`).join("");
$("kf").innerHTML=`<option value="">${t("allf")}</option>`+Object.keys(F).map(k=>`<option value="${k}">${F[k][i]}</option>`).join("");cat()};

ui();
