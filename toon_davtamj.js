/**
 * PRODUCT: DIGITAL SOUL CONTRACT GENERATOR (GOLD STANDARD EDITION)
 * VERSION: v18.0 - Karmic Code & Soul Archetypes (UChat Integrated)
 * AUTHOR: Jules (Strict Adherence to User Requirements)
 * MODEL: gemini-2.5-flash
 * NOTE: NO TOKEN SAVING. QUALITY FIRST. FULL TEXT HARDCODED.
 ****************************************************************************************/

const CONFIG = {
  // --- SYSTEM CONFIGURATION ---
  VERSION: "v18.0-SoulContract-Gold",
  PRODUCT_NAME: "Сүнсний Гэрээ Тайлан",
  SHEET_NAME: "Sheet1",
  BATCH_SIZE: 3, 
  GEMINI_MODEL: "gemini-2.5-flash", 
  TEMPERATURE: 0.7, 

  // --- COLUMN MAPPING (0-based Index) ---
  COLUMNS: {
    NAME: 0,      // A: User Name
    ID: 1,        // B: Subscriber ID (UChat user_ns)
    INPUT: 2,     // C: Raw Input String
    PDF: 3,       // D: Output PDF URL
    STATUS: 4,    // E: Processing Status
    TOKEN: 5,     // F: Token Usage (Total)
    DEBUG: 6,     // G: Debug Data (JSON)
    DATE: 7,      // H: Timestamp
    VER: 8,       // I: Version Tag
    ERROR: 9      // J: Error Message
  },

  MAX_EXECUTION_TIME: 360000, // 6 Minutes
  SAFETY_BUFFER: 60000,       // 1 Minute buffer

  // ==================================================================================
  // 📜 GOLD STANDARD REFERENCE (FULL UNABRIDGED TEXT)
  // ==================================================================================
  REFERENCES: {
    PART_1: `
    **I ХЭСЭГ: ҮЙЛИЙН ҮРИЙН ТООЦООЛОЛ БА СҮНСНИЙ КОД 🌌**
    
    **📜 Сүнсний аялал эхэлсэн цаг хугацаа**
    1996 оны 10 дугаар сарын 30. Энэ бол зүгээр нэг хуанлийн өдөр биш, харин таны сүнс махбодийн аялалд гарах гэрээгээ байгуулсан онцгой мөч юм. Таны энэ ертөнцөд тээж ирсэн "Ачаа" буюу даалгаврыг тайлах түлхүүр яг энэ тоонуудын чичирхийлэлд нуугдсан байдаг. Бид орчлонгийн энергийн хуулиар тоонуудыг задалж үзвэл таны төрсөн 1996 оны нийлбэр "7"-г буюу урьд насны мэдлэгийг, 10-р сар "1"-ийг буюу шинэ эхлэлийг, 30-ны өдөр "3"-ыг буюу өөрийгөө илэрхийлэх чадварыг тус тус илтгэж байна. Энэ гурвын нэгдэл нь ховор тохиох 11 хэмээх "Мастер хүч"-ийг үүсгэж байна. Энэ бол энгийн нэг тоо биш. Хэрэв өөр энгийн тоо байсан бол бид задалж болох байсан ч, 11 нь задрахгүйгээр шууд дээд ертөнцтэй холбогддог. Энэ нь таныг "Сүнсний Гэгээрүүлэгч"-ийн хүндтэй бөгөөд хариуцлагатай үүрэгтэй ирснийг баталж байна.
    
    **🐉 Сүнсний Хуяг: Гал ба Хулгана**
    Таны сүнс энэ амьдралын хатуу ширүүнийг туулахын тулд "Гал" махбодийг өөрийн хуяг болгон сонгожээ. Гал бол дүрэлзсэн тэмүүлэл, унтаршгүй зориг юм. Харин цаг хугацааны мөчлөгөөр та "Хулгана" жилийн энергид хамаарна. Энэ нь танд аливааг түрүүлж мэдрэх, аюулаас зайлах, боломжийг шүүрэх зөн совинг бэлэглэсэн. Гал болон Хулганы нэгдэл нь таныг жирийн нэг оролцогч биш, харин хувь заяагаа өөрөө сийлэгч "Тэмцэгч" болгож буй хэрэг юм.
    
    **📱 Одоо цагийн долгион: 99999976**
    Таны барьж буй утас, ашиглаж буй дугаар бол таны одоо цагт дэлхий ертөнцтэй харилцаж буй "Энергийн антен" юм. Санамсаргүй зүйл гэж үгүй. Таны дугаарын цифрүүдийг хооронд нь нэгтгэвэл 67-г үүсгэх ба үүний эцсийн задралаас 4-ийн тоо урган гарч байна. Эртний сударт 4-ийн тоог Раху буюу материаллаг ертөнцийн эзэн захирдаг гэдэг. Мастер 11 нь тэнгэрлэг санааг илтгэдэг бол, Рахугийн 4 нь түүнийг газар дээр бодит болгох "Бүтээн байгуулалт"-ыг шаарддаг. Таны утасны дугаар танаас "Мөрөөдлөө бодит болго, бат бөх суурийг тавь" хэмээн шаардаж байна.
    
    **II ХЭСЭГ: ОРШИЛ — ЭНЭ НАСНЫ СҮНСНИЙ ГЭРЭЭ 🔮**
    Таны энэ ертөнцөд ирэхдээ тээж ирсэн "Сүнсний өгөгдөл" болон одоо цагт сонгосон "Утасны дугаар" хоёр яг нэг цэгт огтлолцож байна. Энэ огтлолцол дээр таны жинхэнэ дүр төрх тодорно. Та анзаардаг уу? Таны дотор хэзээ ч үл эвлэрэх хоёр өөр хүн амьдардаг мэт санагддаг уу? Нэг нь ирээдүйг зөгнөн хардаг, бусдын төлөө санаа зовдог, дээд ертөнцтэй холбогдсон "Зөн билэгт 11". Нөгөө нь амжилтад хүрэхийн тулд хэнийг ч, юуг ч дайраад гарахад бэлэн, зөвхөн бодит үр дүнг нэхдэг "Хатуу Раху 4".
    Энэ зөрчил бол алдаа биш, харин таны давуу тал юм. Ертөнц танд энэ хоёр эсрэг тэсрэг хүчийг өгсөн нь санамсаргүй хэрэг биш. Таны сүнсний гэрээ бол "Газар, Тэнгэр"-ийг холбох юм. Та зөвхөн мөрөөдөгч байх эрхгүй, бас зөвхөн шуналт бизнесмэн байх ч эрхгүй. Таны даалгавар бол оюун санааны өндөр мэдрэмжийг, бодит амьдралын хатуу хөрсөн дээр буулгаж, агуу санааг бодит баялаг болгон хувиргах явдал юм. Та бол зүгээр нэг мөрөөдөгч биш, харин тэрхүү мөрөөдлөө гараараа барьж, нүдээрээ үзэхээр ирсэн "Зөн билэгт Бүтээн байгуулагч" юм.
    
    **НЭГДҮГЭЭР БҮЛЭГ: УРЬД НАСНЫ ӨГӨГДӨЛ БА ДОТООД ХҮЧ ⚡**
    
    **✨ Мастер 11: Зөн совингийн дуудлага**
    Таны сүнсний код бол энгийн тоо биш, харин "Мастер 11" юм. Энэ тоо нь танд бусдаас онцгой, маш өндөр давтамжийн мэдрэмжийг бэлэглэжээ. Та анзаардаг уу? Танд заримдаа логикоор тайлбарлах аргагүй зөн совин, зүүд, гэнэтийн санаанууд орж ирдэг. Энэ бол таны "Антен" ажиллаж буй хэлбэр юм. Урьд насандаа та бусдыг соён гэгээрүүлэх, эсвэл шинэ зам мөрийг нээх үүрэг хүлээсэн нэгэн байсан тул энэ насанд ч таны үг бусдад маш хүчтэй нөлөөлөх шидийн хүчтэй. Та бол зүгээр нэг удирдагч биш, харин хүмүүсийн сэтгэлийн гүнийг мэдэрч, тэднийг гэрэл рүү хөтлөх "Сүнслэг Удирдагч" юм.
    
    **🔥 Гал Хулгана: Тэмцэгчийн оч**
    Таны Мастер 11-ийн хийсвэр, оюун санааны ертөнцийг таны төрөлхийн "Гал" махбодь бодит амьдралтай холбож, дүрэлзүүлж өгдөг. Гал бол таны дотор буцалж буй зогсолтгүй эрч хүч юм. Харин Хулгана жил нь таныг маш гярхай, аливаа нөхцөл байдалд хурдан дасан зохицох, ашигтай боломжийг олж харах "Радар"-тай болгосон. Мастер тоо нь танд том мөрөөдлийг өгдөг бол Гал Хулгана нь тэр мөрөөдлийг биелүүлэх овсгоо, арга чаргыг зааж өгдөг. Та бол зүгээр нэг номлогч биш, харин мөрөөдлөө хэрэгжүүлэхийн төлөө эрсдэл гаргахаас айдаггүй, өрсөлдөөнд ялах цусанд нь байдаг дайчин юм.
    
    **⚖️ Сүнсний сорилт: Эсрэг тэсрэгийн нэгдэл**
    Энд таны сүнсний хамгийн том сорилт оршино. Танд нэг талаас Мастер 11-ээс ирэх хэт эмзэг мэдрэмж, мэдрэлийн ядаргаанд орох магадлалтай зөөлөн чанар, нөгөө талаас Гал Хулганы огцом, түргэн, тайван бус байдал зэрэгцэн оршиж байна. Энэ хоёр хүч нь таны дотор "Өндөр хүчдэл"-ийг үүсгэдэг. Та заримдаа өөрийн бодолдоо дарагдаж, эсвэл хэт яарснаас болж алдаа гаргах эрсдэлтэй. Гэвч энэ хоёрыг тэнцвэржүүлж чадвал та ялагдашгүй хүч болно. Таны Гал махбодь нь 11-ийн тооны эмзэг байдлыг зоригтой үйлдлээр хамгаалж, харин 11-ийн тооны мэргэн ухаан нь Гал махбодийн түргэн занг номхотгож, зөв чиглэлд залах болно.
    `,

    PART_2: `
    **ХОЁРДУГААР БҮЛЭГ: ОДОО ЦАГИЙН ЭНЕРГИ БА ХИШИГ 💰**
    
    **🌪 Рахугийн нөлөө: Материаллаг ертөнцийн хувьсгал**
    Таны утасны дугаарын нийлбэрээс урган гарсан 4-ийн тоог Дорнын зурхайн ухаанд Раху буюу "Сүүдэр гараг" захирдаг. Энэ бол энгийн нэг энерги биш. Раху бол хэзээ ч ханашгүй хүсэл тэмүүлэл, хил хязгаарыг эвдэх хүч, хуучин хэв маягийг нурааж шинийг босгох хувьсгалт энерги юм. Сүнслэг талаасаа энэ нь таныг энэ насандаа зөвхөн санаа гаргагч бус, харин "Бүтээн байгуулагч" байхыг хатуу шаардаж байна. Таны Мастер 11 тоо нь агуу санааг тэнгэрээс буулгаж ирэх боловч, яг энэ Рахугийн 4-ийн тоо л тэр санааг бодит мөнгө, эд баялаг, систем болгон хувиргах "Хөдөлгүүр" нь болох ёстой. Таны санхүүгийн замнал жигд урсгалтай бус, харин гэнэтийн огцом өсөлтүүд, эрсдэлтэй боловч өндөр ашигтай нүүдлүүдээр дүүрэн байхаар зурагджээ.
    
    **⚡ Есийн тооны давтамж: Төгсгөлгүй эрч хүч**
    Таны утасны дугаарт есийн тоо маш олон давтагдаж байгааг та анзаарсан л байх. Тоон зурхайд 9-ийн тоо нь нэг оронтой тоонуудын хамгийн оргил цэг буюу "Гүйцээлт", "Төгсгөл", "Дайчин чанар"-ыг илтгэдэг. Энэ нь таны энерги маш өндөр, магадгүй хэт өндөр давтамж дээр чичирхийлж байгааг харуулж байна. Сүнслэг утгаараа энэ олон есийн тооны давтамж нь таныг аливаа зүйлийг дутуу орхих эрхгүй, эхлүүлсэн бол заавал дуусгах ёстой гэсэн хатуу шаардлагыг тавьдаг. Таны үг, үйлдэл бүр бусдад маш хүчтэй нөлөөлдөг соронзон энергитэй тул та өөрийн гэсэн вант улсыг байгуулах, бусдыг байлдан дагуулах амбицтай нэгэн гэдгээ хүлээн зөвшөөрөх хэрэгтэй.
    
    **💎 Төгсгөлийн код 6: Хишиг хураах сав**
    Утасны дугаарын хамгийн чухал хэсэг буюу энергийн урсгалыг тогтоох цэг бол төгсгөлийн орон юм. Таны дугаар 6-гийн тоогоор төгссөн байна. Үйлийн үрийн хуулиар 6-гийн тоог Сугар гараг удирддаг бөгөөд энэ нь хайр дурлал, гоо зүй, тансаг хэрэглээ, бэлэн мөнгийг бэлгэддэг. Таны савны ёроол 6 байгаа нь "Урьд насны буян"-гийн үр дүн юм. Та энэ насандаа мөнгөний хойноос хэт улайран хөөцөлдөж, зовж зүдрэх гэж ирээгүй. Харин өөрийн үнэ цэнийг бүтээж, тав тухтай, тансаг амьдрах эрхтэйгээр төржээ. Энэ тоо нь танд мөнгө олохоос гадна, олсон мөнгөө өөртөө болон гэр бүлдээ зөв зарцуулж, амьдралын амтыг мэдрэх боломжийг олгодог "Хишиг"-ийн код юм.
    
    **ГУРАВДУГААР БҮЛЭГ: СҮНСНИЙ ХАМТРАГЧИД БА УЧРАЛ 🤝**
    
    **🐲 Сүнсний гэрээт хүмүүс: Луу ба Бич**
    Амьдралын урт аялалд тантай учрах хүмүүс хэзээ ч санамсаргүй байдаггүй. Таны кармын аялалд хамгийн хүчтэй дэмжлэг үзүүлж, таны энергийг цэвэрлэх үүрэгтэй "Сүнсний гэрээт" хүмүүс бол Луу болон Бич жилтнүүд юм. Таны Гал Хулгана жилийн овсгоо, сэргэлэн занг Луу жилтнүүд өөрсдийн хүчирхэг алсын хараа, манлайллаар дэмжиж, таныг жижиг зүйлд сатаарахгүй байхад тусалдаг. Харин Бич жилтнүүд нь ухаалаг, арга заль ихтэй тул таны эхлүүлсэн ажлын гарц гаргалгааг олж, таныг аливаа эрсдэлээс хамгаалах үүрэгтэй иржээ. Энэ гурвал нь зурхайн ухаанд "Ивээл гурав" буюу хүчирхэг нэгдэл гэгддэг. Иймд та баг бүрдүүлэх, хамтрагч сонгохдоо эдгээр жилтнүүдийг онцгойлон анхаарах нь таны амжилтын замыг товчлох болно.
    
    **🔢 Энергийн давхцал: 1, 2, 7**
    Таны Мастер 11 тоо болон Гал махбодьтой хамгийн сайн зохицох, энергийн урсгалыг тань тэгшитгэх тоонууд бол 1, 2, 7 юм. 1-ийн тоо нь таны манлайлах чадварыг хурцалж, 2-ын тоо нь таны зөн совин, хамтын ажиллагааг зөөллөж, харин 7-гийн тоо нь таны оюун санааны гүн ухааныг дэмждэг. Таны амьдралд чухал үйл явдал эдгээр тоонуудтай давхцах, эсвэл эдгээр тооны кодтой (төрсөн өдөр, утасны дугаар, гэрээний дугаар) хүмүүс орж ирэх нь таныг зөв зам дээрээ байгааг сануулах дохио юм. Эдгээр тоонууд нь таны аураг хамгаалж, сөрөг энергийг сарниулах давтамжтай байдаг тул өдөр тутамдаа анзаарч байхыг зөвлөе.
    
    **🧠 Харилцааны стратеги: Чанар ба Мөн чанар**
    Таны Мастер 11-ийн энерги нь бусдаас маш өндөр түвшний үнэнч байдал, оюун санааны гүнзгий ойлголцлыг шаарддаг. Та бол зүгээр нэг өнгөц харилцаа, худал инээмсэглэлд сэтгэл ханах хүн биш ээ. Иймд таны харилцааны стратеги нь "Тоо биш Чанар"-т чиглэх ёстой. Таныг шүүмжилдэг, эсвэл таны зөн совинг үгүйсгэдэг "Энергийн цус сорогч"-доос хол байж, харин таны "Гал" шиг тэмүүллийг дэмждэг, таны дотоод мэдрэмжийг хүндэтгэдэг цөөн боловч үнэнч хүмүүсээр хүрээлүүлэх нь чухал. Таны үг яриа бусдад маш хүчтэй нөлөөлдөг тул та бусдыг удирдахдаа захиран тушаах бус, харин үлгэрлэн дагуулж, урам зориг өгөх нь таны кармыг цэвэрлэж, зам мөрийг тань тэгшлэх болно.
    `,

    PART_3: `
    **ДӨРӨВДҮГЭЭР БҮЛЭГ: ДАЛД УХАМСАРЫН ТҮЛХҮҮР ТАРНИ 🔐**
    
    **🗝 Хишиг дуудах дижитал тарни**
    Бидний амьдарч буй энэ цахим эрин зуунд утасны түгжээ тайлах код, банкны картны нууц дугаар зэрэг нь зүгээр нэг аюулгүй байдлын хэрэгсэл биш, харин таны өдөр тутам хамгийн олон удаа давтан хийдэг үйлдэл буюу "Орчин цагийн тарни" болсон байна. Хүн өдөрт дунджаар 150 удаа утсаа нээж хаадаг. Тиймээс энэ кодыг ухамсартайгаар ашиглах нь таны далд ухамсарт амжилтын программыг өдөрт 150 удаа суулгаж, таны кармын кодыг зөв чиглэлд эргүүлж байна гэсэн үг юм.
    
    **🔢 Нууц кодын тайлал: 0248**
    Таны хишиг дуудах нууц код бол 0248 юм. Энэхүү кодын учрыг тайлбарлавал:
    02: Эхний хэсэг нь таны Сүнсний гэрээний Мастер 11 тоог хураангуйлсан 2-ын тоо юм. Энэ нь таныг утсаа нээх бүрд "Зөн совингоо сонс, мэдрэмжтэй бай" гэсэн дохиог тархинд илгээж, таны дотоод "Гэгээрүүлэгч"-ийг сэрээнэ.
    4: Удаах 4-ийн тоо нь таны утасны дугаараас ирэх Рахугийн "Бүтээн байгуулагч" энергийг идэвхжүүлнэ. Энэ нь таны хийсвэр санааг бодит ажил хэрэг, мөнгө болгон хувиргах хүчийг дуудна.
    8: Төгсгөлийн 8-ын тоо нь Кармын хуулиар "Үйлийн үрийн хариу буюу Баялаг"-ийг бэлгэддэг. Энэ нь таны эхлүүлсэн ажил бүр үр дүнгээ өгч, хязгааргүй боломжийг өөртөө татах соронз болох болно.
    
    **🗻 Дэлгэцийн бэлгэдэл: Энергийг тэтгэгч**
    Таны утасны дэлгэц бол таны хамгийн түрүүнд хардаг "цахим гэр" юм. Таны төрөлхийн махбодь "Гал" гэдгийг бид мэднэ. Монгол зурхайн таван махбодийн онолоор Мод махбодь нь Гал махбодийг тэтгэж, улам дүрэлзүүлдэг жамтай (Модноос Гал гарна). Тиймээс таны гар утасны дэлгэц дээрх Өндөр мод, Ой мод, эсвэл Ногоон байгалийн зургууд нь таны энергийг сэлбэж, унтаршгүй эрч хүчийг дуудах хүчтэй бэлгэдэл болно. Эдгээр зургууд нь таны дотоод Галыг үргэлж асаалттайн байлгаж, урам зоригоор тэтгэх болно.
    
    **ТАВДУГААР БҮЛЭГ: АУРА ЦЭВЭРЛЭХ ЗАСАЛ БА ХАМГААЛАЛТ 💎**
    
    **🎨 Өнгөний засал ба Баялгийн түрийвч**
    Хүний өмсөж буй хувцас, эдэлж буй зүйлсийн өнгө нь тухайн хүний аура буюу гэрлэн бүрхүүлд шууд нөлөөлдөг. Таны төрөлхийн махбодь Гал гэдгийг бид мэднэ. Гал махбодийг хамгийн сайн тэтгэж, хүч оруулдаг зүйл бол Мод махбодь тул таны энергийг сэлбэж, ажил үйлсийг тань бүтэмжтэй байлгах гол өнгөнүүд бол ногоон болон улаан өнгөнүүд юм. Ногоон өнгө нь таныг тайвшруулж, ухаалаг шийдвэр гаргахад туслах бол улаан өнгө нь таны манлайлах хүчийг идэвхжүүлнэ. Таны түрийвчний өнгө ногоон эсвэл улаан хүрэн байх нь баялгийн энергийг өөртөө татаж, мөнгөний урсгалыг тасралтгүй "асаалттай" байлгахад тустай. Энэ нь таны санхүүгийн чадамжийг нэмэгдүүлж, мөнгөө үр ашигтай зарцуулах ухааныг дэмжинэ.
    
    **🗣 Амжилтын тарни: Сүнсний тунхаг**
    Үг бол энерги юм. Таны амжилтын тарни бол: "Би бол бодит ертөнцийг гэрэлтүүлэгч. Миний Зөн совин намайг хөтөлж, миний Бүтээн байгуулалт намайг хүчирхэгжүүлнэ." Энэ тарни нь таны Сүнсний гэрээний Мастер 11 тооноос ирэх "Гэгээрүүлэгч" энерги болон утасны дугаарын 4-ийн тооноос ирэх "Бүтээн байгуулагч" хүчийг нэгтгэсэн шидэт үгс юм. Та энэ үгийг өөртөө байнга сануулж, утсаа гартаа авах бүрдээ эсвэл чухал шийдвэр гаргахын өмнө дотроо давтах нь таны далд ухамсарт амжилтын кодыг суулгаж, таныг зорилгодоо хүрэхэд тусална.
    
    **📜 Төгсгөлийн үг: Жолоо таны гарт**
    Ингээд бид таны сүнсний нууц код болон энэ насны даалгаврыг хамтдаа тайллаа. Эдгээр тооцоолол, зөвлөмжүүд нь зүгээр нэг мэдээлэл биш, харин таны гарт байгаа маш хүчирхэг зэвсэг юм. Таны карма (үйлийн үр) таныг хаашаа ч хөтөлсөн бай, жолоог нь та өөрөө атгаж байгаа гэдгээ санаарай. Тоо худлаа хэлдэггүй, харин түүнийг хэрхэн ашиглаж, хувь заяагаа хэрхэн бүтээх нь таны сонголт юм.
    `
  },

  // --- FULL DATA MAPS (NO ABBREVIATIONS) ---
  // NEW ZODIAC MAP: SOUL TITLES
  ZODIAC_MAP: {
    "Хулгана": { title: "Зөн Билэгт Хөтөч (The Intuitive Guide)", trait: "Мэдрэмж" },
    "Үхэр": { title: "Бат Бөх Суурийг Тавигч (The Steady Builder)", trait: "Тэсвэр" },
    "Бар": { title: "Эрэлхэг Хамгаалагч (The Brave Guardian)", trait: "Зориг" },
    "Туулай": { title: "Эвлэрүүлэн Зуучлагч (The Peacemaker)", trait: "Дипломат" },
    "Луу": { title: "Их Хүчний Эзэн (The Master of Power)", trait: "Манлайлал" },
    "Могой": { title: "Гүн Ухааны Мэргэн (The Wise Philosopher)", trait: "Мэргэн ухаан" },
    "Морь": { title: "Эрх Чөлөөний Түүчээ (The Pioneer of Freedom)", trait: "Эрх чөлөө" },
    "Хонь": { title: "Гоо Зүйн Бүтээгч (The Creator of Beauty)", trait: "Бүтээлч" },
    "Бич": { title: "Оюун Санааны Инженер (The Mental Strategist)", trait: "Ухаан" },
    "Тахиа": { title: "Дэг Журмын Сахиул (The Keeper of Order)", trait: "Зарчим" },
    "Нохой": { title: "Үнэнч Зүтгэлтэн (The Loyal Protector)", trait: "Үнэнч" },
    "Гахай": { title: "Хишиг Буяны Ундарга (The Source of Abundance)", trait: "Өгөөж" }
  },

  // Delivery message - NEW SOUL CONTRACT VERSION
  DELIVERY_MESSAGE: `✨ ТАНЫ "СҮНСНИЙ ГЭРЭЭ" ТАЙЛАН БЭЛЭН БОЛЛОО! ✨\n\nТаны хувь заяаны нууц код, эд баялаг дуудах түлхүүрүүд энэхүү файлд багтсан болно. 📜🔑\n\nТайлангаа яг одоо доорх товчлуур дээр дарж татаж аваарай!\n\n👇👇👇👇👇👇👇👇👇👇`,
  DELIVERY_BTN_TEXT: "📥 Тайланг татах",

  // NEW ARCHETYPE MAP (Planets + Soul Roles + Mantra Keys)
  ARCHETYPE_MAP: {
    1: { name: "Наран (Sun)", role: "Эхлүүлэгч", mantraKey: "Манлайлал" },
    2: { name: "Сар (Moon)", role: "Эвлэрүүлэгч", mantraKey: "Зөн совин" },
    3: { name: "Бархасбадь (Jupiter)", role: "Бүтээгч", mantraKey: "Бүтээлч чанар" },
    4: { name: "Раху (Rahu)", role: "Бүтээн байгуулагч", mantraKey: "Бүтээн байгуулалт" },
    5: { name: "Буд (Mercury)", role: "Аялагч", mantraKey: "Эрх чөлөө" },
    6: { name: "Сугар (Venus)", role: "Тэтгэгч", mantraKey: "Хайр энэрэл" },
    7: { name: "Кету (Ketu)", role: "Гүн ухаантан", mantraKey: "Мэргэн ухаан" },
    8: { name: "Санчир (Saturn)", role: "Удирдагч", mantraKey: "Хүчирхэг байдал" },
    9: { name: "Ангараг (Mars)", role: "Тэмцэгч", mantraKey: "Эрэлхэг зориг" },
    11: { name: "Мастер (Master)", role: "Сүнсний Гэгээрүүлэгч", mantraKey: "Зөн билэг" },
    22: { name: "Мастер (Master)", role: "Их Үйлсийг Бүтээгч", mantraKey: "Агуу үйлс" },
    33: { name: "Мастер (Master)", role: "Сүнсний Эмч", mantraKey: "Энэрэнгүй сэтгэл" }
  },

  // NEW CONTAINER MAP (Wealth & Karma)
  CONTAINER_MAP: {
    0: { name: "Хоосон чанар буюу Дүүргэх Сав", meaning: "Хязгааргүй боломж" },
    1: { name: "Манлайллын Сав", meaning: "Өөрөө бүтээх баялаг" },
    2: { name: "Хамтын ажиллагааны Сав", meaning: "Бусдаас ирэх хишиг" },
    3: { name: "Хишиг Буяны Сав", meaning: "Урсгалаар орж ирэх мөнгө" },
    4: { name: "Хөдөлмөрч Сав", meaning: "Тогтвортой, бат бөх суурь" },
    5: { name: "Арилжаа Наймааны Сав", meaning: "Эргэлтийн хөрөнгө" },
    6: { name: "Тансаг Хэрэглээний Сав", meaning: "Тав тух, бэлэн мөнгө" },
    7: { name: "Оюуны Хөрөнгө Оруулалтын Сав", meaning: "Мэдлэгээс олох баялаг" },
    8: { name: "Их Баялгийн Сав", meaning: "Томоохон хөрөнгө, эрх мэдэл" },
    9: { name: "Өглөгийн Сав", meaning: "Олоод түгээх, буяны үйл" }
  },

  RELATIONSHIP_MAP: {
    "Хулгана": { allies: "Луу, Бич", conflict: "Морь" },
    "Үхэр": { allies: "Могой, Тахиа", conflict: "Хонь" },
    "Бар": { allies: "Морь, Нохой", conflict: "Бич" },
    "Туулай": { allies: "Хонь, Гахай", conflict: "Тахиа" },
    "Луу": { allies: "Хулгана, Бич", conflict: "Нохой" },
    "Могой": { allies: "Үхэр, Тахиа", conflict: "Гахай" },
    "Морь": { allies: "Бар, Нохой", conflict: "Хулгана" },
    "Хонь": { allies: "Туулай, Гахай", conflict: "Үхэр" },
    "Бич": { allies: "Хулгана, Луу", conflict: "Бар" },
    "Тахиа": { allies: "Үхэр, Могой", conflict: "Туулай" },
    "Нохой": { allies: "Бар, Морь", conflict: "Луу" },
    "Гахай": { allies: "Туулай, Хонь", conflict: "Могой" }
  },
  
  TSAGAAN_SAR_MAP: {
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
  
  ELEMENTS_BY_LAST_DIGIT: { 0: "Төмөр", 1: "Төмөр", 2: "Усан", 3: "Усан", 4: "Модон", 5: "Модон", 6: "Гал", 7: "Гал", 8: "Шороон", 9: "Шороон" },
  
  REMEDY_MAP: {
    "Гал": { feeding: "Мод", wallpaper: "Ой мод, Байгаль", color: "Ногоон, Улаан (Мод Галыг тэтгэнэ)", wallet: "Ногоон, Улаан" },
    "Усан": { feeding: "Төмөр", wallpaper: "Цаст уул, Металл", color: "Цагаан, Мөнгөлөг (Төмөр Усыг тэтгэнэ)", wallet: "Цагаан" },
    "Модон": { feeding: "Ус", wallpaper: "Далай, Хүрхрээ", color: "Хар, Хөх (Ус Модыг тэтгэнэ)", wallet: "Хар, Хөх" },
    "Төмөр": { feeding: "Шороо", wallpaper: "Уулс, Хад", color: "Шар, Бор (Шороо Төмрийг тэтгэнэ)", wallet: "Шар, Бор" },
    "Шороон": { feeding: "Гал", wallpaper: "Нар мандах, Гал", color: "Улаан, Ягаан (Гал Шороог тэтгэнэ)", wallet: "Улаан" }
  },

  // Ensure ANIMALS array is available for getMongolianYearData
  ANIMALS: ["Хулгана", "Үхэр", "Бар", "Туулай", "Луу", "Могой", "Морь", "Хонь", "Бич", "Тахиа", "Нохой", "Гахай"]
};

// --- MAIN FUNCTION ---
function main() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return;

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  const rows = sheet.getDataRange().getValues();
  const KEYS = {
    GEMINI: PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY"),
    UCHAT: PropertiesService.getScriptProperties().getProperty("UCHAT_API_TOKEN"), 
    TEMPLATE: PropertiesService.getScriptProperties().getProperty("TEMPLATE_ID") 
  };

  let processedCount = 0;
  const START_TIME = new Date().getTime();

  try {
    for (let i = 1; i < rows.length; i++) {
      if (new Date().getTime() - START_TIME > CONFIG.MAX_EXECUTION_TIME - CONFIG.SAFETY_BUFFER) break;
      if (processedCount >= CONFIG.BATCH_SIZE) break;

      const row = rows[i];
      // Skip if DONE, ERROR, or Empty Input
      if (row[CONFIG.COLUMNS.STATUS] === "DONE" || String(row[CONFIG.COLUMNS.STATUS]).includes("ERROR") || !row[CONFIG.COLUMNS.INPUT]) continue;

      sheet.getRange(i + 1, CONFIG.COLUMNS.STATUS + 1).setValue("Processing...");
      SpreadsheetApp.flush();

      try {
        const inputString = String(row[CONFIG.COLUMNS.INPUT]); 
        
        // 1. DATA PREP: AI PARSING
        const profile = parseAndCalculateProfile(inputString, KEYS.GEMINI);
        
        // 2. SEQUENTIAL GENERATION: Bridge Architecture (Context-Aware)
        const reportResult = generateSequentialReport(profile, KEYS.GEMINI);
        
        // 3. DELIVERY: PDF Generation & UChat
        const pdfUrl = createPdf(profile.name || "User", reportResult.text, KEYS.TEMPLATE);
        
        // 🔥 SWITCHED TO sendUChat
        sendUChat(row[CONFIG.COLUMNS.ID], pdfUrl, profile.name || "Erhem", KEYS.UCHAT);

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
// 1. CORE LOGIC ENGINE (AI POWERED PARSING)
// ==========================================

function parseAndCalculateProfile(rawInput, apiKey) {
  // STEP 1: AI PARSING (Normalize messy input)
  const normalized = normalizeInputWithAI(rawInput, apiKey);
  
  const dateStr = normalized.date; 
  const gender = normalized.gender; 
  const phone = normalized.phone;
  const name = normalized.name || "Erhem";

  const [year, month, day] = dateStr.split(".").map(Number);
  
  // -- CALCULATIONS --
  const mongolData = getMongolianYearData(year, month, day);
  const rootInfo = calculateRootNumber(phone);
  const wealthInfo = analyzeWealth(phone);
  const lifePath = calculateLifePath(year, month, day);
  const harmony = checkHarmony(lifePath.number, rootInfo.number, mongolData.animalKey);
  
  // -- PIN LOGIC: Master Numbers Reduced for PIN only (11->02, 22->04, 33->06) --
  // But LifePath stays as Master Number
  const lpString = (lifePath.number === 11) ? "02" : 
                   (lifePath.number === 22) ? "04" : 
                   (lifePath.number === 33) ? "06" :
                   (lifePath.number < 10 ? "0" + lifePath.number : String(lifePath.number));
                   
  const unlockPin = `${lpString}${rootInfo.number}8`; 
  
  const remedy = CONFIG.REMEDY_MAP[mongolData.element] || CONFIG.REMEDY_MAP["Гал"];
  const lpData = CONFIG.ARCHETYPE_MAP[lifePath.number] || CONFIG.ARCHETYPE_MAP[1];
  const rootData = CONFIG.ARCHETYPE_MAP[rootInfo.number] || CONFIG.ARCHETYPE_MAP[1];
  const endingData = CONFIG.CONTAINER_MAP[wealthInfo.lastNum] || CONFIG.CONTAINER_MAP[0];
  const zodiacData = CONFIG.ZODIAC_MAP[mongolData.animalKey] || { title: mongolData.animalKey, trait: "Тодорхойгүй" };

  // -- MANTRA BUILDER --
  // "Би бол [Soul Role]. Миний [Keyword 1] намайг хөтөлж, миний [Keyword 2] намайг хүчирхэгжүүлнэ."
  const mantra = `Би бол ${lpData.role}. Миний ${lpData.mantraKey} намайг хөтөлж, миний ${rootData.mantraKey} намайг хүчирхэгжүүлнэ.`;

  return {
    dob: dateStr,
    year: year,
    gender: gender,
    phoneNumber: phone,
    name: name,
    parsingUsage: normalized.usage,
    
    lifePath: lifePath.number,
    lifePathCalcString: lifePath.calculation, 
    lifePathName: lpData.name,
    lifePathRole: lpData.role,
    lifePathTrait: lpData.mantraKey,
    
    rootNumber: rootInfo.number,
    rootCalcString: rootInfo.calculation,
    planetName: rootData.name,
    planetRole: rootData.role,
    planetTrait: rootData.mantraKey,
    
    yearAnimal: mongolData.animalKey,
    yearSoulTitle: zodiacData.title,
    yearElement: mongolData.element,
    
    wealthLogic: wealthInfo.logic,
    endingDigit: wealthInfo.lastDigit,
    endingContainer: endingData.name,
    endingMeaning: endingData.meaning,
    
    trineAllies: harmony.allies,
    harmonyNumbers: harmony.luckyNumbers,
    
    unlockPin: unlockPin,
    pinDigit1: lpString,
    pinDigit2: rootInfo.number,
    
    wallpaper: remedy.wallpaper,
    luckyColor: remedy.color,
    walletColor: remedy.wallet,
    mantra: mantra
  };
}

function normalizeInputWithAI(raw, key) {
  const prompt = `
  TASK: Normalize this input data for an Astrology App.
  INPUT: "${raw}"
  
  INSTRUCTIONS:
  1. Extract Date: Convert to YYYY.MM.DD format. If only YY is given, assume 19YY if > 25, else 20YY.
  2. Extract Phone: Extract 8 digit phone number. Remove country codes (+976).
  3. Extract Gender: "Эрэгтэй" (Male) or "Эмэгтэй" (Female). Default to "Эмэгтэй" if unknown.
  4. Extract Name: If a name is present (words not part of date/gender), extract it. Else "Erhem".
  
  RETURN JSON ONLY:
  {
    "date": "YYYY.MM.DD",
    "phone": "99112233",
    "gender": "Эрэгтэй",
    "name": "Name"
  }
  `;
  
  try {
    const result = callGemini(prompt, key);
    // Sanitize JSON
    const cleanJson = result.text.replace(/```json/g, "").replace(/```/g, "").trim();
    const data = JSON.parse(cleanJson);
    
    // Fallback Validation
    if (!data.date || !data.phone) throw new Error("AI failed to extract required fields");
    
    return { ...data, usage: result.usage };
  } catch (e) {
    console.warn("AI Normalization Failed, using Fallback Regex", e);
    // Emergency Fallback
    const dateMatch = raw.match(/(\d{4})[\.\-\s\/](\d{1,2})[\.\-\s\/](\d{1,2})/);
    const phoneMatch = raw.match(/\d{8}/);
    return {
      date: dateMatch ? `${dateMatch[1]}.${dateMatch[2]}.${dateMatch[3]}` : "2000.01.01",
      phone: phoneMatch ? phoneMatch[0] : "99112233",
      gender: raw.toLowerCase().includes("эр") ? "Эрэгтэй" : "Эмэгтэй",
      name: "Erhem",
      usage: 0
    };
  }
}

// ==========================================
// 2. SEQUENTIAL GENERATION (BRIDGE ARCHITECTURE)
// ==========================================

function generateSequentialReport(data, apiKey) {
  
  const SYSTEM_PROMPT = `
  ROLE: Spiritual Master & Karmic Decoder.
  TONE: Mystical, Deep, Karmic, Empowering (Gold Standard).
  LANGUAGE: Proper Mongolian. NO English words in output.
  
  CORE INSTRUCTIONS:
  1. USER DATA IS KING: You MUST use the provided User Data.
  2. STYLE TRANSFER: Mimic the Reference's spiritual sentence structure and logic flow EXACTLY.
  3. EXPLAINABILITY: Explain calculations step-by-step using the "Soul Contract" metaphors.
  4. FORMATTING: Use **bold** ONLY for Headers. DO NOT bold body text.
  5. DEPTH: Do NOT summarize. Write full, detailed paragraphs as per the Gold Standard text.
  `;

  // --- STEP 1: INTRO & SOUL CONTRACT ---
  const prompt1 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 1 (Soul Contract & Identity).
  **IMPORTANT STRUCTURE:**
  1. Start with title: "**I ХЭСЭГ: ҮЙЛИЙН ҮРИЙН ТООЦООЛОЛ БА СҮНСНИЙ КОД 🌌**"
  2. Write "Soul Journey Start" (Date analysis).
  3. Write "Soul Armor" (Zodiac & Element).
  4. Write "Current Wave" (Phone Logic).
  5. Then write title: "**II ХЭСЭГ: ОРШИЛ — ЭНЭ НАСНЫ СҮНСНИЙ ГЭРЭЭ 🔮**"
  6. Write Intro.
  7. Then write title: "**НЭГДҮГЭЭР БҮЛЭГ: УРЬД НАСНЫ ӨГӨГДӨЛ БА ДОТООД ХҮЧ ⚡**"
  8. Write Chapter 1 Content (Life Path & Zodiac Details).
  
  USER DATA TO USE:
  - DOB: ${data.dob} (${data.gender})
  - Life Path: ${data.lifePath} (${data.lifePathRole} - ${data.lifePathTrait})
  - LP Calculation: ${data.lifePathCalcString}
  - Mongol Year: ${data.yearSoulTitle} (${data.yearElement} Element)
  - Phone Root: ${data.rootNumber} (${data.planetRole} - ${data.planetName})
  - Root Calculation: ${data.rootCalcString}
  
  REFERENCE STYLE (PART 1):
  ${CONFIG.REFERENCES.PART_1}
  `;
  const draft1 = callGemini(prompt1, apiKey);
  
  // Bridge Logic
  const bridge1 = draft1.text.split('.').slice(-2).join('. ') + "."; 

  // --- STEP 2: WEALTH & KARMA ---
  const prompt2 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 2 (Chapter 2 & Chapter 3).
  **IMPORTANT STRUCTURE:**
  1. Start with title: "**ХОЁРДУГААР БҮЛЭГ: ОДОО ЦАГИЙН ЭНЕРГИ БА ХИШИГ 💰**"
  2. Write Wealth Content (Root Planet & 9s).
  3. Write Ending Code (Container).
  4. Then write title: "**ГУРАВДУГААР БҮЛЭГ: СҮНСНИЙ ХАМТРАГЧИД БА УЧРАЛ 🤝**"
  5. Write Harmony Content.
  
  CONTEXT: The previous section discussed basic energy. **DO NOT REPEAT** it. Start immediately with Chapter 2 Title.
  
  USER DATA TO USE:
  - Root Planet: ${data.planetName} (${data.rootNumber} - ${data.planetRole})
  - Wealth Logic: ${data.wealthLogic}
  - Ending Number: ${data.endingDigit} (${data.endingContainer} - ${data.endingMeaning})
  - Allies: ${data.trineAllies}
  - Lucky Numbers: ${data.harmonyNumbers}
  
  REFERENCE STYLE (PART 2):
  ${CONFIG.REFERENCES.PART_2}
  `;
  const draft2 = callGemini(prompt2, apiKey);
  
  // Anti-Stutter
  let text2 = draft2.text;
  if (text2.includes(bridge1.trim())) text2 = text2.replace(bridge1.trim(), "").trim();
  text2 = text2.replace(/^\.\.\./, "").trim();

  const bridge2 = text2.split('.').slice(-2).join('. ') + ".";

  // --- STEP 3: MANTRAS & CONCLUSION ---
  const prompt3 = `
  ${SYSTEM_PROMPT}
  TASK: Write PART 3 (Chapter 4 & Chapter 5).
  **IMPORTANT STRUCTURE:**
  1. Start with title: "**ДӨРӨВДҮГЭЭР БҮЛЭГ: ДАЛД УХАМСАРЫН ТҮЛХҮҮР ТАРНИ 🔐**"
  2. Write Digital Mantra Content.
  3. Then write title: "**ТАВДУГААР БҮЛЭГ: АУРА ЦЭВЭРЛЭХ ЗАСАЛ БА ХАМГААЛАЛТ 💎**"
  4. Write Remedy Content.
  
  CONTEXT: The previous section discussed harmony. **DO NOT REPEAT** it. Start immediately with Chapter 4 Title.
  
  USER DATA TO USE:
  - Unlock PIN: ${data.unlockPin} (Derived from: ${data.pinDigit1} + ${data.pinDigit2} + 8)
  - Birth Element: ${data.yearElement}
  - Wallpaper: ${data.wallpaper}
  - Colors: ${data.luckyColor}
  - Wallet: ${data.walletColor}
  - Mantra: ${data.mantra}
  
  REFERENCE STYLE (PART 3):
  ${CONFIG.REFERENCES.PART_3}
  `;
  const draft3 = callGemini(prompt3, apiKey);
  
  // Anti-Stutter 3
  let text3 = draft3.text;
  if (text3.includes(bridge2.trim())) text3 = text3.replace(bridge2.trim(), "").trim();
  text3 = text3.replace(/^\.\.\./, "").trim();

  return {
    text: draft1.text + "\n\n" + text2 + "\n\n" + text3,
    usage: draft1.usage + draft2.usage + draft3.usage
  };
}

// --- HELPER FUNCTIONS ---

function callGemini(text, key, attempts = 3) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.GEMINI_MODEL}:generateContent?key=${key}`;
  const payload = {
    contents: [{ parts: [{ text: text }] }],
    generationConfig: { 
      temperature: CONFIG.TEMPERATURE, 
      maxOutputTokens: 8192 // MAXIMIZED FOR QUALITY
    }, 
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
        const txt = json.candidates[0].content.parts[0].text;
        const tokens = json.usageMetadata ? json.usageMetadata.totalTokenCount : 0;
        
        // CLEANUP ARTIFACTS
        const clean = txt
          .replace(/\-\-\-/g, "")
          .replace(/###/g, "")
          .replace(/\(Үргэлжлэл\)/g, "")
          .replace(/ТА-ны/g, "Таны")
          .replace(/Тануулга/g, "Тайлал")
          .trim();
          
        return { text: clean, usage: tokens };
      }
      console.warn(`Attempt ${i+1} failed: No candidates.`, json);
    } catch (e) {
      console.error(`Attempt ${i+1} Exception:`, e);
    }
    Utilities.sleep(1000); // Backoff
  }
  
  return { text: "Error: Failed to generate report after retries.", usage: 0 };
}

// --- MATH LOGIC ---
function calculateRootNumber(phoneStr) {
  const digits = phoneStr.split("").map(Number);
  const sum1 = digits.reduce((a, b) => a + b, 0);
  let finalSum = sum1;
  while (finalSum > 9) finalSum = String(finalSum).split("").map(Number).reduce((a, b) => a + b, 0);
  const calcStr = `(${digits.join("+")} = ${sum1} -> ${finalSum})`;
  return { number: finalSum, calculation: calcStr };
}

function analyzeWealth(phoneStr) {
  const counts = {};
  phoneStr.split("").forEach(d => counts[d] = (counts[d] || 0) + 1);
  let logic = "";
  if (counts["9"] >= 3) logic += "9-ийн тоо олон байгаа нь 'Эрх мэдэл'-ийг илтгэнэ. ";
  if (counts["8"] >= 2) logic += "8-ын тоо нь 'Их мөнгө'-ний урсгалыг дуудна. ";
  if (counts["6"] >= 2) logic += "6-гийн тоо нь бэлэн мөнгө, тансаглалыг авчирна. ";
  return { logic: logic || "Тоонууд тэнцвэртэй байна.", lastDigit: phoneStr.slice(-1), lastNum: Number(phoneStr.slice(-1)) };
}

function calculateLifePath(y, m, d) {
  const sumDigits = (n) => String(n).split('').reduce((a, b) => a + Number(b), 0);
  
  let sY = sumDigits(y); while (sY > 9 && sY !== 11 && sY !== 22 && sY !== 33) sY = sumDigits(sY);
  let sM = sumDigits(m); while (sM > 9 && sM !== 11) sM = sumDigits(sM);
  let sD = sumDigits(d); while (sD > 9 && sD !== 11 && sD !== 22) sD = sumDigits(sD);
  
  let total = sY + sM + sD;
  while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
    total = sumDigits(total);
  }
  
  const calcStr = `(${y} он -> ${sY}) + (${m} сар -> ${sM}) + (${d} өдөр -> ${sD}) = ${sY + sM + sD} -> ${total}`;
  return { number: total, calculation: calcStr };
}

function checkHarmony(lp, root, animalKey) {
  // animalKey is used for Zodiac Map.
  // Note: CONFIG.RELATIONSHIP_MAP uses keys like "Хулгана" which matches animalKey from getMongolianYearData
  const rel = CONFIG.RELATIONSHIP_MAP[animalKey] || { allies: "Тодорхойгүй" };
  const isEven = (lp % 2 === 0) || lp === 11 || lp === 22 || lp === 33;
  const lucky = isEven ? "2, 6, 8" : "1, 9"; 
  return { allies: rel.allies, luckyNumbers: lucky };
}

function getMongolianYearData(year, month, day) {
  const tsDate = CONFIG.TSAGAAN_SAR_MAP[year] || "02-01";
  const [tsMonth, tsDay] = tsDate.split("-").map(Number);
  let trueYear = (month < tsMonth || (month === tsMonth && day < tsDay)) ? year - 1 : year;
  const animal = CONFIG.ANIMALS[(trueYear - 1900) % 12];
  const element = CONFIG.ELEMENTS_BY_LAST_DIGIT[trueYear % 10];
  return { animalKey: animal, element };
}

function createPdf(name, content, templateId) {
  const folderId = PropertiesService.getScriptProperties().getProperty("FOLDER_ID");
  // NEW FILE NAME FORMAT: Name - Сүнсний Гэрээ.pdf
  const copy = DriveApp.getFileById(templateId).makeCopy(`${name} - Сүнсний Гэрээ.pdf`);
  const doc = DocumentApp.openById(copy.getId());
  const body = doc.getBody();
  
  // 1. FILL CONTENT
  body.replaceText("{{NAME}}", name); 
  body.replaceText("{{REPORT}}", content);
  
  // 2. FORMATTING ENGINE (CLASSIC BOLD + CLEAN LISTS)
  processFormatting(body);

  // 3. PARAGRAPH STYLING
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

// --- FORMATTING ENGINE (CLASSIC BOLD + BULLETS) ---
function processFormatting(body) {
  // 1. Handle BOLD: **text** -> Bold Text (User Preferred Engine)
  var foundElement = body.findText("\\*\\*(.*?)\\*\\*");
  while (foundElement != null) {
    var foundText = foundElement.getElement().asText();
    var start = foundElement.getStartOffset();
    var end = foundElement.getEndOffsetInclusive();
    
    foundText.setBold(start, end, true);
    foundText.deleteText(start, start + 1); // Delete **
    foundText.deleteText(end - 3, end - 2); // Delete **
    
    foundElement = body.findText("\\*\\*(.*?)\\*\\*");
  }
  
  // 2. Handle BULLETS: * text -> Bullet point
  var paras = body.getParagraphs();
  for (var i = 0; i < paras.length; i++) {
    var p = paras[i];
    var text = p.getText();
    if (text.trim().startsWith("* ") && !text.trim().startsWith("**")) {
      p.setText(text.replace(/^\s*\*\s+/, "")); // Remove "* "
      p.setGlyphType(DocumentApp.GlyphType.BULLET); // Make it a bullet
    }
  }
}

// -----------------------------------------------------------
// 🚀 UCHAT INTEGRATION
// -----------------------------------------------------------
function sendUChat(userId, pdfUrl, name, token) {
  const url = "https://www.uchat.com.au/api/subscriber/send-content";
  
  const msg = CONFIG.DELIVERY_MESSAGE;
  const btn = CONFIG.DELIVERY_BTN_TEXT;
  
  // Correct Payload Structure with 'data' wrapper and 'caption' for buttons
  const payload = {
    "user_ns": String(userId).trim(), 
    "data": {
      "version": "v1",
      "content": {
        "messages": [
          {
            "type": "text",
            "text": msg,
            "buttons": [
              {
                "type": "url",
                "caption": btn, 
                "url": pdfUrl
              }
            ]
          }
        ]
      }
    }
  };

  const options = {
    method: "post",
    headers: { 
      "Authorization": "Bearer " + token, 
      "Content-Type": "application/json" 
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  try {
    const res = UrlFetchApp.fetch(url, options);
    const text = res.getContentText();
    
    // Safety check for HTML response (Server Errors)
    if (text.trim().startsWith("<")) {
      throw new Error("UChat Server Error (HTML returned): " + text.substring(0, 100));
    }

    const json = JSON.parse(text);
    
    // Check for logical errors in API response
    if (json.status !== "ok" && json.success !== true) { 
       console.warn("UChat Warning:", json);
       throw new Error("UChat API Failed: " + JSON.stringify(json));
    }
  } catch (e) {
    console.error(e);
    throw new Error("UChat Send Error: " + e.message);
  }
}
