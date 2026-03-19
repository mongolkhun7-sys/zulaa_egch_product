/**
 * PRODUCT: LOVE ASTROLOGY REPORT GENERATOR (DIAMOND EDITION)
 * VERSION: v18.9 - Visual Polish & header Logic
 * AUTHOR: Jules (Strict Adherence to User Requirements)
 * MODEL: gemini-2.5-flash
 ****************************************************************************************/

const CONFIG = {
  // --- SYSTEM CONFIGURATION ---
  VERSION: "v18.9-LoveVisuals",
  PRODUCT_NAME: "Хайрын Зурхай - Хосын Нууц Тайлал",
  SHEET_NAME: "Sheet1",
  BATCH_SIZE: 3, 
  GEMINI_MODEL: "gemini-2.5-flash", 
  TEMPERATURE: 0.65, 

  // --- COLUMN MAPPING (0-based Index) ---
  COLUMNS: {
    NAME: 0,      // A: User Name
    ID: 1,        // B: Subscriber ID
    INPUT: 2,     // C: Raw Input (Gender - UserDOB - PartnerDOB)
    PDF: 3,       // D: Output PDF URL
    STATUS: 4,    // E: Processing Status
    TOKEN: 5,     // F: Token Usage (Total)
    DEBUG: 6,     // G: Debug Data (JSON)
    DATE: 7,      // H: Timestamp
    VER: 8,       // I: Version Tag
    ERROR: 9      // J: Error Message
  },

  MAX_EXECUTION_TIME: 360000, 
  SAFETY_BUFFER: 60000,       

  // ==================================================================================
  // 📜 DATA MAPS (FULL TEXT - NO TOKEN SAVING)
  // ==================================================================================
  
  SUN_ARCHETYPES: {
    "Хонь": "Төмөр хүн", "Үхэр": "Найдвартай уул", "Ихэр": "Уран илтгэгч", "Мэлхий": "Халамжит хамгаалагч",
    "Арслан": "Гялалзсан нар", "Охин": "Нямбай шинжээч", "Жинлүүр": "Эв найрамдлын элч", "Хилэнц": "Нууцлаг эзэн",
    "Нум": "Эрх чөлөөний түүчээ", "Матар": "Оргил өөд мацагч", "Хумх": "Ирээдүйг бүтээгч", "Загас": "Зөнч мөрөөдөгч"
  },

  MOON_ARCHETYPES: {
    "Хонь": "Дүрэлзсэн гал", "Үхэр": "Амгалан диваажин", "Ихэр": "Сониуч аялагч", "Мэлхий": "Халуун энгэр",
    "Арслан": "Бардам хаан", "Охин": "Төгс төгөлдөр", "Жинлүүр": "Гоо үзэсгэлэн", "Хилэнц": "Гүн далай",
    "Нум": "Өөдрөг үзэлтэн", "Матар": "Бат бөх цайз", "Хумх": "Хязгааргүй орон зай", "Загас": "Хайрын далай"
  },

  LP_ARCHETYPES: {
    1: "Манлайлагч", 2: "Эвлүүлэгч", 3: "Урлаач", 4: "Суурийг тавигч", 5: "Эрэл хайгуулч",
    6: "Тэтгэгч эх", 7: "Үнэний эрэлч", 8: "Удирдагч", 9: "Хүмүүнлэг үйлстэн",
    11: "Зөн билэгтэн", 22: "Их бүтээн байгуулагч", 33: "Агуу багш"
  },

  TSAGAAN_SAR_MAP: {
    1940: "02-08", 1941: "01-27", 1942: "02-15", 1943: "02-05", 1944: "02-24", 1945: "02-13", 1946: "02-02", 1947: "01-22", 1948: "02-10", 1949: "01-29",
    1950: "02-17", 1951: "02-06", 1952: "01-27", 1953: "02-14", 1954: "02-03", 1955: "02-24", 1956: "02-12", 1957: "01-31", 1958: "02-18", 1959: "02-08",
    1960: "02-27", 1961: "02-15", 1962: "02-05", 1963: "02-25", 1964: "02-13", 1965: "02-02", 1966: "02-21", 1967: "02-09", 1968: "01-30", 1969: "02-17",
    1970: "02-06", 1971: "02-27", 1972: "02-15", 1973: "02-06", 1974: "02-23", 1975: "02-11", 1976: "01-31", 1977: "02-18", 1978: "02-07", 1979: "02-28",
    1980: "02-16", 1981: "02-05", 1982: "02-24", 1983: "02-13", 1984: "02-02", 1985: "02-20", 1986: "02-09", 1987: "01-29", 1988: "02-17", 1989: "02-06",
    1990: "02-27", 1991: "02-15", 1992: "02-04", 1993: "02-23", 1994: "02-10", 1995: "01-31", 1996: "02-19", 1997: "02-07", 1998: "02-28", 1999: "02-16",
    2000: "02-05", 2001: "02-24", 2002: "02-12", 2003: "02-01", 2004: "02-22", 2005: "02-09", 2006: "01-29", 2007: "02-18", 2008: "02-07", 2009: "02-25",
    2010: "02-14", 2011: "02-03", 2012: "02-22", 2013: "02-11", 2014: "01-31", 2015: "02-19", 2016: "02-09", 2017: "02-27", 2018: "02-16", 2019: "02-05",
    2020: "02-24", 2021: "02-12", 2022: "02-02", 2023: "02-21", 2024: "02-10", 2025: "02-28"
  },

  SECRET_FRIENDS: [ ["Луу", "Тахиа"], ["Хулгана", "Үхэр"], ["Бар", "Гахай"], ["Туулай", "Нохой"], ["Могой", "Бич"], ["Морь", "Хонь"] ],
  TRINES: [ ["Хулгана", "Луу", "Бич"], ["Үхэр", "Могой", "Тахиа"], ["Бар", "Морь", "Нохой"], ["Туулай", "Хонь", "Гахай"] ],
  CLASHES: [ ["Хулгана", "Морь"], ["Үхэр", "Хонь"], ["Бар", "Бич"], ["Туулай", "Тахиа"], ["Луу", "Нохой"], ["Могой", "Гахай"] ],

  WEALTH_TEXTS: {
    SECRET: `**💰 Санхүүгийн дүгнэлт:** "Та хоёрын санхүүгийн код бол 'Нууц Ивээл ба Баялаг' юм. Та хоёр бол зүгээр нэг тохиолдлоор учирсан хүмүүс биш, харин бие биенээ тэтгэж, ургах гэж учирсан Заяаны хосууд юм. Зурхайд та хоёрын жилийн нэгдэл нь Нууц ивээл буюу хамгийн дээд зохицлыг үүсгэдэг бөгөөд энэ нь эд баялаг, мөнгө санхүүг шууд бэлгэддэг. Өөрөөр хэлбэл та хоёр тус тусдаа байхаасаа илүү хамтдаа байхдаа мөнгө олох, хөрөнгө хуримтлуулах аз нь эрс нэмэгдэнэ."`,
    TRINE: `**💰 Санхүүгийн дүгнэлт:** "Та хоёрын санхүүгийн код бол 'Тогтвортой Өсөлт' юм. Ивээл жилүүдийн нэгдэл нь яг л нэг зүгт урсах гол мөрөн шиг хүчтэй урсгалыг үүсгэдэг. Та хоёр бие биенээ хурцалж, дэмждэг тул хамтын бизнес эсвэл хөрөнгө оруулалт хийхэд эрсдэл багатай, ашиг өндөртэй байх болно. Нэг нь төлөвлөж, нөгөө нь хэрэгжүүлэхэд төгс зохицно."`,
    CLASH: `**💰 Санхүүгийн дүгнэлт:** "Та хоёрын санхүүгийн код бол 'Тэсрэлттэй Хөдөлгүүр' юм. Харш жилүүдийн нэгдэл нь маш их оч, энерги үүсгэдэг. Та хоёр бие биенээ хурцалж, тайван суулгадаггүй тул хамтдаа байхдаа огцом том амжилтуудыг гаргах чадвартай. Гэхдээ санхүүгийн шийдвэр дээр маргаан гарах магадлалтай тул томоохон хөрөнгө оруулалтыг сэтгэл хөдлөлөөр бус, дүрэм журмаар шийдэх нь чухал. Энэ энергиэ зөв удирдвал хэний ч санаанд оромгүй баялгийг бүтээнэ."`,
    NEUTRAL: `**💰 Санхүүгийн дүгнэлт:** "Та хоёрын санхүүгийн код бол 'Хөдөлмөрч Бүтээн Байгуулалт' юм. Та хоёрын дунд ид шидийн гэмээр бэлэн боломж, эсвэл саад тотгорын аль аль нь байхгүй. Энэ нь та хоёр санхүүгийн хувь заяагаа 100% өөрсдөө бичих боломжтойг харуулж байна. Хамтын зорилгоо тодорхой болгож, бие биедээ тодорхой үүрэг хуваарилан ажиллах тусам танай гэр бүлийн санхүү бат бөх суурин дээр босох болно. Та хоёр бол тоосго тоосгоор баялгаа өрдөг хос юм."`
  },

  DELIVERY_MESSAGE: `🔮 Сайн байна уу? \n\nТаны "Хайрын Зурхай - Хосын Нууц Тайлал" бэлэн боллоо.\n\nФайл: {{URL}}\n\n(Татаж аваад хадгалаарай, линк 7 хоногийн дараа устаж магадгүй)`,

  REFERENCES: {
    FULL_TEXT: `
    🎭 ХЭСЭГ 1: ГУРВАН ДАВХАРГА БУЮУ БАГ, ЗҮРХ, СҮНСНИЙ НЭГДЭЛ 🦁 
    **Нийгмийн дүр төрх буюу Гаднаа өмсдөг хуяг**
    Хүмүүс та хоёрыг харахдаа Нарны ордны шинж чанараар дүгнэдэг тул дараах дүр зургийг олж хардаг. Эмэгтэйг 4 сарын 12-ны Хонины ордны нөлөөгөөр маш дайчин, бие даасан, хэзээ ч бууж өгдөггүй, эрч хүч нь оргилсон "Төмөр хатагтай" гэж хардаг. Түүнийг харахад хэний ч тусламж хэрэггүй мэт хүчирхэг сэтгэгдэл төрүүлдэг ба түүний шулуун шударга зан нь бусдад эмээх сэтгэгдэл төрүүлэх нь бий. Харин эрэгтэйг 5 сарын 12-ны Үхрийн ордны нөлөөгөөр маш тайван, ул суурьтай, сэтгэл хөдлөлөө хянаж чаддаг, найдвартай "Уул шиг залуу" гэж үнэлдэг. Тэр яг л бүх зүйлийг тооцоолчихсон, юунд ч сандардаггүй мэт харагддаг. Энэ бол та хоёрын нийгэмд үзүүлдэг Баг бөгөөд анх танилцахдаа бие биенийхээ энэ хүчирхэг байдал буюу нэгнийхээ хурд, нөгөөгийнхөө тайван байдалд татагдсан байх магадлалтай. Гэвч энэ гаднах төрх бол зөвхөн мөсөн уулын орой юм.
    **Сэтгэлийн зуршил буюу Зүрх юу хүсдэг вэ?**
    Гаднах багаа тайлахад Сарны орд буюу сэтгэл хөдлөлийн давхарга гарч ирнэ. Эмэгтэйн Сарны орд нь Нумын ордод байрладаг. Энэ нь түүнийг яагаад тийм илэн далангүй, хөгжилтэй, заримдаа хэтэрхий гэмээр үнэн үг хэлдэг болохыг тайлбарладаг. Тэр сэтгэлээр унах үедээ уйлахын оронд аялах, зугтах, эсвэл инээд наргиан болгож хүнд байдлаа нуухыг хичээдэг "Өөдрөг үзэлтэн"-ий зантай. Тэр эрх чөлөөг юунаас ч илүү хүсдэг. Харин эрэгтэйн Сарны орд нь Арслангийн ордод байрладаг. Гаднаа дуугүй Үхэр мэт боловч дотроо тэр маш бардам, хайртай хүнээсээ байнгын магтаал, хүндлэл, хаан мэт харилцааг хүлээж байдаг. Түүний сэтгэл зүрх нь маш халуун, романтик боловч хэрвээ түүнийг үл тоовол Арслан шиг архирах аюултай. Тэгэхээр энд нэг зөрчил үүсэж байна. Эмэгтэй нь эрх чөлөөтэй, хэнэггүй байхыг хүсдэг бол эрэгтэй нь анхаарлын төвд байж, хүндлүүлэхийг хүсдэг.
    **Жинхэнэ мөн чанар буюу Сүнсний эмзэг цэг**
    Хамгийн гүнд буюу сүнсний түвшинд очиход Амьдралын замын тоо буюу "Сүнсний код"-ын нууц задарна. Эмэгтэйн мөн чанар бол 11 буюу "Зөн билэгтэн" юм. Энд л хамгийн том нууц бий. Тэр гаднаа Хонь шиг хүчтэй, сэтгэл нь Нум шиг хэнэггүй мэт боловч, яг үнэндээ дотроо бусдыг анагаах, гэрэл түгээх гэж ирсэн, маш өндөр мэдрэмжтэй сүнс юм. Түүний тэр их шуугиантай зан нь үнэндээ өөрийн хэт мэдрэмтгий, эмзэг дотоод ертөнцөө хамгаалах хуяг нь байдаг. Харин эрэгтэйн мөн чанар бол 1 буюу "Манлайлагч" юм. Тэр гаднаа Үхэр шиг тайван, сэтгэл нь Арслан шиг бардам боловч, сүнсний мөн чанар нь Анхдагч байх, өөрийн ертөнцийг бүтээх чин хүсэлтэй Хаан юм. Тэр хэзээ ч бусдын дор ажиллахыг хүсдэггүй. Энд гайхалтай нэгдэл үүснэ.
    🔐 ХЭСЭГ 2: СЭТГЭЛИЙН ТҮГЖЭЭ БА ТҮЛХҮҮР 🌊 
    **Сэтгэлийн амар амгалан буюу Таныг юу жинхэнэ утгаар нь тайвшруулдаг вэ?**
    Энэ хэсэгт бид та хоёрын сэтгэл хөдлөл болон сүнсний хэрэгцээг хослуулан сэтгэлийн амар амгаланг хаанаас олдогийг тайлбарлая. Эмэгтэй нь Нум сарны ордтой учраас түүний сэтгэл зүрх үргэлж эрх чөлөө, инээд хөөр, аялал, шинэ мэдлэгт тэмүүлж байдаг. Түүнийг дөрвөн хананы дунд хашиж, хэт их дүрэм журам тулгавал тэр дотроосоо унтарч эхэлдэг. Гэвч түүний сүнсний гүнд орших 11 гэх Зөн билэгтэн тоо нь эсрэгээрээ гүн гүнзгий ойлголцол болон сүнслэг холбоог хүсэмжилдэг. Тэр гаднаа хэнэггүй мэт боловч дотроо намайг үг хэлээгүй байхад ч мэдэрдэг хүн хэрэгтэй гэж хүсдэг. Харин эрэгтэй нь Арслан сарны ордтой учраас түүний сэтгэлийн гүнд өөрийгөө хүлээн зөвшөөрүүлэх, хайрлуулах, хаан мэт хүндлүүлэх асар их хэрэгцээ байдаг. Тэр гаднаа Үхрийн орд шиг тайван харагддаг ч дотроо бол хэн нэгний хувьд Цор ганц баатар нь байхыг хүсдэг.
    **Эмзэг цэг буюу Та хоёрын хөндөж болохгүй сэтгэлийн шарх**
    Та хоёрын сэтгэл хөдлөлийн сарны ордууд хоёулаа Гал махбодтой буюу Нум ба Арслан байгаа нь маш сайн зохицол боловч яг үүн дээр эмзэг цэгүүд огтлолцдог. Эмэгтэй нь Нум сарны ордтой учраас түүний хамгийн том айдас бол Уйтгар болон Хяналт юм. Хэрвээ эрэгтэй нь Үхрийн ордныхоо зөрүүд, өмчирхөг зангаар эмэгтэйгээ хэт их хянаж, хардаж эсвэл нэгэн хэвийн амьдралыг тулгавал эмэгтэй нь дотроосоо гандаж, зугтах тухай бодож эхэлнэ. Харин эрэгтэй нь Арслан сарны ордтой учраас түүний хамгийн эмзэг цэг бол Бардам зан нь юм.
    **Тайтгарлын хэл буюу Бие биенээ гомдоосон үедээ хэрхэн аргадах вэ?**
    Хэрвээ зөрчил үүсэж бие биенээ гомдоосон бол та хоёр өөр өөрийн Сүнсний хэлээр ярих хэрэгтэй болно. Эмэгтэйг аргадах түлхүүр бол Мэдрэмж ба Орон зай юм. Түүний сүнсний код 11 тул түүнд логик тайлбар, хуурай үгс хэрэггүй. Эрэгтэй нь түүнийг зүгээр л чимээгүй тэврэх, түүнийг шүүмжлэхгүйгээр зүгээр л сэтгэлийг нь ойлгож мэдэрч байгаагаа харуулахад л хангалттай. Харин эрэгтэйг аргадах түлхүүр бол Хүндлэл ба Магтаал юм. Түүний сүнсний код 1 тул тэр өөрийгөө чухал хүн, удирдагч гэдгээ мэдрэх хэрэгтэй.
    🔮 ХЭСЭГ 3: ОЮУН САНАА БА ҮЙЛИЙН ҮР 🌀 
    **Сэтгэлгээний давтамж буюу Та хоёрын тархи хэрхэн ажилладгийг вэ?**
    Энэ хэсэгт бид та хоёрын шийдвэр гаргах хурд болон мэдээлэл боловсруулах арга барилыг харьцуулна. Эмэгтэй нь Хонины орд болон 11 гэх Зөн билэгтэн тооны нөлөөгөөр маш хурдтай, зөн совингоор сэтгэдэг төрлийн хүн юм. Тэр аливаа зүйлийн нарийн ширийн гэхээсээ илүү том зургаар нь хардаг. Харин эрэгтэй нь Үхрийн орд болон 1 гэх Манлайлагч тооны нөлөөгөөр аливааг маш гүн гүнзгий, логик дараалалтайгаар бодож боловсруулдаг Стратегич сэтгэлгээтэй. Эмэгтэй нь санааг гаргадаг харин эрэгтэй нь тэр санаа амьдрал дээр биелэх боломжтой юу гэдгийг тооцоолдог.
    **Заяаны хосын код буюу Та хоёр учрах ёстой хүмүүс мөн үү?**
    Энэ асуултад маш итгэлтэйгээр Тийм ээ гэж хариулна. Та хоёр бол зүгээр нэг тохиолдлоор учирсан хүмүүс биш харин бие биенээ тэтгэж, ургах гэж учирсан Заяаны хосууд юм.
    **Сүнсний даалгавар буюу Та хоёр бие биенээ ямар хүн болгож төлөвшүүлэх гэж ирсэн бэ?**
    Энэ харилцаанаас та хоёрын суралцах ёстой зүйл бол Итгэлцэл ба Тэнцвэр юм. Эрэгтэй нь энэ харилцаанаас Халамжлах ухаанд суралцах ёстой. Тэр өөрийнхөө 1 тооны хүчирхэг, би төвтэй энергийг зөвхөн өөртөө хадгалах биш харин эмэгтэйнхээ эмзэг мэдрэмтгий ертөнцийг хамгаалахад зориулах нь түүний сүнсний даалгавар юм. Харин эмэгтэй нь энэ харилцаанаас Бодит хөрсөн дээр буух ухаанд суралцах ёстой.
    💎 ХЭСЭГ 4: ХАМТЫН ХҮЧ БА БОДИТ БҮТЭЭМЖ 🔋 
    **Энергийн солилцоо буюу Хэн нь хэндээ батарей болдог вэ?**
    Энэ хэсэгт та хоёрын энергийн урсгал хэрхэн ажилладгийг Тоон зурхайн хуулиар тайлбарлая. Та хоёрын харилцаанд Эрэгтэй нь Эмэгтэйгээ цэнэглэгч буюу Газардуулга нь болдог зүй тогтолтой. Учир нь эмэгтэйн сүнсний код болох 11 нь маш өндөр давтамжтай цахилгаан гүйдэл шиг энерги юм. Тэр нийгэмд, ажил дээрээ Хонь ордны дайчин зангаар болон зөн билэгтэн мөн чанараараа маш их мэдээлэл хүлээн авч, энергиэ шавхдаг тул оройдоо яг л хэт халсан мотор шиг болж ядардаг. Яг энэ үед эрэгтэйн 1 гэх Манлайлагч тооны тогтвортой, бат бөх, өөртөө итгэлтэй энерги түүнийг тэврэхэд л эмэгтэй тайвширч, илүүдэл цахилгаанаа гадагшлуулж дахин сэргэдэг.
    **Хамтын бүтээл буюу Та хоёрын хамтрал юуг цэцэглүүлж чадах вэ?**
    Та хоёр зөвхөн хайр дурлалын хос байгаад зогсохгүй амьдралын маш сайн Бизнес хамтрагчид байж чадна. Эрэгтэйн Амьдралын замын тоо 1 буюу Манлайлагч болон эмэгтэйн 11 буюу Зөн билэгтэн гэсэн Мастер тооны нийлэмж нь Алсын хараа ба Гүйцэтгэл хоёрын нэгдэл юм. Та хоёр хамтдаа ямар нэгэн төсөл, бизнес эсвэл зүгээр л гэр бүлийн амьдралаа зохиоход эрэгтэй нь Барилгын суурь, хана, дээвэр буюу аюулгүй байдал, бүтцийг хариуцдаг. Харин эмэгтэй нь тэр барилгын дотоод засал, өнгө будаг, халуун дулаан уур амьсгал буюу агуулгыг хариуцдаг.
    🧭 ХЭСЭГ 5: ИРЭЭДҮЙН ЛУУЖИН 📜 
    **Харилцааны гарын авлага буюу Жинхэнэ Би-тэй харилцах арга**
    Та хоёрын харилцаанд нэгэн сонирхолтой парадокс бий. Эмэгтэй нь насаар эгч боловч түүний дотоод мөн чанар болох 11 гэх Зөн билэгтэн тоо нь үргэлж сэтгэл зүйн халамж, мэдрэмж, анхаарал хүсдэг Хүүхэд шиг зөөлөн энергийг агуулдаг. Харин эрэгтэй нь насаар дүү боловч түүний мөн чанар болох 1 гэх Манлайлагч тоо болон Үхрийн орд нь маш хуучинсаг, буурь суурьтай, гэр бүлээ авч явдаг Өвгөн шиг энергийг агуулдаг. Тиймээс энэ харилцааг урт удаан хадгалах алтан дүрэм бол Нас биш Энергийг дагах явдал юм.
    **Ойрын ирээдүйн прогноз буюу 2026 оны нөлөөлөл**
    Нумерологийн тооцооллоор ирэх 2026 он та хоёрын хувьд маш онцгой, шилжилтийн жил болох гэж байна. Эмэгтэйн хувьд 2026 он нь Хувийн жилийн 8 гэсэн мөчлөгт орж байна. 8-ын тоо бол Эрх мэдэл, Мөнгө санхүү, Карьерын жил юм. Энэ нь ирэх жил эмэгтэй нь санхүүгийн хувьд маш том үсрэлт хийх, тушаал дэвших эсвэл бизнесийн ашиг орлого нь нэмэгдэх магадлал өндөр гэсэн үг.
    **Эцсийн зөвлөмж буюу Үүрд хамт байхын нууц**
    Та хоёрын харилцаа бол Манлайлагч ба Зөн билэгтэн хоёрын үүрдийн холбоо юм. Эрэгтэй нь эмэгтэйнхээ амьдралын Хана хэрэм нь байж түүний эмзэг сэтгэл санааг тогтвортой байлгахад тусал. Эмэгтэй нь эрэгтэйнхээ амьдралын Гэрэл гэгээ нь байж түүний хатуу, нэгэн хэвийн ертөнцөд өнгө нэм. Хэрвээ хэзээ нэгэн цагт та хоёрын дунд ан цав гарвал энэ зурхайг санаарай.
    `
  }
};

