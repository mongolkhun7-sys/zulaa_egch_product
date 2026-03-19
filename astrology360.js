/**
 * PRODUCT: FINANCIAL NUMEROLOGY REPORT GENERATOR (GOLD STANDARD EDITION)
 * VERSION: v19.8 - ManyChat Only (Gold Ready)
 * AUTHOR: Jules + Codex
 * MODEL: gemini-2.5-flash
 ****************************************************************************************/

/*
MAINTAINER INSTRUCTIONS (FOR FUTURE THREADS / MODELS)
1) QUALITY RULE: CONFIG.REFERENCES.PART_1..PART_3 must contain FULL gold-standard text blocks.
   Do NOT over-summarize references; style/persona drift starts from shortened references.
2) SECTION RULE: final report must include exact I, II, III, IV, V section headers.
3) UPDATE SCOPE (Product-level):
   - CONFIG.PRODUCT_NAME
   - CONFIG.REFERENCES.PART_1..PART_3
   - NUMEROLOGY mappings relevant to this product
   - CONFIG.DELIVERY_MESSAGE
4) DO-NOT-TOUCH (Core stability blocks unless explicitly requested):
   - main() status/retry flow
   - normalizeInputWithAI and validation gates
   - generateSequentialReport continuity/repair helpers
   - createPdf/processFormatting
5) DELIVERY RULE: this build is ManyChat-only. Column B must be ManyChat subscriber_id.
6) SOURCE FILES FOR NEXT THREAD:
   - /Users/munkhbat/Documents/New project 3/gold-standard.txt
   - /Users/munkhbat/Documents/New project 3/logic-spec.txt
*/

