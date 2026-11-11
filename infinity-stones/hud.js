import {gsap} from './assets/gsap-core.js';
import {stones} from './stones.js?build=infinity-v8';
const lore=['蓝色奇点藏在宇宙魔方中，折叠空间，开启传送门。','曾藏于权杖，后来嵌入幻视额头，赋予意识与心灵之力。','以暗红色以太粒子存在，改变物质与现实。','被封存于宇宙灵球，释放足以摧毁星球的力量。','藏于阿戈摩托之眼，让时间倒流，亦可陷入循环。','橙色宝石位于沃米尔，以灵魂交换灵魂。'];
const holders=['洛基 · LOKI','幻视 · VISION','简·福斯特 · JANE FOSTER','星爵 · STAR-LORD','奇异博士 · DOCTOR STRANGE','灭霸 · THANOS'];
const moments=['星云缓流 / NEBULA DRIFT','意识纤流 / SYNAPTIC THREADS','以太回旋 / VISCOUS SWIRL','能量跃迁 / CRACKLING BURSTS','回溯环流 / REWIND CURRENT','灵魂余烬 / EMBER MIST'];
// Typography never enters the post chain. The render host owns the readiness gate;
// a DOM timeout alone cannot know whether a slow worker/GPU has finished its zoom.
export function mountHUD(send){
 const hud=document.getElementById('hud'),title=document.getElementById('stone-title'),en=document.getElementById('stone-en'),line=document.getElementById('stone-lore'),holder=document.getElementById('stone-holder'),holderBlock=holder.parentElement,number=document.getElementById('stone-number'),moment=document.getElementById('detail-moment'),enter=document.getElementById('enter-detail'),close=document.getElementById('close-detail'),rail=document.getElementById('stone-nav');
 let current=-1,open=false,ready=false,lastData=null,key='',shown=false,pendingMode=null,timeline=null,titleChars=[],englishChars=[],loreLines=[],targets=[],reduce=false;
 const media=gsap.matchMedia();media.add({reduce:'(prefers-reduced-motion: reduce)',normal:'(prefers-reduced-motion: no-preference)'},context=>{reduce=!!context.conditions.reduce;});
 stones.forEach((stone,index)=>{const b=document.createElement('button');b.type='button';b.textContent=String(index+1).padStart(2,'0');b.title=stone.name;b.setAttribute('aria-label',stone.name);b.style.setProperty('--stone',stone.color);b.addEventListener('click',()=>send({type:'chapter',index}));rail.append(b);});
 enter.addEventListener('click',()=>send({type:'detail',index:Math.max(0,current)}));close.addEventListener('click',()=>send({type:'close'}));
 document.getElementById('manifesto-toggle').addEventListener('click',()=>{document.getElementById('manifesto').hidden=false;});document.getElementById('manifesto-close').addEventListener('click',()=>document.getElementById('manifesto').hidden=true);
 function split(element,text,parts,cls){element.replaceChildren();element.setAttribute('aria-label',text);return parts.map(value=>{const span=document.createElement('span');span.className=cls;span.textContent=value===' '?'\u00a0':value;span.setAttribute('aria-hidden','true');element.append(span);return span;});}
 function hide(immediate=true){timeline?.kill();timeline=null;gsap.killTweensOf(targets);shown=false;hud.dataset.copyState='waiting';if(targets.length){if(immediate)gsap.set(targets,{autoAlpha:0});else timeline=gsap.to(targets,{autoAlpha:0,duration:.16,overwrite:true});}}
 function prepare(i){hide();current=i;const s=stones[i];gsap.set([title,en],{clearProps:'letterSpacing,textShadow'});titleChars=split(title,s.name,[...s.name],'reveal-char');englishChars=split(en,s.en+' STONE',[...(s.en+' STONE')],'reveal-char');loreLines=split(line,lore[i],lore[i].match(/[^，。；！？]+[，。；！？]?/g)||[lore[i]],'reveal-line');holder.textContent=holders[i];number.textContent=String(i+1).padStart(2,'0')+' / 06';moment.textContent=moments[i];hud.style.setProperty('--stone',s.color);[...rail.children].forEach((b,n)=>b.setAttribute('aria-current',String(i===n)));
 targets=[...titleChars,...englishChars,...loreLines,holderBlock,number,enter];gsap.set([title,en,line],{autoAlpha:1,filter:'none'});gsap.set(targets,{autoAlpha:0,y:reduce?0:10,filter:reduce?'none':'blur(7px)'});hud.dataset.copyState='waiting';
 }
 function reveal(){if(shown||!ready)return;timeline?.kill();gsap.killTweensOf(targets);shown=true;hud.dataset.copyState='revealing';
  const s=stones[current],letterTitle=getComputedStyle(title).letterSpacing,letterEnglish=getComputedStyle(en).letterSpacing;
  timeline=gsap.timeline({defaults:{ease:'power3.out'},onComplete:()=>{hud.dataset.copyState='visible';}});
  timeline.addLabel('title',0).addLabel('lore',reduce?.18:.64).addLabel('holder',reduce?.25:1.12);
  const chars=[...englishChars,...titleChars];
  if(reduce){timeline.to(chars,{autoAlpha:1,y:0,filter:'none',duration:.18},'title');}
  else{
   timeline.fromTo(englishChars,{autoAlpha:0,y:8,filter:'blur(7px)'},{autoAlpha:1,y:0,filter:'blur(0px)',duration:.76,stagger:{amount:.24,from:'start'}},'title');
   timeline.fromTo(titleChars,{autoAlpha:0,y:12,filter:'blur(9px)'},{autoAlpha:1,y:0,filter:'blur(0px)',duration:.9,stagger:{amount:.18,from:'start'}},'title+=.10');
   timeline.fromTo(title,{letterSpacing:'8px',textShadow:'0 0 18px '+s.color+'77'},{letterSpacing:letterTitle==='normal'?'0px':letterTitle,textShadow:'0 2px 18px #000b',duration:1.18},'title');
   timeline.fromTo(en,{letterSpacing:'7px'},{letterSpacing:letterEnglish==='normal'?'0px':letterEnglish,duration:1.05},'title');
  }
  timeline.fromTo(loreLines,{autoAlpha:0,y:reduce?0:10,filter:reduce?'none':'blur(7px)'},{autoAlpha:1,y:0,filter:'blur(0px)',duration:reduce?.18:.85,stagger:reduce?0:.13},'lore');
  timeline.to(holderBlock,{autoAlpha:1,y:0,filter:'blur(0px)',duration:reduce?.18:.8},'holder');
  if(!open)timeline.to([number,enter],{autoAlpha:1,y:0,filter:'blur(0px)',duration:reduce?.18:.7,stagger:.10},'lore');
 }
 function update(data){lastData=data;const i=Math.max(0,Math.min(5,data.detailOpen?data.detailIndex:data.chapter||0)),nextOpen=!!data.detailOpen,mode=nextOpen?'detail':'stone';open=nextOpen;hud.dataset.detail=String(open);document.documentElement.dataset.detail=String(open);enter.hidden=open||!['stone','detail'].includes(data.phase);close.hidden=!open;moment.hidden=!open;hud.dataset.phase=data.phase||'stone';
  const nextKey=i+':'+mode+':'+(open?(data.detailSequence||0):0);if(nextKey!==key){key=nextKey;prepare(i);}
  if(pendingMode===mode)pendingMode=null;
  const gate=ready&&!pendingMode&&(open?data.detailTextReady===true:data.chapterTextReady===true);
  if(gate)reveal();else if(shown)hide(false);
 }
 return{setReady(value){ready=!!value;hud.dataset.ready=String(ready);hud.setAttribute('aria-hidden',String(!ready));if(!ready)hide();else if(lastData)update(lastData);},update,prepareNavigation(type){if(['chapter','detail','close'].includes(type)){pendingMode=type==='detail'?'detail':'stone';hide();}},get open(){return open;},get revealTimeline(){return timeline;},dispose(){timeline?.kill();media.revert();}};
}