// --- MAIN FUNCTION ---
function main() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return;

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  const rows = sheet.getDataRange().getValues();
  const KEYS = {
    GEMINI: PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY"),
    MANYCHAT: PropertiesService.getScriptProperties().getProperty("MANYCHAT_API_TOKEN"),
    TEMPLATE: PropertiesService.getScriptProperties().getProperty("TEMPLATE_ID") 
  };

  let processedCount = 0;
  const START_TIME = new Date().getTime();

  try {
    for (let i = 1; i < rows.length; i++) {
      if (new Date().getTime() - START_TIME > CONFIG.MAX_EXECUTION_TIME - CONFIG.SAFETY_BUFFER) break;
      if (processedCount >= CONFIG.BATCH_SIZE) break;

      const row = rows[i];
      if (row[CONFIG.COLUMNS.STATUS] === "DONE" || String(row[CONFIG.COLUMNS.STATUS]).includes("ERROR") || !row[CONFIG.COLUMNS.INPUT]) continue;

      sheet.getRange(i + 1, CONFIG.COLUMNS.STATUS + 1).setValue("Processing...");
      SpreadsheetApp.flush();

      try {
        const inputString = String(row[CONFIG.COLUMNS.INPUT]); 
        
        // 1. AI NORMALIZATION & MOON CALCULATION (JSON ONLY, NO FALLBACK)
        const profile = parseCoupleProfile(inputString, KEYS.GEMINI);
        
        // 2. SEQUENTIAL GENERATION (3 CALLS)
        const reportResult = generateLoveReport(profile, KEYS.GEMINI);
        
        // 3. DELIVERY
        const pdfUrl = createPdf(profile.titleName || "Couple", reportResult.text, KEYS.TEMPLATE);
        sendManyChat(row[CONFIG.COLUMNS.ID], pdfUrl, profile.clientName || "Erhem", KEYS.MANYCHAT);

        // LOGGING
        const totalTokens = (profile.parsingUsage || 0) + reportResult.usage;
        const now = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm");
        
        sheet.getRange(i + 1, CONFIG.COLUMNS.PDF + 1).setValue(pdfUrl);
        sheet.getRange(i + 1, CONFIG.COLUMNS.STATUS + 1).setValue("DONE");
        sheet.getRange(i + 1, CONFIG.COLUMNS.TOKEN + 1).setValue(totalTokens); 
        sheet.getRange(i + 1, CONFIG.COLUMNS.DEBUG + 1).setValue(JSON.stringify(profile));
        sheet.getRange(i + 1, CONFIG.COLUMNS.DATE + 1).setValue(now);
        sheet.getRange(i + 1, CONFIG.COLUMNS.VER + 1).setValue(CONFIG.VERSION);
        sheet.getRange(i + 1, CONFIG.COLUMNS.ERROR + 1).setValue(""); 
        
        processedCount++;
      } catch (err) {
        console.error(err);
        sheet.getRange(i + 1, CONFIG.COLUMNS.STATUS + 1).setValue("ERROR");
        sheet.getRange(i + 1, CONFIG.COLUMNS.ERROR + 1).setValue(err.message);
      }
    }
  } finally {
    lock.releaseLock();
  }
}