const CONFIG = {
  // --- SYSTEM CONFIGURATION ---
  VERSION: "v19.8-Financial-Gold-ManyChat",
  PRODUCT_NAME: "Хувь Заяаны Санхүүгийн Код: Алтан Урсгалын Тайлан",
  SHEET_NAME: "Sheet1",
  BATCH_SIZE: 3, 
  GEMINI_MODEL: "gemini-2.5-flash", 
  TEMPERATURE: 0.5, 
  MAX_RETRY_COUNT: 3,

  // --- COLUMN MAPPING (0-based Index) ---
  COLUMNS: {
    NAME: 0,      // A: User Name
    ID: 1,        // B: ManyChat subscriber_id
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
  // 📜 GOLD STANDARD REFERENCE (FULL TEXT MODE FOR STABLE STYLE/PERSONA)
  // ==================================================================================
  REFERENCES: {
    PART_1: `
    I ХЭСЭГ: САНХҮҮГИЙН АРХЕТИП БА МӨНГӨНИЙ ХУВЬ ЗАЯА
    🔮 САНХҮҮГИЙН ҮНДСЭН АРХЕТИП
    Таны төрсөн он сар өдрийн нийлбэр тооцооллоор 11 буюу 2 гэсэн Мастер тоо гарч байгаа нь таныг санхүүгийн ертөнцөд "Зөн совинтой Стратегич" эсвэл "Оюуны Удирдагч" гэсэн маш онцгой архетипээр тодорхойлж байна. Энэ нь таныг жирийн нэг хөдөлмөрч хүн биш, харин бусдад нөлөөлөх асар өндөр мэдрэмжтэй, оюуны хөдөлмөр эрхлэх ёстой хүн гэдгийг илтгэдэг юм. Таны мөнгө олох гол зэвсэг бол булчингийн хүч биш, харин таны зөн совин бөгөөд та хэзээ хөрөнгө оруулах, хэнтэй хамтрахаа зүрх сэтгэлээрээ мэдэрдэг. Мөн 11-ийн тооны өндөр энергийн нөлөөгөөр ирээдүйн чиг хандлагыг бусдаас түрүүлж олж харах чадвартай байдаг тул таны хувь заяа бол хүмүүсийг холбох, эвлэрүүлэх эсвэл бусдад урам зориг өгөх замаар мөнгө олох юм. Таны мэдрэмж хэт өндөр тул стресс ихтэй, дуу чимээтэй орчинд ажиллавал мөнгөний урсгал тань хаагддаг гэдгийг анхаараарай. Та бол мөнгийг хүчээр биш ухаанаар болон мэдрэмжээрээ татах ёстой Сүнслэг саятан болох өгөгдөлтэй хүн юм.
    🥇 НИЙГЭМД ЭЗЛЭХ БАЙР СУУРЬ БА ХАРИЛЦААНЫ ЭНЕРГИ
    Таны төрсөн өдрийн "Өдрийн тоо" болох 30 (3) нь таны амьдралын гадаад илэрхийлэмж болон харилцааны ур чадварыг тодорхойлж байна. Таны Амьдралын зам болох 11-ийн тоо нь зөөлөн, мэдрэмжтэй байдаг бол таны төрсөн өдрийн энерги болох 3-ын тоо нь танд бүтээлч байдал, ярианы баялаг болон бусдыг өөртөө татах соронзон мэт хүчийг нэмж өгч байна. Та хэзээ ч нэг хэвийн, уйтгартай замаар мөнгө олох тавилангүй бөгөөд энэхүү энерги нь таныг заавал өөрийн гэсэн өвөрмөц санааг хэрэгжүүлэх эсвэл салбартаа өөрийгөө илэрхийлж, танигдахыг шаарддаг. Таны санхүүгийн амжилт нь бусадтай тогтоох харилцаа болон өөрийгөө хэрхэн илэрхийлж байгаатай шууд холбоотой тул та өөрийн "Хувийн Брэнд"-ийг бүрдүүлж, хүмүүст танигдах тусам таны үнэ цэнэ өсөж, тэр хэрээр мөнгөний урсгал тань тэлэх болно.
    💰 ДОТООД СҮНСНИЙ ХӨДӨЛГҮҮР БА БАЯЛГИЙН ХҮСЭЛ
    Таны огнооны далд тооцооллоос 8-ын тоо гарч байгаа нь таны гаднах төрх болон дотоод хүсэл хоёрын хооронд сонирхолтой зөрчлийг үүсгэж байна. Та гаднаасаа зөн совинтой, тайван 11-ийн энергитэй харагдавч таны дотоод сүнсийг хөдөлгөгч хүч бол "Эрх мэдэл ба Баялаг" буюу 8-ын энерги юм. Таныг зүгээр нэг сайхан санаа эсвэл магтаал сэтгэл ханамжтай болгодоггүй бөгөөд та заавал бодит үр дүн, өндөр орлого, тансаг хэрэглээ болон бусдыг удирдах эрх мэдлийг хүсдэг. Энэхүү 8-ын тоо нь танд бизнес сэтгэлгээг өгдөг бөгөөд та өөрийн зөн совингоо ашиглан манлайлж, бодит баялгийг бүтээх бүрэн потенциалтай хүн юм. Таны дотоод хөдөлгүүр санхүүгийн эрх чөлөөнд хүрэхээс нааш зогсохгүй.
    II ХЭСЭГ: ПИФАГОРЫН МАТРИЦ БА УР ЧАДВАР
    🔍 Энэ хэсэгт бид таны төрсөн он сар өдрөөс бүрдэх есөн нүдтэй матрицыг шинжилж, танд төрөлхийн ямар зэвсэг байгаа болон ямар сул тал таныг хойш татаж буйг нарийвчлан гаргалаа. Таны матриц бол 1111, 22, 33, 5, 6, 999 гэсэн маш хүчирхэг тоонуудын бүрдэлтэй боловч 4, 7, 8 гэсэн чухал тоонууд дутаж байгаагаараа онцлогтой юм.
    🦁 ИЛ ТООНУУД БУЮУ ТАНЫ ЗЭВСЭГ
    Танд 1-ийн тоо дөрвөн удаа буюу 1111 гэж буусан нь манлайллын хэт хүч буюу дарангуйлагч лидер гэсэн энергийг үүсгэж байна. Энэ бол таны бизнесийн хамгийн том зэвсэг юм. Та бусдын нөлөөнд автдаггүй, шийдвэр гаргахдаа хэзээ ч эргэлздэггүй бөгөөд хүмүүсийг зөвхөн үгээрээ биш энергээрээ давамгайлж удирддаг. Санхүүгийн ертөнцөд энэ чанар тань хэлэлцээр хийх үед өрсөлдөгчөө буулгаж авах, өөрийн нөхцөлийг тулгах боломжийг олгодог. Гэвч энэ хүч хэтрэхээрээ сул тал болдог бөгөөд та бусдын санаа бодлыг сонсох чадваргүй болж, бүх ачааг ганцаараа үүрэх эрсдэлтэй.
    ⚡ ХАРИЛЦААНЫ ЭНЕРГИ
    Таны матрицад 2-ын тоо хоёр удаа буюу 22 гэж буусан нь био энергийн алтан дундаж буюу харизматик энергийг бүрдүүлж байна. Та яг л хүмүүст таатай мэдрэмж төрүүлдэг соронзон мэт байдаг тул борлуулалт, маркетингийн салбарт ажиллавал маш амжилттай байх болно. Хүмүүс тантай уулзахдаа тайвширч, танд итгэх итгэл нь амархан төрдөг. Энэ код нь таны мөнгө олох гол арга бол харилцаа гэдгийг баталж байгаа юм.
    🧠 ЗӨНЧ УХААН
    9-ийн тоо таны матрицад гурван удаа буюу 999 гэж буусан нь жирийн хүнээс хэд дахин илүү сэтгэдэг, мэдээлэл боловсруулах хурд асар өндөр зөнч ухааныг илтгэнэ. Та аливаа зүйлийн үр дүнг болоогүй байхад нь урьдчилан таамаглаж хардаг чадвартай. Бизнест та ирээдүйн трендийг түрүүлж мэдрэх, зах зээлийн цоорхойг олж харахдаа гаргууд сайн. Гэвч энэ их оюуны ачаалал нь таныг хэт их бодсоор байгаад бодит үйлдэл хийхээс хойш суух анализ саажилт гэдэгт оруулах эрсдэлтэйг анхаарах хэрэгтэй.
    🛠 БОДИТ БҮТЭЭГЧ
    Мөн 3-ын тоо хоёр байгаа буюу 33 нь шинжлэх ухаанч сэтгэлгээг, 5-ын тоо нь логикийг, 6-гийн тоо нь хөдөлмөрч чанарыг өгч байна. Энэ гурвалсан хослол нь таныг зөвхөн онолддог биш бас хийж чаддаг бодит бүтээгч болгодог. Та ямар нэгэн санааг бодож олоод, түүнийгээ яг яаж хийх аргачлалыг нь өөрийн гараар эхлүүлэх чадвартай маш ховор хүчирхэг хослолын эзэн юм.
    🚫 ДУТУУ ТООНУУД БУЮУ САНХҮҮГИЙН ЦООРХОЙ
    Таны матрицад 4, 7, 8 гэсэн гурван чухал тоо байхгүй байна. Эдгээр тоонууд дутуу байгаа нь таны бизнесийн суурь дархлааг сулруулж байгаа гол хүчин зүйлүүд юм. Тухайлбал 4 байхгүй нь биеийн хүчний тэвчээр сул болохыг, 7 байхгүй нь азын хүчин зүйл дутмаг болохыг, 8 байхгүй нь санхүүгийн хариуцлага сул болохыг илтгэдэг. Эдгээр дутуу тоонууд нь таны мөнгөний урсгалыг яг яаж хааж байгааг бид дараагийн хэсэгт маш дэлгэрэнгүй задлан тайлбарлах болно.
    📈 МӨНГӨНИЙ ШУГАМУУДЫН БҮРЭН ТАЙЛАЛ
    Таны матрицын дээд талын хэвтээ шугам болох 3, 6, 9 тоонууд бүрэн бүтэн бөгөөд маш хүчтэй байна. Үүнийг оюун ухааны шугам буюу алтан толгойн шугам гэж нэрлэдэг. Энэ бол таны мөнгөний үндсэн суваг юм. Энэ шугам нь таныг ямар ч хямралын үед гарц гаргалгааг олдог, мэдээллээс мөнгө босгодог хүн болгож байна. Таны толгой бол таны банк юм. Та биеэрээ биш толгойгоороо ажиллаж байж л баяжина.
    🌟 ХУВИЙН БРЭНД
    Мөн босоо эхний шугам болох 1, 2, 3 тоонууд маш хүчтэй байна. Үүнийг өөрийгөө үнэлэх шугам буюу хувийн брэнд гэж нэрлэдэг. Энэ шугам бүтэн байгаа нь таны өөртөө итгэх итгэл асар өндөр болохыг харуулж байна. Та өөрийгөө хэзээ ч дутуу үнэлдэггүй бөгөөд энэ нь таныг хувийн брэндээ үүсгэж олонд танигдах замаар мөнгө олох боломжийг олгодог.
    ⚠️ МӨРӨӨДӨГЧИЙН ГАЦАА
    Гэвч 1-ийн тоо буюу санаа хэт их байгаа ч доод талын 4 буюу тэвчээр болон 7 буюу итгэл байхгүй байгаа нь зорилгын шугамын тасралыг үүсгэж байна. Та асар том зорилго тавьдаг ч түүнийгээ өдөр тутмын уйгагүй хөдөлмөрөөр бодит болгох шатан дээрээ бүдэрдэг. Та санаагаа гаргачихаад гүйцэтгэлийг нь өөр хүнээр хийлгэхгүй бол та зүгээр л сайхан ярьдаг хүн болж үлдэх эрсдэлтэйг анхааруулж байна.
    `,
    PART_2: `
    III ХЭСЭГ: КАРМЫН ОНОШЛОГОО БА МӨНГӨНИЙ ШУГАМУУД
    ⚖️ Таны төрсөн он сар өдрийн тооцооллыг нарийвчлан шалгаж үзэхэд 13, 14, 16, 19 гэсэн Кармын Өрийн тоонууд илрээгүй нь таны хувьд маш том давуу тал бөгөөд үүнийг Нумерологид Цэвэр Үйлийн Үр буюу Цагаан цаас гэж нэрлэдэг юм. Энэ нь таныг өмнөх амьдралдаа бусдын мөнгийг луйвардсан эсвэл хариуцлагаас зугтсан ямар нэгэн хүнд ачаа тээшгүйгээр энэ ертөнцөд ирснийг баталж байгаа тул танд удам дамжсан ядуурал эсвэл заяагдмал бүтэлгүйтэл гэж байхгүй гэсэн үг. Таны амьдралд тохиолдож буй санхүүгийн асуудлууд гадны хараал жатга эсвэл хувь тавилангийн шийтгэл биш харин зөвхөн таны өнөөдрийн гаргаж буй шийдвэр, сахилга бат болон өөрийн сул талуудаа хэрхэн удирдахаас шууд хамаарна. Та өөрийн хувь заяаны номыг өөрөө бичих 100 хувийн эрх чөлөөтэй бөгөөд хэрэв та зөв стратегиар хөдөлвөл ямар ч саадгүйгээр тэрбумтан болох зам тань нээлттэй байна.
    🚧 Таны санхүүгийн урсгалыг хааж буй хамгийн том бөгөөд хамгийн аюултай блок бол Газардуулалтын Блок буюу 4-ийн тооны дутагдал юм. Таны Матрицад 1-ийн тоо буюу санаа, мөн 9-ийн тоо буюу ухаан хэт их байгаа мөртлөө түүнийг бодит ажил болгодог 4-ийн тоо байхгүй байгаа нь таныг Бодлын Баян болгох эрсдэлтэй. Энэ блок нь мөнгөний урсгалд хэрхэн нөлөөлдөг вэ гэвэл та гайхалтай төсөл эхлүүлдэг, хүмүүст амлалт өгдөг гэвч яг ажлын дунд хэсэгт очихдоо амархан ядарч, сонирхол буурч, өөр шинэ зүйл рүү үсчсээр байгаад эцсийн үр дүнгээ үздэггүй. Бизнесийн ертөнцөд дутуу орхисон ажил болгон Мөнгөний гоожих нүх болдог бөгөөд харилцагч нар таны энэ тогтворгүй байдлыг мэдэрмэгцээ итгэл алдарч том хөрөнгө оруулалт хийхээс татгалздаг. Таны мөнгөний урсгал зөвхөн Тууштай байдал гэдэг ганцхан зүйл дээр гацаж байгааг хатуу анхаарах хэрэгтэй.
    🎰 Таны хоёр дахь томоохон мөнгөний блок бол Азын Хомсдол буюу 7-гийн тооны дутагдал юм. Энэ нь таныг орчлон ертөнцөөс Үнэгүй бялуу горьдох хэрэггүйг хатуу сануулж байгаа хэрэг бөгөөд танд сугалааны аз, гэнэтийн өв хөрөнгө эсвэл зүгээр сууж байхад ирдэг амар хялбар мөнгөний суваг хаалттай байна. Хэрэв та энэ блокоо үл тоон мөрийтэй тоглоом тоглох, эрсдэлтэй койнд хөрөнгө оруулах эсвэл богино хугацаанд огцом баяжих сүлжээний бизнест орвол та 99 хувийн магадлалтайгаар бүхнээ алдана. Таны мөнгө зөвхөн таны хөлс хүч, оюуны хөдөлмөр шингэсэн бодит үнэ цэн дээр л орж ирэх хуультай тул Аз турших сэтгэлгээнээсээ бүрмөсөн салж Бүтээх сэтгэлгээ рүү шилжих үед л данс тань дүүрэх болно.
    💸 Таны гурав дахь блок бол Системийн Цоорхой буюу 8-ын тооны дутагдал бөгөөд энэ нь мөнгийг хадгалах болон өсгөх чадварт сөргөөр нөлөөлдөг. Таны матрицын 8-ын тоо дутуу байгаа нь мөнгөтэй харьцахдаа хэт сэтгэл хөдлөлөөр хандах хандлагыг үүсгэдэг бөгөөд нэг бол хэт нарийн болж харамладаг эсвэл хэт үрэлгэн болж олсон бүхнээ цацаж орхидог. Та бизнесийн гэрээ хийхдээ өөрт ашиггүй нөхцөлийг зөвшөөрөх эсвэл бусдыг өрөвдсөнөөсөө болж мөнгөө зээлүүлээд алдах эрсдэлтэй байдаг. Энэ блок нь таныг Мөнгөний Савгүй мэт болгодог тул та их мөнгө олсон ч тэр нь таны гараар урсгаад л өнгөрнө. Үүнийг засахын тулд танд заавал санхүүгийн хатуу дүрэм журам барьдаг мэргэжлийн нягтлан бодогч эсвэл мөнгөө үл хөдлөх хөрөнгө болгож түгжих стратеги хэрэгтэй.
    📈 Гэхдээ танд энэ бүх блокийг даван туулах хүчирхэг Мөнгөний Шугам байгаа нь 3, 6, 9 тооны хослол буюу Оюун Ухааны Шугам юм. Таны 1, 4, 7 буюу Материаллаг шугам тасархай байгаа ч 3, 6, 9 буюу Оюуны шугам бүтэн байгаа нь таны баяжих гол зам бол биеийн хүч биш харин ухаан гэдгийг баталж байна. Таны мөнгөний түгжээг тайлах гол түлхүүр бол Мэдлэг юм. Та өөрийн сул тал болох тэвчээргүй байдлаа мэдлэгээрээ нөхөж, ажлын гүйцэтгэлийг бусдад даатгаад өөрөө зөвхөн стратеги боловсруулах түвшинд ажиллавал санхүүгийн урсгал тань ямар ч саадгүйгээр орж ирэх болно.
    `,
    PART_3: `
    IV ХЭСЭГ: ЦАГ ХУГАЦААНЫ ТӨЛӨВЛӨЛТ БА ИРЭЭДҮЙН ЗУРАГЛАЛ
    2026-2028 оны санхүүгийн мөчлөгийг авч үзвэл та шинэчлэлтээс тогтворжилт руу шилжих маш хариуцлагатай 3 жилийн босгон дээр ирээд байна. 
    🗓2026 он бол таны хувьд Хувийн жил 5 тохиож байгаа бөгөөд үүнийг нумерологийн шинжлэх ухаанд өөрчлөлт ба эрсдэлийн жил гэж нэрлэдэг юм. Энэ жил таны амьдралд маш их хөдөлгөөн шинэчлэлт хийгдэх бөгөөд санхүүгийн хувьд савлагаатай байх болно. Гэнэт их хэмжээний мөнгө орж ирэх боломжтой ч тэр хэрээрээ гэнэт урсаад гарах магадлалтай тул таны матрицад 4-ийн тоо буюу сахилга бат байхгүй дээр 5-ын жилийн эрх чөлөөний энерги нэмэгдэхээр таныг хамгийн сахилга батгүй болгох аюултайг анхаараарай. Тиймээс энэ жил урт хугацааны том хөрөнгө оруулалт хийхэд тохиромжгүй бөгөөд харин аялал жуулчлал болон богино хугацааны төслүүдэд стратегиа чиглүүлэх нь зөв юм.
    🏠 2027 он бол таны хувьд Хувийн жил 6 байх бөгөөд энэ үед өмнөх жилийн тогтворгүй байдал цэгцэрч орлого тань илүү тогтмол болж эхэлнэ. Энэ жил хариуцлага ба гэр бүлийн энерги давамгайлах тул үйлчилгээний салбар болон бусдад өгөөжтэй байх үйл ажиллагаа танд хамгийн их ашиг авчирна. Та харилцагч нартайгаа гүнзгий холбоо тогтоож итгэлцлийг бэхжүүлэх замаар мөнгөний саваа тэлэх боломжтой бөгөөд үл хөдлөх хөрөнгө болон ахуйн тав тухдаа хөрөнгө оруулахад хамгийн таатай үе байх болно.
    🔍 2028 онд та Хувийн жил 7-ийн мөчлөгт шилжих бөгөөд энэ үед мөнгөний өсөлт түр удаашрах хандлагатай байдаг. Энэ бол мөнгөний араас хөөцөлдөх биш харин мэдлэг болон чадвараа дээшлүүлэх судалгааны жил юм. Таны матрицад 7-гийн тоо дутуу байгаа тул энэ жил та тэрхүү цоорхойг мэдлэгээр нөхөх ёстой бөгөөд оюуны өмч болон сургалтад хөрөнгө оруулбал 2029 оны их баялгийн жил буюу 8-ын мөчлөгт орохдоо асар их ашигтай ажиллах сууриа тавих болно. Сохор аз туршихаас татгалзаж зөвхөн тооцоо судалгаанд итгэж ажиллах нь таны гол стратеги байх ёстой.
    ⛰ Та одоо 29 настай байгаа бөгөөд нумерологийн тооцооллоор амьдралын 2-р мөчлөгт буюу 26 наснаас 34 нас хүртэлх хугацаанд явж байна. Энэ үеийг 1-ийн тоо удирдаж байгаа нь таны хувьд бие даасан байдал болон манлайллын оргил үе гэдгийг илтгэнэ. Орчлон ертөнц таныг энэ хугацаанд хэзээ ч бусдын дор бүү ажилла гэж шахаж байгаа бөгөөд та өөрийн гэсэн бизнесийг эхлүүлэх эсвэл бие даасан шийдвэр гаргах эрх мэдэлтэй байх ёстой. Энэ 9 жилийн мөчлөг дуусахад буюу та 34 нас хүрэхэд өөрийн гэсэн санхүүгийн вант улсыг босгосон байх тавилантай тул хамтрагч хайхын оронд өөрийн хүчинд итгэж зоригтой хөдлөх хэрэгтэй.
    💎 Таны Мастер тоо 11 болон төрсөн өдрийн 3-ын энергитэй уялдуулан санхүүгийн ивээл өдрүүдийг тооцоход сар бүрийн 1, 10, 11, 19, 20, 28, 29-ний өдрүүд хамгийн тохиромжтой байна. Энэ өдрүүдэд таны манлайлах чадвар болон зөн совин оргилдоо хүрдэг тул чухал хэлэлцээр хийх болон шинэ төсөл эхлүүлэхэд амжилт олох магадлал өндөр юм. Харин сар бүрийн 4, 13, 22, 31-ний өдрүүдэд таны сул тал болох 4-ийн энерги идэвхждэг тул ажил гацах болон санхүүгийн алдаа гаргах эрсдэлтэй тул том зарлага гаргахаас зайлсхийж сонор сэрэмжтэй байхыг зөвлөж байна.
    V ХЭСЭГ: СТРАТЕГИ БА ЗАСАЛ БУЮУ ҮЙЛ АЖИЛЛАГААНЫ ТӨЛӨВЛӨГӨӨ
    🤝 Таны амжилтын хамгийн чухал стратеги бол Аутсорсинг буюу Дутуугаа Худалдаж Авах явдал юм. Таны матрицад 4, 7, 8 гэсэн систем, аз болон гүйцэтгэлийн тоонууд байхгүй байгаа нь таныг Ганц тоглогч байх боломжгүйг харуулж байна. Таны стратеги бол Супермен шиг бүхнийг өөрөө хийх гэж зүтгэх биш харин өөрийн сул талуудыг нөхөх багийг бүрдүүлэх явдал юм. Та 4-ийн тоогүй тул өдөр тутмын нэгэн хэвийн ажлыг хийх чадваргүй тул танд Гүйцэтгэх захирал эсвэл Үйл ажиллагаа хариуцсан менежер зайлшгүй хэрэгтэй. Мөн та 8-ын тоогүй тул санхүүгийн нарийн тооцоо хийхээс залхдаг тул хатуу зарчимч Нягтлан бодогч хөлслөх нь таны мөнгийг хамгаалах цор ганц арга юм. Та зөвхөн Зөн совин 11 болон Стратеги 999 дээрээ төвлөрч бусад ажлыг бусдад даатгах нь таны баяжих хамгийн дөт зам болно.
    🛡 Таны 11 ба 22 гэсэн Мастер кодууд нь таныг бусдын сэтгэл хөдлөлийг өөртөө нааж авдаг Энергийн Спонж болгодог тул таны хувьд сэтгэл зүйн ариун цэвэр сахих нь санхүүгийн асуудлаас ч чухал юм. Та сөрөг хүмүүстэй харьцах эсвэл олны хэл амтай газар ажиллавал таны мөнгөний суваг шууд хаагддаг. Тиймээс та ажлын цагаа хатуу баримталж, орой үдэш утсаа салгаж өөрийгөө цэнэглэх цаг гаргах хэрэгтэй. Таны хувьд Ганцаардал бол эмчилгээ бөгөөд та ганцаараа байж бясалгал хийх эсвэл байгальд гарах үедээ шинэ санаа олж мөнгө олох эрч хүчээ нөхөж авдаг. Та бусдад Үгүй гэж хэлж сурах нь таны түрийвчээ хамгаалж буй хэрэг гэдгийг санаарай.
    👔 Таны Брэндинг ба Хувийн Дүр Төрх хэт албаны уйтгартай байж болохгүй харин Оюунлаг бөгөөд Эрх мэдэлтэй байх ёстой. Таны төрсөн өдрийн 3-ын энерги болон Амьдралын зам 11 нь таныг бусдаас онцгойрч, өөрийн гэсэн өвөрмөц өнгө төрхтэй байхыг шаарддаг. Та өөрийн имижийг бүрдүүлэхдээ Зөн билэгтэн Стратегич эсвэл Мэргэн зөвлөгч гэсэн дүр төрхийг сонговол хүмүүс танд илүү итгэж өндөр төлбөр төлөх болно. Таны ярианы өнгө аяс итгэл төгс, товч бөгөөд тодорхой байх ёстой. Та хэдий чинээ нууцлаг хэрнээ хүчирхэг харагдана төдий чинээ хүмүүс танд татагдах болно.
    ✨ ДУТУУ ТООНУУДЫН НЭГДСЭН ЗАСАЛ (4-7-8)
    Таны матрицад материаллаг ертөнцийн суурь болох 4, 7, 8-ын тоонууд дутагдаж байгаа тул дараах нэгдсэн заслыг амьдралдаа хэвшүүлэх шаардлагатай. 4-н тоог нөхөхийн тулд өдөр бүр тодорхой цагт босох, биеийн тамираар хичээллэх зэрэг хатуу сахилга батыг өөртөө тулгах нь таны мөнгөний суурийг бэхжүүлнэ. 
    7-н тооны азын энергийг дуудахын тулд бусдад хариу нэхэлгүйгээр туслах, сайн үйлс хийх, байгаль дэлхийтэйгээ ойр байж ногоон өнгийн болор биедээ авч явах хэрэгтэй. 8-н тооны санхүүгийн савыг нээхийн тулд мөнгөтэй харилцах соёлдоо анхаарч, хэтэвчээ үргэлж эмх цэгцтэй байлгах, санхүүгийн боловсролоо тасралтгүй дээшлүүлэх нь чухал юм. Эдгээр засал нь таны системчлэл, аз болон хариуцлагын сувгийг идэвхжүүлж өгөх болно.
    💎 Таны энергийг цэвэрлэж мөнгөний урсгалыг дуудах Амжилтын Өнгө бол Мөнгөлөг Цагаан болон Цэнхэр өнгө юм. Эдгээр өнгө нь таны 11-ийн тооны зөн совингийн энергийг идэвхжүүлж тайвшруулдаг тул чухал уулзалтад орохдоо эдгээр өнгийн хувцас эсвэл аксессуар хэрэглэх нь зүйтэй. Харин та 4 болон 8 байхгүй тул Хар бараан өнгө танд тийм ч сайн нөлөө үзүүлэхгүй байж мэднэ, учир нь энэ нь таныг улам дотогшоо болгож гутралд оруулах эрсдэлтэй. Таны Азын Тоо бол 1 ба 2 бөгөөд утасны дугаар эсвэл машины дугаартаа эдгээр тоог оролцуулах нь танд эерэг нөлөө үзүүлнэ.
    `
  },

  // --- TEMPLATE GUARDRAILS ---
  // 1) This file is SINGLE-PRODUCT only: financial numerology report.
  // 2) Add only mappings used directly by the current report prompts/calculation.
  // 3) Any gender-sensitive wording must go through NUMEROLOGY.GENDER_STYLE_MAP.
  // 4) This file is fixed for ManyChat delivery (single-provider build).
  PROCESSING_STALE_MINUTES: 8,

  // --- DELIVERY COPY ---
  DELIVERY_MESSAGE: `🔮 Сайн байна уу, {{NAME}}?\n\nТаны "Хувь Заяаны Санхүүгийн Код: Алтан Урсгалын Тайлан" бэлэн боллоо.\n\nФайл: {{URL}}\n\n(Линк дараа нь устаж магадгүй тул татаж хадгалаарай.)`
};

const STATUS = {
  PROCESSING: "PROCESSING",
  DONE: "DONE",
  NEEDS_REVIEW: "NEEDS_REVIEW",
  RETRY_PREFIX: "RETRY_"
};

// MASTER-TEMPLATE NOTE:
// Keep this map set minimal and report-focused.
// If a new product needs different domains, create a new product file instead of bloating this one.
const NUMEROLOGY = {
  LIFE_PATH_MAP: {
    1: { name: "Бие даасан бүтээгч", strategy: "Өөрийн бизнес, манлайлал", desc: "Бусдын заавраар биш, өөрийн шийдвэрээр мөнгө олдог." },
    2: { name: "Харилцааны стратегич", strategy: "Зуучлал, хамтын ажиллагаа", desc: "Хүмүүсийг холбох чадвараар мөнгөний суваг нээгддэг." },
    3: { name: "Бүтээлч илэрхийлэгч", strategy: "Контент, маркетинг, илтгэл", desc: "Үг яриа болон илэрхийллээрээ орлого татдаг." },
    4: { name: "Системийн архитектор", strategy: "Системжүүлэлт, бүтэц", desc: "Тэвчээр, сахилга бат дээр баялаг өсдөг." },
    5: { name: "Өөрчлөлтийн тоглогч", strategy: "Арилжаа, хөдөлгөөнт бизнес", desc: "Шинэчлэлт, эрсдэлийг зөв удирдахад мөнгө өснө." },
    6: { name: "Үнэ цэнийн бүтээгч", strategy: "Үйлчилгээ, чанар, гэр бүл төв", desc: "Халамж, чанараар тогтвортой орлого татдаг." },
    7: { name: "Гүн шинжээч", strategy: "Судалгаа, эксперт мэдлэг", desc: "Гүн мэдлэгээ бүтээгдэхүүн болгож мөнгө олдог." },
    8: { name: "Санхүүгийн удирдагч", strategy: "Хөрөнгө, хэлцэл, менежмент", desc: "Мөнгөний системийг удирдах хүчтэй өгөгдөл." },
    9: { name: "Алсын хараат нөлөөлөгч", strategy: "Том нөлөөтэй төсөл", desc: "Олон хүний асуудал шийдэх тусам баялаг нэмэгддэг." },
    11: { name: "Зөн совинтой Стратегич", strategy: "Оюуны нөлөөлөл, зөвлөх", desc: "Өндөр мэдрэмж ба ирээдүй харах чадвараар мөнгө бүтээнэ." },
    22: { name: "Их бүтээгч", strategy: "Том систем, том төслүүд", desc: "Том мөрөөдлийг бодит бүтэц болгох мастер код." },
    33: { name: "Сүнслэг үйлчилгээний мастер", strategy: "Ментор, эмчилгээ, сургалт", desc: "Хүмүүст үнэ цэнэ өгөх тусам орлого тогтвортой өснө." }
  },
  MATRIX_EXCESS_MAP: {
    1: { title: "Манлайллын хэт хүч", desc: "Хэт өөрийнхөөрөө зүтгэх, шийдвэрийг нэг төвөөс гаргах хандлага." },
    2: { title: "Харилцааны соронз", desc: "Хүмүүсийг татах чадвар өндөр ч сэтгэл хөдлөлд ядарч болзошгүй." },
    3: { title: "Илэрхийллийн гал", desc: "Санаа их, олон чиглэл рүү хуваагдах эрсдэлтэй." },
    4: { title: "Хатуу систем", desc: "Дүрэмд хэт баригдаж уян хатан байдал буурч болзошгүй." },
    5: { title: "Эрсдэлийн хүсэл", desc: "Өөрчлөлтөд дурлах ч тогтворгүй шийдвэр гаргах магадлалтай." },
    6: { title: "Ачаалал авах код", desc: "Бүхнийг өөрөө үүрэх хандлага мөнгөний урсгалыг удаашруулж болно." },
    7: { title: "Гүн тусгаарлалт", desc: "Хэт дотогшлох үед бодит бизнесийн хэмнэлээс тасрах эрсдэлтэй." },
    8: { title: "Хяналтын хэрэгцээ", desc: "Мөнгө, эрх мэдлийг бүрэн хянах хүсэл хэтрэх магадлалтай." },
    9: { title: "Оюуны ачаалал", desc: "Хэт их бодол нь гүйцэтгэлийг хойшлуулах эрсдэл." }
  },
  MISSING_NUMBER_MAP: {
    1: { title: "Манлайллын сул тал", risk: "Шийдвэр гаргахдаа эргэлзэх." },
    2: { title: "Харилцааны цоорхой", risk: "Хүмүүсийн дэмжлэгийг татахад саадтай." },
    3: { title: "Илэрхийллийн цоорхой", risk: "Үнэ цэнээ зах зээлд хүргэж чадахгүй байх." },
    4: { title: "Газардуулалтын блок", risk: "Санааг гүйцэтгэл болгох тэвчээр сулрах." },
    5: { title: "Уян хатан байдлын цоорхой", risk: "Өөрчлөлтөнд цаг алдаж хариулах." },
    6: { title: "Үнэ цэнийн сав", risk: "Өөрийгөө доогуур үнэлж орлогоо бууруулах." },
    7: { title: "Азын хомсдол", risk: "Амар хялбар мөнгө хөөж алдах эрсдэл." },
    8: { title: "Системийн цоорхой", risk: "Олсон мөнгөө тогтоож өсгөж чадахгүй байх." },
    9: { title: "Алсын харааны цоорхой", risk: "Эхлүүлээд дуусгахгүй байх." }
  },
  OUTSOURCING_MAP: {
    1: "Брэнд зөвлөх эсвэл PR менежер",
    2: "Харилцагч хариуцсан менежер",
    3: "Маркетинг/контент баг",
    4: "Үйл ажиллагааны менежер",
    5: "Борлуулалтын менежер",
    6: "Дизайн эсвэл үйлчилгээний чанарын менежер",
    7: "Судалгааны шинжээч",
    8: "Нягтлан бодогч эсвэл санхүүгийн мэргэжилтэн",
    9: "Төслийн менежер"
  },
  PERSONAL_YEAR_MAP: {
    1: { title: "Эхлэл", strategy: "Шинэ төсөл эхлүүлэх жил." },
    2: { title: "Хамтын ажиллагаа", strategy: "Түншлэл, гэрээ, багийн жил." },
    3: { title: "Идэвхжил", strategy: "Өөрийгөө сурталчилж өсөлт хийх жил." },
    4: { title: "Суурь", strategy: "Систем, сахилга бат, санхүүгийн дэг журам." },
    5: { title: "Өөрчлөлт", strategy: "Шинэ зах зээл, шинэ хөдөлгөөн, туршилт." },
    6: { title: "Үр шим", strategy: "Хариуцлага, үйлчилгээ, орлогын тогтворжилт." },
    7: { title: "Судалгаа", strategy: "Мэдлэг өсгөх, дотоод чанаржуулах жил." },
    8: { title: "Мөнгө", strategy: "Орлогын тэлэлт, хэлцэл, ашиг өсгөх жил." },
    9: { title: "Цэвэрлэгээ", strategy: "Дуусгалт, ашиггүйг хасах, шинэ циклд бэлтгэх." },
    11: { title: "Мастер мэдрэмж", strategy: "Өндөр нөлөөтэй санаагаа зах зээлд буулгах жил." },
    22: { title: "Мастер бүтэц", strategy: "Том бүтээн байгуулалтад хөрөнгө төвлөрүүлэх жил." }
  },
  LUCKY_ITEM_MAP: {
    1: { color: "Алтлаг, Улаан", stone: "Рубин" },
    2: { color: "Мөнгөлөг, Цагаан", stone: "Сувд" },
    3: { color: "Шар, Нил ягаан", stone: "Цитрин" },
    4: { color: "Хөх, Саарал", stone: "Лазурит" },
    5: { color: "Ногоон, Оюу", stone: "Маргад" },
    6: { color: "Ягаан, Цэнхэр", stone: "Ягаан болор" },
    7: { color: "Гүн хөх", stone: "Аметист" },
    8: { color: "Хар, Хар хөх", stone: "Обсидиан" },
    9: { color: "Улаан хүрэн", stone: "Анар" },
    11: { color: "Мөнгөлөг цагаан, Цэнхэр", stone: "Цагаан болор" },
    22: { color: "Ногоон, Алтлаг", stone: "Хаш" },
    33: { color: "Тэнгэрийн цэнхэр", stone: "Ларимар" }
  },
  LUCKY_NUMBERS_MAP: {
    1: [1, 9, 3], 2: [2, 6, 11], 3: [3, 6, 9], 4: [4, 8, 1], 5: [5, 1, 3],
    6: [6, 3, 9], 7: [7, 11, 5], 8: [8, 4, 1], 9: [9, 6, 3], 11: [1, 2, 7],
    22: [2, 4, 8], 33: [3, 6, 9]
  },
  GENDER_STYLE_MAP: {
    "Эрэгтэй": {
      persona: "Эрэгтэй хүнд тохирсон, шууд бөгөөд хариуцлага төвтэй хэллэг ашиглана.",
      preferred: "эрэгтэй хүн, манлайлагч, стратегич",
      forbidden: "эмэгтэй хүн, хатагтай, бүсгүй",
      replaceRules: [
        { from: "эмэгтэй хүн", to: "эрэгтэй хүн" },
        { from: "хатагтай", to: "эрэгтэй хүн" },
        { from: "бүсгүй", to: "эрэгтэй хүн" }
      ]
    },
    "Эмэгтэй": {
      persona: "Эмэгтэй хүнд тохирсон, хүчирхэг бөгөөд эмзэг мэдрэмжийг хүндэтгэсэн хэллэг ашиглана.",
      preferred: "эмэгтэй хүн, манлайлагч, стратегич",
      forbidden: "эр хүн, ноён, баатар",
      replaceRules: [
        { from: "эр хүн", to: "эмэгтэй хүн" },
        { from: "ноён", to: "эмэгтэй хүн" },
        { from: "баатар", to: "тэмүүлэгч" }
      ]
    }
  }
};

// --- MAIN FUNCTION ---
function main() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return;

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
    if (!sheet) throw new Error(`SYSTEM: "${CONFIG.SHEET_NAME}" sheet олдсонгүй.`);

    const rows = sheet.getDataRange().getValues();
    const KEYS = {
      GEMINI: PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY"),
      MANYCHAT: PropertiesService.getScriptProperties().getProperty("MANYCHAT_API_TOKEN"),
      TEMPLATE: PropertiesService.getScriptProperties().getProperty("TEMPLATE_ID")
    };
    validateKeys(KEYS);

    let processedCount = 0;
    const startTime = Date.now();

    for (let i = 1; i < rows.length; i++) {
      if (Date.now() - startTime > CONFIG.MAX_EXECUTION_TIME - CONFIG.SAFETY_BUFFER) break;
      if (processedCount >= CONFIG.BATCH_SIZE) break;

      const row = rows[i];
      const rowNumber = i + 1;
      const rawInput = String(row[CONFIG.COLUMNS.INPUT] || "").trim();
      const currentStatus = normalizeStatus(row[CONFIG.COLUMNS.STATUS]);
      const currentPdf = String(row[CONFIG.COLUMNS.PDF] || "").trim();
      const lastUpdated = row[CONFIG.COLUMNS.DATE];

      if (!shouldProcessRow(rawInput, currentStatus, currentPdf, lastUpdated)) continue;

      sheet.getRange(rowNumber, CONFIG.COLUMNS.STATUS + 1).setValue(STATUS.PROCESSING);
      SpreadsheetApp.flush();

      try {
        let pdfResult = null;
        let deliveryDone = false;
        try {
          const profile = parseAndCalculateProfile(rawInput, KEYS.GEMINI);
          const reportResult = generateSequentialReport(profile, KEYS.GEMINI);

          if (!reportResult || !reportResult.text || reportResult.text.length < 400) {
            throw new Error("GENERATE: Тайлан хангалтгүй богино үүссэн.");
          }

          pdfResult = createPdf(profile.name || "Эрхэм", reportResult.text, KEYS.TEMPLATE);
          sendManyChat(row[CONFIG.COLUMNS.ID], pdfResult.url, profile.name || "Эрхэм", KEYS.MANYCHAT);
          deliveryDone = true;

          const tokenBreakdown = buildTokenBreakdown(profile, reportResult);
          const totalTokens = tokenBreakdown.totalTokens || (profile.parsingUsage || 0) + (reportResult.usage || 0);
          const now = getNowStamp();

          sheet.getRange(rowNumber, CONFIG.COLUMNS.PDF + 1).setValue(pdfResult.url);
          sheet.getRange(rowNumber, CONFIG.COLUMNS.STATUS + 1).setValue(STATUS.DONE);
          sheet.getRange(rowNumber, CONFIG.COLUMNS.TOKEN + 1).setValue(totalTokens);
          sheet.getRange(rowNumber, CONFIG.COLUMNS.DEBUG + 1).setValue(JSON.stringify({
            profile: profile,
            token_breakdown: tokenBreakdown
          }));
          sheet.getRange(rowNumber, CONFIG.COLUMNS.DATE + 1).setValue(now);
          sheet.getRange(rowNumber, CONFIG.COLUMNS.VER + 1).setValue(CONFIG.VERSION);
          sheet.getRange(rowNumber, CONFIG.COLUMNS.ERROR + 1).setValue("");

          processedCount++;
        } catch (innerErr) {
          if (pdfResult && pdfResult.fileId && !deliveryDone) {
            try {
              DriveApp.getFileById(pdfResult.fileId).setTrashed(true);
            } catch (cleanupErr) {
              console.warn("PDF cleanup warning:", cleanupErr);
            }
          }
          throw innerErr;
        }
      } catch (err) {
        console.error(err);
        applyRetryStatus(sheet, rowNumber, currentStatus, err);
      }
    }
  } finally {
    lock.releaseLock();
  }
}

