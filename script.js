/* =============================================
   PRODUCT DATA
============================================= */
const P=[
 {id:1,n:'iPhone 15 Pro Max',b:'Apple',c:'สมาร์ทโฟน',e:'📱',p:49900,o:52900,r:4.8,rv:2847,iN:false,iS:true,iU:false,img:null,
  sp:{หน้าจอ:'6.7" Super Retina XDR',ชิป:'A17 Pro',แบตเตอรี่:'4422 mAh',กล้อง:'48MP Triple Camera',RAM:'8 GB',ที่เก็บ:'256 GB',OS:'iOS 17',น้ำหนัก:'221 g'},
  tg:['Titanium','5G','ProRes'],ds:'สุดยอดสมาร์ทโฟนจาก Apple พร้อมชิป A17 Pro ทรงพลัง ระบบกล้อง Pro-grade และวัสดุไทเทเนียมระดับพรีเมียม',
  sc:{ประสิทธิภาพ:99,กล้อง:97,แบตเตอรี่:80,จอภาพ:95,คุ้มค่า:72}},
 {id:2,n:'Samsung Galaxy S24 Ultra',b:'Samsung',c:'สมาร์ทโฟน',e:'📲',p:42900,o:44900,r:4.7,rv:1923,iN:true,iS:true,iU:false,img:null,
  sp:{หน้าจอ:'6.8" Dynamic AMOLED 2X',ชิป:'Snapdragon 8 Gen 3',แบตเตอรี่:'5000 mAh',กล้อง:'200MP Quad Camera',RAM:'12 GB',ที่เก็บ:'256 GB',OS:'Android 14',น้ำหนัก:'232 g'},
  tg:['S-Pen','Galaxy AI','5G'],ds:'แฟลกชิปสูงสุดของ Samsung พร้อม S-Pen ในตัว กล้อง 200MP และ Galaxy AI',
  sc:{ประสิทธิภาพ:97,กล้อง:99,แบตเตอรี่:90,จอภาพ:99,คุ้มค่า:80}},
 {id:3,n:'Google Pixel 8 Pro',b:'Google',c:'สมาร์ทโฟน',e:'🤖',p:32900,o:32900,r:4.6,rv:876,iN:true,iS:false,iU:false,img:null,
  sp:{หน้าจอ:'6.7" LTPO OLED',ชิป:'Tensor G3',แบตเตอรี่:'5050 mAh',กล้อง:'50MP Triple Camera',RAM:'12 GB',ที่เก็บ:'128 GB',OS:'Android 14',น้ำหนัก:'213 g'},
  tg:['AI Camera','Pure Android','7yr Update'],ds:'สมาร์ทโฟนที่เก่งด้าน AI และกล้องที่สุด พร้อมอัปเดต 7 ปี',
  sc:{ประสิทธิภาพ:88,กล้อง:96,แบตเตอรี่:88,จอภาพ:92,คุ้มค่า:90}},
 {id:4,n:'MacBook Pro 14" M3 Pro',b:'Apple',c:'โน้ตบุ๊ก',e:'💻',p:79900,o:84900,r:4.9,rv:1234,iN:true,iS:true,iU:false,img:null,
  sp:{หน้าจอ:'14.2" Liquid Retina XDR',ชิป:'Apple M3 Pro',แบตเตอรี่:'18 ชั่วโมง',RAM:'18 GB',ที่เก็บ:'512 GB SSD',GPU:'18-core GPU',OS:'macOS Sonoma',น้ำหนัก:'1.61 kg'},
  tg:['M3 Pro','Liquid XDR','ProMotion'],ds:'โน้ตบุ๊กสำหรับมืออาชีพที่ทรงพลังที่สุด พร้อมชิป M3 Pro',
  sc:{ประสิทธิภาพ:99,จอภาพ:99,แบตเตอรี่:95,พกพา:85,คุ้มค่า:70}},
 {id:5,n:'Dell XPS 15 OLED',b:'Dell',c:'โน้ตบุ๊ก',e:'🖥️',p:59900,o:64900,r:4.5,rv:654,iN:false,iS:true,iU:false,img:null,
  sp:{หน้าจอ:'15.6" OLED 3.5K',ชิป:'Intel Core i7-13700H',แบตเตอรี่:'13 ชั่วโมง',RAM:'16 GB DDR5',ที่เก็บ:'512 GB SSD',GPU:'NVIDIA RTX 4060',OS:'Windows 11',น้ำหนัก:'1.86 kg'},
  tg:['OLED 3.5K','RTX 4060','Thunderbolt 4'],ds:'โน้ตบุ๊กพรีเมียมสุดคุ้มจาก Dell พร้อมจอ OLED และ RTX 4060',
  sc:{ประสิทธิภาพ:92,จอภาพ:96,แบตเตอรี่:80,พกพา:75,คุ้มค่า:85}},
 {id:6,n:'ASUS ROG Zephyrus G16',b:'ASUS',c:'โน้ตบุ๊ก',e:'🎮',p:69900,o:74900,r:4.7,rv:432,iN:true,iS:true,iU:false,img:null,
  sp:{หน้าจอ:'16" QHD+ 240Hz',ชิป:'AMD Ryzen 9 8945HS',แบตเตอรี่:'10 ชั่วโมง',RAM:'32 GB DDR5',ที่เก็บ:'1 TB SSD',GPU:'NVIDIA RTX 4090',OS:'Windows 11',น้ำหนัก:'1.85 kg'},
  tg:['RTX 4090','240Hz','ROG Nebula'],ds:'เกมมิ่งโน้ตบุ๊กระดับสูงสุด พร้อม RTX 4090 และจอ 240Hz',
  sc:{ประสิทธิภาพ:99,จอภาพ:95,แบตเตอรี่:65,พกพา:78,คุ้มค่า:82}},
 {id:7,n:'Sony WH-1000XM5',b:'Sony',c:'หูฟัง',e:'🎧',p:11900,o:13900,r:4.8,rv:3241,iN:false,iS:true,iU:false,img:null,
  sp:{ไดรเวอร์:'30mm Dynamic',ANC:'ใช่ (ล้ำมาก)',แบตเตอรี่:'30 ชั่วโมง',Bluetooth:'5.2',ไมค์:'8 ไมโครโฟน',ชาร์จ:'USB-C',พับได้:'ใช่',น้ำหนัก:'250 g'},
  tg:['ANC ดีที่สุด','30 ชม.','Multipoint'],ds:'หูฟัง ANC ที่ดีที่สุดในตลาด เสียงสุดเพลิน ตัดเสียงได้ยอดเยี่ยม',
  sc:{คุณภาพเสียง:93,ANC:99,แบตเตอรี่:92,ความสบาย:90,คุ้มค่า:88}},
 {id:8,n:'Apple AirPods Pro 2',b:'Apple',c:'หูฟัง',e:'🎵',p:9990,o:9990,r:4.7,rv:5612,iN:false,iS:false,iU:false,img:null,
  sp:{ไดรเวอร์:'Custom Apple Driver',ANC:'Adaptive Transparency',แบตเตอรี่:'6+30 ชั่วโมง',Bluetooth:'5.3',ไมค์:'3 ไมโครโฟน',ชาร์จ:'MagSafe/USB-C',พับได้:'-',น้ำหนัก:'5.3 g/ชิ้น'},
  tg:['Adaptive ANC','H2 Chip','MagSafe'],ds:'หูฟังอินเอียร์ไร้สายที่ดีที่สุดสำหรับผู้ใช้ Apple พร้อม ANC ล้ำ',
  sc:{คุณภาพเสียง:90,ANC:92,แบตเตอรี่:72,ความสบาย:88,คุ้มค่า:82}},
 {id:9,n:'Apple Watch Series 9',b:'Apple',c:'สมาร์ทวอทช์',e:'⌚',p:14900,o:16900,r:4.8,rv:2103,iN:true,iS:true,iU:false,img:null,
  sp:{หน้าจอ:'41mm Always-On Retina',ชิป:'S9 SiP Chip',แบตเตอรี่:'18 ชั่วโมง',กันน้ำ:'WR50',GPS:'GPS + GLONASS',เซนเซอร์:'ECG, Blood Oxygen',OS:'watchOS 10',วัสดุ:'Aluminum Alloy'},
  tg:['Double Tap','Crash Detection','Carbon Neutral'],ds:'สมาร์ทวอทช์ที่ดีที่สุดสำหรับผู้ใช้ Apple ฟีเจอร์สุขภาพครบครัน',
  sc:{สุขภาพ:95,แบตเตอรี่:72,สมาร์ท:98,ดีไซน์:88,คุ้มค่า:78}},
 {id:10,n:'Samsung Galaxy Watch 6 Classic',b:'Samsung',c:'สมาร์ทวอทช์',e:'🕐',p:12900,o:14500,r:4.6,rv:987,iN:true,iS:true,iU:false,img:null,
  sp:{หน้าจอ:'47mm Super AMOLED',ชิป:'Exynos W930',แบตเตอรี่:'40 ชั่วโมง',กันน้ำ:'5ATM + IP68',GPS:'GPS + GLONASS',เซนเซอร์:'ECG, ความดันโลหิต',OS:'Wear OS 4',วัสดุ:'Stainless Steel'},
  tg:['Rotating Bezel','40h Battery','BP Monitor'],ds:'สมาร์ทวอทช์พรีเมียมจาก Samsung ดีไซน์คลาสสิก วัดความดันโลหิตได้',
  sc:{สุขภาพ:92,แบตเตอรี่:90,สมาร์ท:92,ดีไซน์:95,คุ้มค่า:85}},
 {id:11,n:'iPad Pro 12.9" M2',b:'Apple',c:'แท็บเล็ต',e:'📋',p:43900,o:46900,r:4.8,rv:1567,iN:false,iS:true,iU:false,img:null,
  sp:{หน้าจอ:'12.9" Liquid Retina XDR',ชิป:'Apple M2',RAM:'8 GB',ที่เก็บ:'256 GB',กล้อง:'12MP + 10MP',แบตเตอรี่:'10 ชั่วโมง',OS:'iPadOS 17',ขนาด:'280.6 x 214.9 mm'},
  tg:['M2 Chip','Mini-LED','Apple Pencil 2'],ds:'แท็บเล็ตที่ทรงพลังที่สุดจาก Apple เหมาะสำหรับงานสร้างสรรค์ระดับโปร',
  sc:{ประสิทธิภาพ:97,จอภาพ:99,แบตเตอรี่:85,ความสะดวก:92,คุ้มค่า:72}},
 {id:12,n:'Samsung Galaxy Tab S9+',b:'Samsung',c:'แท็บเล็ต',e:'📱',p:36900,o:39900,r:4.6,rv:892,iN:true,iS:true,iU:false,img:null,
  sp:{หน้าจอ:'12.4" Dynamic AMOLED 2X',ชิป:'Snapdragon 8 Gen 2',RAM:'12 GB',ที่เก็บ:'256 GB',กล้อง:'13MP + 8MP',แบตเตอรี่:'10090 mAh',OS:'Android 13 + DeX',ขนาด:'285.4 x 185.4 mm'},
  tg:['DeX Mode','IP68','S Pen'],ds:'แท็บเล็ต Android ที่ดีที่สุด พร้อม S-Pen, DeX Mode และกันน้ำ IP68',
  sc:{ประสิทธิภาพ:94,จอภาพ:96,แบตเตอรี่:92,ความสะดวก:90,คุ้มค่า:83}},
];

