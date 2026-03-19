/****************************************************************************************
 * PRODUCT: DIGITAL ASTROLOGY REPORT GENERATOR (ZURHAI AI)
 * VERSION: v3.1 - SOULMATE & KARMA EDITION
 * AUTHOR: Saruulbat System (Refactored by Jules)
 * MODEL: gemini-2.5-flash
 ****************************************************************************************/

const CONFIG = {
  // --- SYSTEM CONFIG ---
  VERSION: "v3.1-SoulmateEdition",
  PRODUCT_NAME: "Таны Хувь Заяаны Код - Дэлгэрэнгүй Тайлан",
  SHEET_NAME: "Sheet1",
  BATCH_SIZE: 3, 
  GEMINI_MODEL: "gemini-2.5-flash", 
  TEMPERATURE: 0.8, 

  // --- COLUMN MAPPING (0-based) ---
  COLUMNS: {
    NAME: 0,      // A
    ID: 1,        // B
    INPUT: 2,     // C
    PDF: 3,       // D
    STATUS: 4,    // E
    TOKEN: 5,     // F
    DEBUG: 6,     // G
    DATE: 7,      // H
    VER: 8,       // I
    ERROR: 9      // J
  },

  MAX_EXECUTION_TIME: 360000, 
  SAFETY_BUFFER: 60000,

  // ==================================================================================
  // ⚙️ MASTER CONFIGURATION (EDIT HERE FOR NEW PRODUCTS)
  // ==================================================================================
  
  AI_SETTINGS: {
    // 1. THE PERSONA (KARMIC GUIDE)
    ROLE: "Эртний монгол зурхай, бөө мөргөл болон далд ухамсарын ухааныг судалсан 'Үйлийн Үрийн Хөтөч'. Одод эрхсийн хөдөлгөөнийг хүний сүнсний аялалтай холбож тайлбарладаг мэргэн хүн.",
    
    // 2. THE TONE OF VOICE (SPIRITUAL & ANCIENT)
    TONE: "Гүн ухааны, сүнслэг, эртний домгийн мэт яруу боловч жирийн хүнд маш ойлгомжтой, энгийн үгээр бичнэ. Гадаад үг огт ашиглахгүй. Уншигчийн сэтгэлийн утсыг хөндсөн, зөөлөн бөгөөд үнэн мэдрэмжтэй.",
    
    // 3. CORE RULES
    CORE_RULES: `
    1. NO INTRODUCTIONS: Do not say "Hello", "I am Saruulbat", or "Here is your report". Start directly with the Chapter Title.
    2. NO BULLET POINTS: Do not use '*' or '-' for lists. Use full paragraphs or bold subheaders. The text must look like a book, not a PowerPoint slide.
    3. FORMATTING: Use **BOLD** for important subheadings. Separate paragraphs with empty lines.
    4. LANGUAGE PRECISION: Do not use weak words like "Магадгүй" (Maybe). Instead use "Өндөр магадлалтай" (High probability), "Танд тохионо" (Will happen to you), "Одод ингэж зааж байна" (The stars indicate).
    5. ADDRESSING: Always address the user as "Чи" (You) - intimate and direct. Use "Чиний" (Your), "Чамайг" (You - accusative), "Чамд" (to You) naturally. NEVER use "Та" (Formal).
    6. UNKNOWN TIME LOGIC: If 'Birth Time' or 'Ascendant' is "Тодорхойгүй" or "Unknown", DO NOT generate specific predictions based on the hour. Instead, explicitly state that since the birth time is unknown, the 'Hidden Self/Ascendant' reading is general.
    7. BOLD SAFETY: When using ** for bold titles, you MUST close them (e.g., **Title**). NEVER leave them open like (**Title...). This is critical.
    `,

    // 4. CHAPTER PROMPTS (Soulmate/Karma Focus)
    PROMPTS: {
      // --- PART 1: IDENTITY & KARMA ---
      PART_1: `
      TASK: Write PART 1 (Chapters 1 & 2).
      
      Start with a boxed summary with a SPIRITUAL look.
      
      **📜 ЭРТНИЙ СУДРЫН ТЭМДЭГЛЭЛ**
      👁️ **Сүнсний нэр:** {{name}}
      🌙 **Мэндэлсэн цаг хугацаа:** {{dob}}
      🔥 **Дорнын жил:** {{yearElement}} {{yearAnimal}}
      📜 **Өрнийн орд:** {{zodiacElement}} махбодьтой {{zodiacSign}}
      {{timeInfoLine}}
      🗝️ **Хувь заяаны код:** {{lifePath}}
      
      **📖 БҮЛЭГ 1: СҮНСНИЙ ЯЗГУУР БА ДОТООД МӨН ЧАНАР**
      - Analyze the mix of {{yearAnimal}} and {{zodiacSign}}. Use the concept "{{elementRelationship}}" but write it poetically (e.g., "Fire and Water dance in your soul...").
      - Contrast their outer appearance (Mask) vs inner reality (Truth).
      {{timeAnalysisInstructions}}
      - Explain Life Path {{lifePath}} as a "Destiny Code". Explain briefly how it is calculated (summing digits of {{dob}}) so they trust it.

      **📖 БҮЛЭГ 2: ЗҮРХ СЭТГЭЛИЙН ХОЛБООС БА ҮЙЛИЙН ҮР**
      - What is their "Love Language" from a spiritual perspective? What does their soul crave?
      - Their Shadow Side: Why do they fail in love? (e.g., Past life karma, emotional wounds).
      - Compatibility: What kind of soul fits them? Who drains their energy?
      
      (Write in deep, flowing paragraphs. NO BULLETS).
      `,

      // --- PART 2: THE SOULMATE (Target Partner) ---
      PART_2: `
      TASK: Write PART 2 (Chapters 3 & 4).
      CONTEXT: We already discussed their character ({{yearAnimal}}, {{zodiacSign}}). Now focus on their Destined Partner.
      
      **📖 БҮЛЭГ 3: ЗАЯАГДСАН ХАНИЙН ДҮР ТӨРХ БА УЧРАЛ**
      - REQUIREMENT: For this chapter ONLY, you MUST use numbered subtitles to separate the sections.
      - TARGET: The partner must be MONGOLIAN. Describe realistic Mongolian features but with a spiritual aura.
      - GENDER: Remember to describe the OPPOSITE gender of {{gender}}.
      - Structure:
        **1. Түүний дүр төрх ба энерги:** (Describe appearance and aura/feeling)
        **2. Сэтгэлийн мөн чанар:** (Describe personality and heart)
        **3. Эрхлэх үйл хэрэг & Байр суурь:** (Describe likely profession or role in society)
      
      **📖 БҮЛЭГ 4: ХУВЬ ЗАЯАНЫ ЭРГЭЛТИЙН ЦЭГҮҮД**
      - Analyze these specific FUTURE "Golden Gates" (Age/Year Cycles):
        * 1-р Хаалга: {{transit1}}
        * 2-р Хаалга: {{transit2}}
        * 3-р Хаалга: {{transit3}}
      - Explain WHY these years are significant for meeting someone or life changes.
      - Provide spiritual advice for each period.
      
      (Write in deep, flowing paragraphs. NO BULLETS).
      `,

      // --- PART 3: FORECAST ---
      PART_3: `
      TASK: Write PART 3 (Chapter 5 ONLY).
      CONTEXT: The report continues from the Transits section.
      IMPORTANT: Do NOT write Chapter 6, Rituals, Imago Effect, or Conclusion. These are already pre-written in the template. Just finish Chapter 5.
      
      **📖 БҮЛЭГ 5: ИРЭХ ЦАГИЙН ЗУРЛАГА БА ЗӨВЛӨГӨӨ ({{forecastYear}} ОН - {{nextYearAnimal}} ЖИЛ)**
      (Context: We are forecasting for {{forecastYear}}).
      - How does the {{nextYearAnimal}} Year ({{forecastYear}}) affect a {{yearAnimal}}? 
      - General Outlook & Harmony advice.
      - Provide specific spiritual advice for maintaining balance in {{forecastYear}}.
      
      (Write in deep, flowing paragraphs. NO BULLETS. STOP immediately after Chapter 5).
      `
    }
  },

   // ==================================================================================
  // 🧠 STATIC DATA (DO NOT EDIT BELOW THIS LINE)
  // ==================================================================================
  
  TSAGAAN_SAR: {
    // 1940s
    1945: "02-13", 1946: "02-02", 1947: "01-22", 1948: "02-10", 1949: "01-29",
    // 1950s
    1950: "02-17", 1951: "02-06", 1952: "01-27", 1953: "02-14", 1954: "02-03",
    1955: "02-24", 1956: "02-12", 1957: "01-31", 1958: "02-18", 1959: "02-08",
    // 1960s
    1960: "02-27", 1961: "02-15", 1962: "02-05", 1963: "02-25", 1964: "02-13",
    1965: "02-02", 1966: "02-21", 1967: "02-09", 1968: "01-30", 1969: "02-17",
    // 1970s
    1970: "02-06", 1971: "02-27", 1972: "02-15", 1973: "02-06", 1974: "02-23",
    1975: "02-11", 1976: "01-31", 1977: "02-18", 1978: "02-07", 1979: "02-28",
    // 1980s
    1980: "02-16", 1981: "02-05", 1982: "02-24", 1983: "02-13", 1984: "02-02",
    1985: "02-20", 1986: "02-09", 1987: "01-29", 1988: "02-17", 1989: "02-06",
    // 1990s
    1990: "02-27", 1991: "02-15", 1992: "02-04", 1993: "02-23", 1994: "02-10",
    1995: "01-31", 1996: "02-19", 1997: "02-07", 1998: "02-28", 1999: "02-16",
    // 2000s
    2000: "02-05", 2001: "02-24", 2002: "02-12", 2003: "02-01", 2004: "02-22",
    2005: "02-09", 2006: "01-29", 2007: "02-18", 2008: "02-07", 2009: "02-25",
    // 2010s
    2010: "02-14", 2011: "02-03", 2012: "02-22", 2013: "02-11", 2014: "01-31",
    2015: "02-19", 2016: "02-09", 2017: "02-27", 2018: "02-16", 2019: "02-05",
    // 2020s
    2020: "02-24", 2021: "02-12", 2022: "02-02", 2023: "02-21", 2024: "02-10",
    2025: "02-28" // Note: 2025 Tsagaan Sar might vary slightly (Feb 28 or Mar 1) depending on source, but Feb 28 is safe.
  },

  ANIMALS: ["Хулгана", "Үхэр", "Бар", "Туулай", "Луу", "Могой", "Морь", "Хонь", "Бич", "Тахиа", "Нохой", "Гахай"],
  
  ELEMENTS_BY_LAST_DIGIT: {
    0: "Төмөр", 1: "Төмөр", 2: "Усан", 3: "Усан", 4: "Модон", 5: "Модон", 6: "Гал", 7: "Гал", 8: "Шороон", 9: "Шороон"
  },

  ZODIACS: [
    { name: "Матар", element: "Газар", start: "12-22", end: "01-19" },
    { name: "Хумх", element: "Агаар", start: "01-20", end: "02-18" },
    { name: "Загас", element: "Ус", start: "02-19", end: "03-20" },
    { name: "Хонь", element: "Гал", start: "03-21", end: "04-19" },
    { name: "Үхэр", element: "Газар", start: "04-20", end: "05-20" },
    { name: "Ихэр", element: "Агаар", start: "05-21", end: "06-20" },
    { name: "Мэлхий", element: "Ус", start: "06-21", end: "07-22" },
    { name: "Арслан", element: "Гал", start: "07-23", end: "08-22" },
    { name: "Охин", element: "Газар", start: "08-23", end: "09-22" },
    { name: "Жинлүүр", element: "Агаар", start: "09-23", end: "10-22" },
    { name: "Хилэнц", element: "Ус", start: "10-23", end: "11-21" },
    { name: "Нум", element: "Гал", start: "11-22", end: "12-21" }
  ],

  DELIVERY_MESSAGE: `🔮 Сайн байна уу, {{NAME}}? \n\nЧиний "Хувь Заяаны Код" тайлагдлаа. Энэ бол зүгээр нэг зурхай биш, чиний дотоод ертөнцийн газрын зураг юм.\n\nФайл: {{URL}}\n\n(Татаж аваад хадгалаарай, линк 7 хоногийн дараа устаж магадгүй)`,
};

