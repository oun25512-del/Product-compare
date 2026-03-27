const P=[
 {id:1,n:'iPhone 15 Pro Max',b:'Apple',c:'สมาร์ทโฟน',e:'📱',p:49900,o:52900,r:4.8,rv:2847,iN:false,iS:true,
  sp:{หน้าจอ:'6.7" Super Retina XDR',ชิป:'A17 Pro',แบตเตอรี่:'4422 mAh',กล้อง:'48MP Triple Camera',RAM:'8 GB',ที่เก็บ:'256 GB',OS:'iOS 17',น้ำหนัก:'221 g'},
  tg:['Titanium','5G','ProRes'],ds:'สุดยอดสมาร์ทโฟนจาก Apple พร้อมชิป A17 Pro ทรงพลัง ระบบกล้อง Pro-grade และวัสดุไทเทเนียมระดับพรีเมียม',
  sc:{ประสิทธิภาพ:99,กล้อง:97,แบตเตอรี่:80,จอภาพ:95,คุ้มค่า:72}},
 {id:2,n:'Samsung Galaxy S24 Ultra',b:'Samsung',c:'สมาร์ทโฟน',e:'📲',p:42900,o:44900,r:4.7,rv:1923,iN:true,iS:true,
  sp:{หน้าจอ:'6.8" Dynamic AMOLED 2X',ชิป:'Snapdragon 8 Gen 3',แบตเตอรี่:'5000 mAh',กล้อง:'200MP Quad Camera',RAM:'12 GB',ที่เก็บ:'256 GB',OS:'Android 14',น้ำหนัก:'232 g'},
  tg:['S-Pen','Galaxy AI','5G'],ds:'แฟลกชิปสูงสุดของ Samsung พร้อม S-Pen ในตัว กล้อง 200MP และ Galaxy AI',
  sc:{ประสิทธิภาพ:97,กล้อง:99,แบตเตอรี่:90,จอภาพ:99,คุ้มค่า:80}},
 {id:3,n:'Google Pixel 8 Pro',b:'Google',c:'สมาร์ทโฟน',e:'🤖',p:32900,o:32900,r:4.6,rv:876,iN:true,iS:false,
  sp:{หน้าจอ:'6.7" LTPO OLED',ชิป:'Tensor G3',แบตเตอรี่:'5050 mAh',กล้อง:'50MP Triple Camera',RAM:'12 GB',ที่เก็บ:'128 GB',OS:'Android 14',น้ำหนัก:'213 g'},
  tg:['AI Camera','Pure Android','7yr Update'],ds:'สมาร์ทโฟนที่เก่งด้าน AI และกล้องที่สุด พร้อมอัปเดต 7 ปี',
  sc:{ประสิทธิภาพ:88,กล้อง:96,แบตเตอรี่:88,จอภาพ:92,คุ้มค่า:90}},
 {id:4,n:'MacBook Pro 14" M3 Pro',b:'Apple',c:'โน้ตบุ๊ก',e:'💻',p:79900,o:84900,r:4.9,rv:1234,iN:true,iS:true,
  sp:{หน้าจอ:'14.2" Liquid Retina XDR',ชิป:'Apple M3 Pro',แบตเตอรี่:'18 ชั่วโมง',RAM:'18 GB',ที่เก็บ:'512 GB SSD',GPU:'18-core GPU',OS:'macOS Sonoma',น้ำหนัก:'1.61 kg'},
  tg:['M3 Pro','Liquid XDR','ProMotion'],ds:'โน้ตบุ๊กสำหรับมืออาชีพที่ทรงพลังที่สุด พร้อมชิป M3 Pro',
  sc:{ประสิทธิภาพ:99,จอภาพ:99,แบตเตอรี่:95,พกพา:85,คุ้มค่า:70}},
 {id:5,n:'Dell XPS 15 OLED',b:'Dell',c:'โน้ตบุ๊ก',e:'🖥️',p:59900,o:64900,r:4.5,rv:654,iN:false,iS:true,
  sp:{หน้าจอ:'15.6" OLED 3.5K',ชิป:'Intel Core i7-13700H',แบตเตอรี่:'13 ชั่วโมง',RAM:'16 GB DDR5',ที่เก็บ:'512 GB SSD',GPU:'NVIDIA RTX 4060',OS:'Windows 11',น้ำหนัก:'1.86 kg'},
  tg:['OLED 3.5K','RTX 4060','Thunderbolt 4'],ds:'โน้ตบุ๊กพรีเมียมสุดคุ้มจาก Dell พร้อมจอ OLED และ RTX 4060',
  sc:{ประสิทธิภาพ:92,จอภาพ:96,แบตเตอรี่:80,พกพา:75,คุ้มค่า:85}},
 {id:6,n:'ASUS ROG Zephyrus G16',b:'ASUS',c:'โน้ตบุ๊ก',e:'🎮',p:69900,o:74900,r:4.7,rv:432,iN:true,iS:true,
  sp:{หน้าจอ:'16" QHD+ 240Hz',ชิป:'AMD Ryzen 9 8945HS',แบตเตอรี่:'10 ชั่วโมง',RAM:'32 GB DDR5',ที่เก็บ:'1 TB SSD',GPU:'NVIDIA RTX 4090',OS:'Windows 11',น้ำหนัก:'1.85 kg'},
  tg:['RTX 4090','240Hz','ROG Nebula'],ds:'เกมมิ่งโน้ตบุ๊กระดับสูงสุด พร้อม RTX 4090 และจอ 240Hz',
  sc:{ประสิทธิภาพ:99,จอภาพ:95,แบตเตอรี่:65,พกพา:78,คุ้มค่า:82}},
 {id:7,n:'Sony WH-1000XM5',b:'Sony',c:'หูฟัง',e:'🎧',p:11900,o:13900,r:4.8,rv:3241,iN:false,iS:true,
  sp:{ไดรเวอร์:'30mm Dynamic',ANC:'ใช่ (ล้ำมาก)',แบตเตอรี่:'30 ชั่วโมง',Bluetooth:'5.2',ไมค์:'8 ไมโครโฟน',ชาร์จ:'USB-C',พับได้:'ใช่',น้ำหนัก:'250 g'},
  tg:['ANC ดีที่สุด','30 ชม.','Multipoint'],ds:'หูฟัง ANC ที่ดีที่สุดในตลาด เสียงสุดเพลิน ตัดเสียงได้ยอดเยี่ยม',
  sc:{คุณภาพเสียง:93,ANC:99,แบตเตอรี่:92,ความสบาย:90,คุ้มค่า:88}},
 {id:8,n:'Apple AirPods Pro 2',b:'Apple',c:'หูฟัง',e:'🎵',p:9990,o:9990,r:4.7,rv:5612,iN:false,iS:false,
  sp:{ไดรเวอร์:'Custom Apple Driver',ANC:'Adaptive Transparency',แบตเตอรี่:'6+30 ชั่วโมง',Bluetooth:'5.3',ไมค์:'3 ไมโครโฟน',ชาร์จ:'MagSafe/USB-C',พับได้:'-',น้ำหนัก:'5.3 g/ชิ้น'},
  tg:['Adaptive ANC','H2 Chip','MagSafe'],ds:'หูฟังอินเอียร์ไร้สายที่ดีที่สุดสำหรับผู้ใช้ Apple พร้อม ANC ล้ำ',
  sc:{คุณภาพเสียง:90,ANC:92,แบตเตอรี่:72,ความสบาย:88,คุ้มค่า:82}},
 {id:9,n:'Apple Watch Series 9',b:'Apple',c:'สมาร์ทวอทช์',e:'⌚',p:14900,o:16900,r:4.8,rv:2103,iN:true,iS:true,
  sp:{หน้าจอ:'41mm Always-On Retina',ชิป:'S9 SiP Chip',แบตเตอรี่:'18 ชั่วโมง',กันน้ำ:'WR50',GPS:'GPS + GLONASS',เซนเซอร์:'ECG, Blood Oxygen',OS:'watchOS 10',วัสดุ:'Aluminum Alloy'},
  tg:['Double Tap','Crash Detection','Carbon Neutral'],ds:'สมาร์ทวอทช์ที่ดีที่สุดสำหรับผู้ใช้ Apple ฟีเจอร์สุขภาพครบครัน',
  sc:{สุขภาพ:95,แบตเตอรี่:72,สมาร์ท:98,ดีไซน์:88,คุ้มค่า:78}},
 {id:10,n:'Samsung Galaxy Watch 6 Classic',b:'Samsung',c:'สมาร์ทวอทช์',e:'🕐',p:12900,o:14500,r:4.6,rv:987,iN:true,iS:true,
  sp:{หน้าจอ:'47mm Super AMOLED',ชิป:'Exynos W930',แบตเตอรี่:'40 ชั่วโมง',กันน้ำ:'5ATM + IP68',GPS:'GPS + GLONASS',เซนเซอร์:'ECG, ความดันโลหิต',OS:'Wear OS 4',วัสดุ:'Stainless Steel'},
  tg:['Rotating Bezel','40h Battery','BP Monitor'],ds:'สมาร์ทวอทช์พรีเมียมจาก Samsung ดีไซน์คลาสสิก วัดความดันโลหิตได้',
  sc:{สุขภาพ:92,แบตเตอรี่:90,สมาร์ท:92,ดีไซน์:95,คุ้มค่า:85}},
 {id:11,n:'iPad Pro 12.9" M2',b:'Apple',c:'แท็บเล็ต',e:'📋',p:43900,o:46900,r:4.8,rv:1567,iN:false,iS:true,
  sp:{หน้าจอ:'12.9" Liquid Retina XDR',ชิป:'Apple M2',RAM:'8 GB',ที่เก็บ:'256 GB',กล้อง:'12MP + 10MP',แบตเตอรี่:'10 ชั่วโมง',OS:'iPadOS 17',ขนาด:'280.6 x 214.9 mm'},
  tg:['M2 Chip','Mini-LED','Apple Pencil 2'],ds:'แท็บเล็ตที่ทรงพลังที่สุดจาก Apple เหมาะสำหรับงานสร้างสรรค์ระดับโปร',
  sc:{ประสิทธิภาพ:97,จอภาพ:99,แบตเตอรี่:85,ความสะดวก:92,คุ้มค่า:72}},
 {id:12,n:'Samsung Galaxy Tab S9+',b:'Samsung',c:'แท็บเล็ต',e:'📱',p:36900,o:39900,r:4.6,rv:892,iN:true,iS:true,
  sp:{หน้าจอ:'12.4" Dynamic AMOLED 2X',ชิป:'Snapdragon 8 Gen 2',RAM:'12 GB',ที่เก็บ:'256 GB',กล้อง:'13MP + 8MP',แบตเตอรี่:'10090 mAh',OS:'Android 13 + DeX',ขนาด:'285.4 x 185.4 mm'},
  tg:['DeX Mode','IP68','S Pen'],ds:'แท็บเล็ต Android ที่ดีที่สุด พร้อม S-Pen, DeX Mode และกันน้ำ IP68',
  sc:{ประสิทธิภาพ:94,จอภาพ:96,แบตเตอรี่:92,ความสะดวก:90,คุ้มค่า:83}},
];