let cL=[],lL=[],fi='all',ca='all',mxP=150000,sm='def',hist=[],tCmp=0;
let currentImgDataUrl=null, aiData=null, nextId=200, imgColors=[];

/* =============================================
   LOCAL AI ENGINE
   วิเคราะห์จาก: รูป + ชื่อ + แบรนด์ + หมวดหมู่ + ราคา
============================================= */
const AI = {

  // --- Knowledge base: category configs ---
  catDB: {
    'สมาร์ทโฟน':   { emoji:'📱', scoreKeys:['ประสิทธิภาพ','กล้อง','แบตเตอรี่','จอภาพ','คุ้มค่า'],
      specKeys:['หน้าจอ','ชิปเซ็ต','แบตเตอรี่','กล้องหลัก','RAM','ที่เก็บข้อมูล','OS','น้ำหนัก'],
      tagPool:['5G','NFC','Wireless Charging','Fast Charge','AMOLED','120Hz','AI Camera','Dual SIM','Waterproof'],
      descTmpl:(n,b,p)=>`${n} สมาร์ทโฟน${b?'จาก '+b:''}ที่มาพร้อมฟีเจอร์ครบครัน ราคา ${p.toLocaleString()} บาท เหมาะสำหรับผู้ที่ต้องการประสิทธิภาพสูงและกล้องคุณภาพดี` },
    'โน้ตบุ๊ก':    { emoji:'💻', scoreKeys:['ประสิทธิภาพ','จอภาพ','แบตเตอรี่','พกพา','คุ้มค่า'],
      specKeys:['หน้าจอ','โปรเซสเซอร์','RAM','ที่เก็บข้อมูล','การ์ดจอ','แบตเตอรี่','OS','น้ำหนัก'],
      tagPool:['Thunderbolt','WiFi 6','Backlit KB','USB-C','Fast Charge','IPS','OLED','Touch Screen'],
      descTmpl:(n,b,p)=>`${n} โน้ตบุ๊ก${b?'จาก '+b:''}สมรรถนะสูง ราคา ${p.toLocaleString()} บาท เหมาะสำหรับงานสร้างสรรค์และการใช้งานทั่วไป` },
    'หูฟัง':       { emoji:'🎧', scoreKeys:['คุณภาพเสียง','ANC','แบตเตอรี่','ความสบาย','คุ้มค่า'],
      specKeys:['ไดรเวอร์','การตัดเสียง','แบตเตอรี่','Bluetooth','ไมโครโฟน','ชาร์จ','พับได้','น้ำหนัก'],
      tagPool:['ANC','Multipoint','Hi-Res Audio','Wireless','USB-C','30h Battery','3D Audio','Foldable'],
      descTmpl:(n,b,p)=>`${n} หูฟัง${b?'จาก '+b:''}คุณภาพเสียงระดับพรีเมียม ราคา ${p.toLocaleString()} บาท เหมาะสำหรับผู้รักเสียงเพลงและการทำงาน` },
    'สมาร์ทวอทช์': { emoji:'⌚', scoreKeys:['สุขภาพ','แบตเตอรี่','สมาร์ท','ดีไซน์','คุ้มค่า'],
      specKeys:['หน้าจอ','เซนเซอร์','แบตเตอรี่','กันน้ำ','GPS','ระบบปฏิบัติการ','วัสดุ','ขนาด'],
      tagPool:['GPS','ECG','SpO2','Always-On','5ATM','NFC','Fall Detection','Sleep Track'],
      descTmpl:(n,b,p)=>`${n} สมาร์ทวอทช์${b?'จาก '+b:''}ฟีเจอร์สุขภาพครบครัน ราคา ${p.toLocaleString()} บาท เหมาะสำหรับผู้ใส่ใจสุขภาพ` },
    'แท็บเล็ต':    { emoji:'📋', scoreKeys:['ประสิทธิภาพ','จอภาพ','แบตเตอรี่','ความสะดวก','คุ้มค่า'],
      specKeys:['หน้าจอ','ชิปเซ็ต','RAM','ที่เก็บข้อมูล','กล้อง','แบตเตอรี่','OS','น้ำหนัก'],
      tagPool:['Stylus','DeX Mode','5G','WiFi 6','USB-C','Fast Charge','High Refresh','Face ID'],
      descTmpl:(n,b,p)=>`${n} แท็บเล็ต${b?'จาก '+b:''}หน้าจอใหญ่คมชัด ราคา ${p.toLocaleString()} บาท เหมาะสำหรับงานสร้างสรรค์และความบันเทิง` },
    'รองเท้า':     { emoji:'👟', scoreKeys:['ความสบาย','ความทนทาน','สไตล์','น้ำหนัก','คุ้มค่า'],
      specKeys:['วัสดุพื้น','วัสดุตัวรองเท้า','เทคโนโลยี','น้ำหนัก','สี','ไซส์','ประเภท','ยี่ห้อ'],
      tagPool:['Cushioning','Lightweight','Breathable','Non-Slip','Water Resistant','Running','Lifestyle'],
      descTmpl:(n,b,p)=>`${n} รองเท้า${b?'จาก '+b:''}ดีไซน์สวยงาม สวมใส่สบาย ราคา ${p.toLocaleString()} บาท เหมาะสำหรับกิจกรรมกลางแจ้งและแฟชั่น` },
    'กระเป๋า':     { emoji:'👜', scoreKeys:['ความทนทาน','สไตล์','พื้นที่จัดเก็บ','น้ำหนัก','คุ้มค่า'],
      specKeys:['วัสดุ','ขนาด','ช่องเก็บของ','สาย','ซิป','สี','น้ำหนัก','แบรนด์'],
      tagPool:['Genuine Leather','Water Resistant','Anti-Theft','Laptop Compartment','Unisex'],
      descTmpl:(n,b,p)=>`${n} กระเป๋า${b?'จาก '+b:''}ดีไซน์เรียบหรู ทนทาน ราคา ${p.toLocaleString()} บาท เหมาะสำหรับการพกพาทุกวัน` },
    'นาฬิกา':      { emoji:'🕐', scoreKeys:['ดีไซน์','ความแม่นยำ','ความทนทาน','วัสดุ','คุ้มค่า'],
      specKeys:['กลไก','วัสดุเรือน','กระจก','กันน้ำ','สาย','ขนาด','การเคลื่อนไหว','รับประกัน'],
      tagPool:['Swiss Made','Sapphire Glass','Automatic','Water Resistant','Stainless Steel'],
      descTmpl:(n,b,p)=>`${n} นาฬิกา${b?'จาก '+b:''}ดีไซน์คลาสสิก ราคา ${p.toLocaleString()} บาท เหมาะสำหรับผู้ที่ชื่นชอบความละเอียดอ่อนและสไตล์` },
    'กีฬา':        { emoji:'⚽', scoreKeys:['ประสิทธิภาพ','ความทนทาน','ความสบาย','สไตล์','คุ้มค่า'],
      specKeys:['วัสดุ','ขนาด','น้ำหนัก','มาตรฐาน','เทคโนโลยี','สี','แบรนด์','รับประกัน'],
      tagPool:['Professional','Lightweight','Durable','All-Weather','Official Size'],
      descTmpl:(n,b,p)=>`${n} อุปกรณ์กีฬา${b?'จาก '+b:''}คุณภาพสูง ราคา ${p.toLocaleString()} บาท เหมาะสำหรับการออกกำลังกายอย่างจริงจัง` },
    'default':     { emoji:'📦', scoreKeys:['คุณภาพ','ความทนทาน','ฟังก์ชัน','ดีไซน์','คุ้มค่า'],
      specKeys:['วัสดุ','ขนาด','น้ำหนัก','สี','แบรนด์','รับประกัน','ประเทศ','มาตรฐาน'],
      tagPool:['Premium','Quality','Durable','Best Seller','New Arrival','Warranty'],
      descTmpl:(n,b,p)=>`${n}${b?' จาก '+b:''} ราคา ${p.toLocaleString()} บาท สินค้าคุณภาพดีเหมาะสำหรับการใช้งานประจำวัน` },
  },

  // --- Brand reputation boosts ---
  brandBoost: {
    'apple':8,'samsung':5,'sony':6,'google':4,'microsoft':5,'dell':3,'asus':4,'lg':3,
    'nike':6,'adidas':5,'puma':4,'new balance':4,'vans':3,'converse':3,
    'louis vuitton':9,'gucci':9,'prada':8,'coach':6,'michael kors':5,
    'rolex':10,'omega':9,'seiko':6,'casio':4,
    'bose':7,'sennheiser':7,'jabra':6,'beats':5,
  },

  // --- Price tier analysis ---
  priceTier(p, cat) {
    const tiers = {
      'สมาร์ทโฟน': [[5000,20],[10000,35],[20000,50],[35000,65],[50000,80],[70000,90],[100000,95]],
      'โน้ตบุ๊ก':  [[10000,15],[20000,30],[35000,50],[55000,70],[80000,85],[120000,95]],
      'หูฟัง':     [[500,20],[1000,35],[3000,50],[6000,65],[10000,78],[15000,88],[25000,95]],
      'สมาร์ทวอทช์':[[2000,25],[5000,40],[10000,60],[15000,75],[25000,88],[40000,95]],
      'แท็บเล็ต':  [[5000,25],[10000,40],[20000,55],[35000,70],[50000,85],[70000,93]],
      'รองเท้า':   [[500,20],[1000,35],[2000,50],[3500,65],[5000,75],[8000,85],[15000,93]],
      'default':   [[1000,25],[5000,40],[10000,55],[20000,68],[50000,80],[100000,90]],
    };
    const t = tiers[cat] || tiers['default'];
    for (let i = t.length - 1; i >= 0; i--) {
      if (p >= t[i][0]) return t[i][1];
    }
    return 20;
  },

  // --- Analyze image colors via canvas ---
  analyzeImage(imgEl) {
    if (!imgEl) return { brightness: 0.5, saturation: 0.5, colors: [], dominantHue: 0 };
    try {
      const cvs = document.getElementById('cvs');
      const W = 80, H = 80;
      cvs.width = W; cvs.height = H;
      const ctx = cvs.getContext('2d');
      ctx.drawImage(imgEl, 0, 0, W, H);
      const data = ctx.getImageData(0, 0, W, H).data;

      let rSum=0,gSum=0,bSum=0,count=0;
      const colorBuckets = {};

      for (let i = 0; i < data.length; i += 16) {
        const r=data[i], g=data[i+1], b=data[i+2];
        rSum+=r; gSum+=g; bSum+=b; count++;
        // Bucket colors for palette
        const br = Math.round(r/51)*51;
        const bg = Math.round(g/51)*51;
        const bb = Math.round(b/51)*51;
        const key = `${br},${bg},${bb}`;
        colorBuckets[key] = (colorBuckets[key]||0) + 1;
      }

      const avgR = rSum/count, avgG = gSum/count, avgB = bSum/count;
      const brightness = (avgR*0.299 + avgG*0.587 + avgB*0.114) / 255;
      const max = Math.max(avgR,avgG,avgB), min = Math.min(avgR,avgG,avgB);
      const saturation = max === 0 ? 0 : (max - min) / max;

      // Get top 5 colors
      const sorted = Object.entries(colorBuckets)
        .sort((a,b) => b[1]-a[1])
        .slice(0, 6)
        .map(([k]) => {
          const [r,g,b] = k.split(',');
          return `rgb(${r},${g},${b})`;
        });

      // Dominant hue
      const h = Math.atan2(Math.sqrt(3)*(avgG-avgB), 2*avgR-avgG-avgB) * 180/Math.PI;
      const dominantHue = (h + 360) % 360;

      return { brightness, saturation, colors: sorted, dominantHue };
    } catch(e) {
      return { brightness: 0.5, saturation: 0.5, colors: [], dominantHue: 0 };
    }
  },

  // --- Fuzz a score with small random variation ---
  fuzz(base, range=8) {
    return Math.min(99, Math.max(30, Math.round(base + (Math.random()-0.5)*range)));
  },

  // --- Generate a pseudo-random number seeded by string ---
  seed(str) {
    let h = 0;
    for (let i=0; i<str.length; i++) h = (Math.imul(31,h) + str.charCodeAt(i)) | 0;
    return Math.abs(h);
  },

  // --- Core: pick random items from pool seeded by name ---
  pick(arr, n, seed) {
    const result = [];
    const copy = [...arr];
    let s = seed;
    for (let i=0; i<n && copy.length; i++) {
      s = (s * 1664525 + 1013904223) & 0xffffffff;
      const idx = Math.abs(s) % copy.length;
      result.push(copy.splice(idx,1)[0]);
    }
    return result;
  },

  // --- Generate spec values based on category and price ---
  genSpecValue(key, catName, price, brand, imgAnalysis) {
    const tier = this.priceTier(price, catName);
    const bright = imgAnalysis.brightness;

    const specMap = {
      // Smartphones
      'หน้าจอ': () => {
        const sizes = tier>85?['6.7"','6.8"']:tier>65?['6.5"','6.6"']:tier>40?['6.1"','6.4"']:['5.5"','6.0"'];
        const types = tier>80?['Super AMOLED','LTPO OLED','Fluid AMOLED']:tier>50?['AMOLED','OLED']:['IPS LCD','TFT'];
        const hz = tier>75?'120Hz':tier>50?'90Hz':'60Hz';
        return `${this.pick(sizes,1,this.seed(key+price))[0]} ${this.pick(types,1,this.seed(key+brand))[0]} ${hz}`;
      },
      'ชิปเซ็ต': () => {
        if (brand.toLowerCase().includes('apple')) return tier>80?'A17 Pro':tier>60?'A16 Bionic':'A15 Bionic';
        if (brand.toLowerCase().includes('samsung')) return tier>80?'Snapdragon 8 Gen 3':tier>60?'Snapdragon 8 Gen 2':'Exynos 2200';
        return tier>75?'Snapdragon 8 Gen 2':tier>50?'Snapdragon 7 Gen 1':'Snapdragon 6 Gen 1';
      },
      'กล้องหลัก': () => {
        const mp = tier>85?'200MP':tier>75?'108MP':tier>60?'64MP':tier>45?'50MP':'48MP';
        return `${mp} Triple Camera`;
      },
      'RAM': () => {
        const ram = tier>85?'12 GB':tier>70?'8 GB':tier>50?'6 GB':'4 GB';
        return `${ram} LPDDR5`;
      },
      'ที่เก็บข้อมูล': () => `${tier>80?'512':tier>60?'256':tier>40?'128':'64'} GB UFS`,
      'OS': () => brand.toLowerCase().includes('apple')?'iOS 17':'Android 14',
      'น้ำหนัก': () => `${180+Math.round(Math.random()*60)} g`,
      // Laptops
      'โปรเซสเซอร์': () => {
        if (brand.toLowerCase().includes('apple')) return tier>80?'Apple M3 Pro':tier>60?'Apple M2':'Apple M1';
        return tier>80?'Intel Core i9-13900H':tier>65?'Intel Core i7-13700H':'Intel Core i5-12500H';
      },
      'การ์ดจอ': () => {
        if (brand.toLowerCase().includes('apple')) return tier>75?'19-core GPU':'10-core GPU';
        return tier>85?'NVIDIA RTX 4090':tier>75?'NVIDIA RTX 4070':tier>60?'NVIDIA RTX 4060':'Intel Iris Xe';
      },
      // Headphones
      'ไดรเวอร์': () => `${tier>75?'40':'30'}mm Dynamic Driver`,
      'การตัดเสียง': () => tier>75?'Active Noise Cancellation (ANC)':tier>50?'Passive Noise Isolation':'Basic Isolation',
      'Bluetooth': () => tier>75?'5.3':tier>55?'5.2':'5.0',
      'ไมโครโฟน': () => `${tier>75?6:tier>55?4:2} ไมโครโฟน`,
      'พับได้': () => tier>60?'ใช่':'ไม่',
      // Watch
      'กันน้ำ': () => tier>70?'5ATM + IP68':tier>50?'IP68':'IP67',
      'GPS': () => tier>60?'GPS + GLONASS':'GPS',
      'เซนเซอร์': () => tier>75?'ECG, Blood Oxygen, Body Temp':tier>55?'Blood Oxygen, Heart Rate':'Heart Rate',
      'วัสดุ': () => tier>80?'Titanium':tier>65?'Stainless Steel':tier>40?'Aluminum':'Plastic',
      // Shoes
      'วัสดุพื้น': () => tier>70?'React Foam / Rubber':tier>50?'EVA Foam':'TPR Rubber',
      'วัสดุตัวรองเท้า': () => tier>70?'Engineered Mesh + Leather':tier>50?'Knit Mesh':'Synthetic',
      'เทคโนโลยี': () => {
        const techs = {nike:'Air Max / React', adidas:'Boost / Cloudfoam', puma:'NITRO Foam', default:'Cushion Tech'};
        return techs[brand.toLowerCase()] || techs['default'];
      },
      // Generic
      'แบตเตอรี่': () => {
        if (catName==='สมาร์ทโฟน') return `${3500+Math.round(tier*20)} mAh`;
        if (catName==='โน้ตบุ๊ก') return `${10+Math.round(tier/10)} ชั่วโมง`;
        if (catName==='หูฟัง') return `${20+Math.round(tier/4)} ชั่วโมง`;
        if (catName==='สมาร์ทวอทช์') return `${10+Math.round(tier/3)} ชั่วโมง`;
        return `${tier>60?'Large':'Standard'} Battery`;
      },
      'ชาร์จ': () => tier>70?'USB-C + Wireless':'USB-C',
      'ขนาด': () => ['S','M','L','XL'][Math.floor(Math.random()*4)],
      'สี': () => {
        if (!imgAnalysis.colors.length || bright < 0.15) return 'Black';
        if (bright > 0.85) return 'White / Silver';
        const hue = imgAnalysis.dominantHue;
        if (hue < 30) return 'Red / Orange';
        if (hue < 80) return 'Yellow / Gold';
        if (hue < 160) return 'Green';
        if (hue < 250) return 'Blue / Navy';
        if (hue < 300) return 'Purple / Violet';
        return 'Pink / Rose';
      },
    };

    if (specMap[key]) return specMap[key]();
    return `${tier>75?'Premium':tier>50?'Standard':'Basic'} Grade`;
  },

  // --- Main analyze function ---
  analyze(name, brand, catName, price, imgEl) {
    const s = this.seed(name + brand + price);
    const cat = this.catDB[catName] || this.catDB['default'];
    const tier = this.priceTier(price, catName);
    const bName = brand.toLowerCase();
    const boost = this.brandBoost[bName] || 0;
    const imgAnalysis = imgEl ? this.analyzeImage(imgEl) : { brightness:0.5, saturation:0.5, colors:[], dominantHue:0 };

    // --- Image quality signal ---
    // Bright, saturated images suggest better presentation / marketing budget = slightly higher tier product
    const imgBoost = imgEl ? Math.round(imgAnalysis.brightness * 5 + imgAnalysis.saturation * 5) : 0;
    const effectiveTier = Math.min(99, tier + boost + imgBoost);

    // --- Scores ---
    const scores = {};
    cat.scoreKeys.forEach((k, i) => {
      // Each dimension has a slightly different weight
      const weights = [1.0, 0.95, 0.9, 0.88, 1.05]; // last key = value score often inverse of price
      let base = effectiveTier * weights[i] * (0.9 + Math.random()*0.2);
      // Value dimension: cheaper products can score higher on value
      if (k === 'คุ้มค่า') base = 110 - effectiveTier * 0.6 + boost * 0.5;
      scores[k] = this.fuzz(base, 10);
    });

    // --- Tags: pick 3 relevant from pool ---
    const tagCount = 3;
    const tags = this.pick(cat.tagPool, tagCount, s);
    // Add brand-specific tags
    if (brand) {
      const brandTags = { apple:['MagSafe','Face ID'], samsung:['Galaxy AI','DeX'], sony:['LDAC','360 Reality'], nike:['Air Unit'], adidas:['Boost'], google:['Google AI'] };
      const bt = brandTags[bName];
      if (bt) tags.unshift(bt[0]);
      if (tags.length > 3) tags.pop();
    }

    // --- Specs ---
    const specs = {};
    cat.specKeys.forEach(k => {
      specs[k] = this.genSpecValue(k, catName, price, brand, imgAnalysis);
    });

    // --- Description ---
    const desc = cat.descTmpl(name, brand, price);

    // --- Rating: 3.5–5.0 based on tier ---
    const rating = Math.round((3.5 + effectiveTier/100 * 1.5) * 10) / 10;

    // --- Emoji ---
    const emoji = cat.emoji;

    return { scores, tags, specs, description: desc, rating, emoji, imgColors: imgAnalysis.colors };
  }
};