function validateKeys(keys) {
  if (!keys.GEMINI) throw new Error("SYSTEM: GEMINI_API_KEY байхгүй.");
  if (!keys.TEMPLATE) throw new Error("SYSTEM: TEMPLATE_ID байхгүй.");
  if (!keys.MANYCHAT) throw new Error("SYSTEM: MANYCHAT_API_TOKEN байхгүй.");
}

function getNowStamp() {
  return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm");
}

function createUsageStats() {
  return {
    totalTokens: 0,
    inputTokens: 0,
    outputTokens: 0,
    requests: 0
  };
}

function mergeUsageStats(target, detail) {
  if (!target || !detail) return target;
  target.totalTokens += Number(detail.totalTokens || 0);
  target.inputTokens += Number(detail.inputTokens || 0);
  target.outputTokens += Number(detail.outputTokens || 0);

  if (detail.requests !== undefined) {
    target.requests += Number(detail.requests || 0);
  } else if (
    Number(detail.totalTokens || 0) > 0 ||
    Number(detail.inputTokens || 0) > 0 ||
    Number(detail.outputTokens || 0) > 0
  ) {
    target.requests += 1;
  }
  return target;
}

function cloneUsageStats(stats) {
  return {
    totalTokens: Number((stats && stats.totalTokens) || 0),
    inputTokens: Number((stats && stats.inputTokens) || 0),
    outputTokens: Number((stats && stats.outputTokens) || 0),
    requests: Number((stats && stats.requests) || 0)
  };
}