// ==========================================
// 1. AI NORMALIZATION ENGINE (JSON ONLY)
// ==========================================

function parseCoupleProfile(rawInput, apiKey) {
  // CALL AI FOR EXTRACTION (Strict JSON)
  const extracted = normalizeInputWithAI(rawInput, apiKey);
  
  if (!extracted || !extracted.client || !extracted.partner) {
    throw new Error("AI Extraction Failed: Invalid JSON Structure");
  }

  // STEP 2: CALCULATE CONSTANTS (Hardcoded Math)
  const clientData = calculateBasicAstrology(extracted.client);
  const partnerData = calculateBasicAstrology(extracted.partner);
  
  // ASSIGN MOON SIGNS (Calculated Math)
  clientData.moonSign = calculateMoonSign(extracted.client.year, extracted.client.month, extracted.client.day);
  clientData.moonArch = CONFIG.MOON_ARCHETYPES[clientData.moonSign] || "Өөдрөг үзэлтэн";
  
  partnerData.moonSign = calculateMoonSign(extracted.partner.year, extracted.partner.month, extracted.partner.day);
  partnerData.moonArch = CONFIG.MOON_ARCHETYPES[partnerData.moonSign] || "Өөдрөг үзэлтэн";

  // STEP 3: FINANCIAL LOGIC
  const wealthLogic = determineWealthLogic(clientData.animal, partnerData.animal);
  
  // STEP 4: PERSONAL YEAR
  const clientPY = calculatePersonalYear(extracted.client.month, extracted.client.day, 2026);
  const partnerPY = calculatePersonalYear(extracted.partner.month, extracted.partner.day, 2026);

  // STEP 5: HEADER CREATION
  const header = createProfileHeader(extracted, clientData, partnerData);

  return {
    client: { ...extracted.client, ...clientData, personalYear: clientPY },
    partner: { ...extracted.partner, ...partnerData, personalYear: partnerPY },
    
    titleName: `Love Report`,
    clientName: extracted.client.name,
    parsingUsage: extracted.usage,
    
    wealthCode: wealthLogic.code,
    wealthText: wealthLogic.text,
    relationType: wealthLogic.type,
    
    headerHtml: header
  };
}