let cL=[],lL=[],fi='all',ca='all',mxP=150000,sm='def',hist=[],tCmp=0;

function init(){
  const cats=['ทั้งหมด',...new Set(P.map(p=>p.c))];
  document.getElementById('ct').innerHTML=cats.map(c=>`<button class="ctb ${c==='ทั้งหมด'?'active':''}" onclick="sC('${c}',this)">${c}</button>`).join('');
  rP();uSt();
}
function sC(c,b){ca=c==='ทั้งหมด'?'all':c;document.querySelectorAll('.ctb').forEach(x=>x.classList.remove('active'));b.classList.add('active');rP();}
function sF(f,b){fi=f;document.querySelectorAll('.fbt').forEach(x=>x.classList.remove('active'));b.classList.add('active');rP();}
function uP(){mxP=parseInt(document.getElementById('pr').value);document.getElementById('pv').textContent=mxP>=150000?'ไม่จำกัด':'฿'+mxP.toLocaleString();rP();}
function gF(){
  const q=document.getElementById('si').value.toLowerCase();
  let r=P.filter(p=>{
    if(ca!=='all'&&p.c!==ca)return false;
    if(p.p>mxP)return false;
    if(fi==='sale'&&!p.iS)return false;
    if(fi==='new'&&!p.iN)return false;
    if(fi==='top'&&p.r<4.7)return false;
    if(q&&!p.n.toLowerCase().includes(q)&&!p.b.toLowerCase().includes(q)&&!p.c.includes(q))return false;
    return true;
  });
  if(sm==='pa')r.sort((a,b)=>a.p-b.p);
  else if(sm==='pd')r.sort((a,b)=>b.p-a.p);
  else if(sm==='rt')r.sort((a,b)=>b.r-a.r);
  else if(sm==='dc')r.sort((a,b)=>(b.o-b.p)-(a.o-a.p));
  return r;
}
function rP(){
  const l=gF();
  document.getElementById('pc').textContent='สินค้า '+l.length+' รายการ';
  document.getElementById('pg').innerHTML=l.map(rC).join('');
}
function rC(p){
  const iC=cL.includes(p.id),lk=lL.includes(p.id),dc=p.iS?Math.round((1-p.p/p.o)*100):0;
  return`<div class="pc ${iC?'inc':''}" id="card-${p.id}">
  <div class="ci">
    ${p.iN?'<div class="bn2">ใหม่</div>':p.iS?`<div class="bs">-${dc}%</div>`:''}
    <div class="cbs">
      <div class="cbt ${lk?'lk':''}" onclick="tL(${p.id},event)">${lk?'❤️':'🤍'}</div>
      <div class="cbt ${iC?'co':''}" onclick="tC(${p.id},event)">⚖️</div>
    </div>
    <span style="position:relative;z-index:1">${p.e}</span>
  </div>
  <div class="cb2">
    <div class="cbr">${p.b} · ${p.c}</div>
    <div class="cbn">${p.n}</div>
    <div class="cst">
      <span class="str">${'★'.repeat(Math.floor(p.r))}${'☆'.repeat(5-Math.floor(p.r))}</span>
      <span style="font-size:12px;font-weight:600;color:var(--go)">${p.r}</span>
      <span class="rvc">(${p.rv.toLocaleString()})</span>
    </div>
    <div class="csp">${p.tg.map(t=>`<span class="spt">${t}</span>`).join('')}</div>
    <div class="cf">
      <div>${p.iS?`<div class="po">฿${p.o.toLocaleString()}</div>`:''}<div class="pm ${p.iS?'s':''}">฿${p.p.toLocaleString()}</div></div>
      <button class="acb ${iC?'active':''}" onclick="tC(${p.id},event)">${iC?'✓ เลือกแล้ว':'+ เปรียบเทียบ'}</button>
    </div>
  </div></div>`;
}
function tC(id,e){
  if(e)e.stopPropagation();
  const i=cL.indexOf(id);
  if(i===-1){if(cL.length>=4){ts('⚠️','เปรียบเทียบได้สูงสุด 4 รายการ');return;}cL.push(id);ts('⚖️','เพิ่ม "'+P.find(x=>x.id===id).n+'" เข้าเปรียบเทียบ');}
  else cL.splice(i,1);
  uCP();rP();uSt();
}
function uCP(){
  const panel=document.getElementById('cp'),badge=document.getElementById('cb');
  document.getElementById('cn').textContent=cL.length;
  if(cL.length>0){panel.classList.add('show');badge.style.display='flex';}
  else{panel.classList.remove('show');badge.style.display='none';}
  const items=cL.map(id=>{const p=P.find(x=>x.id===id);return`<div class="cit"><span class="cie">${p.e}</span><span class="cin">${p.n}</span><span class="cir" onclick="tC(${id})">✕</span></div>`;});
  while(items.length<4)items.push('<div class="cph">+ เพิ่มสินค้า</div>');
  document.getElementById('cil').innerHTML=items.join('');
}
function clrC(){cL=[];uCP();rP();uSt();ts('🗑️','ล้างรายการเปรียบเทียบแล้ว');}
function oCM(){
  if(cL.length<2){ts('⚠️','กรุณาเลือกสินค้าอย่างน้อย 2 รายการ');return;}
  document.getElementById('cmo').classList.add('show');bCT();
  tCmp++;hist.unshift({ids:[...cL],t:new Date().toLocaleString('th-TH')});
  uSt();rH();
}
function cCM(){document.getElementById('cmo').classList.remove('show');}
function bCT(){
  const pr=cL.map(id=>P.find(p=>p.id===id));
  const sk=[...new Set(pr.flatMap(p=>Object.keys(p.sp)))];
  const sc=[...new Set(pr.flatMap(p=>Object.keys(p.sc)))];
  const mp=Math.min(...pr.map(p=>p.p));
  let h=`<table class="ctb2"><thead><tr><th class="cl">สินค้า</th>${pr.map(p=>`<th class="cp2 ${p.p===mp?'hl':''}"><div class="ph"><span class="pe">${p.e}</span><div class="pbr">${p.b}</div><div class="pn">${p.n}</div><div class="pp">฿${p.p.toLocaleString()}</div>${p.iS?`<div style="font-size:10px;color:var(--t3);text-decoration:line-through">฿${p.o.toLocaleString()}</div>`:''} ${p.p===mp?'<div class="bb">💰 ราคาดีที่สุด</div>':''}</div></th>`).join('')}</tr></thead><tbody>`;
  const mr=Math.max(...pr.map(p=>p.r));
  h+=`<tr><td class="cl">⭐ Rating</td>${pr.map(p=>`<td class="${p.r===mr?'vg':'vn'}"><span style="color:var(--go)">${'★'.repeat(Math.floor(p.r))}</span><strong> ${p.r}</strong> <span style="font-size:11px;color:var(--t3)">(${p.rv.toLocaleString()})</span></td>`).join('')}</tr>`;
  sk.forEach(k=>{h+=`<tr><td class="cl">${k}</td>${pr.map(p=>`<td class="vn">${p.sp[k]||'—'}</td>`).join('')}</tr>`;});
  h+=`<tr><td class="cl" colspan="${pr.length+1}" style="color:var(--ac3);font-size:11px;font-weight:800;padding-top:16px">📊 คะแนนด้านต่างๆ</td></tr>`;
  sc.forEach(k=>{
    const vs=pr.map(p=>p.sc[k]||0);const mx=Math.max(...vs);
    h+=`<tr><td class="cl">${k}</td>${pr.map((p,i)=>{const v=vs[i];return`<td><div class="pw"><div class="pb"><div class="pf" style="width:${v}%;background:${v===mx?'linear-gradient(90deg,#10b981,#06b6d4)':'linear-gradient(90deg,#6366f1,#8b5cf6)'}"></div></div><span class="pl ${v===mx?'vg':''}">${v}/100</span></div></td>`;}).join('')}</tr>`;
  });
  const tt=pr.map(p=>Object.values(p.sc).reduce((a,b)=>a+b,0));const mt=Math.max(...tt);
  h+=`<tr><td class="cl">🏆 คะแนนรวม</td>${pr.map((p,i)=>`<td><span style="font-size:18px;font-weight:800;color:${tt[i]===mt?'var(--gr)':'var(--t2)'}">${tt[i]}</span>${tt[i]===mt?'<div class="bb" style="margin-top:4px">🏆 แนะนำ!</div>':''}</td>`).join('')}</tr>`;
  h+='</tbody></table>';
  document.getElementById('ctw').innerHTML=h;
}
function tL(id,e){
  if(e)e.stopPropagation();
  const i=lL.indexOf(id),p=P.find(x=>x.id===id);
  if(i===-1){lL.push(id);ts('❤️','เพิ่ม "'+p.n+'" ในรายการโปรด');}
  else{lL.splice(i,1);ts('💔','ลบ "'+p.n+'" จากรายการโปรด');}
  uSt();rP();rW();
}
function rW(){
  const g=document.getElementById('wg'),e=document.getElementById('we');
  if(!lL.length){g.innerHTML='';e.style.display='block';}
  else{e.style.display='none';g.innerHTML=lL.map(id=>rC(P.find(p=>p.id===id))).join('');}
}
function oD(id){
  const p=P.find(x=>x.id===id);const dc=p.iS?Math.round((1-p.p/p.o)*100):0;
  document.getElementById('dt').textContent=p.n;
  document.getElementById('db').innerHTML=`<div class="di">${p.e}</div><div>
    <div class="dbrnd">${p.b} · ${p.c}</div>
    <div class="dn">${p.n}</div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:11px">
      <span style="color:var(--go);font-size:14px">${'★'.repeat(Math.floor(p.r))}</span>
      <strong style="color:var(--go)">${p.r}</strong>
      <span style="color:var(--t3);font-size:11px">(${p.rv.toLocaleString()} รีวิว)</span>
    </div>
    <div class="dd">${p.ds}</div>
    <div style="margin-bottom:14px">
      ${p.iS?`<div style="font-size:11px;color:var(--t3);text-decoration:line-through">฿${p.o.toLocaleString()}</div>`:''}
      <div class="dpr">฿${p.p.toLocaleString()}</div>
      ${p.iS?`<div class="dsv">ประหยัด ฿${(p.o-p.p).toLocaleString()} (${dc}%)</div>`:''}
    </div>
    <div class="dsp">${Object.entries(p.sp).map(([k,v])=>`<div class="dsr"><span class="dsk">${k}</span><span class="dsv2">${v}</span></div>`).join('')}</div>
    <div style="display:flex;gap:9px">
      <button class="bp" style="flex:1" onclick="tC(${p.id});cDM()">⚖️ เปรียบเทียบ</button>
      <button class="bo" style="border-radius:10px" onclick="tL(${p.id})">${lL.includes(p.id)?'❤️':'🤍'}</button>
    </div>
  </div>`;
  document.getElementById('dmo').classList.add('show');
}
function cDM(){document.getElementById('dmo').classList.remove('show');}
function rH(){
  const l=document.getElementById('hl'),e=document.getElementById('he');
  if(!hist.length){l.innerHTML='';e.style.display='block';return;}
  e.style.display='none';
  l.innerHTML=hist.map(h=>{
    const pr=h.ids.map(id=>P.find(p=>p.id===id));
    return`<div style="background:var(--s);border:1px solid var(--bd);border-radius:var(--r);padding:16px;margin-bottom:12px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <span style="font-size:11px;color:var(--t3)">⏰ ${h.t}</span>
        <button class="bp" style="font-size:11px;padding:5px 12px" onclick='rC2(${JSON.stringify(h.ids)})'>ดูอีกครั้ง</button>
      </div>
      <div style="display:flex;gap:9px;flex-wrap:wrap">${pr.map(p=>`<div style="display:flex;align-items:center;gap:7px;background:var(--s2);border:1px solid var(--bd);border-radius:9px;padding:7px 12px"><span style="font-size:18px">${p.e}</span><div><div style="font-size:10px;color:var(--t3)">${p.b}</div><div style="font-size:12px;font-weight:600">${p.n}</div></div></div>`).join('')}</div>
    </div>`;
  }).join('');
}
function rC2(ids){cL=ids;uCP();go('home');oCM();}
function go(pg,b){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+pg).classList.add('active');
  document.querySelectorAll('.ntb').forEach(x=>x.classList.remove('active'));
  if(b)b.classList.add('active');
  if(pg==='wishlist')rW();
  if(pg==='history')rH();
}
function uSt(){
  document.getElementById('sp').textContent=P.length;
  document.getElementById('sc2').textContent=new Set(P.map(p=>p.c)).size;
  document.getElementById('sl').textContent=lL.length;
  document.getElementById('sc3').textContent=tCmp;
}
function ts(icon,msg){
  const c=document.getElementById('tc');const t=document.createElement('div');
  t.className='ts';t.innerHTML=`<span>${icon}</span><span>${msg}</span>`;
  c.appendChild(t);setTimeout(()=>t.remove(),3000);
}
document.addEventListener('click',e=>{
  const card=e.target.closest('.pc');
  if(card&&!e.target.closest('.cbt')&&!e.target.closest('.acb'))oD(parseInt(card.id.replace('card-','')));
});
document.getElementById('cmo').addEventListener('click',e=>{if(e.target===document.getElementById('cmo'))cCM();});
document.getElementById('dmo').addEventListener('click',e=>{if(e.target===document.getElementById('dmo'))cDM();});
init();