/* =============================================
   IMAGE HANDLING
============================================= */
function onDrag(e,enter){e.preventDefault();document.getElementById('dropZone').classList.toggle('drag',enter);}
function onDrop(e){e.preventDefault();onDrag(e,false);if(e.dataTransfer.files[0])loadImg(e.dataTransfer.files[0]);}
function onFile(inp){if(inp.files[0])loadImg(inp.files[0]);}

function loadImg(file){
  if(!file.type.startsWith('image/')){ts('⚠️','กรุณาเลือกไฟล์รูปภาพ');return;}
  if(file.size>20*1024*1024){ts('⚠️','ไฟล์ใหญ่เกิน 20MB');return;}
  const r=new FileReader();
  r.onload=ev=>{
    currentImgDataUrl=ev.target.result;
    const img=document.getElementById('imgPreview');
    img.src=currentImgDataUrl;
    img.onload=()=>{
      // Extract colors after image loads
      const analysis=AI.analyzeImage(img);
      imgColors=analysis.colors;
      const sw=document.getElementById('swatchWrap');
      sw.innerHTML=imgColors.map(c=>`<div class="swatch" style="background:${c}" title="${c}"></div>`).join('');
    };
    document.getElementById('imgPreviewWrap').style.display='block';
    document.getElementById('dropZone').style.display='none';
    ts('🖼️','โหลดรูปเรียบร้อย — AI จะวิเคราะห์สีและลักษณะด้วย');
  };
  r.readAsDataURL(file);
}