// --- MAIN FUNCTION ---
function main() {
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return;

  const START_TIME = new Date().getTime();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CONFIG.SHEET_NAME);
  const rows = sheet.getDataRange().getValues();
  
  const KEYS = {
    GEMINI: PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY"),
    MANYCHAT: PropertiesService.getScriptProperties().getProperty("MANYCHAT_API_TOKEN"),
    TEMPLATE: PropertiesService.getScriptProperties().getProperty("TEMPLATE_ID") 
  };

  let processedCount = 0;
  const TIME_LIMIT = 270000; 

  try {
    for (let i = 1; i < rows.length; i++) {
      if (new Date().getTime() - START_TIME > TIME_LIMIT) {
        console.warn("⏳ TIME GUARD: Stopping batch execution.");
        break; 
      }
      
      if (processedCount >= CONFIG.BATCH_SIZE) break;

      const row = rows[i];
      const status = row[CONFIG.COLUMNS.STATUS];
      
      if (status === "DONE" || String(status).includes("ERROR") || !row[CONFIG.COLUMNS.INPUT]) continue;

      sheet.getRange(i + 1, CONFIG.COLUMNS.STATUS + 1).setValue("Processing...");
      SpreadsheetApp.flush();

      try {
        const inputString = String(row[CONFIG.COLUMNS.INPUT]); 
        const contactId = row[CONFIG.COLUMNS.ID];
        
        // 1. PARSE
        const profile = parseAndCalculateProfile(inputString);
        
        // 2. GENERATE
        const reportResult = generateFullReport(profile, KEYS.GEMINI);
        
        // 3. CREATE PDF
        const pdfUrl = createPdf(profile.name, reportResult.text, KEYS.TEMPLATE);

        // 4. SEND
        sendManyChat(contactId, pdfUrl, profile.firstName, KEYS.MANYCHAT);

        // 5. LOG
        const now = new Date();
        const formattedDate = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm");
        
        sheet.getRange(i + 1, CONFIG.COLUMNS.PDF + 1).setValue(pdfUrl);
        sheet.getRange(i + 1, CONFIG.COLUMNS.STATUS + 1).setValue("DONE");
        sheet.getRange(i + 1, CONFIG.COLUMNS.TOKEN + 1).setValue(reportResult.usage); 
        sheet.getRange(i + 1, CONFIG.COLUMNS.DEBUG + 1).setValue(JSON.stringify(profile));
        sheet.getRange(i + 1, CONFIG.COLUMNS.DATE + 1).setValue(formattedDate);
        sheet.getRange(i + 1, CONFIG.COLUMNS.VER + 1).setValue(CONFIG.VERSION);
        sheet.getRange(i + 1, CONFIG.COLUMNS.ERROR + 1).setValue(""); 
        
        processedCount++;

      } catch (err) {
        console.error(err);
        sheet.getRange(i + 1, CONFIG.COLUMNS.STATUS + 1).setValue("ERROR");
        sheet.getRange(i + 1, CONFIG.COLUMNS.ERROR + 1).setValue(err.message);
      }
    }
  } catch (e) {
    console.error("Critical Error", e);
  } finally {
    lock.releaseLock();
  }
}

