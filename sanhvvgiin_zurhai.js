/****************************************************************************************
 * PRODUCT: DIGITAL ASTROLOGY REPORT GENERATOR (MONEY & KARMA EDITION)
 * VERSION: v17.9.2 - Money Code (ManyChat + Tsagaan Sar Fixed)
 * AUTHOR: Jules (Engine v17.8 + Money Logic v2.0 + ManyChat)
 * MODEL: gemini-2.5-flash
 ****************************************************************************************/

const CONFIG = {
  // --- SYSTEM CONFIGURATION ---
  VERSION: "v17.9.3-MoneyManyChat-Astrologer",
  PRODUCT_NAME: "Хувь Заяаны Алтан Түлхүүр: Эд Баялгийн Зурхай",
  SHEET_NAME: "Sheet1",
  BATCH_SIZE: 3, 
  GEMINI_MODEL: "gemini-2.5-flash", 
  TEMPERATURE: 0.7, 

  // --- COLUMN MAPPING (0-based Index) ---
  COLUMNS: {
    NAME: 0,      // A: User Name
    ID: 1,        // B: ManyChat Subscriber ID
    INPUT: 2,     // C: Raw Input String
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
  // 📜 GOLD STANDARD REFERENCE (MONEY & DESTINY REPORT)
  // ==================================================================================
  REFERENCES: {
    PART_1: `
    **ТЭРГҮҮН БҮЛЭГ: ТАНЫ ЗАЯА ТӨӨРГӨӨС ӨГӨГДСӨН ХИШИГ**
    👋 Эрхэм хүмүүн таны илгээсэн 1996 оны 10 дугаар сарын 30-ны өдөр хэмээх энэхүү цаг хугацааны тэмдэглэгээг бид зүгээр нэг тоо бус, харин Тэнгэр эрхсийн хөдөлгөөн, байгалийн хуулиар зохицуулагдсан Таны хувь заяаны зураглал хэмээн тольдон харж байна. Хүмүүн бид хорвоод мэндлэхдээ өөрийн гэсэн дахин давтагдашгүй өгөгдөл, хийж бүтээх үйл, туулах зам мөрөө тээн ирдэг жамтай билээ. Энэхүү тайлан нь танд өөрийн дотоод мөн чанараа таньж, заяа төөргөө зөв залахад тань туслах луужин болох учиртай.
    🔢 Таны заяа төөргөөс өгөгдсөн хишгийг тайлахын тулд бид нэн тэргүүнд "Амьдралын Замын Тоо"-г тооцоолдог уламжлалтай. Таны төрсөн 1996 оны нийлбэр (1+9+9+6=25), 10 дугаар сарын (1), 30-ны өдрийн (3) тоонуудыг нэгтгэн үзвэл 29 гэсэн тоо гарч байна. Зурхайн ухаанд эцсийн тоог нэг оронтой болтол нь хураадаг боловч, таны тохиолдолд 2 дээр 9-ийг нэмэхэд 11 хэмээх онцгой тоо урган гарч байна. Энэ бол энгийн тоо биш бөгөөд "Их Хүчит Тоо" буюу мастер тоо хэмээгддэг. Таны энэхүү тооцооллын үр дүн таныг эгэл жирийн нэгэн бус, харин төрөлхийн "Зөн Билэгтэн" буюу оюун санааны өндөр өгөгдөлтэй нэгэн болохыг илтгэж байна.
    ✨ 11-ийн тооны нөлөөгөөр та аливааг зөвхөн нүдээрээ бус, сэтгэл зүрх, зөн совингоороо мэдэрч хардаг онцгой чадвартай. Таны дотоод ертөнц баялаг, оюун санааны хүч асар их тул нэг хэвийн, уйтгартай ажил амьдрал таныг сэтгэлээр унагааж мэднэ. Та биеийн хүчээр бус, харин оюуны цараа, шинэ санаа, бусдад гэрэл гэгээ түгээх үйлээрээ эд баялгийг бүтээх учиртай хүмүүн юм.
    🔥 Үүн дээр нэмэгдээд Монгол зурхайн тооцооллоор 1996 оны Хулгана жил нь таныг ГАЛ махбодьтой болохыг баталж байна. Хулгана жилтэй хүмүүс төрөлхийн сэргэлэн, хуримтлуулах дуртай байдаг бол, Гал махбодь нь үүнийг улам бадрааж, танд зориг хатуужил, манлайлах чадварыг хайрлажээ. Та бол зүгээр нэг оч бус, харин дүрэлзэн асах Гал мэт эрч хүчтэй, бусдыг өөртөө татах увидастай нэгэн билээ.
    `,

    PART_2: `
    **ДЭД БҮЛЭГ: ТАНЫ ЗАН ЧАНАРЫН ГЭГЭЭ БА СҮҮДЭР**
    🌓 Аливаа зүйл хоёр талтай байж сая тэнцвэр тогтдог жамтай. Нар байхад сүүдэр бууж, өдөр байхад шөнө ээлжилдгийн адил, таны заяа төөрөгт ч бас Гэрэл буюу таныг өөд татах хүч, Сүүдэр буюу таныг сорьж буй сул талууд зэрэгцэн оршиж буй. Эдгээрийг таньж мэдсэнээр та амьдралынхаа жолоог зөв залж чадна.
    💡 Таны зан чанарын Гэрэл тал буюу хамгийн том давуу тал бол таны "Төрөлхийн Зөн Совин" юм. Таны шийдвэр гаргах үйл явц бусдаас өөр бөгөөд олон цагаар эргэцүүлж бодох бус, харин дотоод мэдрэмжээрээ "Энэ л зөв" хэмээн сонгосон зам тань ихэвчлэн онодог. Энэ бол таныг хамгаалж, зөв зүгт хөтөлдөг байгалийн өгөгдөл юм.
    🌑 Харин энэхүү гэрлийн цаана нуугдаж буй Сүүдэр тал бол сэтгэл санааны тогтворгүй байдал болон тэвчээр дутмаг зан байж мэднэ. Гал махбодийн нөлөөгөөр та аливааг маш эрч хүчтэй эхлүүлдэг ч, үр дүн нь удаашрах үед амархан шантрах, эсвэл өөр шинэ зүйл рүү үсчих хандлагатай байдаг. Нэг худгийг гүйцэд ухалгүй орхиж, өөр газар дахин шинээр эхлэх нь таны цаг хугацаа, энергийг үрэн таран хийх эрсдэлтэй.
    ⚖️ Энэхүү сүүдэр тал нь таныг буруутгах шалтгаан бус, харин танд өөрийнхөө энэ их галыг тогтоон барих "Тэнцвэр" дутагдаж байгааг сануулж буй хэрэг юм. Гал зуухан дотроо байхдаа гэр орныг дулаацуулдаг шиг, таны эрч хүч зөв голдирлоор урсаж байж сая амжилт дагуулна.
    `,

    PART_3: `
    **ГУТГААР БҮЛЭГ: ЭД БАЯЛГИЙГ ТОГТООХ САВНЫ ЦООРХОЙ**
    🔍 Бид өмнөх бүлгүүдэд таны төрөлхийн өгөгдөл болох их хүч, галан махбодийн тухай ярилцсан билээ. Тэгвэл одоо таны олсон хишиг буян яагаад тогтохгүй байна, эсвэл бодит үр дүн болохгүй байна вэ гэдгийг тоон зурхайн "Пифагорын Хүснэгт"-ээр шинжиж үзье. Таны төрсөн огнооны тоонуудыг байрлуулж харахад зарим тоонууд дутуу байгаа нь таны амьдралын барилгын суурь эсвэл хананд "Энергийн Цоорхой" үүссэнийг илтгэж байна.
    🏚️ Таны кодонд дутагдаж буй нэгэн чухал тоо бол "4"-ийн тоо юм. Зурхайн ухаанд 4-ийн тоо нь бат бөх суурь, эмх цэгц, тэвчээр хатуужлыг бэлгэддэг. Энэ тоо дутуу байна гэдэг нь таныг агуу их мөрөөдөл, шинэ санаагаар дүүрэн ч, түүнийгээ бодит амьдрал дээр хэрэгжүүлэх нарийн төлөвлөгөө, тууштай чанар дутагдаж буйг сануулж байна. Суурьгүй барилга ганхахын адил, төлөвлөгөөгүй санаа замхрах аюултай.
    💔 Түүнчлэн таны кодонд "2"-ын тоо дутуу байх магадлалтай байна. Энэ бол харилцаа, эв эе, мэдрэмжийг илэрхийлдэг тоо юм. Үүн дээр таны "Гал" махбодийн огцом түргэн занг нэмээд үзэхээр, энэ нь гэр бүлийн харилцаа болон хайр дурлалын тал дээр үл ойлголцол үүсгэх эрсдэлтэйг харуулж байна. "Гэр бүлийн амар амгалан" ба "Эд баялгийн тогтвортой байдал" хоёр нь хоорондоо нарийн сэжмээр холбоотой байдгийг санаарай.
    **ДӨТГӨӨР БҮЛЭГ: ИРЭЭДҮЙ ЦАГИЙН ОДОД (2026-2028)**
    ⏳ Цаг хугацаа бол зогсолтгүй эргэх хүрд билээ. Хүмүүн бидний амьдрал есөн жилийн давтамжтай мөчлөгөөр эргэлдэж байдаг бөгөөд одоо та яг аль улиралд нь явж байгаагаа мэдсэнээр ирээдүйгээ зөв төлөвлөх боломжтой. Тариа тарих цагаар тарьж, ургац хураах цагаар хураах нь байгалийн жам юм.
    🌪️ Таны хувьд ирэх 2026 он бол "Хувийн жилийн 5" дугаартай жил тохиож байна. Энэ жилийг "Өөрчлөлт ба Эрх чөлөө"-ний жил хэмээн нэрийдэж болно. Таны төрөлхийн өгөгдөлд энэ жил хүчтэй нөлөөлж, танд гэнэтийн аялалд явах, ажлаа солих, шинэ бизнес эхлүүлэх, эсвэл амьдрах орчноо өөрчлөх олон шинэ боломжууд үүд хаалгаа нээх болно.
    🏡 Харин үүний дараа 2027 онд та "Хувийн жилийн 6" дугаар руу шилжих болно. Өмнөх онд та гадуур гүйж, өөрчлөлт хийсэн бол энэ жил таныг "Гэр бүл, Үүрэг Хариуцлага, Хайр" гэсэн сэдвүүд хүлээж байна. Таны кодонд дутуу байсан "2-ын тоо"-ны орон зайг нөхөх, гэр бүлээ төвхнүүлэх, харилцаагаа бэхжүүлэх алтан боломж яг энэ жил ирэх болно.
    **ТӨГСГӨЛИЙН БҮЛЭГ: ЗАЯАГАА ТЭГШЛЭХ ЗАСАЛ БА ЕРӨӨЛ**
    🛠️ Ингээд бид таны хувь заяаны зургийг хамтдаа тольдон харлаа. Одоо танд тулгарч болзошгүй сорилтуудыг хэрхэн даван туулах, энергийн тэнцвэрийг хэрхэн хангах тухай "Засал"-ыг ярилцъя. Энэхүү засал нь шашны зан үйл гэхээсээ илүүтэй, байгалийн хуульд нийцүүлэн өөрийн дадал зуршлыг өөрчлөх ухаан юм.
    🎨 Эхний арга бол "Өнгөний Засал" юм. Та "Гал" махбодьтой хүн тул улаан өнгөнд татагддаг байж магадгүй ч, эд баялгийг тогтоохын тулд танд галыг улам асаах бус, харин галыг тогтоож барих "Газар Шороо"-ны энерги хэрэгтэй байна. Тиймээс таны эд баялгийн түлхүүр өнгө бол хүрэн бор, шаргал, болон гүн ногоон өнгөнүүд юм.
    💌 Төгсгөлд нь, хувь заяагаа гартаа атгасан Эрхэм танд "Мэргэн Зөвлөгч"-ийн зүгээс чин сэтгэлийн ерөөлөө өргөе. Од эрхэс танд замыг тань зааж өгөх боловч, тэрхүү замаар алхах эсэх нь зөвхөн таны сонголт билээ. Таны дотор буй гэрэл гэгээ хэзээд таныг зөв зүгт хөтлөх болтугай.
    `
  },

  // --- FULL DATA MAPS (NEW PRODUCT) ---
  
  LIFE_PATH_MAP: {
    1: "Удирдагч (The Leader)", 2: "Зуучлагч (The Diplomat)", 3: "Бүтээгч (The Creator)", 4: "Гүйцэтгэгч (The Builder)",
    5: "Аялагч (The Adventurer)", 6: "Халамжлагч (The Nurturer)", 7: "Шинжээч (The Seeker)", 8: "Эрх мэдэлтэн (The Executive)",
    9: "Нигүүлсэгч (The Humanitarian)", 11: "Зөн Билэгтэн (The Visionary) - Их Хүчит Тоо", 
    22: "Их Бүтээн байгуулагч (The Master Builder) - Их Хүчит Тоо", 33: "Их Багш (The Master Teacher) - Их Хүчит Тоо"
  },

  ELEMENT_MAP: {
    "Гал": "Дүрэлзсэн Гал", "Төмөр": "Ган Төмөр", "Ус": "Ундрах Ус", "Мод": "Ургах Мод", "Шороо": "Шимт Шороо"
  },
  
  ELEMENTS_BY_LAST_DIGIT: { 0: "Төмөр", 1: "Төмөр", 2: "Ус", 3: "Ус", 4: "Мод", 5: "Мод", 6: "Гал", 7: "Гал", 8: "Шороо", 9: "Шороо" },
  
  // 🗓️ TSAGAAN SAR MAP (1940-2025) - 🔥 ADDED FOR ACCURACY
  TSAGAAN_SAR: {
    1940: "02-08", 1941: "01-27", 1942: "02-15", 1943: "02-05", 1944: "02-24",
    1945: "02-13", 1946: "02-02", 1947: "01-22", 1948: "02-10", 1949: "01-29",
    1950: "02-17", 1951: "02-06", 1952: "01-27", 1953: "02-14", 1954: "02-03",
    1955: "02-24", 1956: "02-12", 1957: "01-31", 1958: "02-18", 1959: "02-08",
    1960: "02-27", 1961: "02-15", 1962: "02-05", 1963: "02-25", 1964: "02-13",
    1965: "02-02", 1966: "02-21", 1967: "02-09", 1968: "01-30", 1969: "02-17",
    1970: "02-06", 1971: "02-27", 1972: "02-15", 1973: "02-06", 1974: "02-23",
    1975: "02-11", 1976: "01-31", 1977: "02-18", 1978: "02-07", 1979: "02-28",
    1980: "02-16", 1981: "02-05", 1982: "02-24", 1983: "02-13", 1984: "02-02",
    1985: "02-20", 1986: "02-09", 1987: "01-29", 1988: "02-17", 1989: "02-06",
    1990: "02-27", 1991: "02-15", 1992: "02-04", 1993: "02-23", 1994: "02-10",
    1995: "01-31", 1996: "02-19", 1997: "02-07", 1998: "02-28", 1999: "02-16",
    2000: "02-05", 2001: "02-24", 2002: "02-12", 2003: "02-01", 2004: "02-22",
    2005: "02-09", 2006: "01-29", 2007: "02-18", 2008: "02-07", 2009: "02-25",
    2010: "02-14", 2011: "02-03", 2012: "02-22", 2013: "02-11", 2014: "01-31",
    2015: "02-19", 2016: "02-09", 2017: "02-27", 2018: "02-16", 2019: "02-05",
    2020: "02-24", 2021: "02-12", 2022: "02-02", 2023: "02-21", 2024: "02-10",
    2025: "02-28" 
  },

  MISSING_NUM_MAP: {
    1: "Өөрийн үзэл бодлыг чөлөөтэй илэрхийлж, бусдад 'Үгүй' гэж хэлж сурах хэрэгтэй. Бие даасан байдал, манлайлал дутагдаж байна.",
    2: "Бусдын оронд өөрийгөө тавьж, мэдрэмжтэй харилцах, багаар ажиллах чадварт суралцах шаардлагатай.",
    3: "Амьдралыг хэт хуурай, логикоор харахаа боль. Төсөөлөн бодох чадвар, бүтээлч сэтгэлгээгээ хөгжүүл.",
    4: "Ажил амьдралдаа эмх цэгц, нарийн төлөвлөгөөг эрхэмлэ. Аливааг заавал дуустал нь хийх тэвчээрт суралц.",
    5: "Өөрчлөлтөөс бүү ай. Шинэ зүйл туршиж, хуучин хэв маягаасаа салж, уян хатан байх нь танд боломж авчирна.",
    6: "Гэр бүл, дотны хүмүүстээ цаг гарга. Хариуцлагаас зугтах биш, түүнийг үүрч, бусдыг халамжилж сур.",
    7: "Дотоод сэтгэлээ сонс. Материаллаг зүйлээс гадна оюун санааны хөгжилдөө анхаарч, аливааг гүнзгий судал.",
    8: "Санхүүгийн сахилга бат, мөнгөний менежментэд зориуд суралц. Мөнгөнд хэт хэнэггүй хандаж, боломжийг алдахаас сэргийл.",
    9: "Бусдыг энэрч, өгөөмөр бай. Зөвхөн өөрийгөө бодох нь таны амжилтыг хязгаарлана. Нийгэмд тустай үйл хий."
  },

  PERSONAL_YEAR_MAP: {
    1: "Шинэ Эхлэл ба Үр Тарих. Энэ жил бол таны амьдралын шинэ мөчлөгийн эхлэл. Хуучин зүйлсээ ард үлдээж, цоо шинэ төсөл, ажил эхлүүлэхэд хамгийн таатай цаг. Өөртөө итгэлтэйгээр хөрөнгө оруулалт хийх, шинэ бизнес эхлүүлэх, тушаал дэвших хүсэлт гаргахад тохиромжтой. Таны тарьсан үр ирэх 9 жилийн турш ургана гэдгийг санаарай. Зоригтой бай.",
    2: "Хамтын Ажиллагаа ба Тэвчээр. Энэ жил аливаа зүйл бага зэрэг удаашралтай мэт санагдаж магадгүй ч, энэ нь үндсээ бэхжүүлэх цаг юм. Ганцаараа зүтгэх биш, бусадтай хамтрах жил. Гэрээ хэлцэл, түншлэлд анхаар. Мөнгөө эрсдэлтэй зүйлд хийхээс зайлсхийж, хадгаламжаа зузаатга. Дипломат харилцаа танд мөнгө авчирна. Тэвчээртэй байж, жижиг зүйлсэд анхаар.",
    3: "Бүтээлч Байдал ба Тэлэлт. Нийгмийн идэвх сэргэж, өөрийгөө илэрхийлэх, олон танилтай болох жил. Эрч хүчээр дүүрэн, хөгжилтэй цаг үе. Маркетинг, PR, олон нийттэй харилцах ажилд амжилт олно. Гэхдээ сэтгэл хөдлөлөөр их мөнгө үрэх, тансаг хэрэглээнд хэт автах эрсдэлтэй тул санхүүгийн сахилга баттай байгаарай.",
    4: "Хөдөлмөр ба Суурь Бэхжүүлэх. Энэ жил танаас шаргуу хөдөлмөр, эмх цэгц шаардана. 'Ажил, ажил, бас дахин ажил' гэсэн уриатай жил. Тогтвортой байдлыг бий болгоно. Үл хөдлөх хөрөнгө худалдаж авах, байшин барих, урт хугацааны төлөвлөгөө гаргахад таатай. Эрсдэлтэй алхам хийх хэрэггүй. Зөвхөн бодит, баталгаатай зүйлд мөнгөө хий.",
    5: "Өөрчлөлт ба Эрх Чөлөө. Гэнэтийн өөрчлөлтүүдээр дүүрэн жил. Аялал зугаалга, нүүдэл суудал, ажлын байраа солих зэрэг хөдөлгөөн ихтэй байна. Шинэ зах зээл, шинэ боломжуудыг эрэлхийл. Худалдаа наймаа, гадаад харилцаанд ашигтай. Гэхдээ мөнгө орж ирэхийн хэрээр хурдан гарах магадлалтай тул урсгалаа хянаарай.",
    6: "Хариуцлага ба Гэр Бүл. Гэр бүл, орон гэр, хайр дурлалын асуудал нэгдүгээрт тавигдана. Бусдын өмнө хариуцлага хүлээх, үйлчилгээ үзүүлэх жил. Гэрээ тохижуулах, гэр бүлийн гишүүдэд туслахад зарлага гарч магадгүй. Гэхдээ тогтвортой, найдвартай эх үүсвэрээс орлого орно. Урлаг, гоо сайхан, үйлчилгээний салбарт ээлтэй.",
    7: "Дотоод Шинжилгээ ба Суралцах. Өөрийгөө сонсох, ганцаараа байх, суралцах, судалгаа хийх жил. Материаллаг ертөнцөөс түр хөндийрч, оюун санаагаа цэнэглэх үе. Энэ жил бизнесээ огцом тэлэх гэж зүтгээд хэрэггүй. Түүний оронд мэргэжлийн ур чадвараа дээшлүүлж, ирээдүйн том төсөлдөө бэлд. Мөнгөний хойноос хөөцөлдөх тусам холдоно, харин мэдлэг хөөвөл мөнгө дагана.",
    8: "Эрх Мэдэл ба Ургац Хураалт. Санхүүгийн хувьд хамгийн хүчирхэг жил. Таны өнгөрсөн жилүүдэд хийсэн хөдөлмөрийн үр шим, шагнал ирнэ. Карьерын оргил үе. Том хэмжээний гэрээ хийх, бизнесээ өргөжүүлэх, хөрөнгө оруулалт хийхэд хамгийн тохиромжтой. Та удирдлагыг гартаа авч, зоригтой алхам хийх ёстой. Мөнгөний урсгал дээд цэгтээ хүрнэ.",
    9: "Төгсгөл ба Цэвэрлэгээ. 9 жилийн мөчлөгийн сүүлийн жил. Дуусгаагүй ажлаа дуусгах, хэрэггүй зүйлсээс (муу зуршил, ашиггүй харилцаа) салах жил. Шинэ мөчлөгт бэлдэх үе. Өр зээлээ барагдуулж, тооцоогоо цэгцэл. Шинэ том бизнес эхлүүлэхэд тийм ч таатай биш. Харин буяны үйл хийх, бусдад өгөх нь ирэх жилүүдийн замыг засдаг."
  },

  REMEDY_MAP: {
    "Ус": {
      metaphor: "Ус хэт ихдвэл Үер болж, замбараагүй урсаж бүхнийг сүйтгэх эрсдэлтэй байдаг. Үерийг зөвхөн Мод л үндсээрээ шингээж, тогтоон барьж, тэр их энергийг Өсөлт, Үр жимс болгон хувиргадаг байгалийн хуультай. Тиймээс таны мөнгөний урсгалд Модны энерги буюу бүтэц зайлшгүй хэрэгтэй.",
      usage: "Ногоон болон Цайвар цэнхэр зэрэг модны өнгөнүүд. Мөнгөө хадгалдаг саваа буюу түрийвчээ ногоон эсвэл гүн цэнхэр өнгөтэй болгох нь чухал. Ажлын ширээн дээрээ заавал амьд ургамал тавьж, усаа модоор тэжээж байх хэрэгтэй. Чухал гэрээ хэлцэл, мөнгөний ажил хөөцөлдөхдөө ногоон туяатай хувцас эсвэл чулуун зүүлт зүүгээрэй."
    },
    "Гал": {
      metaphor: "Гал хэт ихдвэл түймэр болж, хяналтгүй шатдаг аюултай. Галыг зөвхөн Шороо буюу Газар л тогтоон барьж, Тулга болж өгдөг. Тулганд байгаа гал л хоол хийж, дулаацуулж, ашиг тусаа өгдөг. Өөрөөр хэлбэл, таны дүрэлзсэн их энергийг Газар шиг тогтвортой байдал л мөнгө болгож хувиргана.",
      usage: "Шар, Бор, Шаргал зэрэг шороон өнгөнүүд. Түрийвчээ бор арьсан эсвэл шаргал өнгөтэй сонгох нь таны мөнгийг Тулга мэт хадгална. Ажлын өрөөндөө керамик, шавар эдлэл, байгалийн чулуу байршуулах нь таны огцом шийдвэрүүдийг зөөлрүүлж, орлогыг тогтворжуулна."
    },
    "Мод": {
      metaphor: "Мод хэт ихдвэл ширэнгэ ой болж, нарны гэрлийг хааж, дотроосоо өмхөрч эхэлдэг. Модны энергийг Гал буюу Илч гэрэл л идэвхжүүлж, түүнийг хүмүүст хэрэгтэй Дулаан, Гэрэл гэгээ болгон хувиргадаг. Таны мөнгөний урсгал зогсонги байдалд орохгүйн тулд танд Гал шиг хурд, тод байдал хэрэгтэй.",
      usage: "Улаан, Ягаан, Улбар шар зэрэг галын өнгөнүүд. Мөнгөө улаан өнгийн дугтуй эсвэл улаан туяатай түрийвчинд хадгалах нь орлогыг идэвхжүүлнэ. Гэрийнхээ зүүн урд зүгт буюу Мөнгөний зүгт лаа асаах, эсвэл тод гэрэлтүүлэг, улаан өнгийн чимэглэл тавих нь таны санхүүгийн гацааг арилгана."
    },
    "Төмөр": {
      metaphor: "Төмөр бол хатуу, хүйтэн, хөдөлгөөнгүй энерги. Ус байхгүй бол төмөр зэвэрч, эсвэл хэт хатуураад хугардаг. Ус л төмрийг угааж өнгө оруулж, бас уян хатан чанарыг нэмж Урсгал оруулдаг. Таны санхүүгийн хатуу зарчмуудыг усны уян хатан чанар л баяжуулж чадна.",
      usage: "Хар, Хөх, Гүн цэнхэр зэрэг усны өнгөнүүд. Хар өнгийн түрийвч нь төмөр махбодьтой хүнд хамгийн сонгодог, баялаг дуудах хэрэгсэл болдог. Ажлын ширээн дээрээ жижиг усан оргилуур, аквариум, эсвэл тунгалаг шилэн эдлэл байршуулах нь таны мөнгөний урсгалыг тасралтгүй эргэлдүүлнэ."
    },
    "Шороо": {
      metaphor: "Шороо буюу Газар нь дангаараа бол зүгээр л хөрс юм. Түүний үнэ цэнэ нь дотор нь нуугдсан Төмөр буюу Алт Эрдэнэсээ ил гаргах үед л тогтдог. Хэрэв та шороо махбодьтой бол өөрийгөө ухаж, дотроосоо үнэ цэнийг гаргаж ирэхэд Төмрийн хурц, тодорхой энерги тусална.",
      usage: "Цагаан, Саарал, Мөнгөлөг, Алтлаг зэрэг төмөр өнгөнүүд. Цагаан болон мөнгөлөг өнгийн түрийвч, картны сав хэрэглэх. Мөн биедээ алт, мөнгөн гоёл чимэглэл, цаг зүүх нь таны Шороо энергийг үнэт эрдэнэс болгон хувиргаж, мөнгө дуудах хамгийн хүчтэй арга болно."
    }
  },

  DELIVERY_MESSAGE: `Сайн байна уу? 🔮\n\nТаны "Хувь Заяаны Алтан Түлхүүр: Эд Баялгийн Зурхай" тайлан бэлэн боллоо.\n\nФайл: {{URL}}\n\n(Татаж аваад хадгалаарай)`,
};

// --- MAIN FUNCTION ---
function main() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return;

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  const rows = sheet.getDataRange().getValues();
  const KEYS = {
    GEMINI: PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY"),
    MANYCHAT: PropertiesService.getScriptProperties().getProperty("MANYCHAT_API_TOKEN"), // 🔥 CHANGED TO TOKEN
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
        const profile = parseAndCalculateProfile(inputString, KEYS.GEMINI);
        const reportResult = generateSequentialReport(profile, KEYS.GEMINI);
        const pdfUrl = createPdf(profile.name || "User", reportResult.text, KEYS.TEMPLATE);
        
        // 🔥 CHANGED TO sendManyChat
        sendManyChat(row[CONFIG.COLUMNS.ID], pdfUrl, profile.name || "Erhem", KEYS.MANYCHAT);

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
// 1. CORE LOGIC ENGINE (MONEY & KARMA LOGIC)
// ==========================================

function parseAndCalculateProfile(rawInput, apiKey) {
  // 1. Parse Input
  const normalized = normalizeInputWithAI(rawInput, apiKey);
  const dateStr = normalized.date; 
  const gender = normalized.gender; 
  const name = normalized.name || "Erhem";
  const [year, month, day] = dateStr.split(".").map(Number);
  
  // 2. Core Calculations
  const lifePath = calculateLifePath(year, month, day);
  
  // 🔥 UPDATED: USE TSAGAAN SAR LOGIC FOR ACCURACY
  const mongolData = getMongolianYearData(year, month, day);
  const elementRaw = mongolData.elementRaw; 
  const elementName = CONFIG.ELEMENT_MAP[elementRaw];
  
  const missingNumbers = calculateMissingNumbers(year, month, day);
  
  // 3. Personal Year Calculation (Based on 2026 Base Year as requested)
  // Calculate for 2026
  const py1 = calculatePersonalYear(month, day, 2026);
  const py2 = calculatePersonalYear(month, day, 2027);
  const py3 = calculatePersonalYear(month, day, 2028);
  
  const remedy = CONFIG.REMEDY_MAP[elementRaw];
  
  // 4. Map Data & Grid Display
  const lpName = CONFIG.LIFE_PATH_MAP[lifePath.number] || "Unknown";
  
  // Grid string for Report (Visual transparency)
  const allDigits = `${year}${month}${day}`.split("").join(", ");
  const gridDisplay = `[ ${allDigits} ]`;

  const missingText = missingNumbers.length > 0 
    ? missingNumbers.map(n => `**${n}-ийн тоо дутуу:** ${CONFIG.MISSING_NUM_MAP[n]}`).join("\n\n")
    : "Таны кодонд бүх тоо тэнцвэртэй байна.";

  return {
    dob: dateStr,
    year: year,
    gender: gender,
    name: name,
    parsingUsage: normalized.usage,
    
    lifePath: lifePath.number,
    lifePathCalc: lifePath.calculation,
    lifePathName: lpName,
    
    element: elementName,
    rawElement: elementRaw,
    
    missingNumbers: missingNumbers.join(", "),
    missingNumbersText: missingText,
    gridDisplay: gridDisplay,
    
    // Personal Years
    py1: py1,
    py1Text: CONFIG.PERSONAL_YEAR_MAP[py1],
    py2: py2,
    py2Text: CONFIG.PERSONAL_YEAR_MAP[py2],
    py3: py3,
    py3Text: CONFIG.PERSONAL_YEAR_MAP[py3],
    
    remedyMetaphor: remedy.metaphor,
    remedyUsage: remedy.usage
  };
}

// 🔥 ADDED: TSAGAAN SAR LOGIC FUNCTION
function getMongolianYearData(year, month, day) {
  const tsDate = CONFIG.TSAGAAN_SAR[year];
  
  // Default to Gregorian if year not in map (should be rare given 1940-2025 range)
  if (!tsDate) {
    return { elementRaw: CONFIG.ELEMENTS_BY_LAST_DIGIT[year % 10] };
  }
  
  const [tsMonth, tsDay] = tsDate.split("-").map(Number);
  
  let trueYear = year;
  
  // Check if DOB is BEFORE Tsagaan Sar
  if (month < tsMonth || (month === tsMonth && day < tsDay)) {
    trueYear = year - 1;
  }
  
  const elementRaw = CONFIG.ELEMENTS_BY_LAST_DIGIT[trueYear % 10];
  return { elementRaw: elementRaw };
}

function calculateMissingNumbers(y, m, d) {
  const allDigits = `${y}${m}${d}`.split("");
  const present = new Set(allDigits.map(Number));
  const missing = [];
  for (let i = 1; i <= 9; i++) {
    if (!present.has(i)) missing.push(i);
  }
  return missing;
}

function calculatePersonalYear(m, d, currentYear) {
  const sumDigits = (n) => String(n).split('').reduce((a, b) => a + Number(b), 0);
  let total = sumDigits(currentYear) + sumDigits(m) + sumDigits(d);
  while (total > 9) {
    total = sumDigits(total);
  }
  return total;
}

function calculateLifePath(y, m, d) {
  const sumDigits = (n) => String(n).split('').reduce((a, b) => a + Number(b), 0);
  const dateString = `${y}${m < 10 ? '0'+m : m}${d < 10 ? '0'+d : d}`;
  let total = dateString.split("").reduce((a, b) => a + Number(b), 0);
  const initialSum = total;
  while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
    total = sumDigits(total);
  }
  const calcStr = `${y}.${m}.${d} -> ${initialSum} -> ${total}`;
  return { number: total, calculation: calcStr };
}

function normalizeInputWithAI(raw, key) {
  const prompt = `
  TASK: Normalize this input data for an Astrology App.
  INPUT: "${raw}"
  INSTRUCTIONS:
  1. Extract Date: Convert to YYYY.MM.DD.
  2. Extract Gender: "Эрэгтэй"/"Эмэгтэй". Default "Эмэгтэй".
  3. Extract Name: If present.
  
  RETURN JSON ONLY: {"date": "YYYY.MM.DD", "gender": "Эрэгтэй", "name": "Name"}
  `;
  try {
    const result = callGemini(prompt, key);
    const cleanJson = result.text.replace(/```json/g, "").replace(/```/g, "").trim();
    const data = JSON.parse(cleanJson);
    if (!data.date) throw new Error("No date");
    return { ...data, usage: result.usage };
  } catch (e) {
    const dateMatch = raw.match(/(\d{4})[\.\-\s\/](\d{1,2})[\.\-\s\/](\d{1,2})/);
    return {
      date: dateMatch ? `${dateMatch[1]}.${dateMatch[2]}.${dateMatch[3]}` : "2000.01.01",
      gender: "Эмэгтэй",
      name: "Erhem",
      usage: 0
    };
  }
}

// ==========================================
// 2. SEQUENTIAL GENERATION (5-PART STRUCTURE)
// ==========================================

function generateSequentialReport(data, apiKey) {
  const SYSTEM_PROMPT = `
  ROLE: Astrologer & Wise Mentor (Zurai, Destiny Guide).
  TONE: Calm, Respectful, Traditional, Warm, Spiritual.
  STYLE: No bullet points. Full essay paragraphs. Use emojis (🌓, 💡, 🌑, ⚖️, 🔍, 🏚️, 💔, ⚡️, ⏳, 🌪️, 🏡, 🧘, 🛠️, 🎨, 💌) at start of paragraphs only.
  LANGUAGE: Proper Mongolian. NO English words.
  KEYWORDS: Од эрхэс, Заяа төөрөг, Байгаль дэлхий, Урсгал, Тэнцвэр, Хишиг.
  `;

  // --- PART 1: MONEY CODE ---
  const prompt1 = `
  ${SYSTEM_PROMPT}
  TASK: Write **ТЭРГҮҮН БҮЛЭГ: ТАНЫ ЗАЯА ТӨӨРГӨӨС ӨГӨГДСӨН ХИШИГ**.
  DATA:
  - DOB: ${data.dob}
  - Life Path: ${data.lifePath} (${data.lifePathName})
  - Element: ${data.element}
  
  INSTRUCTIONS:
  - Start with "**ТЭРГҮҮН БҮЛЭГ: ТАНЫ ЗАЯА ТӨӨРГӨӨС ӨГӨГДСӨН ХИШИГ**" (Hardcoded).
  - Explain the Date of Birth as a "Destiny Map" (Заяа төөргийн зураг).
  - Explain Life Path ${data.lifePath} calculation (${data.lifePathCalc}). If 11/22/33, emphasize Master Number power.
  - Explain Element ${data.element} and its traits.
  
  REFERENCE STYLE:
  ${CONFIG.REFERENCES.PART_1}
  `;
  const r1 = callGemini(prompt1, apiKey);

  // --- PART 2: SHADOW & LIGHT ---
  const prompt2 = `
  ${SYSTEM_PROMPT}
  TASK: Write **ДЭД БҮЛЭГ: ТАНЫ ЗАН ЧАНАРЫН ГЭГЭЭ БА СҮҮДЭР**.
  DATA:
  - LP: ${data.lifePath} (${data.lifePathName})
  - Element: ${data.element}
  
  INSTRUCTIONS:
  - Start with "**ДЭД БҮЛЭГ: ТАНЫ ЗАН ЧАНАРЫН ГЭГЭЭ БА СҮҮДЭР**".
  - Light: How ${data.lifePathName} and ${data.element} attract wealth (Superpower).
  - Shadow: The downside (Impatience, Overthinking).
  - Conclusion: "Seek balance to contain the fire."
  
  REFERENCE STYLE:
  ${CONFIG.REFERENCES.PART_2}
  `;
  const r2 = callGemini(prompt2, apiKey);

  // --- PART 3: KARMIC GAP ---
  const prompt3 = `
  ${SYSTEM_PROMPT}
  TASK: Write **ГУТГААР БҮЛЭГ: ЭД БАЯЛГИЙГ ТОГТООХ САВНЫ ЦООРХОЙ**.
  DATA:
  - Visual Grid: ${data.gridDisplay}
  - Missing Numbers: ${data.missingNumbers}
  - Explanations: ${data.missingNumbersText}
  
  INSTRUCTIONS:
  - Start with "**ГУТГААР БҮЛЭГ: ЭД БАЯЛГИЙГ ТОГТООХ САВНЫ ЦООРХОЙ**".
  - Display the Grid first: "Таны төрсөн огнооны тоон сүлжээ: ${data.gridDisplay}".
  - Explain "Missing numbers are energy gaps in your destiny container."
  - Use the provided Explanations for ${data.missingNumbers}.
  
  REFERENCE STYLE:
  ${CONFIG.REFERENCES.PART_3}
  `;
  const r3 = callGemini(prompt3, apiKey);

  // --- PART 4: TIME WHEEL (2026-2028) ---
  const prompt4 = `
  ${SYSTEM_PROMPT}
  TASK: Write **ДӨТГӨӨР БҮЛЭГ: ИРЭЭДҮЙ ЦАГИЙН ОДОД (2026-2028)**.
  DATA:
  - 2026: Personal Year ${data.py1} -> "${data.py1Text}"
  - 2027: Personal Year ${data.py2} -> "${data.py2Text}"
  - 2028: Personal Year ${data.py3} -> "${data.py3Text}"
  
  INSTRUCTIONS:
  - Start with "**ДӨТГӨӨР БҮЛЭГ: ИРЭЭДҮЙ ЦАГИЙН ОДОД (2026-2028)**".
  - Forecast 2026, 2027, 2028.
  - MUST use format: "**2026 он (Хувийн жил ${data.py1})**: ..."
  - Focus on destiny cycles and seasons of life.
  `;
  const r4 = callGemini(prompt4, apiKey);

  // --- PART 5: REMEDY & CLOSING ---
  const prompt5 = `
  ${SYSTEM_PROMPT}
  TASK: Write **ТӨГСГӨЛИЙН БҮЛЭГ: ЗАЯАГАА ТЭГШЛЭХ ЗАСАЛ БА ЕРӨӨЛ**.
  DATA:
  - Element: ${data.rawElement}
  - Metaphor: ${data.remedyMetaphor}
  - Usage: ${data.remedyUsage}
  
  INSTRUCTIONS:
  - Start with "**ТӨГСГӨЛИЙН БҮЛЭГ: ЗАЯАГАА ТЭГШЛЭХ ЗАСАЛ БА ЕРӨӨЛ**".
  - Color Therapy: Use the exact Metaphor and Usage provided.
  - Habits: "Write down ideas" and "24-hour rule".
  - Closing: Warm, spiritual blessing from the Wise Mentor.
  `;
  const r5 = callGemini(prompt5, apiKey);

  return {
    text: r1.text + "\n\n" + r2.text + "\n\n" + r3.text + "\n\n" + r4.text + "\n\n" + r5.text,
    usage: r1.usage + r2.usage + r3.usage + r4.usage + r5.usage
  };
}

function callGemini(text, key) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.GEMINI_MODEL}:generateContent?key=${key}`;
  const payload = {
    contents: [{ parts: [{ text: text }] }],
    generationConfig: { temperature: CONFIG.TEMPERATURE, maxOutputTokens: 8192 }
  };
  const options = { method: "post", contentType: "application/json", payload: JSON.stringify(payload), muteHttpExceptions: true };
  
  try {
    const res = UrlFetchApp.fetch(url, options);
    const json = JSON.parse(res.getContentText());
    if (json.candidates) {
      let txt = json.candidates[0].content.parts[0].text;
      return { text: txt.trim(), usage: json.usageMetadata ? json.usageMetadata.totalTokenCount : 0 };
    }
  } catch (e) { console.error(e); }
  return { text: "Error generating part.", usage: 0 };
}

function createPdf(name, content, templateId) {
  const folderId = PropertiesService.getScriptProperties().getProperty("FOLDER_ID");
  const copy = DriveApp.getFileById(templateId).makeCopy(`${name} - Money Code Report`);
  const doc = DocumentApp.openById(copy.getId());
  const body = doc.getBody();
  
  body.replaceText("{{NAME}}", name); 
  body.replaceText("{{REPORT}}", content);
  
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

  doc.saveAndClose();
  const pdf = copy.getAs(MimeType.PDF);
  const pdfFile = DriveApp.getFolderById(folderId).createFile(pdf); 
  pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  copy.setTrashed(true);
  return pdfFile.getUrl();
}

// -----------------------------------------------------------
// 🚀 MANYCHAT INTEGRATION (STRICTLY FROM PROVEN SNIPPET)
// -----------------------------------------------------------
function sendManyChat(subscriberId, pdfUrl, name, token) {
  const msg = CONFIG.DELIVERY_MESSAGE.replace("{{URL}}", pdfUrl);
  const url = "https://api.manychat.com/fb/sending/sendContent";
  const payload = { "subscriber_id": String(subscriberId).trim(), data: { version: "v2", content: { messages: [{ type: "text", text: msg }] } } };
  UrlFetchApp.fetch(url, { method: "post", headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" }, payload: JSON.stringify(payload), muteHttpExceptions: true });
}