function removeImg(){
  currentImgDataUrl=null;imgColors=[];
  document.getElementById('dropZone').style.display='block';
  document.getElementById('imgPreviewWrap').style.display='none';
  document.getElementById('imgFile').value='';
}

function checkBtn(){
  const ok=!!document.getElementById('fName').value.trim()&&!!document.getElementById('fPrice').value;
  document.getElementById('aiBtn').disabled=!ok;
}

/* =============================================
   LOCAL AI ANALYSIS (no API, runs in browser)
============================================= */
function analyzeLocal(){
  const name=document.getElementById('fName').value.trim();
  const brand=document.getElementById('fBrand').value.trim();
  const cat=document.getElementById('fCat').value.trim()||'อื่นๆ';
  const price=parseInt(document.getElementById('fPrice').value)||0;
  if(!name||!price){ts('⚠️','กรุณากรอกชื่อสินค้าและราคา');return;}

  document.getElementById('aiBtn').disabled=true;
  document.getElementById('aiResult').classList.remove('show');
  document.getElementById('addBtn').classList.remove('show');

  // Animate processing steps
  const steps=[
    '🔍 วิเคราะห์ชื่อและหมวดหมู่',
    '🎨 ประมวลผลสีและลักษณะรูปภาพ',
    '💡 คำนวณคะแนนแต่ละด้าน',
    '📝 สร้างสเปคและคำอธิบาย',
    '✨ สรุปผลการวิเคราะห์',
  ];
  const proc=document.getElementById('aiProc');
  const stepTxt=document.getElementById('aiStepTxt');
  proc.classList.add('show');

  let si=0;
  const iv=setInterval(()=>{
    if(si<steps.length){stepTxt.textContent=steps[si++];}
  },300);

  // Run analysis after short delay for UX animation
  setTimeout(()=>{
    clearInterval(iv);
    const imgEl=currentImgDataUrl?document.getElementById('imgPreview'):null;
    aiData=AI.analyze(name,brand,cat,price,imgEl);
    proc.classList.remove('show');
    renderResult(aiData);
    document.getElementById('aiBtn').disabled=false;
    ts('✨','AI วิเคราะห์เสร็จแล้ว!');
  },1800);
}