function buildTokenBreakdown(profile, reportResult) {
  const parseStats = cloneUsageStats(profile && profile.parsingUsageDetail ? profile.parsingUsageDetail : createUsageStats());
  const reportStats = cloneUsageStats(reportResult && reportResult.usageDetail ? reportResult.usageDetail : createUsageStats());

  const total = Number(parseStats.totalTokens || 0) + Number(reportStats.totalTokens || 0);
  const input = Number(parseStats.inputTokens || 0) + Number(reportStats.inputTokens || 0);
  const output = Number(parseStats.outputTokens || 0) + Number(reportStats.outputTokens || 0);
  const requests = Number(parseStats.requests || 0) + Number(reportStats.requests || 0);
  const inputPct = total > 0 ? Number(((input / total) * 100).toFixed(1)) : 0;
  const outputPct = total > 0 ? Number(((output / total) * 100).toFixed(1)) : 0;

  return {
    totalTokens: total,
    inputTokens: input,
    outputTokens: output,
    inputPct: inputPct,
    outputPct: outputPct,
    requests: requests,
    parse: parseStats,
    report: reportStats
  };
}

function normalizeStatus(statusCell) {
  return String(statusCell || "").trim().toUpperCase();
}

function getRetryCount(status) {
  const m = String(status || "").match(/^RETRY_(\d+)$/i);
  return m ? Number(m[1]) : 0;
}

function shouldProcessRow(rawInput, status, pdfUrl, lastUpdated) {
  if (!rawInput) return false;
  if (pdfUrl && status !== STATUS.PROCESSING && !status.startsWith(STATUS.RETRY_PREFIX)) return false;
  if (status === STATUS.DONE || status === STATUS.NEEDS_REVIEW) return false;
  if (status.startsWith("ERROR_")) return false;
  if (status === STATUS.PROCESSING) return isStaleProcessing(lastUpdated);

  if (!status) return true;

  return status === "NEW" || status.startsWith(STATUS.RETRY_PREFIX);
}

function isStaleProcessing(lastUpdated) {
  const ts = parseSheetTimestamp(lastUpdated);
  if (!ts) return true;
  const diff = Date.now() - ts;
  return diff >= CONFIG.PROCESSING_STALE_MINUTES * 60 * 1000;
}

function parseSheetTimestamp(value) {
  if (!value) return null;

  if (Object.prototype.toString.call(value) === "[object Date]" && !isNaN(value.getTime())) {
    return value.getTime();
  }

  const s = String(value).trim();
  if (!s) return null;

  // Supports "yyyy-MM-dd HH:mm" (sheet stamp) and browser-native date strings.
  const normalized = s.includes("T") ? s : s.replace(" ", "T");
  const dt = new Date(normalized);
  return isNaN(dt.getTime()) ? null : dt.getTime();
}

function detectFailureType(err) {
  const msg = String(err && err.message ? err.message : err);
  if (msg.startsWith("NORMALIZE:")) return "ERROR_NORMALIZE";
  if (msg.startsWith("DELIVERY:")) return "ERROR_DELIVERY";
  if (msg.startsWith("PDF:")) return "ERROR_PDF";
  return "ERROR_GENERATE";
}

function applyRetryStatus(sheet, rowNumber, previousStatus, err) {
  const now = getNowStamp();
  const failureType = detectFailureType(err);
  const message = `${failureType}: ${String(err.message || err)}`;
  const currentRetry = getRetryCount(previousStatus);
  const nextRetry = currentRetry + 1;

  if (nextRetry <= CONFIG.MAX_RETRY_COUNT) {
    sheet.getRange(rowNumber, CONFIG.COLUMNS.STATUS + 1).setValue(`${STATUS.RETRY_PREFIX}${nextRetry}`);
  } else {
    sheet.getRange(rowNumber, CONFIG.COLUMNS.STATUS + 1).setValue(STATUS.NEEDS_REVIEW);
  }

  sheet.getRange(rowNumber, CONFIG.COLUMNS.ERROR + 1).setValue(message);
  sheet.getRange(rowNumber, CONFIG.COLUMNS.DATE + 1).setValue(now);
  sheet.getRange(rowNumber, CONFIG.COLUMNS.VER + 1).setValue(CONFIG.VERSION);
}

// ==========================================
// 1. CORE LOGIC ENGINE (AI POWERED PARSING)
// ==========================================

function parseAndCalculateProfile(rawInput, apiKey) {
  const normalized = normalizeInputWithAI(rawInput, apiKey);
  const [year, month, day] = normalized.date.split(".").map(Number);

  const lifePath = calculateLifePath(year, month, day);
  const lifePathInfo = NUMEROLOGY.LIFE_PATH_MAP[lifePath.number] || NUMEROLOGY.LIFE_PATH_MAP[1];
  const dayNumber = reduceNumber(day, false);
  const hiddenDriver = reduceNumber(reduceNumber(year, false) + reduceNumber(month, false), false);
  const matrix = calculatePythagorasMatrix(year, month, day);
  const hiddenNumbers = calculateHiddenNumbers(year, month, day, matrix.rawN3, matrix.rawN4);
  const karmicDebt = checkKarmicDebt(day, lifePath.rawSums);
  const forecast = calculatePersonalYearForecast(month, day);
  const age = calculateAge(year, month, day);
  const ageCycle = calculateAgeCycle(age, month);

  const excessNumbers = [];
  for (let n = 1; n <= 9; n++) {
    if (matrix.counts[n] >= 3) {
      excessNumbers.push({
        number: n,
        count: matrix.counts[n],
        title: NUMEROLOGY.MATRIX_EXCESS_MAP[n].title,
        desc: NUMEROLOGY.MATRIX_EXCESS_MAP[n].desc
      });
    }
  }

  const missingNumbers = [];
  for (let n = 1; n <= 9; n++) {
    if (matrix.counts[n] === 0) {
      missingNumbers.push({
        number: n,
        title: NUMEROLOGY.MISSING_NUMBER_MAP[n].title,
        risk: NUMEROLOGY.MISSING_NUMBER_MAP[n].risk,
        outsource: NUMEROLOGY.OUTSOURCING_MAP[n]
      });
    }
  }

  const lucky = NUMEROLOGY.LUCKY_ITEM_MAP[lifePath.number] || NUMEROLOGY.LUCKY_ITEM_MAP[1];
  const luckyNumbers = NUMEROLOGY.LUCKY_NUMBERS_MAP[lifePath.number] || [1, 2, 8];
  const genderStyle = getGenderStyle(normalized.gender);

  return {
    name: normalized.name,
    gender: normalized.gender,
    genderPersona: genderStyle.persona,
    genderPreferred: genderStyle.preferred,
    genderForbidden: genderStyle.forbidden,
    dob: normalized.date,
    age: age,
    parsingUsage: normalized.usage,
    parsingUsageDetail: normalized.usageDetail || createUsageStats(),

    lifePath: lifePath.number,
    lifePathName: lifePathInfo.name,
    lifePathDesc: lifePathInfo.desc,
    lifePathStrategy: lifePathInfo.strategy,
    lifePathCalcString: lifePath.calculation,
    dayNumber: dayNumber,
    hiddenDriver: hiddenDriver,

    matrixCounts: matrix.counts,
    matrixSummary: buildMatrixSummary(matrix.counts),
    excessNumbers: excessNumbers,
    missingNumbers: missingNumbers,
    hiddenNumbers: hiddenNumbers,

    karmicDebt: karmicDebt,
    forecastText: forecast.text,
    forecastYears: forecast.years,
    ageCycleTitle: ageCycle.title,
    ageCycleContent: ageCycle.content,

    luckyColor: lucky.color,
    luckyStone: lucky.stone,
    luckyNumbers: luckyNumbers.join(", ")
  };
}

function normalizeInputWithAI(raw, key) {
  const rawDate = normalizeDateValue(raw);
  const rawGender = detectGenderFromRaw(raw);
  if (rawDate && rawGender) {
    return {
      date: rawDate,
      gender: rawGender,
      name: normalizeName(raw, null),
      usage: 0,
      usageDetail: createUsageStats()
    };
  }

  const prompt = `
  TASK: Convert the input into strict JSON.
  INPUT: "${raw}"

  RULES:
  - Date must be YYYY.MM.DD
  - Gender must be "Эрэгтэй" or "Эмэгтэй"
  - Name optional, default "Эрхэм"
  - Return JSON only, no markdown

  JSON:
  {"date":"YYYY.MM.DD","gender":"Эрэгтэй","name":"Эрхэм"}
  `;

  let aiData = {};
  const usageStats = createUsageStats();

  try {
    const result = callGemini(prompt, key, 2);
    mergeUsageStats(usageStats, result.usageDetail);
    aiData = extractJsonBlock(result.text);
  } catch (e) {
    console.warn("Normalize AI warning:", e);
  }

  const aiDate = normalizeDateValue(aiData && aiData.date);
  if (rawDate && aiDate && rawDate !== aiDate) {
    console.warn(`Normalize mismatch: raw=${rawDate}, ai=${aiDate}, picked=raw`);
  }
  const date = rawDate || aiDate;
  if (!date) throw new Error("NORMALIZE: Төрсөн огноо зөв танигдсангүй.");

  const gender = normalizeGender(raw, aiData && aiData.gender);
  const name = normalizeName(raw, aiData && aiData.name);

  return { date, gender, name, usage: usageStats.totalTokens, usageDetail: usageStats };
}

// ==========================================
// 2. SEQUENTIAL GENERATION (BRIDGE ARCHITECTURE)
// ==========================================

