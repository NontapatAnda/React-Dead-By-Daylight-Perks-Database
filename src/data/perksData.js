const perksData = [
  {
    id: 1,
    name: 'Sprint Burst',
    role: 'survivor',
    character: 'Meg Thomas',
    description: 'เมื่อเริ่มวิ่ง ได้รับ Haste 50% นาน 3 วินาทีจากนั้นติด Exhausted 60 / 50 / 40 วินาที(ไม่สามารถใช้ perk Exhaustion อื่น และไม่ฟื้นฟูขณะวิ่ง)',
    cooldown: '-',
    tier: 'Uncommon',
    img:'../perks/sprint-burst.png'
  },
  {
    id: 2,
    name: 'Self-Care',
    role: 'survivor',
    character: 'Claudette Morel',
    description: 'สามารถรักษาตัวเองได้โดยไม่ใช้ Med-kit ที่ความเร็ว 25 / 30 / 35%',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/self-care.png'
  },
  {
    id: 3,
    name: 'Dead Hard',
    role: 'survivor',
    character: 'David King',
    description: 'หลังลงจากตะขอ ขณะบาดเจ็บสามารถกดใช้เพื่อรับ Endurance 0.5 วินาทีป้องกันการล้ม (ติด Deep Wound แทน) จากนั้นติด Exhausted 60 / 50 / 40 วินาที',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/dead-hard.png'
  },
  {
    id: 4,
    name: 'Borrowed Time',
    role: 'survivor',
    character: 'Bill Overbeck',
    description: 'ผู้รอดชีวิตที่คุณช่วยลงจากตะขอได้รับ Endurance +6 / 8 / 10 วินาทีและ Haste เพิ่ม 10 วินาที (โดนโจมตีจะติด Deep Wound แทนการล้ม)',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/borrowed-time.png'
  },
  {
    id: 5,
    name: 'Hex: Ruin',
    role: 'killer',
    character: 'The Hag',
    description: 'เครื่องปั่นที่ไม่มีคนซ่อมจะถดถอยอัตโนมัติที่ความเร็ว 100 / 125 / 150% เอฟเฟกต์อยู่จนกว่า Hex Totem จะถูกทำลาย',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/hex-ruin.png'
  },
  {
    id: 6,
    name: 'Barbecue & Chilli',
    role: 'killer',
    character: 'The Cannibal',
    description: 'หลังแขวนผู้รอดชีวิตจะเห็นออร่าของผู้รอดชีวิตคนอื่นที่อยู่ไกลเกิน 60 / 50 / 40 เมตร เป็นเวลา 5 วินาที',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/barbecue-chili.png'
  },
  {
    id: 7,
    name: 'A Nurse\'s Calling',
    role: 'killer',
    character: 'The Nurse',
    description: 'เห็นออร่าของผู้รอดชีวิตที่บาดเจ็บขณะกำลังรักษา ภายในระยะ 28 / 30 / 32 เมตร',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/a-nurses-calling.png'
  },
  {
    id: 8,
    name: 'Pop Goes the Weasel',
    role: 'killer',
    character: 'The Clown',
    description: 'หลังแขวนผู้รอดชีวิตเครื่องปั่นเครื่องถัดไปที่เตะจะลดความคืบหน้า ทันที 20% ใช้งานได้ภายใน 35 / 40 / 45 วินาที',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/pop-goes-the-weasel.png'
  },
  {
    id: 9,
    name: 'Adrenaline',
    role: 'survivor',
    character: 'Meg Thomas',
    description: 'เมื่อประตูทางออกถูกจ่ายไฟ\nฟื้นฟูพลังชีวิตทันที 1 ขั้น\nและได้ Haste 50% นาน 3 วินาที\nจากนั้นติด Exhausted 60 / 50 / 40 วินาที',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/adrenaline.png'
  },
  {
    id: 10,
    name: 'Iron Will',
    role: 'survivor',
    character: 'Jake Park',
    description: 'ลดเสียงครางจากการบาดเจ็บ 80 / 90 / 100% (ไม่ทำงานขณะ Exhausted แต่ไม่ทำให้ติด Exhausted)',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/iron-will.png'
  },
  {
    id: 11,
    name: 'Unbreakable',
    role: 'survivor',
    character: 'Bill Overbeck',
    description: 'ฟื้นตัวจากสถานะใกล้ตายได้เต็มขั้น 1 ครั้งต่อเกมและเพิ่มความเร็วฟื้นตัว 25 / 30 / 35%',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/unbreakable.png'
  },
  {
    id: 12,
    name: 'Decisive Strike',
    role: 'survivor',
    character: 'Laurie Strode',
    description: 'หลังลงจากตะขอ 40 / 50 / 60 วินาที หากถูก Killer จับ สามารถทำ Skill Check เพื่อหนีและ\nสตัน Killer 4 วินาที(ใช้แล้วหาย, ยกเลิกเมื่อทำ Conspicuous Action และไม่ทำงานเมื่อประตูถูกจ่ายไฟ)',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/decisive-strike.png'
  },
  {
    id: 13,
    name: 'No One Escapes Death',
    role: 'killer',
    character: 'Generic',
    description: 'เมื่อประตูถูกจ่ายไฟและหากมี Dull Totem เหลืออยู่จะกลายเป็น Hex ขณะ Hex ทำงาน: ผู้รอดชีวิตติด Exposed และ Killer ได้ Haste 2 / 3 / 4% เอฟเฟกต์อยู่จนกว่า Hex Totem จะถูกทำลาย',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/hex-no-one-escapes-death.png'
  },
  {
    id: 14,
    name: 'Whispers',
    role: 'killer',
    character: 'Generic',
    description: 'จะได้ยินเสียงกระซิบของ The Entity เมื่ออยู่ใกล้ผู้รอดชีวิตในระยะ 48 / 40 / 32 เมตร',
    cooldown: '-',
    tier: 'Uncommon',
    img:'../perks/whispers.png'
  },
  {
    id: 15,
    name: 'Tinkerer',
    role: 'killer',
    character: 'The Hillbilly',
    description: 'เมื่อเครื่องปั่นซ่อมถึง 70% จะเกิดเสียงแจ้งเตือนดัง และคุณได้รับ Undetectable 12 / 14 / 16 วินาที (เอฟเฟกต์นี้เกิดได้ ครั้งเดียวต่อเครื่องปั่น)',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/tinkerer.png'
  },
  {
    id: 16,
    name: 'Bond',
    role: 'survivor',
    character: 'Dwight Fairfield',
    description: 'ปลดล๊อคความสามารถในการอ่านออร่าเพื่อนร่วมทีมที่อยู่ห่างไม่เกิน 28 เมตร',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/bond.png'
  },
  {
    id: 17,
    name:'Leader',
    role:'survivor',
    character:'Dwight Fairfield',
    description: 'เพิ่มความเร็วให้ผู้รอดชีวิตคนอื่น 20 / 25 / 30% ในการรักษา, ทำลายตะขอ, ช่วยปลดตะขอ, ล้างโทเท็ม, เปิดประตูหนี และเปิดกล่องเมื่ออยู่ในระยะ 10 เมตร จากคุณเอฟเฟกต์ไม่ซ้อน และคงอยู่ต่อ 20 วินาที หลังออกจากระยะ',  
    cooldown:'-',
    tier:'Rare',
    img:'../perks/leader.png'
  },
  {
    id: 18,
    name:'Prove Thyself',
    role:'survivor',
    character:'Dwight Fairfield',
    description: 'เมื่อมีผู้รอดชีวิตคนอื่นซ่อมเครื่องปั่นอยู่ใกล้คุณในระยะ 4 เมตรทุกคนจะได้โบนัสความเร็วซ่อม 6 / 8 / 10% ต่อคน(เอฟเฟกต์ Prove Thyself ซ้อนกันไม่ได้)',
    cooldown:'-',
    tier:'Rare',
    img:'../perks/prove-thyself.png'
  },
  {
    id: 19,
    name:'Quick & Quiet',
    role:'survivor',
    character:'Meg Thomas',
    description: 'การกระโดดข้ามสิ่งกีดขวางเร็วและการเข้า/ออกล็อกเกอร์ ไม่ส่งเสียง',
    cooldown:'25 / 20 / 15 วินาที',
    tier:'Uncommon',
    img:'../perks/quick-quiet.png'
  },
  {
    id: 20,
    name: 'Botany Knowledge',
    role: 'survivor',
    character: 'Claudette Morel',
    description: 'เพิ่มความเร็วในการรักษา 30 / 40 / 50%',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/botany-knowledge.png'
  },
  {
    id: 21,
    name: 'Empathy',
    role: 'survivor',
    character: 'Claudette Morel',
    description: 'เห็นตำแหน่งผู้รอดชีวิตที่บาดเจ็บภายในระยะ 64 / 96 / 128 เมตร',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/empathy.png'
  },
  {
    id: 22,
    name: 'Calm Spirit',
    role: 'survivor',
    character: 'Jake Park', 
    description: 'ไม่กระตุ้นสัตว์ป่า 100% และไม่กรีดร้อง\nเปิดกล่อง และล้าง/อวยพรโทเท็มได้แบบเงียบ\nแต่ความเร็วลดลง 40 / 35 / 30%',
    cooldown: '-',
    tier: 'Uncommon',
    img:'../perks/calm-spirit.png'
  },
  {
    id: 23,
    name: 'Saboteur',
    role: 'survivor',
    character: 'Jake Park',
    description: 'เห็นออร่าตะขอภายในระยะ 56 เมตรเมื่อ Killer กำลังอุ้มผู้รอดชีวิต (Scourge Hook แสดงเป็นสีเหลือง)\nสามารถทำลายตะขอได้โดยไม่ใช้ Toolbox\nใช้เวลา 2.3 วินาที',
    cooldown: '70 / 65 / 60 วินาที',
    tier: 'Rare',
    img:'../perks/saboteur.png'
  },
  {
    id: 24,
    name: 'Balanced Landing',
    role: 'survivor',
    character: 'Nea Karlsson',
    description: 'หลังตกจากที่สูงลดอาการชะงักจากการตก 75% และไม่ส่งเสียงจากการตก\nHaste 50% นานสูงสุด 3 วินาที\n\nจากนั้นติด Exhausted 60 / 50 / 40 วินาที',
    cooldown: '-',
    tier: 'Uncommon',
    img:'../perks/balanced-landing.png'
  },
  {
    id: 25,
    name: 'Streetwise',
    role: 'survivor',
    character: 'Nea Karlsson', 
    description: 'ครั้งแรกที่ใช้ไอเทมจนชาร์จหมดจะเห็นออร่าของ Killer 8 วินาที\n\nไอเทมที่ได้จากกล่อง\nมีชาร์จเพิ่ม 60 / 70 / 80%',
    cooldown: '-',
    tier: 'Uncommon',
    img:'../perks/streetwise.png'
  },
  {
    id: 26,
    name: 'Urban Evasion',
    role: 'survivor',
    character: 'Nea Karlsson',
    description: 'ขณะ ย่อตัว จะได้รับ Haste 90 / 95 / 100%\nเพิ่มความเร็วในการเคลื่อนที่',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/urban-evasion.png'
  },
  {
    id: 27,
    name: 'Object of Obsession',
    role: 'survivor',
    character: 'Laurie Strode',
    description: 'เมื่อ Killer เห็นออร่าของคุณคุณจะเห็นออร่าของ Killer เช่นกันและได้โบนัสความเร็ว รักษา / ซ่อม / ล้างโทเท็ม 2 / 4 / 6%\n\nหากคุณเป็น Obsession\nออร่าของคุณจะถูกเปิดเผยให้ Killer เห็น 3 วินาที ทุก 30 วินาที', 
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/object-of-obsession.png'
  },
  {
    id: 28,
    name: 'Sole Survivor',
    role: 'survivor',
    character: 'Laurie Strode',
    description: 'ทุกครั้งที่ผู้รอดชีวิตคนอื่น ตายหรือถูกสังเวยจะได้รับ 1 โทเคน\n\nและต่อโทเคน Killer จะอ่านออร่าคุณไม่ได้ 20 / 22 / 24 เมตรเมื่อคุณเป็น ผู้รอดชีวิตคนสุดท้าย\nซ่อมเครื่องปั่นเร็วขึ้น 75%\n\nเปิดประตูทางออกหรือ Hatch เร็วขึ้น 50%',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/sole-survivor.png'
  },
  {
    id: 29,
    name: 'Ace in the Hole',
    role: 'survivor',
    character: 'Ace Visconti',
    description: 'เมื่อเปิดกล่อง จะได้ไอเทมที่มี แอดออนระดับ Visceral หรือต่ำกว่า 100%\n\nมีโอกาส 50 / 75 / 100% ได้แอดออนชิ้นที่สอง (ระดับ Uncommon หรือต่ำกว่า)\n\n และเมื่อหนีรอดจะเก็บแอดออน\nของไอเทมไว้ได้',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/ace-in-the-hole.png'
  },
  {
    id: 30,
    name: 'Open-Handed',
    role: 'survivor',
    character: 'Ace Visconti',
    description: 'เพิ่มระยะการมองเห็นออร่า 8 / 12 / 16 เมตร (เอฟเฟกต์ Open-Handed ซ้อนไม่ได้)',
    cooldown: '-',
    tier: 'Uncommon',
    img:'../perks/open-handed.png'
  },
  {
    id: 31,
    name: 'Up the Ante',
    role: 'survivor',
    character: 'Ace Visconti',
    description: 'สำหรับผู้รอดชีวิตคนอื่นที่ยังมีชีวิตอยู่ แต่ละคน\nผู้รอดชีวิตทุกคนจะได้ Luck +1 / 2 / 3%\n\nปลดล็อกความสามารถให้ผู้รอดชีวิตทุกคน\nพยายามช่วยตัวเองลงจากตะขอได้',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/up-the-ante.png'
  },
  {
    id: 32,
    name: 'Left Behind',
    role: 'survivor',
    character: 'Bill Overbeck',
    description: 'เมื่อคุณเป็น ผู้รอดชีวิตคนสุดท้าย\nจะเห็นออร่าของ Hatch\nภายในระยะ 24 / 28 / 32 เมตร',
    cooldown: '-',
    tier: 'Uncommon',
    img:'../perks/left-behind.png'
  },
  {
    id: 33,
    name: 'Alert',
    role: 'survivor',
    character: 'Feng Min',
    description: 'เมื่อ Killer ทำการ ทำลาย (เตะพาเลท/เครื่องปั่น ฯลฯ)\nจะเห็นออร่าของ Killer เป็นเวลา 3 / 4 / 5 วินาที',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/alert.png'
  },
  {
    id: 34,
    name: 'Lithe',
    role: 'survivor',
    character: 'Feng Min',
    description: 'หลังจาก กระโดดข้ามสิ่งกีดขวางแบบเร็ว\nได้รับ Haste 50% นาน 3 วินาที\nจากนั้นติด Exhausted 60 / 50 / 40 วินาที',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/lithe.png'
  },
  {
    id: 35,
    name: 'Technician',
    role: 'survivor',
    character: 'Feng Min', 
    description: 'เสียงจากการซ่อมเครื่องปั่น เบาลงและระยะได้ยินลดลง 8 เมตรเมื่อทำ Skill Check ซ่อมพลาด\nแต่เครื่องปั่นจะเสียความคืบหน้าเพิ่ม 5 / 4 / 3%',
    cooldown: '-',
    tier: 'Uncommon',
    img:'../perks/technician.png'
  },
  {
    id: 36,
    name: 'No mither',
    role: 'survivor',
    character: 'David King',
    description: 'ติดสถานะ Broken ตลอดทั้งเกม (ไม่สามารถรักษาได้)ไม่ทิ้งคราบเลือด และไม่ส่งเสียงครางจากการบาดเจ็บ\nฟื้นตัวจากสถานะใกล้ตายเร็วขึ้น 15 / 20 / 25%\nและสามารถ ฟื้นตัวจนลุกขึ้นได้เอง',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/no-mither.png'
  },
  {
    id: 37,
    name: 'We\'re Gonna Live Forever',
    role: 'survivor',
    character: 'David King', 
    description: 'เมื่อรักษาผู้รอดชีวิตที่อยู่ในสถานะใกล้ตายความเร็วการรักษา เพิ่มขึ้น 100% หลังรักษาสำเร็จ ผู้ที่ถูกช่วยจะได้ Endurance 6 / 8 / 10 วินาที',
    cooldown: '30 วินาที',
    tier: 'Very Rare',
    img:'../perks/were-gonna-live-forever.png'
  },
  {
    id: 38,
    name: 'Pharmacy',
    role: 'survivor',
    character: 'Quentin Smith',
    description: 'เปิดกล่องเร็วขึ้น 75 / 100 / 125%\nระยะเสียงจากการเปิดกล่อง ลดลง 12 เมตร\nและ การเปิดกล่องจะได้ Emergency Med-kit แน่นอน',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/pharmacy.png'
  },
  {
    id: 39,
    name: 'Vigil',
    role: 'survivor',
    character: 'Quentin Smith',
    description: 'คุณและผู้รอดชีวิตในระยะ 16 เมตร\nฟื้นฟูสถานะผิดปกติเร็วขึ้น 44 / 55 / 66%\n(Blindness, Broken, Exhausted, Exposed, Hemorrhage, Hindered, Mangled, Oblivious)\n\nเอฟเฟกต์ Vigil ซ้อนไม่ได้ และคงอยู่ต่อ 15 วินาที หลังออกจากระยะ',
    cooldown: '-',
    tier: 'Uncommon',
    img:'../perks/vigil.png'
  },
  {
    id: 40,
    name: 'Wake Up!',
    role: 'survivor',
    character: 'Quentin Smith',
    description: 'เมื่อเครื่องปั่นทั้งหมดถูกซ่อมเสร็จจะเห็นออร่าของ ประตูทางออกขณะเปิดประตู ออร่าของคุณจะถูกเห็นโดยผู้รอดชีวิตคนอื่นและเปิดประตูเร็วขึ้น 8 / 10 / 12.5% ต่อผู้รอดชีวิตที่ยังมีชีวิตอยู่',
    cooldown: '60 วินาที',
    tier: 'Very Rare',
    img:'../perks/wake-up.png'
  },
  {
    id: 41,
    name: 'Detective\'s Hunch',
    role: 'survivor',
    character: 'Detective Tapp',
    description: 'เมื่อเครื่องปั่นถูกซ่อมเสร็จ\nจะเห็นออร่าของ เครื่องปั่น / กล่อง / โทเท็ม\nภายในระยะ 32 / 48 / 64 เมตร เป็นเวลา 20 วินาที',
    cooldown: '-',
    tier: 'Uncommon',
    img:'../perks/detectives-hunch.png'
  },
  {
    id: 42,
    name: 'Stake Out',
    role: 'survivor',
    character: 'Detective Tapp',
    description: 'เมื่ออยู่ใน Terror Radius ของ Killer และ ไม่อยู่ในการไล่ล่าทุก ๆ 15 วินาที จะได้รับ 1 Token สะสมได้สูงสุด 2 / 3 / 4 Token เมื่อมีอย่างน้อย 1 Token ทำ Good Skill Check จะถูกนับเป็น Great Skill Check โดยใช้ 1 Tokenและได้รับความคืบหน้าการซ่อมเครื่องปั่นเพิ่ม +1%',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/stake-out.png'
  },
  {
    id: 43,
    name: 'Tenacity',
    role: 'survivor',
    character: 'Detective Tapp',
    description: 'ความดุดันและความทรหดในยามคับขัน ทำให้ขณะอยู่ใน Dying State จะได้รับ Haste 15 / 20 / 25%  ออร่าของคุณจะไม่ถูก Killer อ่านได้\n และ เสียงครางจากความเจ็บปวดขณะอยู่ใน Dying State ลดลง 75%\n\n ',     
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/tenacity.png'
  },
  {
    id: 44,
    name: 'Boil Over',
    role: 'survivor',
    character: 'Kate Denson',
    description: 'เอฟเฟกต์การดิ้นใส่ Killer เพิ่มขึ้น 60 / 70 / 80% , Killer มองไม่เห็นออร่า ตะขอ ในระยะ 16 เมตร , ได้รับ 33% ของความคืบหน้าการดิ้น เมื่อ Killer ตกจากที่สูง',     
    cooldown: '-',
    tier: 'Uncommon',
    img:'../perks/boil-over.png'
  },
  {
    id: 45,
    name: 'Dance With Me',
    role: 'survivor',
    character: 'Kate Denson',
    description: 'เมื่อกระโดดข้ามแบบรีบเร่ง หรือ ออกจากตู้ด้วยการวิ่งจะไม่ทิ้งรอยขีดข่วนเป็นเวลา 5 วินาที',     
    cooldown: '25/20/15 วินาที',
    tier: 'Rare',
    img:'../perks/dance-with-me.png'
  },
  {
    id: 46,
    name: 'Windows of Opportunity',
    role: 'survivor',
    character: 'Kate Denson',
    description: 'ปลดล็อกความสามารถในการมองเห็นออร่า\n , เห็นออร่าของแผ่นไม้, กำแพงที่ทำลายได้ และจุดกระโดด\n ในระยะ 24 / 28 / 32 เมตร',     
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/windows-of-opportunity.png'
  },
  {
    id: 47,
    name: 'Autodidact',
    role: 'survivor',
    character: 'Adam Francis',
    description: 'เริ่ม -15% ฮีลคนอื่น , Skill Check สำเร็จ = ได้โทเคน (สูงสุด 3/4/5) , โทเคนละ +15% และไม่ทำงานกับ Med-kit',     
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/autodidact.png'
  },
  {
    id: 48,
    name: 'Deliverance',
    role: 'survivor',
    character: 'Adam Francis',
    description: 'เมื่อช่วยแกะเพื่อนจากตะขออย่างปลอดภัย Deliverance จะทำงาน ,s มีโอกาส 100% แกะตะขอเองได้ , เมื่อแกะตะขอด้วย Deliverance สำเร็จ จะติดสถานะ Broken เป็นเวลา 100/80/60 วินาที',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/deliverance.png'
  },
  {
    id: 49,
    name: 'Diversion',
    role: 'survivor',
    character: 'Adam Francis',
    description: 'อยู่ใน Terror Radius ของฆาตกรโดยไม่ถูกไล่ล่า ครบ 30 / 25 / 20 วินาที จะเปิดใช้งาน Diversion เมื่อพร้อมใช้งาน , กดปุ่มสกิลขณะ หมอบและอยู่นิ่ง เพื่อขว้างก้อนหินสิ่งรบกวนจะสร้างเสียงแจ้งเตือนดัง , รอยขีดข่วน (Scratch Marks) เมื่อใช้แล้ว ตัวจับเวลาสกิลจะรีเซ็ต',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/diversion.png'
  },
  {
    id: 50,
    name: 'Aftercare',
    role: 'survivor',
    character: 'Jeff Johansen',
    description: 'ปลดล็อกความสามารถในการมองเห็นออร่าคุณจะเห็นออร่าของผู้รอดชีวิตที่คุณช่วยลงจากตะขอ หรือมาช่วยคุณ , คุณรักษาให้ หรือมารักษาคุณ , ผู้รอดชีวิตเหล่านั้น จะเห็นออร่าของคุณด้วยเอฟเฟกต์นี้มีผลกับผู้รอดชีวิตได้สูงสุด 1 / 2 /3 คนเมื่อคุณถูกฆาตกรแขวนตะขอ เอฟเฟกต์ทั้งหมดของ Aftercare จะถูกรีเซ็ต',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/aftercare.png'
  },
  {
    id: 51,
    name: 'Breakdown',
    role: 'survivor',
    character: 'Jeff Johansen',
    description: 'เมื่อคุณถูกปลดออกจากตะขอ (หนีเองหรือมีคนช่วย) ตะขอจะ พังทันที และคุณจะเห็น ออร่าของฆาตกร 4 / 5 / 6 วินาทีตะขอที่พังจากเพิร์กนี้จะใช้เวลา 180 วินาที ในการเกิดใหม่',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/breakdown.png'
  },
  {
    id: 52,
    name: 'Distortion',
    role: 'survivor',
    character: 'Jeff Johansen',
    description: 'เมื่อออร่าของคุณกำลังจะถูกฆาตกรเห็น perk จะทำงานเริ่มเกมด้วย 1 Token เมื่อออร่าถูกอ่าน จะใช้ 1 Token และเป็นเวลา 8 / 10 / 12 วินาที ออร่าของคุณและจะไม่ถูกเห็นรอยเท้า (Scratch Marks) จะไม่ปรากฏให้ฆาตกรเห็น , ทุก ๆ 15 วินาทีที่อยู่ในการไล่ล่า จะได้รับ 1 Token (สูงสุด 2) เอฟเฟกต์นี้ ไม่ทำงานขณะอยู่ในสถานะล้ม (Dying State)',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/distortion.png'
  },
  {
    id: 53,
    name: 'Head On',
    role: 'survivor',
    character: 'Jane Romero',
    description: 'เมื่อคุณซ่อนอยู่ในล็อกเกอร์ครบ 3 วินาที Head On จะพร้อมใช้งาน ขณะ perk ทำงาน ให้พุ่งออกจากล็อกเกอร์หากฆาตกรอยู่ในระยะ จะถูก สตัน 3 วินาทีทำให้ติดสถานะ Exhausted 60 / 50 / 40 วินาที และ ใช้ไม่ได้ขณะ Exhausted',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/head-on.png'
  },
  {
    id: 54,
    name: 'Poised',
    role: 'survivor',
    character: 'Jane Romero',
    description: 'เมื่อเริ่มซ่อมเครื่องปั่นครั้งแรกจะเห็น ออร่าของฆาตกร 8 วินาทีเมื่อซ่อมเครื่องปั่นเสร็จคุณจะ ไม่ทิ้งรอยเท้า (Scratch Marks) เป็นเวลา 20 / 25 / 30 วินาที',
    cooldown: '-',
    tier: 'Uncommon',
    img:'../perks/poised.png'
  },
  {
    id: 55,
    name: 'Solidarity',
    role: 'survivor',
    character: 'Jane Romero',
    description: 'ขณะบาดเจ็บ เมื่อคุณ รักษาผู้รอดชีวิตคนอื่นโดยไม่ใช้ Med-kit คุณจะ ได้รับการรักษาตัวเองไปด้วย ที่อัตรา 50 / 60 / 70%',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/solidarity.png'
  },
  {
    id: 56,
    name: 'Buckle up',
    role: 'survivor',
    character: 'Ashley J. Williams',
    description: 'ขณะคุณ รักษาผู้รอดชีวิตที่อยู่ในสถานะใกล้ตาย (Dying State) , คุณและผู้ที่ถูกรักษา จะเห็นออร่าของ Killer , เมื่อรักษาจนจากใกล้ตายเป็นบาดเจ็บ ผู้ที่ถูกรักษาได้รับ Haste 50% เป็นเวลา 3 / 4 / 5 วินาที และไม่ทิ้งรอยเท้า (Scratch Marks) ระหว่างเอฟเฟกต์',
    cooldown: '-',
    tier: 'Uncommon',
    img:'../perks/buckle-up.png'
  },
  {
    id: 57,
    name: 'Flip-Flop',
    role: 'survivor',
    character: 'Ashley J. Williams',
    description: 'ขณะอยู่ในสถานะ ใกล้ตาย (Dying State) เมื่อ Killer อุ้มคุณขึ้นมา 50% ของความคืบหน้าการฟื้นตัว จะถูกแปลงเป็น ความคืบหน้าการดิ้น (Wiggle) สูงสุดไม่เกิน 40 / 45 / 50% Wiggle',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/flip-flop.png'
  },
  {
    id: 58,
    name: 'Mettle of Man',
    role: 'survivor',
    character: 'Ashley J. Williams', 
    description: 'เมื่อได้รับ Protection Hit ครบ 3 ครั้ง → Mettle of Man จะทำงานครั้งถัดไปที่คุณควรจะล้มจากสถานะบาดเจ็บ จะไม่ล้ม (กันตาย 1 ครั้ง) หลังจากนั้น เมื่อคุณ รักษาหายเต็มหลอดออร่าของคุณจะถูกเปิดเผยให้ Killer เห็น หากอยู่ห่างเกิน 12 / 14 / 16 เมตรเอฟเฟกต์จะ หายไปเมื่อคุณล้มอีกครั้ง , เพิ่มโอกาสเป็น Obsession',
    cooldown: '-',
    tier: 'Very Rare',
    img:'../perks/mettle-of-man.png'
  },
  {
    id: 59,
    name: 'Better Together',
    role: 'survivor',
    character: 'Nancy Wheeler',
    description: 'ออร่าของเครื่องปั่นที่คุณกำลังซ่อมอยู่ จะถูกเปิดเผยให้ผู้รอดชีวิตคนอื่นเห็นหาก Killer ทำให้ Survivor คนใดล้ม ขณะที่คุณกำลังซ่อมเครื่องคุณจะเห็น ออร่าของ Survivor คนอื่นทั้งหมด เป็นเวลา 20 / 25 / 30 วินาที',
    cooldown: '-',
    tier: 'Rare',
    img:'../perks/better-together.png'
  },
  {
    id: 60,
    name : 'Fixated',
    role : 'survivor',
    character : 'Nancy Wheeler', 
    description : 'คุณสามารถเห็น รอยเท้าของตัวเอง (Scratch Marks) ได้ตลอดเวลา ขณะเดิน (Walking) จะได้รับ Haste 10 / 15 / 20 %',
    cooldown : '-',
    tier : 'Uncommon',
    img : '../perks/fixated.png'
  },
  {
    id: 61,
    name : 'Inner Strength',
    role : 'survivor',
    character : 'Nancy Wheeler',
    description : 'ทุกครั้งที่คุณ ล้างโทเท็มสำเร็จ → Inner Strength จะทำงาน (จะไม่ทำงานหากติดสถานะ Broken อยู่แล้ว) ขณะเอฟเฟกต์ทำงาน หากคุณบาดเจ็บ และ ซ่อนในล็อกเกอร์ 10 / 9 / 8 วินาทีจะ ฟื้นเลือดจากบาดเจ็บเป็นปกติทันที เอฟเฟกต์จะหายไปหลังจากใช้งาน',
    cooldown : '-',
    tier : 'Rare',
    img : '../perks/inner-strength.png'
  },
  {
    id: 62,
    name : 'Babysitter',
    role : 'survivor',
    character : 'Steve Harrington',
    description : 'เมื่อคุณ ช่วยปลดตะขอ Survivor ผู้ที่ถูกช่วยจะไม่ทิ้งรอยเท้าและคราบเลือด พร้อมได้รับ Haste 10% นาน 20 / 25 / 30 วินาทีคุณจะเห็น ออร่าของ Killer เป็นเวลา 8 วินาที',
    cooldown : '-',
    tier : 'Uncommon',
    img : '../perks/babysitter.png'

  },
  {
    id: 63,
    name: 'Camaraderie',
    role: 'survivor',
    character: 'Steve Harrington', 
    description: 'ขณะคุณอยู่บนตะขอช่วง Struggle → Camaraderie จะทำงานหากมี Survivor คนอื่นอยู่ภายในระยะ 16 เมตรเวลาบนตะขอจะหยุดนับ เป็นเวลา 26 / 30 / 34 วินาที',
    cooldown: '-',
    tier: 'Rare', 
    img: '../perks/camaraderie.png'
  },
  {
    id: 64,
    name: 'Second Wind',
    role: 'survivor',
    character: 'Steve Harrington',  
    description: 'เมื่อคุณ รักษา Survivor คนอื่นรวมครบ 1 หลอดเลือด → Second Wind จะทำงาน (ไม่ทำงานหากติดสถานะ Broken อยู่แล้ว) ครั้งถัดไปที่คุณ ถูกปลดตะขอหรือปลดเองจะ ฮีลจากบาดเจ็บเป็นปกติอัตโนมัติ เอฟเฟกต์จะหายไปทันทีเมื่อหายดีหรือถูกล้มก่อนฮีลสำเร็จ (Broken จะหาย)',
    cooldown: '-',
    tier: 'Very Rare',
    img: '../perks/second-wind.png'
  },
  {
    id: 65,
    name: 'Any Means Necessary',
    role: 'survivor',
    character: 'Yui Kimura',  
    description: 'คุณสามารถเห็นออร่าของแผ่นไม้ที่ถูกล้มแล้ว กดค้างปุ่มสกิล (Active Ability Button 1) ข้างแผ่นไม้ที่ล้มเป็นเวลา 5 / 4 / 3 วินาที เพื่อ ตั้งแผ่นไม้กลับขึ้นมา',
    cooldown: '-',
    tier: 'Rare',
    img: '../perks/any-means-necessary.png'
  },
  {
    id: 66,
    name: 'Breakout',
    role: 'survivor',
    character: 'Yui Kimura',
    description: 'เมื่ออยู่ใกล้ Survivor ที่ถูกอุ้ม ภายใน 5 เมตรคุณจะได้รับ Haste 6 / 8 / 10 % และ Survivor ที่ถูกอุ้ม จะดิ้นหลุดเร็วขึ้น 25%',
    cooldown: '-',
    tier: 'Uncommon', 
    img: '../perks/breakout.png'
  },
  {
    id: 67,
    name: 'Lucky Break',
    role: 'survivor',
    character: 'Yui Kimura',  
    description: 'เมื่อคุณ บาดเจ็บ (Injured) จะเปิดใช้งาน Lucky Break ระหว่างที่เอฟเฟกต์ทำงาน คุณจะไม่ทิ้งรอยเลือดและรอยเท้า เป็นเวลา 40 / 50 / 60 วินาที ขณะสุขภาพปกติ (Healthy) ทุก ๆ 1 วินาที ที่คุณรักษา Survivor คนอื่น จะ เพิ่มระยะเวลา Lucky Break อีก 1 วินาที (แต่ไม่เกินเวลาสูงสุดเริ่มต้น)',
    cooldown: '-',
    tier: 'Rare',
    img: '../perks/lucky-break.png'
  },
  {
    id: 68,
    name: 'For the People',
    role: 'survivor',
    character: 'Zarina Kassir',  
    description: 'For the People ใช้ได้เฉพาะตอนที่คุณ เลือดเต็ม (Healthy) กด Active Ability ระหว่างรักษา Survivor โดย ไม่ใช้ Med-kit → ฮีลทันที (จากล้ม → บาดเจ็บ หรือ บาดเจ็บ → เต็มเลือด) หลังใช้คุณจะ บาดเจ็บ และติด Broken 80 / 70 / 60 วินาที และคุณจะกลายเป็น Obsession',
    cooldown: '-',
    tier: 'Rare',
    img: '../perks/for-the-people.png'
  },
  {
    id: 69,
    name: 'Off the Record',
    role: 'survivor',
    character: 'Zarina Kassir',  
    description: 'หลังจากถูกช่วยลงจากตะขอหรือหนีเอง Off the Record จะทำงาน 60 / 70 / 80 วินาที ระหว่างเอฟเฟกต์ทำงาน: ออร่าจะไม่ถูก Killer เห็น , ไม่ส่งเสียงครางจากการบาดเจ็บ , วิ่งแล้วไม่ทิ้งรอยเท้า',
    cooldown: '-',
    tier: 'Very Rare',
    img: '../perks/off-the-record.png'
  },
  {
    id: 70,
    name: 'Red Herring',
    role: 'survivor',
    character: 'Zarina Kassir',
    description: 'ซ่อม Generator อย่างน้อย 1 วินาที Generator นั้นจะถูกไฮไลต์ด้วย ออร่าสีเหลืองออร่าจะหายเมื่อ: Generator ถูกซ่อมเสร็จ , คุณไปซ่อมเครื่องใหม่ , คุณเข้า Locker เมื่อเข้า Locker → จะเกิด เสียงแจ้งเตือนดัง ให้ Killer ที่ตำแหน่ง Generator นั้น',
    cooldown: '25 / 20 / 15 วินาที',
    tier: 'Rare',
    img: '../perks/red-herring.png'
  }
];
export default perksData;