function renderResult(d){
  document.getElementById('aiDesc').textContent=d.description;
  document.getElementById('aiTags').innerHTML=d.tags.map(t=>`<span class="ai-tag">${t}</span>`).join('');

  document.getElementById('aiScores').innerHTML=Object.entries(d.scores).map(([k,v])=>`
    <div class="score-row">
      <div class="score-label">${k}</div>
      <div class="score-bar-wrap"><div class="score-bar-fill" style="width:0%" data-target="${v}"></div></div>
      <div class="score-val">${v}/100</div>
    </div>`).join('');

  document.getElementById('aiSpecs').innerHTML=Object.entries(d.specs).map(([k,v])=>`
    <div class="dsr"><span class="dsk">${k}</span><span class="dsv2">${v}</span></div>`).join('');

  if(d.imgColors&&d.imgColors.length){
    document.getElementById('aiColors').innerHTML=d.imgColors.map(c=>`<div class="swatch" style="background:${c};border:2px solid rgba(255,255,255,.2)" title="${c}"></div>`).join('');
    document.getElementById('imgColorSection').style.display='block';
  }else{
    document.getElementById('imgColorSection').style.display='none';
  }

  document.getElementById('aiResult').classList.add('show');
  document.getElementById('addBtn').classList.add('show');

  // Animate bars
  setTimeout(()=>{
    document.querySelectorAll('.score-bar-fill').forEach(el=>{
      el.style.width=el.dataset.target+'%';
    });
  },100);
}