function normalizeInputWithAI(raw, key) {
  const prompt = `
  SYSTEM: You are a Data Extraction Engine. Output ONLY JSON. NO Markdown. NO explanations.
  TASK: Extract Client and Partner data from the input string.
  INPUT: "${raw}"
  
  INSTRUCTIONS:
  1. Identify Client Gender (User). Partner is Opposite.
     IMPORTANT: Return 'gender' as strict Enum: "MALE" or "FEMALE". Do not use local language.
  2. Extract Dates. Convert loose text (e.g. "1996 onii 10 sar") to YYYY, MM, DD numbers.
  3. DETERMINE MOON SIGNS (Western Astrology) for the calculated dates. IMPORTANT: Assume Birth Time is 12:00 PM (Noon) to get the average Moon Sign. Return proper Mongolian Name (e.g. Хонь, Үхэр, Ихэр, Мэлхий, Арслан, Охин, Жинлүүр, Хилэнц, Нум, Матар, Хумх, Загас).
  4. If Name is missing, use "Захиалагч" and "Хос".
  5. If Date is invalid or missing, DO NOT GUESS. Return "ERROR".
  
  JSON FORMAT:
  {
    "client": { "name": "...", "gender": "...", "year": 1990, "month": 1, "day": 1, "moonSign": "...", "dateStr": "1990.01.01" },
    "partner": { "name": "...", "gender": "...", "year": 1990, "month": 1, "day": 1, "moonSign": "...", "dateStr": "1990.01.01" }
  }
  `;
  
  try {
    const res = callGemini(prompt, key);
    const cleanJson = res.text.replace(/```json/g, "").replace(/```/g, "").trim();
    const data = JSON.parse(cleanJson);
    
    if (data.client.year < 1920 || data.partner.year < 1920) throw new Error("Invalid Year Detected");
    
    return { ...data, usage: res.usage };
  } catch (e) {
    console.error("AI Normalization Failed", e);
    throw new Error("Input Parsing Failed: " + e.message); 
  }
}