// ==========================================
// 1. CORE LOGIC ENGINE
// ==========================================

function parseAndCalculateProfile(rawInput) {
  const normalized = normalizeInputWithAI(rawInput, CONFIG.GEMINI_MODEL, PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY"));
  
  const dateStr = normalized.date; 
  const timeStr = normalized.time; 
  const gender = normalized.gender; 
  const name = normalized.name;

  const [year, month, day] = dateStr.split(".").map(Number);
  
  const mongolData = getMongolianYearData(year, month, day);
  const zodiacData = getWesternZodiac(month, day);
  const timeAnimal = getTimeAnimal(timeStr);
  const numerology = calculateNumerology(year, month, day);
  const transits = calculateTransits(mongolData.animalIndex);
  const elementRel = analyzeElementalConflict(mongolData.element, zodiacData.element);

  return {
    name: name,
    firstName: name.split(" ")[0],
    dob: dateStr,
    tob: timeStr,
    gender: gender,
    
    yearAnimal: mongolData.animal,
    yearElement: mongolData.element,
    zodiacSign: zodiacData.name,
    zodiacElement: zodiacData.element,
    timeAnimal: timeAnimal,
    isDoubleAnimal: mongolData.animal === timeAnimal,
    
    lifePath: numerology.lifePath,
    birthDayNum: numerology.birthDay,
    
    transit2025: transits.gate1, 
    transit2026: transits.gate2, 
    transit2027: transits.gate3, 
    
    elementRelationship: elementRel
  };
}

function normalizeInputWithAI(raw, model, key) {
  const prompt = `
    TASK: Normalize this input string into JSON.
    INPUT: "${raw}"
    REQUIRED JSON FORMAT:
    {
      "name": "Full Name",
      "date": "YYYY.MM.DD", 
      "time": "HH:MM" OR "Unknown",
      "gender": "Эрэгтэй" or "Эмэгтэй"
    }
    RETURN ONLY JSON.
  `;
  try {
    const result = callGemini(prompt, key); 
    const cleanJson = result.text.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleanJson);
  } catch (e) {
    console.error("Normalization Failed", e);
    const parts = raw.split("-");
    return {
      name: parts[0] ? parts[0].trim() : "Unknown",
      date: parts[1] ? parts[1].trim() : "2000.01.01",
      time: parts[2] ? parts[2].trim() : "Unknown",
      gender: parts[3] ? parts[3].trim() : "Эмэгтэй"
    };
  }
}