function generateSequentialReport(data, apiKey) {
  // MAINTENANCE NOTE:
  // Keep 3-part generation structure, but each part must be guided by FULL reference blocks.
  // Do not remove exact section headers or continuity helpers.
  const headers = {
    I: "**I ХЭСЭГ: САНХҮҮГИЙН АРХЕТИП БА МӨНГӨНИЙ ХУВЬ ЗАЯА**",
    II: "**II ХЭСЭГ: ПИФАГОРЫН МАТРИЦ БА УР ЧАДВАР**",
    III: "**III ХЭСЭГ: КАРМЫН ОНОШЛОГОО БА МӨНГӨНИЙ ШУГАМУУД**",
    IV: "**IV ХЭСЭГ: ЦАГ ХУГАЦААНЫ ТӨЛӨВЛӨЛТ БА ИРЭЭДҮЙН ЗУРАГЛАЛ**",
    V: "**V ХЭСЭГ: СТРАТЕГИ БА ЗАСАЛ БУЮУ ҮЙЛ АЖИЛЛАГААНЫ ТӨЛӨВЛӨГӨӨ**"
  };

  const hardFacts = buildHardFactsBlock(data);

  const systemPrompt = `
ROLE: Financial Numerologist (Mongolian, Premium Persona).
LANGUAGE: Natural Mongolian only.
STYLE: Native, confident, deep explanation, no English words.
FORMAT: Bold ONLY for section headers. Use emojis for subsection starts.
RULE: Use exact user data and avoid contradictions.
GENDER RULE: Respect user's gender strictly. If wording is uncertain, use neutral "хүн".
OUTPUT RULE: Start immediately from the required section header.
FORBIDDEN OPENINGS: Never start with "За ойлголоо", "Ойлголоо", "Мэдлээ", "Тийм ээ", "OK".
FACT RULE: Never recalculate numbers/dates that are already provided in HARD FACTS.
LIST RULE: Do NOT use markdown bullets ("* " or "- "). Use plain paragraphs or bullet symbol only.
STYLE RULE: Do not repeat "эмэгтэй хүн/эрэгтэй хүн" in every paragraph.
`;

  const prompt1 = `
${systemPrompt}
TASK: Write Part 1 only.
Must include these exact headers:
${headers.I}
${headers.II}

USER DATA:
- Төрсөн огноо: ${data.dob} (${data.gender})
- Хүйсийн хэллэгийн дүрэм: ${data.genderPersona}
- Давуу хэрэглэх үгс: ${data.genderPreferred}
- Хориглох үгс: ${data.genderForbidden}
- Амьдралын зам: ${data.lifePath} (${data.lifePathName})
- Амьдралын замын тайлбар: ${data.lifePathDesc}
- Амьдралын замын тооцоо: ${data.lifePathCalcString}
- Өдрийн тоо: ${data.dayNumber}
- Далд энерги: ${data.hiddenDriver}
- Матриц: ${data.matrixSummary}
- Илүүдэл тоонууд: ${JSON.stringify(data.excessNumbers)}
- Дутуу тоонууд: ${JSON.stringify(data.missingNumbers)}

HARD FACTS:
${hardFacts}

STRICT:
- Reference text is only for style/persona.
- Never copy sample DOB from reference.
- Never contradict HARD FACTS.

REFERENCE STYLE:
${CONFIG.REFERENCES.PART_1}
`;
  const usageStats = createUsageStats();
  const res1 = callGemini(prompt1, apiKey);
  mergeUsageStats(usageStats, res1.usageDetail);
  let part1 = sanitizeGeneratedPart(res1.text, {
    startHeader: headers.I,
    stopHeaders: [headers.III, headers.IV, headers.V]
  });
  part1 = enforceHeaderAtTop(part1, headers.I, /I ХЭСЭГ:\s*САНХҮҮГИЙН АРХЕТИП БА МӨНГӨНИЙ ХУВЬ ЗАЯА/i);

  let secI = extractSectionBody(part1, headers.I, [headers.II, headers.III, headers.IV, headers.V]);
  let secII = extractSectionBody(part1, headers.II, [headers.III, headers.IV, headers.V]);
  secI = repairSectionBody("I", secI, 780, data, apiKey, systemPrompt, tailText(part1, 700), headers, usageStats);
  secII = repairSectionBody("II", secII, 900, data, apiKey, systemPrompt, tailText(secI, 700), headers, usageStats);
  // Canonical money-line diagnostics must live at the end of Section II.
  secII = enforceCanonicalMoneyLineSection(secII, data);
  assertSectionQuality("I", secI, 780);
  assertSectionQuality("II", secII, 900);
  part1 = composeSections([
    { header: headers.I, body: secI },
    { header: headers.II, body: secII }
  ]);

  const prompt2 = `
${systemPrompt}
TASK: Write Part 2 only.
Must include exact header:
${headers.III}

CONTEXT: Part 1 already written. Do not repeat.
CONTINUITY: Match tone and rhythm from this excerpt, but do NOT repeat it:
${tailText(part1, 650)}
USER DATA:
- Хүйс: ${data.gender}
- Хүйсийн хэллэгийн дүрэм: ${data.genderPersona}
- Давуу хэрэглэх үгс: ${data.genderPreferred}
- Хориглох үгс: ${data.genderForbidden}
- Кармын өр: ${data.karmicDebt}
- Дутуу тоонууд: ${JSON.stringify(data.missingNumbers)}
- Матрицын дэлгэрэнгүй: ${data.matrixSummary}
- Нэмэлт далд тоонууд: ${data.hiddenNumbers.text || "Байхгүй"}

HARD FACTS:
${hardFacts}

STRICT:
- Never claim a missing number as present.
- Never claim a present number as missing.
- Keep only Section III content.

REFERENCE STYLE:
${CONFIG.REFERENCES.PART_2}
`;
  const res2 = callGemini(prompt2, apiKey);
  mergeUsageStats(usageStats, res2.usageDetail);
  let part2 = sanitizeGeneratedPart(res2.text, {
    startHeader: headers.III,
    stopHeaders: [headers.IV, headers.V]
  });
  part2 = removeLeadingOverlap(part1, part2);
  part2 = enforceHeaderAtTop(part2, headers.III, /III ХЭСЭГ:\s*КАРМЫН ОНОШЛОГОО БА МӨНГӨНИЙ ШУГАМУУД/i);
  let secIII = extractSectionBody(part2, headers.III, [headers.IV, headers.V]);
  secIII = repairSectionBody("III", secIII, 900, data, apiKey, systemPrompt, tailText(part1, 700), headers, usageStats);
  // Ensure Section III does not repeat canonical line diagnostics from Section II.
  secIII = removeCanonicalMoneyLineSection(secIII);
  assertSectionQuality("III", secIII, 900);
  part2 = composeSections([{ header: headers.III, body: secIII }]);

  const prompt3 = `
${systemPrompt}
TASK: Write Part 3 only.
Must include exact header:
${headers.V}

CONTEXT: Parts 1,2 already written. Do not repeat.
CONTINUITY: Match tone and rhythm from this excerpt, but do NOT repeat it:
${tailText(part2, 650)}
USER DATA:
- Хүйс: ${data.gender}
- Хүйсийн хэллэгийн дүрэм: ${data.genderPersona}
- Давуу хэрэглэх үгс: ${data.genderPreferred}
- Хориглох үгс: ${data.genderForbidden}
- Ирэх 3 жилийн прогноз:
${data.forecastText}
- Насны мөчлөг: ${data.ageCycleTitle}
- Мөчлөгийн тайлбар: ${data.ageCycleContent}
- Аутсорсинг шийдлүүд: ${JSON.stringify(data.missingNumbers.map(m => m.outsource))}
- Амжилтын өнгө: ${data.luckyColor}
- Азын чулуу: ${data.luckyStone}
- Азын тоо: ${data.luckyNumbers}

HARD FACTS:
${hardFacts}

  STRICT:
  - Keep only Section V content.
  - Do not write Section IV in this response.

REFERENCE STYLE:
${CONFIG.REFERENCES.PART_3}
`;
  const res3 = callGemini(prompt3, apiKey);
  mergeUsageStats(usageStats, res3.usageDetail);
  let part3 = sanitizeGeneratedPart(res3.text, {
    startHeader: headers.V,
    stopHeaders: []
  });
  part3 = removeLeadingOverlap(`${part1}\n\n${part2}`, part3);

  part3 = enforceHeaderAtTop(part3, headers.V, /V ХЭСЭГ:\s*СТРАТЕГИ БА ЗАСАЛ БУЮУ ҮЙЛ АЖИЛЛАГААНЫ ТӨЛӨВЛӨГӨӨ/i);
  const secIV = buildDeterministicSectionIV(data);
  let secV = extractSectionBody(part3, headers.V, []);

  secV = repairSectionBody("V", secV, 820, data, apiKey, systemPrompt, tailText(secIV, 700), headers, usageStats);
  secV = enforceOutsourceRoleNumberAlignment(secV, data);
  assertSectionQuality("IV", secIV, 260);
  assertSectionQuality("V", secV, 820);
  part3 = composeSections([
    { header: headers.IV, body: secIV },
    { header: headers.V, body: secV }
  ]);

  const rawReport = `${part1}\n\n${part2}\n\n${part3}`;
  const guardedReport = applyGenderLanguageGuard(rawReport, data.gender);
  const factGuardedReport = applyDeterministicFactGuards(guardedReport, data);
  const finalText = normalizeReportArtifacts(factGuardedReport);
  return {
    text: finalText,
    usage: usageStats.totalTokens,
    usageDetail: usageStats
  };
}

function tailText(text, maxChars) {
  const s = String(text || "");
  if (!s) return "";
  return s.length <= maxChars ? s : s.slice(s.length - maxChars);
}

function sanitizeGeneratedPart(text, opts) {
  let out = normalizeFinalReport(text);
  out = stripConversationalLead(out);
  if (opts && opts.startHeader) out = trimBeforeHeader(out, opts.startHeader);
  if (opts && opts.stopHeaders && opts.stopHeaders.length) out = trimAfterHeaders(out, opts.stopHeaders);
  out = stripConversationalLead(out);
  return normalizeFinalReport(out);
}

function stripConversationalLead(text) {
  const leadPattern = /^(за+|за ойлголоо|ойлголоо|мэдлээ|тийм ээ|мэдээж|за тэгье|ok|okay)\b/i;
  const lines = String(text || "").split(/\n/);
  let cut = 0;
  while (cut < Math.min(lines.length, 6)) {
    const line = lines[cut].trim().replace(/^[-*•\d\.\)\s]+/, "");
    if (!line) {
      cut++;
      continue;
    }
    if (leadPattern.test(line)) {
      cut++;
      continue;
    }
    break;
  }
  return lines.slice(cut).join("\n").trim();
}

function trimBeforeHeader(text, header) {
  const s = String(text || "");
  const idx = s.indexOf(header);
  if (idx > -1) return s.slice(idx).trim();
  return s.trim();
}

function trimAfterHeaders(text, headers) {
  const s = String(text || "");
  let cutIndex = -1;
  for (let i = 0; i < headers.length; i++) {
    const idx = s.indexOf(headers[i]);
    if (idx > 0 && (cutIndex === -1 || idx < cutIndex)) {
      cutIndex = idx;
    }
  }
  if (cutIndex > 0) return s.slice(0, cutIndex).trim();
  return s.trim();
}

function removeLeadingOverlap(previousText, currentText) {
  const prev = String(previousText || "");
  let cur = String(currentText || "").trim();
  if (!prev || !cur) return cur;

  for (let len = Math.min(260, cur.length); len >= 80; len -= 10) {
    const probe = cur.slice(0, len).trim();
    if (probe.length < 80) continue;
    if (prev.indexOf(probe) !== -1) {
      const stripped = cur.slice(len).trim();
      if (stripped.length >= 120) return stripped;
    }
  }

  const firstBlock = (cur.split(/\n\s*\n/)[0] || "").trim();
  if (firstBlock.length >= 80 && prev.indexOf(firstBlock) !== -1) {
    const stripped = cur.slice(firstBlock.length).trim();
    if (stripped.length >= 120) cur = stripped;
  }

  return cur;
}

function hasHeaderRegex(text, pattern) {
  return pattern.test(String(text || ""));
}

function enforceHeaderAtTop(text, exactHeader, headerRegex) {
  let out = normalizeFinalReport(text);
  if (!hasHeaderRegex(out, headerRegex)) {
    return normalizeFinalReport(`${exactHeader}\n${out}`);
  }
  return trimBeforeHeader(out, exactHeader);
}

function removeKnownHeaders(text, headers) {
  let out = String(text || "");
  const list = [headers.I, headers.II, headers.III, headers.IV, headers.V];
  for (let i = 0; i < list.length; i++) {
    const h = list[i];
    if (!h) continue;
    const escaped = escapeRegExp(h);
    out = out.replace(new RegExp(escaped, "g"), "");
  }
  return normalizeFinalReport(out);
}

function extractSectionBody(text, startHeader, stopHeaders) {
  const src = normalizeFinalReport(text);
  const start = src.indexOf(startHeader);
  if (start === -1) return "";

  const from = start + startHeader.length;
  let to = src.length;
  const stops = stopHeaders || [];
  for (let i = 0; i < stops.length; i++) {
    const idx = src.indexOf(stops[i], from);
    if (idx > -1 && idx < to) to = idx;
  }
  return normalizeFinalReport(src.slice(from, to));
}

function isWeakSection(body, minChars) {
  const clean = normalizeFinalReport(body);
  if (!clean) return true;
  const paragraphCount = clean.split(/\n{2,}/).filter(Boolean).length;
  return clean.length < minChars || paragraphCount < 2;
}

function hasUnfinishedEnding(text) {
  const clean = normalizeFinalReport(text);
  if (!clean) return true;
  const lines = clean.split("\n").map(line => line.trim()).filter(Boolean);
  if (!lines.length) return true;
  const lastLine = lines[lines.length - 1];
  return !/[.!?…]["')»”]?$/.test(lastLine);
}

function needsSectionRepair(body, minChars) {
  return isWeakSection(body, minChars) || hasUnfinishedEnding(body);
}

function repairSectionBody(sectionKey, currentBody, minChars, data, apiKey, systemPrompt, continuity, headers, usageStats) {
  let body = normalizeFinalReport(currentBody);
  const maxAttempts = sectionKey === "IV" ? 3 : 2;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    if (!needsSectionRepair(body, minChars)) break;
    const regen = generateSectionBody(sectionKey, data, apiKey, systemPrompt, continuity, headers, usageStats);
    if (!regen) break;
    body = normalizeFinalReport(regen);
  }
  return body;
}

function assertSectionQuality(sectionKey, body, minChars) {
  if (needsSectionRepair(body, minChars)) {
    throw new Error(`GENERATE: ${sectionKey} хэсэг дутуу эсвэл тасархай байна.`);
  }
}

function composeSections(sections) {
  return normalizeFinalReport(
    (sections || [])
      .map(s => `${s.header}\n${normalizeFinalReport(s.body || "")}`)
      .join("\n\n")
  );
}