function calculateBasicAstrology(person) {
  const lp = calculateLifePath(person.year, person.month, person.day);
  const lpArchetype = CONFIG.LP_ARCHETYPES[lp.number] || "Тодорхойгүй";
  const sunSign = getSunSign(person.month, person.day);
  const sunArchetype = CONFIG.SUN_ARCHETYPES[sunSign] || "Тодорхойгүй";

  const tsDate = CONFIG.TSAGAAN_SAR_MAP[person.year] || "02-15";
  const [tsMonth, tsDay] = tsDate.split("-").map(Number);
  let lunarYear = person.year;
  if (person.month < tsMonth || (person.month === tsMonth && person.day < tsDay)) {
    lunarYear = person.year - 1;
  }
  
  const animals = ["Хулгана", "Үхэр", "Бар", "Туулай", "Луу", "Могой", "Морь", "Хонь", "Бич", "Тахиа", "Нохой", "Гахай"];
  const offset = (lunarYear - 1900) % 12;
  const animalIndex = offset < 0 ? offset + 12 : offset;
  const animalName = animals[animalIndex];

  return {
    lifePath: lp.number,
    lifePathArch: lpArchetype,
    sunSign: sunSign,
    sunArch: sunArchetype,
    animal: animalName,
    lunarYear: lunarYear
  };
}