function getMongolianYearData(year, month, day) {
  const tsDate = CONFIG.TSAGAAN_SAR[year];
  if (!tsDate) throw new Error(`Year ${year} not in Tsagaan Sar Map`);
  
  const [tsMonth, tsDay] = tsDate.split("-").map(Number);
  
  let trueYear = year;
  if (month < tsMonth || (month === tsMonth && day < tsDay)) {
    trueYear = year - 1;
  }

  const animalIndex = (trueYear - 1900) % 12;
  const animal = CONFIG.ANIMALS[animalIndex];
  const lastDigit = trueYear % 10;
  const element = CONFIG.ELEMENTS_BY_LAST_DIGIT[lastDigit];

  return { animal, element, animalIndex, trueYear };
}

function getWesternZodiac(m, d) {
  const dateNum = m * 100 + d; 
  
  for (let z of CONFIG.ZODIACS) {
    const [startM, startD] = z.start.split("-").map(Number);
    const [endM, endD] = z.end.split("-").map(Number);
    
    if (z.name === "Матар") {
      if (dateNum >= 1222 || dateNum <= 119) return z;
    } else {
      const start = startM * 100 + startD;
      const end = endM * 100 + endD;
      if (dateNum >= start && dateNum <= end) return z;
    }
  }
  return { name: "Тодорхойгүй", element: "Тодорхойгүй" };
}