function buildCanonicalLineDiagnosticsBlock(data) {
  const counts = data.matrixCounts || {};
  const c1 = Number(counts[1] || 0);
  const c2 = Number(counts[2] || 0);
  const c3 = Number(counts[3] || 0);
  const c4 = Number(counts[4] || 0);
  const c6 = Number(counts[6] || 0);
  const c7 = Number(counts[7] || 0);
  const c9 = Number(counts[9] || 0);
  const has147 = c1 > 0 && c4 > 0 && c7 > 0;
  const has123 = c1 > 0 && c2 > 0 && c3 > 0;
  const has369 = c3 > 0 && c6 > 0 && c9 > 0;

  const miss147 = [];
  if (c1 === 0) miss147.push("1");
  if (c4 === 0) miss147.push("4");
  if (c7 === 0) miss147.push("7");

  const miss123 = [];
  if (c1 === 0) miss123.push("1");
  if (c2 === 0) miss123.push("2");
  if (c3 === 0) miss123.push("3");

  const miss369 = [];
  if (c3 === 0) miss369.push("3");
  if (c6 === 0) miss369.push("6");
  if (c9 === 0) miss369.push("9");

  const intellect = has369
    ? `Таны матрицын дээд талын хэвтээ шугам болох 3, 6, 9 тоонууд бүрэн бүтэн байна (3=${c3}, 6=${c6}, 9=${c9}). Үүнийг оюун ухааны шугам буюу алтан толгойн шугам гэж нэрлэдэг бөгөөд мэдээллээс мөнгө босгох, гарц гаргалгаа олох чадвар өндөр байгааг илтгэнэ.`
    : `Таны матрицын дээд талын хэвтээ шугам болох 3, 6, 9 тоонуудаас ${miss369.join(", ")} дутуу тул энэ шугам бүрэн бүтэн биш байна (3=${c3}, 6=${c6}, 9=${c9}). Үүнийг оюун ухааны шугам буюу алтан толгойн шугам гэж нэрлэдэг. 3 ба 9-ийн энерги хүчтэй ч ${c6 === 0 ? "6-гийн тоо дутуу" : "дутуу холбоос"} байгаа нь мэдлэг, бүтээлч санааныхаа үнэ цэнийг доогуур үнэлж орлогоо бууруулах эрсдэлтэйг сануулж байна.`;

  const brand = has123
    ? `Мөн босоо эхний шугам болох 1, 2, 3 тоонууд таны матрицад бүрэн бүтэн, хүчтэй байна (1=${c1}, 2=${c2}, 3=${c3}). Үүнийг өөрийгөө үнэлэх шугам буюу хувийн брэнд гэж нэрлэдэг. Энэ шугам бүтэн байгаа нь өөртөө итгэх итгэл өндөр, олонд танигдах замаар мөнгө олох суурь сайн байгааг харуулна.`
    : `Мөн босоо эхний шугам болох 1, 2, 3 тоонуудын шугам бүрэн биш байна (1=${c1}, 2=${c2}, 3=${c3}; дутуу: ${miss123.join(", ")}). Энэ нь өөрийн үнэ цэнийг зах зээлд тогтвортой ойлгуулахад саад үүсгэж болзошгүй тул мессеж, байршуулалт, брэндийн өнгө аясаа нэг мөр стандартчлах шаардлагатай.`;

  const goal = has147
    ? `Таны матрицын 1, 4, 7 гэсэн тоонууд бүрэн бүтэн байгаа нь зорилгын шугамыг хүчирхэг болгож байна (1=${c1}, 4=${c4}, 7=${c7}). Та том зорилгоо өдөр тутмын тууштай хөдөлмөр болон зөн совинтой шийдвэрээр бодит үр дүн болгох потенциалтай.`
    : `Таны матрицын 1, 4, 7 гэсэн тоонуудын зорилгын шугам бүрэн биш байна (1=${c1}, 4=${c4}, 7=${c7}; дутуу: ${miss147.join(", ")}). Энэ үед санаа хурдан төрөвч гүйцэтгэл тасалдах эрсдэлтэй тул өдөр тутмын дэг, хяналтын цикл, тууштай гүйцэтгэлийг зориуд системчлэх шаардлагатай.`;

  return normalizeFinalReport([
    "📈 МӨНГӨНИЙ ШУГАМУУДЫН БҮРЭН ТАЙЛАЛ",
    "Таны матрицын тоонууд хоорондоо холбогдож, таны санхүүгийн амьдралын чухал шугамуудыг үүсгэдэг.",
    `• Оюун ухааны шугам (3, 6, 9): ${intellect}`,
    `• Өөрийгөө үнэлэх шугам буюу хувийн брэнд (1, 2, 3): ${brand}`,
    `• Зорилгын шугам (1, 4, 7): ${goal}`
  ].join("\n\n"));
}

function isCanonicalLineDiagnosticsParagraph(paragraph) {
  const p = String(paragraph || "");
  return /мөнгөний\s*шугамуудын\s*бүрэн\s*тайлал/i.test(p) ||
    /материаллаг\s*шугам/i.test(p) ||
    /зорилгын\s*шугам/i.test(p) ||
    /хувийн\s*брэнд/i.test(p) ||
    /өөрийгөө\s*үнэлэх\s*шугам/i.test(p) ||
    /мөрөөдөгчийн\s*гацаа/i.test(p) ||
    /оюун\s*ухааны\s*шугам/i.test(p) ||
    /оюуны\s*шугам/i.test(p) ||
    /алтан\s*толгойн\s*шугам/i.test(p) ||
    /1\s*-\s*4\s*-\s*7/.test(p) ||
    /1\s*-\s*2\s*-\s*3/.test(p) ||
    /3\s*-\s*6\s*-\s*9/.test(p);
}

function enforceCanonicalMoneyLineSection(sectionText, data) {
  const out = normalizeFinalReport(sectionText);
  const paragraphs = out.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
  const kept = paragraphs.filter(p => !isCanonicalLineDiagnosticsParagraph(p));
  kept.push(buildCanonicalLineDiagnosticsBlock(data));
  return normalizeFinalReport(kept.join("\n\n"));
}

function removeCanonicalMoneyLineSection(sectionText) {
  const out = normalizeFinalReport(sectionText);
  const paragraphs = out.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
  const kept = paragraphs.filter(p => !isCanonicalLineDiagnosticsParagraph(p));
  return normalizeFinalReport(kept.join("\n\n"));
}

function buildHardFactsBlock(data) {
  const missingNums = (data.missingNumbers || []).map(m => m.number).join(", ") || "байхгүй";
  const excessNums = (data.excessNumbers || []).map(e => `${e.number} x${e.count}`).join(", ") || "байхгүй";
  const forecastPairs = (data.forecastYears || [])
    .map(y => `${y.year} -> Хувийн жил ${y.number} (${y.title})`)
    .join("; ");

  return [
    `Төрсөн огноо: ${data.dob}`,
    `Хүйс: ${data.gender}`,
    `Нас: ${data.age}`,
    `Амьдралын зам: ${data.lifePath} (${data.lifePathName})`,
    `Амьдралын замын тооцоо: ${data.lifePathCalcString}`,
    `Өдрийн тоо: ${data.dayNumber}`,
    `Матриц: ${data.matrixSummary}`,
    `Матрицын давтамж: ${JSON.stringify(data.matrixCounts || {})}`,
    `Илүүдэл тоо: ${excessNums}`,
    `Дутуу тоо: ${missingNums}`,
    `Кармын өр: ${data.karmicDebt}`,
    `Форекастын тогтсон хослол: ${forecastPairs}`
  ].join("\n");
}

function applyDeterministicFactGuards(text, data) {
  let out = String(text || "");
  out = enforceAgeFact(out, data && data.age);
  out = enforceMissingNumberClaims(out, data && data.missingNumbers);
  return normalizeFinalReport(out);
}

function enforceAgeFact(text, ageValue) {
  const age = Number(ageValue);
  if (!isFinite(age) || age < 0 || age > 120) return String(text || "");
  // Only normalize explicit "current age" claims to avoid corrupting generic examples
  // like "33 настай үед..." used as a conceptual explanation.
  return String(text || "").replace(/(Та\s+(?:одоо|энэ\s+жил)\s+)(\d{1,3})\s*настай/gi, function(match, prefix, n) {
    return Number(n) === age ? match : `${prefix}${age} настай`;
  });
}

function enforceMissingNumberClaims(text, missingNumbers) {
  let out = String(text || "");
  const missingSet = {};
  (missingNumbers || []).forEach(item => {
    const n = Number(item && item.number);
    if (n >= 1 && n <= 9) missingSet[n] = true;
  });

  const missingList = Object.keys(missingSet).map(Number).sort((a, b) => a - b);
  if (missingList.length) {
    const canonicalList = missingList.join(", ");
    out = out.replace(
      /([1-9](?:\s*,\s*[1-9]){1,8})\s*гэсэн\s*(?:чухал\s*)?тоонууд?\s*(?:дутаж байгаагаараа|дутаж байгаа|дутагдаж байгаа|дутуу|байхгүй)/gi,
      `${canonicalList} гэсэн чухал тоонууд дутуу`
    );
  }

  for (let n = 1; n <= 9; n++) {
    const replacement = `${n}-ын тоо`;
    const missingClaim = new RegExp(`\\b${n}-(?:ийн|ын|гийн)\\s*тоо\\s*(?:байхгүй|дутуу)(?:\\s+байгаа)?`, "gi");
    const presentClaim = new RegExp(`\\b${n}-(?:ийн|ын|гийн)\\s*тоо\\s*(?:байгаа|бүтэн|илэрсэн)(?:\\s+байгаа)?`, "gi");
    if (missingSet[n]) {
      out = out.replace(presentClaim, `${replacement} дутуу`);
    } else {
      out = out.replace(missingClaim, `${replacement} байгаа`);
    }
  }

  return out;
}

function buildDeterministicSectionIV(data) {
  const lines = [];
  const years = data.forecastYears || [];
  if (!years.length) return "";

  const yearSpan = `${years[0].year}-${years[years.length - 1].year}`;
  const sequence = years.map(y => `${y.number} (${y.title})`).join(" → ");
  const phaseText = years.map(y => y.title.toLowerCase()).join(", ");
  lines.push(`${yearSpan} оны санхүүгийн мөчлөг нь Хувийн жилийн ${sequence} гэсэн дарааллаар өрнөнө. Иймд энэ ${years.length} жилд ${phaseText} гэсэн тус бүр өөр үүрэгтэй энергийг зөв ашиглах нь хамгийн чухал стратеги болно.`);
  for (let i = 0; i < years.length; i++) {
    const y = years[i];
    const yearNarrative = buildDeterministicYearNarrative(y, data);
    lines.push(`${pickYearEmoji(y.number)} ${y.year} он - Хувийн жил ${y.number} (${y.title})\n${y.strategy}\n${yearNarrative}`);
  }
  lines.push(`⛰ Насны мөчлөг: ${buildAgeCycleLabel(data.ageCycleTitle)}\n${data.ageCycleContent}\n${buildAgeCycleAction(data)}`);
  return normalizeFinalReport(lines.join("\n\n"));
}

function buildDeterministicYearNarrative(yearData, data) {
  const n = Number(yearData && yearData.number);
  const missingSet = buildMissingSet(data && data.missingNumbers);
  const lifePath = Number(data && data.lifePath);
  const lifePathName = String((data && data.lifePathName) || "");

  const personalContext = buildYearPersonalContext(n, lifePath, lifePathName);
  const missingContext = buildYearMissingContext(n, missingSet);

  if (n === 8) {
    return `8-ын жил бол материаллаг үр дүн, мөнгө, эрх мэдлийн энерги давамгайлах үе юм. ${personalContext} Энэ жил өмнө хийсэн хөдөлмөрийн үр шим мөнгө болон эргэн ирэх магадлал өндөр байдаг тул хэлцэл, үнэ тогтоолт, хөрөнгө оруулалтын шийдвэрээ зоригтой боловч тооцоотой гаргах нь чухал. ${missingContext || "Гол анхаарах зүйл бол мөнгөн урсгалын сахилга, гэрээний хяналт, хуримтлалын дэгийг зэрэг барих явдал."}`;
  }
  if (n === 9) {
    return `9-ын жил бол дуусгалт, цэвэрлэгээ, шинэ циклд бэлтгэх үе юм. Энэ үед та ашиггүй төсөл, эргэж ирэхгүй өр, илүүдэл зардлаа зоригтой цэгцлэх тусам дараагийн мөчлөгийн өгөөж нэмэгддэг. ${personalContext} ${missingContext || "Шинэ зүйлийг олноор эхлүүлэхээс илүү одоо байгаа бүтэц, бүтээгдэхүүн, багийн үүргийг цэгцлэх нь өндөр үр дүнтэй."}`;
  }
  if (n === 1) {
    return `1-ийн жил бол шинэ эхлэл, манлайлал, анхдагч алхмын энерги давамгайлах үе юм. Цэвэрлэгээний дараа энэ жил шинэ санал, шинэ багц, шинэ брэнд чиглэл эхлүүлэхэд хамгийн таатай байдаг. ${personalContext} ${missingContext || "Гэхдээ нэг дор олон төсөл эхлүүлэхээс зайлсхийж, хамгийн өндөр өгөөжтэй нэг чиглэлээ түрүүлж баталгаажуулах нь мөнгөний өсөлтөд зөв."}`;
  }
  if (n === 5) {
    return `5-ын жил бол өөрчлөлт, хөдөлгөөн, туршилтын энерги давамгайлах үе юм. Энэ үед зах зээл хурдан өөрчлөгдөх тул богино мөчлөгтэй туршилт хийж, үр дүнгүй сувгаа хурдан хаах тактик мөнгөний алдагдлыг бууруулдаг. ${personalContext} ${missingContext}`;
  }
  if (n === 6) {
    return `6-ын жил бол хариуцлага, үйлчилгээ, үнэ цэнийн савын энерги давамгайлах үе юм. Энэ үед үйлчилгээний стандарт, чанар, харилцагчийн сэтгэл ханамж шууд орлогод нөлөөлдөг. ${personalContext} ${missingContext}`;
  }
  if (n === 7) {
    return `7-ын жил бол судалгаа, гүнзгийрэл, дотоод чанаржуулалтын үе юм. Энэ үед гадагш огцом тэлэхээс илүү мэргэжлийн ур чадвараа гүнзгийрүүлж, бүтээгдэхүүний ялгарал дээр төвлөрвөл дараагийн мөчлөгт өндөр өгөөж өгдөг. ${personalContext} ${missingContext}`;
  }
  if (n === 4) {
    return `4-ийн жил бол бүтэц, сахилга бат, системийн жил юм. Энэ үед өдөр тутмын процесс, тайлагнал, нөөцийн хуваарилалт, стандарт гэрээгээ түгжих тусам урт хугацааны мөнгөний өсөлтийн суурь бат бөх болдог. ${personalContext} ${missingContext}`;
  }
  if (n === 3) {
    return `3-ын жил бол илэрхийлэл, маркетинг, бүтээлч идэвхийн үе юм. Энэ жил мессежээ олон нийтэд зөв хүргэвэл орлого нээгддэг ч нэг шугамын брэнд мессеж барихгүй бол хөрвөлт сулардаг. ${personalContext} ${missingContext}`;
  }
  if (n === 2) {
    return `2-ын жил бол түншлэл, хамтын ажиллагаа, итгэлцлийн үе юм. Энэ жил зөв хамтрагч, зөв гэрээ, зөв харилцааны архитектур байгуулж чадвал дунд хугацааны мөнгөний өсөлт тогтвортой болдог. ${personalContext} ${missingContext}`;
  }
  return `Энэ жилийн гол зарчим бол тоон утгынхаа эрчимд тохирсон төлөвлөгөө барьж, мөнгөний урсгалаа тогтмол хэмжиж удирдах явдал юм. ${personalContext} ${missingContext}`;
}