function createProfileHeader(extracted, cData, pData) {
  const cAge = 2026 - extracted.client.year; // Age relative to 2026
  const pAge = 2026 - extracted.partner.year;
  
  // Logic to determine Gender Titles (Strict Enum Check)
  // Since AI is forced to return "MALE" or "FEMALE", we check strictly for "MALE".
  const cTitle = extracted.client.gender === "MALE" ? "👨 ЭРЭГТЭЙН ӨГӨГДӨЛ" : "👩 ЭМЭГТЭЙН ӨГӨГДӨЛ";
  const pTitle = extracted.partner.gender === "MALE" ? "👨 ЭРЭГТЭЙН ӨГӨГДӨЛ" : "👩 ЭМЭГТЭЙН ӨГӨГДӨЛ";

  return `
${cTitle}:
🎂 Төрсөн өдөр: ${extracted.client.dateStr} (${cAge} нас)
📅 Жил: ${cData.animal}
☀️ Нарны орд: ${cData.sunSign}
✨ Сүнсний тоо: ${cData.lifePath} (${cData.lifePathArch})

${pTitle}:
🎂 Төрсөн өдөр: ${extracted.partner.dateStr} (${pAge} нас)
📅 Жил: ${pData.animal}
☀️ Нарны орд: ${pData.sunSign}
✨ Сүнсний тоо: ${pData.lifePath} (${pData.lifePathArch})

`; // Blank lines at end for spacing
}

// ==========================================
// 2. REPORT GENERATION (BRIDGE ARCHITECTURE)
// ==========================================