function getTimeAnimal(timeStr) {
  if (!timeStr || timeStr.toLowerCase().includes("unknown") || timeStr === "Тодорхойгүй") return "Тодорхойгүй";
  const hour = parseInt(timeStr.split(":")[0], 10);
  
  if (hour >= 23 || hour < 1) return "Хулгана";
  if (hour >= 1 && hour < 3) return "Үхэр";
  if (hour >= 3 && hour < 5) return "Бар";
  if (hour >= 5 && hour < 7) return "Туулай";
  if (hour >= 7 && hour < 9) return "Луу";
  if (hour >= 9 && hour < 11) return "Могой";
  if (hour >= 11 && hour < 13) return "Морь";
  if (hour >= 13 && hour < 15) return "Хонь";
  if (hour >= 15 && hour < 17) return "Бич";
  if (hour >= 17 && hour < 19) return "Тахиа";
  if (hour >= 19 && hour < 21) return "Нохой";
  if (hour >= 21 && hour < 23) return "Гахай";
  return "Тодорхойгүй";
}

function calculateNumerology(y, m, d) {
  function sumDigits(n) {
    return String(n).split('').reduce((a, b) => a + Number(b), 0);
  }
  
  function reduceToMaster(n) {
    if (n === 11 || n === 22 || n === 33) return n;
    if (n < 10) return n;
    return reduceToMaster(sumDigits(n));
  }
  const total = sumDigits(y) + sumDigits(m) + sumDigits(d);
  const lifePath = reduceToMaster(total); 
  const birthDay = d; 
  return { lifePath, birthDay };
}