/* =============================================
   ADD PRODUCT
============================================= */
function addProduct(){
  const name=document.getElementById('fName').value.trim();
  const brand=document.getElementById('fBrand').value.trim()||'ไม่ระบุ';
  const cat=document.getElementById('fCat').value.trim()||'อื่นๆ';
  const price=parseInt(document.getElementById('fPrice').value)||0;
  const oprice=parseInt(document.getElementById('fOPrice').value)||0;
  if(!aiData){ts('⚠️','กรุณาวิเคราะห์ก่อน');return;}

  P.push({
    id:nextId++, n:name, b:brand, c:cat, e:aiData.emoji,
    p:price, o:oprice>price?oprice:price,
    r:Math.min(5,aiData.rating), rv:0,
    iN:true, iS:oprice>price, iU:true,
    img:currentImgDataUrl||null,
    sp:aiData.specs, tg:aiData.tags, ds:aiData.description, sc:aiData.scores
  });

  // Refresh category pills
  const cats=['ทั้งหมด',...new Set(P.map(p=>p.c))];
  document.getElementById('ct').innerHTML=cats.map(c=>`<button class="ctb ${c==='ทั้งหมด'?'active':''}" onclick="sC('${c}',this)">${c}</button>`).join('');

  uSt();rP();
  ts('✅',`เพิ่ม "${name}" เรียบร้อยแล้ว!`);

  // Reset form
  document.getElementById('fName').value='';
  document.getElementById('fBrand').value='';
  document.getElementById('fCat').value='';
  document.getElementById('fPrice').value='';
  document.getElementById('fOPrice').value='';
  removeImg();
  aiData=null;
  document.getElementById('aiResult').classList.remove('show');
  document.getElementById('addBtn').classList.remove('show');
  document.getElementById('aiBtn').disabled=true;
  go('home');
}