function generateLoveReport(data, apiKey) {
  const SYSTEM_PROMPT = `
  ROLE: Master Relationship Astrologer.
  TONE: Empowering, Deep, Romantic, Authoritative.
  LANGUAGE: Proper Mongolian. NO English.
  STYLE: Use the provided "Gold Standard" text as a template.
  
  DATA:
  Client (${data.client.gender}): Sun ${data.client.sunSign}, Moon ${data.client.moonSign}, Сүнсний код ${data.client.lifePath}, Year ${data.client.animal}.
  Partner (${data.partner.gender}): Sun ${data.partner.sunSign}, Moon ${data.partner.moonSign}, Сүнсний код ${data.partner.lifePath}, Year ${data.partner.animal}.
  
  FORMATTING RULES:
  - NEVER use the abbreviation "LP". ALWAYS write "Сүнсний код".
  - Example: Instead of "LP 11", write "Сүнсний код 11".
  `;

  // --- CALL 1: PART 1 & 2 (Identity & Emotion) ---
  const prompt1 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 1 & PART 2.
  **IMPORTANT RULES:**
  1. START IMMEDIATELY with the title "**🎭 ХЭСЭГ 1: ГУРВАН ДАВХАРГА БУЮУ БАГ, ЗҮРХ, СҮНСНИЙ НЭГДЭЛ 🦁**".
  2. Use these sub-headers with Emojis:
     - 🛡️ **Нийгмийн дүр төрх...**
     - ❤️ **Сэтгэлийн зуршил...**
     - 🌱 **Жинхэнэ мөн чанар...**
     - 🔐 **ХЭСЭГ 2: СЭТГЭЛИЙН ТҮГЖЭЭ БА ТҮЛХҮҮР 🌊**
     - 🕊️ **Сэтгэлийн амар амгалан...**
     - 💔 **Эмзэг цэг...**
     - 🗝️ **Тайтгарлын хэл...**
  3. Write FULL content.
  
  REFERENCE STYLE:
  ${CONFIG.REFERENCES.FULL_TEXT.split("🔮")[0]}
  `;
  const res1 = callGemini(prompt1, apiKey);
  const bridge1 = res1.text.split('.').slice(-2).join('. ') + "."; 

  // --- CALL 2: PART 3 & 4 (Mind & Wealth) ---
  const prompt2 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 3 & PART 4.
  **IMPORTANT RULES:**
  1. START IMMEDIATELY with the title "**🔮 ХЭСЭГ 3: ОЮУН САНАА БА ҮЙЛИЙН ҮР 🌀**".
  2. Use these sub-headers with Emojis:
     - 🧠 **Сэтгэлгээний давтамж...**
     - 💞 **Заяаны хосын код...**
     - 📜 **Сүнсний даалгавар...**
     - 💎 **ХЭСЭГ 4: ХАМТЫН ХҮЧ БА БОДИТ БҮТЭЭМЖ 🔋**
     - ⚡ **Энергийн солилцоо...**
     - 💰 **Санхүүгийн код...** (USE THIS LOGIC: ${data.wealthText})
     - 🤝 **Хамтын бүтээл...**
  3. CONTEXT: The previous section ended with: "...${bridge1}".
  
  REFERENCE STYLE:
  ${CONFIG.REFERENCES.FULL_TEXT.split("🔐")[1].split("🧭")[0]}
  `;
  const res2 = callGemini(prompt2, apiKey);
  
  let text2 = res2.text;
  if (text2.includes(bridge1.trim())) text2 = text2.replace(bridge1.trim(), "").trim();
  const bridge2 = text2.split('.').slice(-2).join('. ') + ".";

  // --- CALL 3: PART 5 (Future) ---
  const prompt3 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 5.
  **IMPORTANT RULES:**
  1. START IMMEDIATELY with the title "**🧭 ХЭСЭГ 5: ИРЭЭДҮЙН ЛУУЖИН 📜**".
  2. Use these sub-headers with Emojis:
     - 🗺️ **Харилцааны гарын авлага...**
     - 📅 **Ойрын ирээдүйн прогноз...** (IMPORTANT: CURRENT YEAR IS 2026. Write forecast for 2026. Do NOT write 2025.)
     - 💌 **Эцсийн зөвлөмж...**
  3. CONTEXT: The previous section ended with: "...${bridge2}".
  
  REFERENCE STYLE:
  ${CONFIG.REFERENCES.FULL_TEXT.split("🧭")[1]}
  `;
  const res3 = callGemini(prompt3, apiKey);
  
  let text3 = res3.text;
  if (text3.includes(bridge2.trim())) text3 = text3.replace(bridge2.trim(), "").trim();

  return {
    text: data.headerHtml + res1.text + "\n\n" + text2 + "\n\n" + text3,
    usage: res1.usage + res2.usage + res3.usage
  };
}

// --- MATH HELPERS ---
function calculateLifePath(y, m, d) {
  const sumDigits = (n) => String(n).split('').reduce((a, b) => a + Number(b), 0);
  let sY = sumDigits(y); while (sY > 9 && sY !== 11 && sY !== 22 && sY !== 33) sY = sumDigits(sY);
  let sM = sumDigits(m); while (sM > 9 && sM !== 11) sM = sumDigits(sM);
  let sD = sumDigits(d); while (sD > 9 && sD !== 11 && sD !== 22) sD = sumDigits(sD);
  let total = sY + sM + sD;
  while (total > 9 && total !== 11 && total !== 22 && total !== 33) total = sumDigits(total);
  return { number: total };
}

function calculatePersonalYear(m, d, targetYear) {
  const sumDigits = (n) => String(n).split('').reduce((a, b) => a + Number(b), 0);
  let sM = sumDigits(m); while (sM > 9 && sM !== 11) sM = sumDigits(sM);
  let sD = sumDigits(d); while (sD > 9 && sD !== 11 && sD !== 22) sD = sumDigits(sD);
  let sUY = sumDigits(targetYear); while (sUY > 9) sUY = sumDigits(sUY);
  let total = sM + sD + sUY;
  while (total > 9) total = sumDigits(total);
  return total;
}

function determineWealthLogic(animal1, animal2) {
  for (let pair of CONFIG.SECRET_FRIENDS) {
    if ((pair.includes(animal1) && pair.includes(animal2))) return { type: "SECRET", code: "Нууц Ивээл ба Баялаг", text: CONFIG.WEALTH_TEXTS.SECRET };
  }
  for (let group of CONFIG.TRINES) {
    if (group.includes(animal1) && group.includes(animal2)) return { type: "TRINE", code: "Тогтвортой Өсөлт", text: CONFIG.WEALTH_TEXTS.TRINE };
  }
  for (let pair of CONFIG.CLASHES) {
    if ((pair.includes(animal1) && pair.includes(animal2))) return { type: "CLASH", code: "Тэсрэлттэй Хөдөлгүүр", text: CONFIG.WEALTH_TEXTS.CLASH };
  }
  return { type: "NEUTRAL", code: "Хөдөлмөрч Бүтээн Байгуулалт", text: CONFIG.WEALTH_TEXTS.NEUTRAL };
}

function getSunSign(m, d) {
  const dates = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
  const signs = ["Матар", "Хумх", "Загас", "Хонь", "Үхэр", "Ихэр", "Мэлхий", "Арслан", "Охин", "Жинлүүр", "Хилэнц", "Нум"];
  let index = m - 1;
  if (d > dates[index]) index = (index + 1) % 12;
  return signs[index];
}

// --- INFRASTRUCTURE ---
function callGemini(text, key, attempts = 3) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.GEMINI_MODEL}:generateContent?key=${key}`;
  const payload = {
    contents: [{ parts: [{ text: text }] }],
    generationConfig: { temperature: CONFIG.TEMPERATURE, maxOutputTokens: 8192 },
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" }, 
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }
    ]
  };
  const options = { method: "post", contentType: "application/json", payload: JSON.stringify(payload), muteHttpExceptions: true };
  
  for (let i = 0; i < attempts; i++) {
    try {
      const res = UrlFetchApp.fetch(url, options);
      const json = JSON.parse(res.getContentText());
      if (json.candidates && json.candidates[0].content) {
        let txt = json.candidates[0].content.parts[0].text;
        txt = txt.replace(/\*\*ХЭСЭГ \d:.*?\*\*/g, "").trim(); 
        return { text: txt, usage: json.usageMetadata ? json.usageMetadata.totalTokenCount : 0 };
      }
    } catch (e) {
      console.error(e);
    }
    Utilities.sleep(1000);
  }
  throw new Error("AI Generation Failed");
}