function calculateTransits(birthIdx) {
  const startYear = 2026;
  const startAnimalIdx = 6; // Horse
  
  let gates = [];
  
  for (let i = 0; i < 12; i++) {
    let currentYear = startYear + i;
    let currentAnimalIdx = (startAnimalIdx + i) % 12;
    let animalName = CONFIG.ANIMALS[currentAnimalIdx];
    let diff = (currentAnimalIdx - birthIdx + 12) % 12;
    let status = "";
    let isGolden = false;

    if (diff === 0) { status = "Өөрийн жил (Jupiter Return)"; isGolden = true; }
    else if (diff === 4 || diff === 8) { status = "Их Ивээл (Алтан Хаалга)"; isGolden = true; }
    else if (diff === 6) { status = "Харш (Сорилт)"; } 
    else if (diff === 3) { status = "Түнш (Ивээл)"; isGolden = true; } 
    
    if (isGolden || i === 0) { 
       gates.push({ year: currentYear, animal: animalName, status: status || "Хэвийн (Бэлтгэл үе)" });
    }
  }

  return {
    gate1: gates[0] ? `${gates[0].year} (${gates[0].animal}) - ${gates[0].status}` : "2026 (Морь) - Хэвийн",
    gate2: gates[1] ? `${gates[1].year} (${gates[1].animal}) - ${gates[1].status}` : "2027 (Хонь) - Хэвийн",
    gate3: gates[2] ? `${gates[2].year} (${gates[2].animal}) - ${gates[2].status}` : "2028 (Бич) - Хэвийн"
  };
}

function analyzeElementalConflict(yearEl, zodiacEl) {
  if (yearEl === "Усан" && zodiacEl === "Гал") return "Ус Гал хоёрын тэмцэл (Буцалж буй Ус)";
  if (yearEl === "Гал" && zodiacEl === "Ус") return "Гал Ус хоёрын тэмцэл (Унтарсан Цог)";
  if (yearEl === zodiacEl) return "Давхар хүч (Тэнцвэртэй)";
  if ((yearEl === "Модон" && zodiacEl === "Гал") || (yearEl === "Гал" && zodiacEl === "Модон")) return "Гал дээр тос (Дүрэлзсэн Энерги)";
  return "Холимог Энерги";
}

// ==========================================
// 2. GENERATION ENGINE (CONFIG DRIVEN)
// ==========================================