/* =============================================
   PRODUCT CARD RENDER
============================================= */
function rC(p){
  const iC=cL.includes(p.id),lk=lL.includes(p.id),dc=p.iS?Math.round((1-p.p/p.o)*100):0;
  const badge=p.iU?'<div class="bai">🤖 AI วิเคราะห์</div>':p.iN?'<div class="bn2">ใหม่</div>':p.iS?`<div class="bs">-${dc}%</div>`:'';
  const imgHtml=p.img?`<img src="${p.img}" alt="${p.n}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1">`:'';
  return`<div class="pc ${iC?'inc':''}" id="card-${p.id}">
  <div class="ci">
    ${badge}
    <div class="cbs">
      <div class="cbt ${lk?'lk':''}" onclick="tL(${p.id},event)">${lk?'❤️':'🤍'}</div>
      <div class="cbt ${iC?'co':''}" onclick="tC(${p.id},event)">⚖️</div>
    </div>
    ${imgHtml}
    ${!p.img?`<span class="emoji-ico">${p.e}</span>`:''}
  </div>
  <div class="cb2">
    <div class="cbr">${p.b} · ${p.c}</div>
    <div class="cbn">${p.n}</div>
    <div class="cst">
      <span class="str">${'★'.repeat(Math.floor(p.r))}${'☆'.repeat(5-Math.floor(p.r))}</span>
      <span style="font-size:12px;font-weight:600;color:var(--go)">${p.r}</span>
      <span class="rvc">${p.rv>0?'('+p.rv.toLocaleString()+')':'(AI Rating)'}</span>
    </div>
    <div class="csp">${p.tg.map(t=>`<span class="spt">${t}</span>`).join('')}</div>
    <div class="cf">
      <div>${p.iS?`<div class="po">฿${p.o.toLocaleString()}</div>`:''}<div class="pm ${p.iS?'s':''}">฿${p.p.toLocaleString()}</div></div>
      <button class="acb ${iC?'active':''}" onclick="tC(${p.id},event)">${iC?'✓ เลือกแล้ว':'+ เปรียบเทียบ'}</button>
    </div>
  </div></div>`;
}