function buildMissingSet(missingNumbers) {
  const set = {};
  const arr = missingNumbers || [];
  for (let i = 0; i < arr.length; i++) {
    const n = Number(arr[i] && arr[i].number);
    if (n >= 1 && n <= 9) set[n] = true;
  }
  return set;
}

function buildYearPersonalContext(yearNumber, lifePath, lifePathName) {
  const lp = Number(lifePath);
  const lpText = lifePathName ? `Таны Амьдралын зам ${lp || ""} (${lifePathName}) энэ энергитэй` : `Таны амьдралын замын энерги энэ жил`;
  if (yearNumber === 8) return `${lpText} нийлэх үед стратегийн шийдвэрийг мөнгөний бодит үр дүн болгох боломж нэмэгддэг.`;
  if (yearNumber === 9) return `${lpText} нийлэх үед хуучныг цэгцлэж, цөөн боловч чанартай чиглэл дээр төвлөрөх шийдвэр хамгийн үр ашигтай байдаг.`;
  if (yearNumber === 1) return `${lpText} нийлэх үед манлайллын байр суурь тодорч, шинэ бүтээгдэхүүн эсвэл шинэ брэнд санаачилга амжилт олох магадлал өсдөг.`;
  return `${lpText} нийлэх үед жилийн тоон утгатай уялдсан шийдвэр гаргах нь эрсдэлийг бууруулж өгөөжийг өсгөнө.`;
}

function buildYearMissingContext(yearNumber, missingSet) {
  if (yearNumber === 8 && missingSet[8]) {
    return "Таны матрицад 8-ын тоо дутуу тул энэ жилийн өсөлтийн үед мөнгөний зохион байгуулалт, хадгаламж, санхүүгийн хяналтаа тусгайлан чангалах шаардлагатай.";
  }
  if (yearNumber === 9 && missingSet[5]) {
    return "5-ын тоо дутуу үед өөрчлөлтийг хойшлуулах хандлага гардаг тул энэ жил цэвэрлэгээний шийдвэрээ хугацаатай хийж, удаашрал үүсгэхгүй байх нь чухал.";
  }
  if (yearNumber === 1 && missingSet[6]) {
    return "6-ын тоо дутуу үед шинэ эхлэлийн үнэ цэнийг доогуур тогтоох эрсдэлтэй тул шинэ саналын үнийн бодлогоо эхнээс нь хатуу тогтоох нь зөв.";
  }
  if (yearNumber === 1 && missingSet[8]) {
    return "8-ын тоо дутуу тул шинэ эхлэл дээр санхүүгийн системээ зэрэг босгож (төсөв, тайлан, мөнгөн урсгалын хяналт) ажиллах шаардлагатай.";
  }
  return "";
}

function pickYearEmoji(yearNumber) {
  const n = Number(yearNumber);
  if (n === 9) return "🧹";
  if (n === 1) return "🚀";
  if (n === 8) return "🗓";
  return "🗓";
}

function buildAgeCycleLabel(ageCycleTitle) {
  const src = String(ageCycleTitle || "");
  const leaderMatch = src.match(/удирдагч\s*тоо\s*(\d+)/i);
  const leader = leaderMatch ? Number(leaderMatch[1]) : null;
  if (/26\s*-\s*34/.test(src) && leader === 4) return "Манлайллын оргил үе";
  if (/30\s*-\s*40/.test(src)) return "Бүтээн байгуулалтын үе";
  if (/20\s*-\s*30/.test(src)) return "Хайгуул ба туршилтын үе";
  return src || "Насны мөчлөг";
}

function buildAgeCycleAction(data) {
  const missingSet = buildMissingSet(data && data.missingNumbers);
  const base = "Энэ мөчлөгт гол стратеги нь бие даасан шийдвэр, тогтвортой гүйцэтгэл, мөнгөний урсгалын долоо хоногийн хяналтыг зэрэг барих явдал юм.";
  if (missingSet[4]) {
    return `${base} Таны хувьд 4-ийн сахилга сулрах эрсдэлтэй тул өдөр тутмын дэг, хугацаатай гүйцэтгэлийн системийг зориуд барих нь онцгой чухал.`;
  }
  return `${base} Орчлонгийн шахалт энэ үед таныг өөрийн хүчинд түшиглэсэн урт хугацааны санхүүгийн суурь босгох руу түлхдэг.`;
}

function enforceOutsourceRoleNumberAlignment(sectionText, data) {
  let out = normalizeFinalReport(sectionText);
  const missing = data && data.missingNumbers ? data.missingNumbers : [];
  if (!missing.length) return out;

  for (let i = 0; i < missing.length; i++) {
    const item = missing[i] || {};
    const role = String(item.outsource || "").trim();
    const num = Number(item.number);
    if (!role || !num) continue;

    const roleRe = escapeRegExp(role).replace(/\s+/g, "\\s+");
    const p = new RegExp(`(${roleRe}[\\s\\S]{0,140}?Таны\\s*)(\\d+)(\\s*-ын\\s*тоо\\s*дутуу)`, "i");
    out = out.replace(p, `$1${num}$3`);
  }

  return normalizeFinalReport(out);
}

function generateSectionBody(sectionKey, data, apiKey, systemPrompt, continuity, headers, usageStats) {
  const hardFacts = buildHardFactsBlock(data);
  let task = "";
  if (sectionKey === "I") {
    task = `
TASK: Write ONLY the body text for Section I (archetype and money destiny).
Do NOT write any section header.
Use data:
- Төрсөн огноо: ${data.dob}
- Хүйс: ${data.gender}
- Амьдралын зам: ${data.lifePath} (${data.lifePathName})
- Өдрийн тоо: ${data.dayNumber}
- Далд энерги: ${data.hiddenDriver}
- Амьдралын замын тайлбар: ${data.lifePathDesc}
REFERENCE:
${CONFIG.REFERENCES.PART_1}
`;
  } else if (sectionKey === "II") {
    task = `
TASK: Write ONLY the body text for Section II (matrix and skill diagnostics).
Do NOT write any section header.
Use data:
- Матриц: ${data.matrixSummary}
- Илүүдэл тоо: ${JSON.stringify(data.excessNumbers)}
- Дутуу тоо: ${JSON.stringify(data.missingNumbers)}
- Нэмэлт далд тоо: ${data.hiddenNumbers.text || "Байхгүй"}
REFERENCE:
${CONFIG.REFERENCES.PART_1}
`;
  } else if (sectionKey === "III") {
    task = `
TASK: Write ONLY the body text for Section III (karmic diagnosis and money blocks).
Do NOT write any section header.
Use data:
- Кармын өр: ${data.karmicDebt}
- Матриц: ${data.matrixSummary}
- Дутуу тоо: ${JSON.stringify(data.missingNumbers)}
- Нэмэлт далд тоо: ${data.hiddenNumbers.text || "Байхгүй"}
REFERENCE:
${CONFIG.REFERENCES.PART_2}
`;
  } else if (sectionKey === "IV") {
    task = `
TASK: Write ONLY the body text for Section IV (forecast and timing).
Do NOT write any section header.
Use data:
- Ирэх 3 жилийн прогноз: ${data.forecastText}
- Насны мөчлөг: ${data.ageCycleTitle}
- Тайлбар: ${data.ageCycleContent}
RULE: Keep year-number pairs exactly as provided. Do not recalculate.
RULE: For each year, explain the meaning of that personal-year number (жишээ: "2026 оны Хувийн жилийн 8-ын утга..." хэлбэрээр).
REFERENCE:
${CONFIG.REFERENCES.PART_3}
`;
  } else {
    task = `
TASK: Write ONLY the body text for Section V (strategy, remedies, execution plan).
Do NOT write any section header.
Use data:
- Дутуу тоонуудын аутсорсинг: ${JSON.stringify(data.missingNumbers.map(m => m.outsource))}
- Амжилтын өнгө: ${data.luckyColor}
- Азын чулуу: ${data.luckyStone}
- Азын тоо: ${data.luckyNumbers}
REFERENCE:
${CONFIG.REFERENCES.PART_3}
`;
  }

  const prompt = `
${systemPrompt}
${task}
HARD FACTS:
${hardFacts}
STRICT:
- Never contradict HARD FACTS.
- Never write another section header.
CONTINUITY:
${continuity || ""}
FORBIDDEN OPENINGS: Never start with "За ойлголоо", "Ойлголоо", "Мэдлээ", "OK".
`;

  const res = callGemini(prompt, apiKey);
  if (usageStats) mergeUsageStats(usageStats, res.usageDetail);
  const cleaned = sanitizeGeneratedPart(res.text, { startHeader: null, stopHeaders: [] });
  return removeKnownHeaders(cleaned, headers);
}