function generateFullReport(p, apiKey) {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; 
  let forecastYear = currentYear;
  if (currentMonth >= 11) forecastYear = currentYear + 1; 
  const nextYearAnimal = CONFIG.ANIMALS[(forecastYear - 1900) % 12].toUpperCase(); // Make uppercase
  
  // 1. Prepare Replacement Variables
  // We add logic for optional sections here
  const timeInfoLine = p.timeAnimal !== "Тодорхойгүй" 
    ? `🕰️ **Төрсөн цаг:** ${p.tob} (${p.timeAnimal} цаг)` 
    : "";
    
  const timeAnalysisInstructions = p.timeAnimal !== "Тодорхойгүй"
    ? `- Analyze ${p.timeAnimal} birth hour influence on their hidden self.`
    : "(User does not know birth time, so SILENTLY SKIP the birth hour section. Do NOT mention that the time is unknown. Just move to the next topic naturally.)";

  // The map of {{variables}} to values
  const replacements = {
    "{{name}}": p.name,
    "{{dob}}": p.dob,
    "{{yearElement}}": p.yearElement,
    "{{yearAnimal}}": p.yearAnimal,
    "{{zodiacElement}}": p.zodiacElement,
    "{{zodiacSign}}": p.zodiacSign,
    "{{tob}}": p.tob,
    "{{timeAnimal}}": p.timeAnimal,
    "{{lifePath}}": p.lifePath,
    "{{birthDayNum}}": p.birthDayNum,
    "{{elementRelationship}}": p.elementRelationship,
    "{{gender}}": p.gender,
    "{{transit1}}": p.transit2025,
    "{{transit2}}": p.transit2026,
    "{{transit3}}": p.transit2027,
    "{{forecastYear}}": forecastYear,
    "{{nextYearAnimal}}": nextYearAnimal,
    "{{timeInfoLine}}": timeInfoLine,
    "{{timeAnalysisInstructions}}": timeAnalysisInstructions
  };

  // 2. Build System Prompt (Role + Core Rules + User Profile)
  const systemPrompt = `
    ROLE: ${CONFIG.AI_SETTINGS.ROLE}
    TONE: ${CONFIG.AI_SETTINGS.TONE}
    
    CORE RULES:
    ${CONFIG.AI_SETTINGS.CORE_RULES}
    
    USER PROFILE:
    - Name: ${p.name}
    - Gender: ${p.gender}
    - Year: ${p.yearElement} ${p.yearAnimal}
    - Zodiac: ${p.zodiacSign} (${p.zodiacElement})
    - Birth Time: ${p.tob} (${p.timeAnimal})
    - Life Path: ${p.lifePath}
    - Transits: ${p.transit2025} | ${p.transit2026}
  `;

  // 3. Helper to replace placeholders
  const fill = (template) => {
    let result = template;
    for (const [key, val] of Object.entries(replacements)) {
      result = result.split(key).join(val); // Global replace
    }
    return result;
  };

  // 4. Execute Prompts
  const prompt1 = systemPrompt + "\n" + fill(CONFIG.AI_SETTINGS.PROMPTS.PART_1);
  const r1 = callGemini(prompt1, apiKey);

  const prompt2 = systemPrompt + "\n" + fill(CONFIG.AI_SETTINGS.PROMPTS.PART_2);
  const r2 = callGemini(prompt2, apiKey);

  const prompt3 = systemPrompt + "\n" + fill(CONFIG.AI_SETTINGS.PROMPTS.PART_3);
  const r3 = callGemini(prompt3, apiKey);

  return {
    text: r1.text + "\n\n" + r2.text + "\n\n" + r3.text,
    usage: r1.usage + r2.usage + r3.usage
  };
}

function callGemini(text, key) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.GEMINI_MODEL}:generateContent?key=${key}`;
  const payload = {
    contents: [{ parts: [{ text: text }] }],
    generationConfig: { temperature: CONFIG.TEMPERATURE, maxOutputTokens: 8192 }
  };
  
  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };
  
  const res = UrlFetchApp.fetch(url, options);
  const json = JSON.parse(res.getContentText());
  
  if (json.error) throw new Error("Gemini Error: " + json.error.message);
  
  const content = (json.candidates && json.candidates[0].content) ? json.candidates[0].content.parts[0].text : "Error generating text.";
  const usage = (json.usageMetadata && json.usageMetadata.totalTokenCount) ? json.usageMetadata.totalTokenCount : 0;

  return { text: content, usage: usage };
}

// ==========================================
// 3. PDF & DELIVERY
// ==========================================

function createPdf(name, content, templateId) {
  const copy = DriveApp.getFileById(templateId).makeCopy(`${name} - Astro Report`);
  const doc = DocumentApp.openById(copy.getId());
  const body = doc.getBody();

  let cleanText = content
    .replace(/```.*?```/gs, "")
    .replace(/^###\s/gm, "")          
    .replace(/^##\s/gm, "")
    .replace(/^\s*[\*\-]\s+/gm, "") 
    .trim();
  
  body.replaceText("{{NAME}}", name);
  body.replaceText("{{REPORT}}", cleanText);
  body.replaceText("{{report}}", cleanText);
  
  processMarkdownBold(body);

  doc.saveAndClose();
  
  const pdf = copy.getAs(MimeType.PDF);
  const folder = DriveApp.getFolderById("1LKYwnC9eFildYLrlzly4xa1AJDt0rp4b");
  const pdfFile = folder.createFile(pdf); 
  
  pdfFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  copy.setTrashed(true);
  
  return pdfFile.getUrl();
}

function processMarkdownBold(body) {
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
  const payload = {
    "subscriber_id": String(subscriberId).trim(),
    data: {
      version: "v2",
      content: { messages: [{ type: "text", text: msg }] }
    }
  };
  const options = {
    method: "post",
    headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };
  const res = UrlFetchApp.fetch(url, options);
  const json = JSON.parse(res.getContentText());
  if (json.status !== "success") throw new Error("ManyChat Error: " + JSON.stringify(json));
}