/* =============================================
   FILTER / SORT / NAVIGATION
============================================= */
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
    if(fi==='mine'&&!p.iU)return false;
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

/* =============================================
   COMPARE
============================================= */
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
  const items=cL.map(id=>{
    const p=P.find(x=>x.id===id);
    const thumb=p.img?`<img src="${p.img}" style="width:22px;height:22px;border-radius:4px;object-fit:cover">`:`<span class="cie">${p.e}</span>`;
    return`<div class="cit">${thumb}<span class="cin">${p.n}</span><span class="cir" onclick="tC(${id})">✕</span></div>`;
  });
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
  let h=`<table class="ctb2"><thead><tr><th class="cl">สินค้า</th>${pr.map(p=>{
    const thumb=p.img?`<img src="${p.img}" style="width:44px;height:44px;border-radius:8px;object-fit:cover;display:block;margin:0 auto 6px">`:`<span class="pe">${p.e}</span>`;
    return`<th class="cp2 ${p.p===mp?'hl':''}"><div class="ph">${thumb}<div class="pbr">${p.b}</div><div class="pn">${p.n}${p.iU?'<span style="background:linear-gradient(135deg,var(--ac),var(--ac3));color:#fff;font-size:9px;font-weight:700;padding:2px 7px;border-radius:50px;margin-left:4px">AI</span>':''}</div><div class="pp">฿${p.p.toLocaleString()}</div>${p.iS?`<div style="font-size:10px;color:var(--t3);text-decoration:line-through">฿${p.o.toLocaleString()}</div>`:''} ${p.p===mp?'<div class="bb">💰 ราคาดีที่สุด</div>':''}</div></th>`;
  }).join('')}</tr></thead><tbody>`;
  const mr=Math.max(...pr.map(p=>p.r));
  h+=`<tr><td class="cl">⭐ Rating</td>${pr.map(p=>`<td class="${p.r===mr?'vg':'vn'}"><span style="color:var(--go)">${'★'.repeat(Math.floor(p.r))}</span><strong> ${p.r}</strong></td>`).join('')}</tr>`;
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

/* =============================================
   WISHLIST / DETAIL / HISTORY
============================================= */
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
  const imgEl=p.img?`<img src="${p.img}" style="width:100%;height:100%;object-fit:cover">`:`${p.e}`;
  document.getElementById('db').innerHTML=`<div class="di">${imgEl}</div><div>
    <div class="dbrnd">${p.b} · ${p.c}${p.iU?' · <span style="color:var(--ac3)">🤖 AI วิเคราะห์</span>':''}</div>
    <div class="dn">${p.n}</div>
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:11px">
      <span style="color:var(--go);font-size:14px">${'★'.repeat(Math.floor(p.r))}</span>
      <strong style="color:var(--go)">${p.r}</strong>
      <span style="color:var(--t3);font-size:11px">${p.rv>0?'('+p.rv.toLocaleString()+' รีวิว)':'(AI Rating)'}</span>
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
    const pr=h.ids.map(id=>P.find(p=>p.id===id)).filter(Boolean);
    return`<div style="background:var(--s);border:1px solid var(--bd);border-radius:var(--r);padding:16px;margin-bottom:12px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <span style="font-size:11px;color:var(--t3)">⏰ ${h.t}</span>
        <button class="bp" style="font-size:11px;padding:5px 12px" onclick='rC2(${JSON.stringify(h.ids)})'>ดูอีกครั้ง</button>
      </div>
      <div style="display:flex;gap:9px;flex-wrap:wrap">${pr.map(p=>{
        const th=p.img?`<img src="${p.img}" style="width:26px;height:26px;border-radius:4px;object-fit:cover">`:`<span style="font-size:18px">${p.e}</span>`;
        return`<div style="display:flex;align-items:center;gap:7px;background:var(--s2);border:1px solid var(--bd);border-radius:9px;padding:7px 12px">${th}<div><div style="font-size:10px;color:var(--t3)">${p.b}</div><div style="font-size:12px;font-weight:600">${p.n}</div></div></div>`;
      }).join('')}</div></div>`;
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
  c.appendChild(t);setTimeout(()=>t.remove(),3500);
}
function init(){
  const cats=['ทั้งหมด',...new Set(P.map(p=>p.c))];
  document.getElementById('ct').innerHTML=cats.map(c=>`<button class="ctb ${c==='ทั้งหมด'?'active':''}" onclick="sC('${c}',this)">${c}</button>`).join('');
  rP();uSt();
}
document.addEventListener('click',e=>{
  const card=e.target.closest('.pc');
  if(card&&!e.target.closest('.cbt')&&!e.target.closest('.acb'))oD(parseInt(card.id.replace('card-','')));
});
document.getElementById('cmo').addEventListener('click',e=>{if(e.target===document.getElementById('cmo'))cCM();});
document.getElementById('dmo').addEventListener('click',e=>{if(e.target===document.getElementById('dmo'))cDM();});
init();