function createPdf(name, content, templateId) {
  const folderId = PropertiesService.getScriptProperties().getProperty("FOLDER_ID");
  const copy = DriveApp.getFileById(templateId).makeCopy(`${name} - Love Report`);
  const doc = DocumentApp.openById(copy.getId());
  const body = doc.getBody();
  
  body.replaceText("{{NAME}}", name); 
  body.replaceText("{{REPORT}}", content);
  processFormatting(body);

  const paragraphs = body.getParagraphs();
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].setLineSpacing(1.5);
    paragraphs[i].setAlignment(DocumentApp.HorizontalAlignment.JUSTIFY);
  }
  
  doc.saveAndClose();
  const pdf = copy.getAs(MimeType.PDF);
  const pdfFile = DriveApp.getFolderById(folderId).createFile(pdf); 
  pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  copy.setTrashed(true);
  return pdfFile.getUrl();
}

function processFormatting(body) {
  var foundElement = body.findText("\\*\\*(.*?)\\*\\*");
  while (foundElement != null) {
    var foundText = foundElement.getElement().asText();
    var start = foundElement.getStartOffset();
    var end = foundElement.getEndOffsetInclusive();
    foundText.setBold(start, end, true);
    foundText.deleteText(start, start + 1); 
    foundText.deleteText(end - 3, end - 2); 
    foundElement = body.findText("\\*\\*(.*?)\\*\\*");
  }
}

function sendManyChat(subscriberId, pdfUrl, name, token) {
  const msg = CONFIG.DELIVERY_MESSAGE.replace("{{NAME}}", name).replace("{{URL}}", pdfUrl);
  const url = "https://api.manychat.com/fb/sending/sendContent";
  const payload = { "subscriber_id": String(subscriberId).trim(), data: { version: "v2", content: { messages: [{ type: "text", text: msg }] } } };
  UrlFetchApp.fetch(url, { method: "post", headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" }, payload: JSON.stringify(payload), muteHttpExceptions: true });
}

/**
 * Calculates the Moon Sign based on date.
 * Assumes 12:00 PM (Noon) if no hour is provided.
 * Uses approximate astronomical algorithms suitable for astrology.
 * 
 * @param {number} year - The year (e.g., 1993)
 * @param {number} month - The month (1-12)
 * @param {number} day - The day of the month (1-31)
 * @param {number} hour - The hour (0-23), defaults to 12
 * @returns {string} The Mongolian name of the Moon Sign
 */
function calculateMoonSign(year, month, day, hour = 12) {
  // 1. Julian Day Calculation
  if (month <= 2) {
    year -= 1;
    month += 12;
  }
  
  const A = Math.floor(year / 100);
  const B = 2 - A + Math.floor(A / 4);
  const JD = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + B - 1524.5 + (hour / 24.0);

  // 2. Days since J2000.0
  const d = JD - 2451545.0;

  // 3. Moon Position Calculation (Mean Longitude & Corrections)
  const toRad = (deg) => deg * (Math.PI / 180);
  
  const L = 218.316 + 13.176396 * d;
  const M = 134.963 + 13.064993 * d;
  const F = 93.272 + 13.229350 * d;

  let l = L + 6.289 * Math.sin(toRad(M)) 
        - 1.274 * Math.sin(toRad(M - 2 * F)) 
        + 0.658 * Math.sin(toRad(2 * F)) 
        - 0.214 * Math.sin(toRad(2 * M)) 
        - 0.186 * Math.sin(toRad(M));

  l = l % 360;
  if (l < 0) l += 360;

  // 4. Determine Sign
  const signs = ["Хонь", "Үхэр", "Ихэр", "Мэлхий", "Арслан", "Охин", "Жинлүүр", "Хилэнц", "Нум", "Матар", "Хумх", "Загас"];
  const index = Math.floor(l / 30);

  return signs[index];
}