function normalizeFinalReport(text) {
  return String(text || "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeReportArtifacts(text) {
  let out = normalizeFinalReport(text);
  // Remove invisible characters that sometimes appear as standalone broken symbols.
  out = out.replace(/[\u200B-\u200D\uFEFF]/g, "");
  out = out.replace(/^\s*[\uFE0E\uFE0F]+\s*/gm, "");
  out = out.replace(/^\s*️\s*/gm, "");
  // Keep this heading on a single line even if model inserts a line break inside it.
  out = out.replace(
    /🔎\s*ХУВИЙН\s*ЖИЛИЙН\s*ТООНЫ\s*УТГА\s*\(ЯАГААД\s*ЭНЭ\s*ЗӨВЛӨМЖ\s*ГАРЧ\s*\n+\s*БАЙНА\s*ВЭ\?\)/gi,
    "🔎 ХУВИЙН ЖИЛИЙН ТООНЫ УТГА (ЯАГААД ЭНЭ ЗӨВЛӨМЖ ГАРЧ БАЙНА ВЭ?)"
  );
  // Remove markdown list markers in final report text.
  out = out.replace(/^\s*[\*\-]\s+/gm, "• ");
  out = out.replace(/^\s*•\s+/gm, "• ");
  return normalizeFinalReport(out);
}

// --- HELPER FUNCTIONS ---

function callGemini(text, key, attempts = 3) {
  if (!key) throw new Error("GENERATE: GEMINI API key байхгүй.");

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
  let lastError = "";

  for (let i = 0; i < attempts; i++) {
    try {
      const res = UrlFetchApp.fetch(url, options);
      const status = res.getResponseCode();
      const body = res.getContentText();
      if (status < 200 || status >= 300) {
        lastError = `HTTP ${status}: ${body.slice(0, 200)}`;
        Utilities.sleep(800);
        continue;
      }

      const json = JSON.parse(body);
      const candidate = json && json.candidates && json.candidates[0] && json.candidates[0].content;
      if (candidate && candidate.parts && candidate.parts[0] && candidate.parts[0].text) {
        const txt = candidate.parts[0].text;
        const usageMeta = json.usageMetadata || {};
        const promptTokens = Number(usageMeta.promptTokenCount || usageMeta.inputTokenCount || 0);
        const outputTokens = Number(usageMeta.candidatesTokenCount || usageMeta.outputTokenCount || 0);
        const totalTokens = Number(usageMeta.totalTokenCount || (promptTokens + outputTokens));
        
        const clean = txt
          .replace(/\-\-\-/g, "")
          .replace(/###/g, "")
          .replace(/\(Үргэлжлэл\)/g, "")
          .replace(/ТА-ны/g, "Таны")
          .replace(/Тануулга/g, "Тайлал")
          .trim();
          
        return {
          text: clean,
          usage: totalTokens,
          usageDetail: {
            totalTokens: totalTokens,
            inputTokens: promptTokens,
            outputTokens: outputTokens,
            requests: 1
          }
        };
      }
      lastError = "response candidates хоосон ирлээ.";
    } catch (e) {
      lastError = String(e.message || e);
      console.error(`Gemini attempt ${i + 1} failed:`, e);
    }
    Utilities.sleep(1000);
  }

  throw new Error(`GENERATE: Gemini амжилтгүй. ${lastError}`);
}

// --- MATH LOGIC ---
function extractJsonBlock(text) {
  const cleaned = String(text || "").replace(/```json/gi, "").replace(/```/g, "").trim();
  const first = cleaned.indexOf("{");
  const last = cleaned.lastIndexOf("}");
  if (first === -1 || last === -1 || first >= last) return {};
  return JSON.parse(cleaned.slice(first, last + 1));
}

function normalizeDateValue(input) {
  const s = String(input || "").trim();
  // Year-month-day with separators, with numeric token boundaries.
  let m = s.match(/(?:^|[^\d])(\d{4})(?:[\.\-\/\s]+)(\d{1,2})(?:[\.\-\/\s]+)(\d{1,2})(?!\d)/);
  if (m) {
    const y = normalizeYearToken(m[1]);
    const mo = Number(m[2]);
    const d = Number(m[3]);
    if (y && isValidDate(y, mo, d)) {
      return `${y}.${String(mo).padStart(2, "0")}.${String(d).padStart(2, "0")}`;
    }
  }

  // Two-digit year format.
  m = s.match(/(?:^|[^\d])(\d{2})(?:[\.\-\/\s]+)(\d{1,2})(?:[\.\-\/\s]+)(\d{1,2})(?!\d)/);
  if (m) {
    const yy = Number(m[1]);
    const y = yy > 25 ? 1900 + yy : 2000 + yy;
    const mo = Number(m[2]);
    const d = Number(m[3]);
    if (isValidDate(y, mo, d)) {
      return `${y}.${String(mo).padStart(2, "0")}.${String(d).padStart(2, "0")}`;
    }
  }

  // Fuzzy parser for human-typed text:
  // "1996 10 sariin 30nd torson", "11996 10 30", "19961030"
  const numericTokens = s.match(/\d+/g) || [];
  if (numericTokens.length) {
    // 8-digit compact date: YYYYMMDD
    for (let i = 0; i < numericTokens.length; i++) {
      const tk = numericTokens[i];
      if (tk.length === 8) {
        const y = Number(tk.slice(0, 4));
        const mo = Number(tk.slice(4, 6));
        const d = Number(tk.slice(6, 8));
        if (isValidDate(y, mo, d)) {
          return `${y}.${String(mo).padStart(2, "0")}.${String(d).padStart(2, "0")}`;
        }
      }
    }

    // Prefer year-first sequences.
    for (let i = 0; i <= numericTokens.length - 3; i++) {
      const y = normalizeYearToken(numericTokens[i]);
      if (!y) continue;
      const mo = Number(numericTokens[i + 1]);
      const d = Number(numericTokens[i + 2]);
      if (isValidDate(y, mo, d)) {
        return `${y}.${String(mo).padStart(2, "0")}.${String(d).padStart(2, "0")}`;
      }
    }

    // Secondary fallback: day-month-year sequence.
    for (let i = 2; i < numericTokens.length; i++) {
      const y = normalizeYearToken(numericTokens[i]);
      if (!y) continue;
      const d = Number(numericTokens[i - 2]);
      const mo = Number(numericTokens[i - 1]);
      if (isValidDate(y, mo, d)) {
        return `${y}.${String(mo).padStart(2, "0")}.${String(d).padStart(2, "0")}`;
      }
    }
  }
  return null;
}

function normalizeYearToken(token) {
  const raw = String(token || "").replace(/\D/g, "");
  if (!raw) return null;

  if (raw.length === 4) {
    const y = Number(raw);
    if (y >= 1900 && y <= 2099) return y;
  }

  // Common typo: accidental leading digit, e.g. 11996 -> 1996
  if (raw.length === 5) {
    const head = Number(raw.slice(0, 4));
    if (head >= 1900 && head <= 2099) return head;
    const tail = Number(raw.slice(1));
    if (tail >= 1900 && tail <= 2099) return tail;
  }

  // Long noisy token: scan every 4-digit window and pick a plausible year.
  if (raw.length > 5) {
    for (let i = 0; i <= raw.length - 4; i++) {
      const y = Number(raw.slice(i, i + 4));
      if (y >= 1900 && y <= 2099) return y;
    }
  }

  if (raw.length === 2) {
    const yy = Number(raw);
    return yy > 25 ? 1900 + yy : 2000 + yy;
  }

  return null;
}

function isValidDate(y, m, d) {
  if (m < 1 || m > 12 || d < 1 || d > 31) return false;
  const dt = new Date(y, m - 1, d);
  return dt.getFullYear() === y && dt.getMonth() + 1 === m && dt.getDate() === d;
}

function normalizeGender(raw, aiGender) {
  const direct = detectGenderFromRaw(raw);
  if (direct) return direct;
  const g = String(aiGender || "").trim();
  if (g === "Эрэгтэй" || g === "Эмэгтэй") return g;
  // Strict mode: wrong gender inference is worse than retry/review.
  throw new Error("NORMALIZE: Хүйс тодорхойгүй байна. (ЭРЭГТЭЙ/ЭМЭГТЭЙ мэдээлэл шаардлагатай)");
}

function detectGenderFromRaw(raw) {
  const text = String(raw || "").toLowerCase();
  if (text.includes("эрэгтэй") || /(^|\s)эр(\s|$)/.test(text)) return "Эрэгтэй";
  if (text.includes("эмэгтэй") || /(^|\s)эм(\s|$)/.test(text)) return "Эмэгтэй";
  return null;
}

function normalizeName(raw, aiName) {
  const fromAi = String(aiName || "").trim();
  if (fromAi && !/\d/.test(fromAi) && fromAi.length <= 40) return fromAi;

  const cleaned = String(raw || "").replace(/[\d\.\-\/]/g, " ").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (!["эр", "эм", "эрэгтэй", "эмэгтэй"].includes(p.toLowerCase())) {
      return p;
    }
  }
  return "Эрхэм";
}

function getGenderStyle(gender) {
  const key = String(gender || "").trim();
  return NUMEROLOGY.GENDER_STYLE_MAP[key] || NUMEROLOGY.GENDER_STYLE_MAP["Эмэгтэй"];
}

function escapeRegExp(input) {
  return String(input).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function applyGenderLanguageGuard(text, gender) {
  let out = String(text || "");
  const style = getGenderStyle(gender);
  const rules = style.replaceRules || [];

  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    const re = new RegExp(escapeRegExp(rule.from), "gi");
    out = out.replace(re, rule.to);
  }

  // Always keep honorifics neutral to avoid tone mismatch.
  out = out.replace(/ноён/gi, "хүн");
  out = out.replace(/хатагтай/gi, "хүн");
  out = out.replace(/үйлчлүүлэгч/gi, "хүн");
  return out;
}

function sumDigits(n) {
  return String(Math.abs(Number(n))).split("").reduce((a, b) => a + Number(b), 0);
}

function reduceNumber(n, keepMaster) {
  let v = Number(n);
  while (v > 9) {
    if (keepMaster && (v === 11 || v === 22 || v === 33)) break;
    v = sumDigits(v);
  }
  return v;
}

function calculateLifePath(y, m, d) {
  const yR = reduceNumber(y, true);
  const mR = reduceNumber(m, true);
  const dR = reduceNumber(d, true);
  const totalRaw = yR + mR + dR;
  const total = reduceNumber(totalRaw, true);
  return {
    number: total,
    rawSums: [dR, totalRaw],
    calculation: `(${y} -> ${yR}) + (${m} -> ${mR}) + (${d} -> ${dR}) = ${totalRaw} -> ${total}`
  };
}

function calculatePythagorasMatrix(y, m, d) {
  const dateStr = `${y}${String(m).padStart(2, "0")}${String(d).padStart(2, "0")}`;
  const dateDigits = dateStr.split("").map(Number);
  const n1 = dateDigits.reduce((a, b) => a + b, 0);
  const n2 = sumDigits(n1);
  const firstDigit = Number(String(d)[0]);
  const n3 = n1 - (2 * firstDigit);
  const n4 = sumDigits(Math.abs(n3));

  const allNums = [...dateDigits];
  String(n1).split("").forEach(c => allNums.push(Number(c)));
  String(n2).split("").forEach(c => allNums.push(Number(c)));
  String(Math.abs(n3)).split("").forEach(c => allNums.push(Number(c)));
  String(n4).split("").forEach(c => allNums.push(Number(c)));

  const counts = {};
  for (let i = 1; i <= 9; i++) counts[i] = 0;
  allNums.forEach(n => {
    if (counts[n] !== undefined) counts[n]++;
  });

  return { counts, rawN3: n3, rawN4: n4, dateDigits };
}

function calculateHiddenNumbers(y, m, d, n3, n4) {
  const dateStr = `${y}${String(m).padStart(2, "0")}${String(d).padStart(2, "0")}`;
  const counts = {};

  const check = (n) => {
    String(Math.abs(n)).split("").forEach(c => {
      if (!dateStr.includes(c) && c !== "0") counts[c] = (counts[c] || 0) + 1;
    });
  };

  check(n3);
  check(n4);
  const list = Object.keys(counts).map(n => ({ number: Number(n), count: counts[n] }));
  return { list, text: list.map(i => `${i.number} (x${i.count})`).join(", ") };
}

function buildMatrixSummary(counts) {
  const chunks = [];
  for (let n = 1; n <= 9; n++) {
    if (counts[n] > 0) chunks.push(`${String(n).repeat(counts[n])}`);
  }
  return chunks.join(", ");
}

function checkKarmicDebt(day, sums) {
  const debts = [13, 14, 16, 19];
  const found = [];
  if (debts.includes(day)) found.push(day);
  sums.forEach(v => {
    if (debts.includes(v) && !found.includes(v)) found.push(v);
  });
  return found.length ? `Анхаар: ${found.join(", ")} кармын өр илэрлээ.` : "Цэвэр үйлийн үр (Кармын өргүй).";
}

function calculatePersonalYearForecast(month, day) {
  const years = [];
  const startYear = new Date().getFullYear();
  const mR = reduceNumber(month, false);
  const dR = reduceNumber(day, false);

  for (let i = 0; i < 3; i++) {
    const year = startYear + i;
    const universalYear = reduceNumber(year, false);
    const py = reduceNumber(universalYear + mR + dR, true);
    const info = NUMEROLOGY.PERSONAL_YEAR_MAP[py] || { title: "Мөчлөг", strategy: "Дотоод хэмнэлээ ажиглаж ажиллах." };
    years.push({ year, number: py, title: info.title, strategy: info.strategy });
  }

  const text = years.map(y => `**${y.year} он - Хувийн жил ${y.number} (${y.title})**\n${y.strategy}`).join("\n\n");
  return { years, text };
}

function calculateAge(y, m, d) {
  const now = new Date();
  let age = now.getFullYear() - y;
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();
  if (currentMonth < m || (currentMonth === m && currentDay < d)) age--;
  return age;
}

function calculateAgeCycle(age, month) {
  const cycleNumber = reduceNumber(month, false);
  if (age <= 25) {
    return { title: "1-р мөчлөг (0-25)", content: "Суурь бэлтгэл, чадвар хуримтлуулах үе." };
  }
  if (age <= 34) {
    return { title: `2-р мөчлөг (26-34), удирдагч тоо ${cycleNumber}`, content: "Бие даасан шийдвэр, манлайлал, бизнесийн суурь босгох үе." };
  }
  if (age <= 43) {
    return { title: "3-р мөчлөг (35-43)", content: "Тэлэлт, хөрөнгө өсөлт, системээ томруулах үе." };
  }
  return { title: "4-р мөчлөг (44+)", content: "Тогтворжилт, өвлүүлэхүйц бүтэц бий болгох үе." };
}

function createPdf(name, content, templateId) {
  const folderId = PropertiesService.getScriptProperties().getProperty("FOLDER_ID");
  if (!folderId) throw new Error("PDF: FOLDER_ID байхгүй.");
  if (!templateId) throw new Error("PDF: TEMPLATE_ID байхгүй.");

  const copy = DriveApp.getFileById(templateId).makeCopy(`${name} - Санхүүгийн Нумерологи.pdf`);
  const doc = DocumentApp.openById(copy.getId());
  const body = doc.getBody();
  
  // 1. FILL CONTENT
  // Case-insensitive placeholders: {{NAME}}/{{name}}, {{REPORT}}/{{report}}
  body.replaceText("(?i)\\{\\{\\s*name\\s*\\}\\}", name);
  body.replaceText("(?i)\\{\\{\\s*report\\s*\\}\\}", content);
  
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
  return {
    url: pdfFile.getUrl(),
    fileId: pdfFile.getId()
  };
}

// --- FORMATTING ENGINE (CLASSIC BOLD + BULLETS) ---
function processFormatting(body) {
  // 1. Handle BOLD: **text** -> Bold text without markers
  var foundElement = body.findText("\\*\\*(.*?)\\*\\*");
  while (foundElement != null) {
    var foundText = foundElement.getElement().asText();
    var start = foundElement.getStartOffset();
    var end = foundElement.getEndOffsetInclusive();

    if (end - start >= 3) {
      foundText.setBold(start + 2, end - 2, true);
      foundText.deleteText(end - 1, end);
      foundText.deleteText(start, start + 1);
    } else {
      break;
    }

    foundElement = body.findText("\\*\\*(.*?)\\*\\*");
  }
  
  // 2. Handle BULLETS: "* text", "- text", "• text" -> Bullet point
  var paras = body.getParagraphs();
  for (var i = 0; i < paras.length; i++) {
    var p = paras[i];
    var text = p.getText();
    var trimmed = text.trim();
    if (/^(?:\*|-|•)\s+/.test(trimmed) && !trimmed.startsWith("**")) {
      p.setText(text.replace(/^\s*(?:\*|-|•)\s+/, "")); // Remove marker
      p.setGlyphType(DocumentApp.GlyphType.BULLET); // Make it a bullet
    }
  }
}

function sendManyChat(subscriberId, pdfUrl, name, token) {
  if (!token) throw new Error("DELIVERY: ManyChat token байхгүй.");
  if (!subscriberId) throw new Error("DELIVERY: subscriber_id хоосон.");
  if (!pdfUrl) throw new Error("DELIVERY: PDF URL хоосон.");

  const text = CONFIG.DELIVERY_MESSAGE
    .replace("{{NAME}}", name || "Эрхэм")
    .replace("{{URL}}", pdfUrl);

  const payload = {
    subscriber_id: String(subscriberId).trim(),
    data: {
      version: "v2",
      content: {
        messages: [{ type: "text", text: text }]
      }
    }
  };

  const res = UrlFetchApp.fetch("https://api.manychat.com/fb/sending/sendContent", {
    method: "post",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const status = res.getResponseCode();
  const body = res.getContentText();
  if (status < 200 || status >= 300) {
    throw new Error(`DELIVERY HTTP ${status}: ${body.substring(0, 200)}`);
  }

  try {
    const json = JSON.parse(body);
    if (json.status && json.status !== "success" && json.status !== "ok") {
      throw new Error(`DELIVERY API: ${body.substring(0, 200)}`);
    }
    if (json.data && json.data.status && json.data.status !== "success" && json.data.status !== "ok") {
      throw new Error(`DELIVERY API: ${body.substring(0, 200)}`);
    }
  } catch (e) {
    if (String(e.message || e).startsWith("DELIVERY API:")) {
      throw e;
    }
    // Some accounts return plain/non-JSON text on success; keep HTTP status as source of truth.
  }
}
