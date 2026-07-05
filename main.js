// TIGRIS CYBER - PURE HTML, CSS, JAVASCRIPT MASTER IMPLEMENTATION

// --- 1. ALL SYSTEM DATA CONSTANTS ---
const INITIAL_ARTICLES = [
  {
    id: 'iraq-1',
    title: 'تأمين النطاقات الحكومية (.iq) ضد هجمات DDoS',
    excerpt: 'تقرير حول الإجراءات المتخذة لحماية البنية التحتية الرقمية العراقية من موجة الهجمات الأخيرة التي استهدفت البوابات الحكومية.',
    category: 'Cyber Iraq',
    subCategory: 'تهديدات محلية',
    date: '2024-05-20',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
    author: 'وحدة الرصد العراقي'
  },
  {
    id: 'global-crowdstrike',
    title: 'تحليل انقطاع أنظمة CrowdStrike العالمي',
    excerpt: 'دراسة تقنية معمقة حول التحديث البرمجي الذي تسبب في تعطل ملايين الأجهزة حول العالم وتوقف المطارات والبنوك.',
    category: 'Cyber News',
    subCategory: 'تحليل تقني',
    date: '2024-07-19',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800',
    author: 'فريق دجلة سايبر'
  },
  {
    id: 'threat-att',
    title: 'تسريب بيانات ضخم يستهدف عملاء AT&T',
    excerpt: 'الكشف عن سرقة سجلات المكالمات والرسائل النصية لملايين المستخدمين، وتحذيرات من هجمات هندسة اجتماعية محتملة.',
    category: 'Threats & Alerts',
    subCategory: 'تنبيه أمني',
    date: '2024-07-12',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800',
    author: 'مركز الاستجابة'
  },
  {
    id: 'iraq-2',
    title: 'محاولات اختراق شبكة الكهرباء الوطنية',
    excerpt: 'رصد نشاط مشبوه يحاول استهداف أنظمة التوزيع الذكية في المحافظات الجنوبية، وتم التصدي له بنجاح.',
    category: 'Cyber Iraq',
    subCategory: 'بنية تحتية',
    date: '2024-05-29',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800',
    author: 'فريق العمليات'
  },
  {
    id: 'edu-solarwinds',
    title: 'دروس مستفادة من هجوم SolarWinds',
    excerpt: 'كيف غير اختراق سلسلة التوريد مفهوم الأمن السيبراني للمؤسسات الحكومية والشركات الكبرى حول العالم.',
    category: 'Reports & Trends',
    subCategory: 'سلسلة التوريد',
    date: '2024-06-15',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=800',
    author: 'محلل برمجيات'
  },
  {
    id: 'global-2',
    title: 'سقوط أكبر منصة لبيع البيانات المسربة',
    excerpt: 'بالتعاون مع FBI، تم إغلاق منتدى BreachForums واعتقال عدد من المشرفين في عملية دولية واسعة.',
    category: 'Cyber News',
    subCategory: 'عمليات دولية',
    date: '2024-06-01',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800',
    author: 'مراسل سايبر'
  }
];

const INITIAL_STORIES = [
  {
    id: 'ubisoft-breach',
    title: 'اختراق شركة Ubisoft: صراع خلف الكواليس',
    preview: 'كيف تمكن المهاجمون من الوصول إلى الأنظمة الداخلية لعملاق الألعاب الفرنسي ومحاولة سرقة بيانات حساسة...',
    readTime: '10 دقائق',
    category: 'اختراقات عالمية',
    icon: '🎮'
  },
  {
    id: 'sony-hack',
    title: 'سوني بيكتشرز: الهجوم الذي هز هوليوود',
    preview: 'قصة الاختراق المدمر الذي أدى إلى تسريب أفلام لم تُعرض بعد ورسائل بريد إلكتروني محرجة للمسؤولين.',
    readTime: '15 دقيقة',
    category: 'تحقيقات',
    icon: '🎬'
  },
  {
    id: 'stuxnet-story',
    title: 'ستوكسنت: السلاح الرقمي الأول',
    preview: 'كيف تمكنت دودة حاسوبية من تدمير أجهزة طرد مركزي مادية في منشأة نووية دون إطلاق رصاصة واحدة.',
    readTime: '12 دقيقة',
    category: 'أمن صناعي',
    icon: '☢️'
  }
];

const EXPERTS = [
  { id: '1', name: 'عباس حبيب', title: 'خبير أمن سيبراني', desc: 'متخصص في حماية البنى التحتية الحساسة وإدارة المخاطر الرقمية.', rating: 5, skills: ['Network Security', 'Risk Management'], icon: 'shield-check' },
  { id: '2', name: 'عبدلله بركان', title: 'محلل برمجيات خبيثة', desc: 'خبير في الهندسة العكسية وتحليل الفيروسات والبرمجيات الضارة.', rating: 4.9, skills: ['Reverse Engineering', 'Malware Analysis'], icon: 'shield-alert' },
  { id: '3', name: 'حسن غسان', title: 'مختبر اختراق', desc: 'متخصص في اكتشاف الثغرات الأمنية في تطبيقات الويب والموبايل.', rating: 4.8, skills: ['Penetration Testing', 'Web Security'], icon: 'binary' },
  { id: '4', name: 'امين حازم', title: 'مهندس أمن سحابي', desc: 'تصميم وتنفيذ حلول أمنية متكاملة للبيئات السحابية الهجينة.', rating: 4.7, skills: ['Cloud Security', 'AWS/Azure'], icon: 'cloud' },
  { id: '5', name: 'مبين ارسلان', title: 'خبير استجابة للحوادث', desc: 'متخصص في التعامل مع الاختراقات النشطة واستعادة الأنظمة المتضررة.', rating: 5, skills: ['Incident Response', 'Digital Forensics'], icon: 'shield' },
  { id: '6', name: 'عبدلله طارق', title: 'مطور أدوات أمنية', desc: 'برمجة أدوات مخصصة للأتمتة الأمنية وفحص الثغرات التلقائي.', rating: 4.6, skills: ['Python', 'Automation'], icon: 'lock' },
  { id: '7', name: 'محمد وسام', title: 'مستشار أمن معلومات', desc: 'تقديم استشارات استراتيجية للشركات للامتثال للمعايير الأمنية العالمية.', rating: 4.9, skills: ['ISO 27001', 'Compliance'], icon: 'user-check' },
  { id: '8', name: 'عبدلله بلال', title: 'خبير تشفير', desc: 'متخصص في بروتوكولات التشفير وحماية البيانات الحساسة أثناء النقل والتخزين.', rating: 4.8, skills: ['Cryptography', 'Data Privacy'], icon: 'lock' }
];

const CYBER_TOOLS = [
  { name: 'Burp Suite', category: 'Web App Security', desc: 'الأداة رقم 1 لاختبار اختراق تطبيقات الويب واعتراض وتحليل حركة مرور البيانات.', icon: 'terminal', color: 'text-cyber-powder', useCase: 'فحص ثغرات المواقع' },
  { name: 'Nmap', category: 'Network Scanning', desc: 'أداة مفتوحة المصدر لاكتشاف الأجهزة والخدمات النشطة داخل أي شبكة برمجية.', icon: 'layers', color: 'text-green-500', useCase: 'استطلاع الشبكات' },
  { name: 'Metasploit', category: 'Exploitation', desc: 'إطار عمل ضخم يحتوي على مئات الثغرات الجاهزة لاختبار قوة دفاع الأنظمة.', icon: 'shield-check', color: 'text-red-500', useCase: 'تطوير الاستغلالات' },
  { name: 'Wireshark', category: 'Packet Analysis', desc: 'محلل بروتوكولات الشبكة لمراقبة كل "بايت" يخرج أو يدخل إلى جهازك بدقة متناهية.', icon: 'cpu', color: 'text-cyber-sapphire', useCase: 'تحليل حركة المرور' },
  { name: 'Ghidra', category: 'Reverse Engineering', desc: 'أداة متطورة لتحليل وفك شفرات البرامج والملفات الخبيثة.', icon: 'bug', color: 'text-purple-500', useCase: 'الهندسة العكسية' },
  { name: 'John the Ripper', category: 'Password Cracking', desc: 'أداة سريعة لاختبار قوة كلمات المرور وفك التشفير بالقاموس.', icon: 'file-code', color: 'text-orange-500', useCase: 'اختراق كلمات المرور' }
];

const FREE_COURSES = [
  { title: 'مبادئ الأمن السيبراني (Cisco)', provider: 'Skills for All', type: 'مجاني بالكامل', link: 'https://skillsforall.com/', desc: 'كورس أساسي يغطي مبادئ الحماية والشبكات مع شهادة إتمام.', icon: 'unlock' },
  { title: 'شهادة جوجل المهنية (Financial Aid)', provider: 'Coursera / Google', type: 'دعم مادي متاح', link: 'https://www.coursera.org/google-cybersecurity', desc: 'واحد من أفضل الكورسات للدخول في سوق العمل العالمي.', icon: 'globe' },
  { title: 'أساسيات الهاكر الأخلاقي', provider: 'TryHackMe', type: 'مسار عملي مجاني', link: 'https://tryhackme.com/path/outline/hacking101', desc: 'تعلم من خلال التطبيق العملي المباشر في مختبرات افتراضية.', icon: 'play-circle' },
  { title: 'أمن المعلومات للمبتدئين', provider: 'Cybrary', type: 'مستوى تأسيسي', link: 'https://www.cybrary.it/course/introduction-to-it-and-cybersecurity', desc: 'شرح مبسط وشامل لكل مصطلحات ومفاهيم الأمن الحديثة.', icon: 'external-link' },
  { title: 'أساسيات أمن السحابة (IBM)', provider: 'IBM Training', type: 'مستوى متوسط', link: 'https://www.ibm.com/training/cybersecurity', desc: 'تأمين هياكل البيانات السحابية وحماية الخدمات الموزعة.', icon: 'server' },
  { title: 'التحليل الجنائي الرقمي', provider: 'OpenLearn', type: 'تخصصي', link: 'https://www.open.edu/openlearn/free-courses/full-catalogue', desc: 'جمع الأدلة من الأجهزة المخترقة وتقديمها للعدالة.', icon: 'search' }
];

const SECTIONS = [
  { title: 'أخبار السايبر', icon: 'newspaper', targetId: 'news' },
  { title: 'تهديدات وتحذيرات', icon: 'shield-alert', targetId: 'news' },
  { title: 'قصص دجلة', icon: 'zap', targetId: 'stories' },
  { title: 'منصة الخبراء', icon: 'users', view: 'experts' },
  { title: 'مركز التعلم', icon: 'graduation-cap', view: 'learning' },
  { title: 'من نحن', icon: 'info', view: 'about' }
];

const INFO_VIEWS = {
  about: {
    title: 'من نحن',
    subtitle: 'دجلة سايبر - العين الرقمية لبلاد الرافدين',
    icon: 'info',
    color: 'text-cyber-powder',
    text: 'دجلة سايبر هي منصة رائدة في مجال الأمن السيبراني مقرها بغداد، تهدف إلى رصد وتحليل التهديدات الرقمية في المنطقة وتقديم حلول استخباراتية متطورة. نحن نجمع بين التقنية والخبرة العراقية لحماية الفضاء الرقمي الوطني.'
  },
  contact: {
    title: 'تواصل معنا',
    subtitle: 'نحن هنا للإجابة على تساؤلاتكم الأمنية',
    icon: 'send',
    color: 'text-green-400',
    text: 'يمكنكم التواصل مع فريق الدعم الفني أو الاستشارات عبر القنوات الرسمية الموضحة أدناه.'
  },
  privacy: {
    title: 'سياسة الخصوصية',
    subtitle: 'حماية بياناتك هي أولويتنا القصوى',
    icon: 'shield-check',
    color: 'text-cyber-sapphire',
    text: 'نحن نلتزم بأقصى معايير التشفير والسرية في التعامل مع بيانات المستخدمين. دجلة سايبر لا تقوم بمشاركة معلوماتك الشخصية مع أي جهة خارجية دون موافقة صريحة.'
  }
};

// --- 2. THE CHATBOT MODEL SYSTEM PROMPT & API LOGIC ---
const CHATBOT_SYSTEM_INSTRUCTION = "أنت 'حارس دجلة'، مستشار أمن سيبراني محترف وخبير، وشخصية ودودة وتفاعلية. مهمتك هي تقديم نصائح تقنية دقيقة ومفهومة باللغة العربية. يجب أن يكون أسلوبك ذكياً، تفاعلياً، وقادراً على إجراء محادثة طبيعية. لا تكتفِ بالإجابات الجافة، بل شجع المستخدم على طرح المزيد من الأسئلة وكن مبادراً في تقديم الحلول. ركز على حماية المستخدمين من التهديدات الرقمية وتوعيتهم بأفضل الممارسات الأمنية بأسلوب مشوق.";

async function getCyberAdvice(userInput) {
  // Try retrieving from Vite's compiled environment variables
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) {
    return "عذراً، مفتاح API الخاص بالذكاء الاصطناعي غير مكون حالياً في إعدادات النظام.";
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { role: 'user', parts: [{ text: `التعليمات الخاصة بك: ${CHATBOT_SYSTEM_INSTRUCTION}\n\nسؤال المستخدم: ${userInput}` }] }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`REST Error: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "عذراً، لم أتمكن من استخلاص رد أمني مناسب.";
  } catch (err) {
    console.error("Gemini API Error:", err);
    return "حدث خطأ أثناء محاولة الاتصال بخبير الذكاء الاصطناعي 'حارس دجلة'. يرجى المحاولة لاحقاً.";
  }
}

// --- 3. RENDERING ENGINE FUNCTIONS ---

function renderNews() {
  const newsCol = document.getElementById('news-col');
  const attacksCol = document.getElementById('attacks-col');
  const analysisCol = document.getElementById('analysis-col');

  if (!newsCol || !attacksCol || !analysisCol) return;

  const newsData = INITIAL_ARTICLES.filter(a => a.category === 'Cyber News' || a.category === 'Cyber Iraq').slice(0, 3);
  const attackData = INITIAL_ARTICLES.filter(a => a.category === 'Threats & Alerts' || a.category === 'Famous Hacks').slice(0, 3);
  const analysisData = INITIAL_ARTICLES.filter(a => a.category === 'Reports & Trends' || a.category === 'Opinion & Analysis').slice(0, 3);

  const makeCard = (art) => `
    <article class="group bg-cyber-ice/5 border border-cyber-powder/20 rounded-xl overflow-hidden hover:border-cyber-sapphire/40 transition-all duration-300 flex flex-col h-full animate-slide-up">
      <div class="relative h-32 overflow-hidden">
        <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
        <div class="absolute top-2 right-2 bg-cyber-navy/90 border border-cyber-sapphire/20 px-2 py-0.5 text-[7px] text-cyber-powder font-black uppercase rounded">
          ${art.subCategory || art.category}
        </div>
      </div>
      <div class="p-4 text-right flex-1 flex flex-col">
        <h3 class="text-sm font-bold text-white mb-1.5 group-hover:text-cyber-sapphire transition-colors line-clamp-2 leading-tight">${art.title}</h3>
        <p class="text-slate-300 text-[10px] mb-3 line-clamp-2 leading-relaxed">${art.excerpt}</p>
        <div class="mt-auto flex items-center justify-between pt-3 border-t border-slate-800/40">
           <span class="text-[8px] text-slate-400 font-bold">${art.date}</span>
           <button class="text-cyber-sapphire hover:text-white transition-colors"><i data-lucide="arrow-left" class="w-3.5 h-3.5"></i></button>
        </div>
      </div>
    </article>
  `;

  newsCol.innerHTML = newsData.map(makeCard).join('');
  attacksCol.innerHTML = attackData.map(makeCard).join('');
  analysisCol.innerHTML = analysisData.map(makeCard).join('');
}

function renderStories() {
  const grid = document.getElementById('stories-grid');
  if (!grid) return;

  grid.innerHTML = INITIAL_STORIES.map(story => `
    <div class="group relative bg-cyber-ice/5 border border-cyber-powder/20 p-8 hover:border-cyber-sapphire/40 transition-all duration-500 overflow-hidden backdrop-blur-md animate-slide-up">
      <div class="absolute -top-10 -right-10 w-32 h-32 bg-cyber-sapphire/5 rounded-full blur-3xl group-hover:bg-cyber-sapphire/10 transition-all"></div>
      
      <div class="relative z-10">
        <div class="flex justify-between items-start mb-6">
          <span class="text-4xl">${story.icon}</span>
          <span class="px-3 py-1 bg-cyber-navy border border-cyber-powder/20 text-[10px] text-cyber-powder font-black uppercase tracking-widest rounded-full">
            ${story.category}
          </span>
        </div>
        
        <h3 class="text-xl font-black text-white mb-3 group-hover:text-cyber-sapphire transition-colors">
          ${story.title}
        </h3>
        
        <p class="text-slate-300 text-sm leading-relaxed mb-8 line-clamp-3">
          ${story.preview}
        </p>
        
        <div class="flex items-center justify-between pt-6 border-t border-cyber-powder/10">
          <div class="flex items-center gap-2 text-slate-400 text-xs">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i>
            ${story.readTime}
          </div>
          <button class="inline-flex items-center gap-2 text-xs font-black text-white group/btn">
            ابدأ القراءة
            <i data-lucide="book-open" class="w-4 h-4 text-cyber-sapphire group-hover/btn:scale-110 transition-transform"></i>
          </button>
        </div>
      </div>
      <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-powder/20 group-hover:border-cyber-sapphire/50 transition-colors"></div>
    </div>
  `).join('');
}

function renderExperts() {
  const grid = document.getElementById('experts-grid');
  if (!grid) return;

  grid.innerHTML = EXPERTS.map(exp => `
    <div class="group bg-cyber-ice/5 border border-cyber-powder/20 p-4 rounded-xl hover:border-cyber-sapphire/30 transition-all flex flex-col gap-3 relative overflow-hidden animate-slide-up">
      <div class="absolute top-0 right-0 w-1 h-full bg-cyber-sapphire opacity-20 group-hover:opacity-100 transition-all"></div>
      
      <div class="flex justify-between items-start flex-row-reverse">
        <div class="w-10 h-10 bg-cyber-navy rounded-lg border border-cyber-powder/20 flex items-center justify-center text-cyber-sapphire group-hover:border-cyber-sapphire/30 transition-colors">
          <i data-lucide="${exp.icon}" class="w-5 h-5"></i>
        </div>
        <div class="text-right">
          <h4 class="text-white font-black text-sm">${exp.name}</h4>
          <div class="flex items-center justify-end gap-1 text-yellow-500">
            <i data-lucide="star" class="w-2.5 h-2.5 fill-current"></i>
            <span class="text-[9px] text-slate-500">${exp.rating}</span>
          </div>
        </div>
      </div>

      <div class="text-right">
        <h3 class="text-[13px] font-bold text-white mb-1.5 group-hover:text-cyber-sapphire transition-colors line-clamp-1">${exp.title}</h3>
        <p class="text-slate-300 text-[10px] leading-relaxed mb-3 h-8 line-clamp-2">${exp.desc}</p>
        
        <div class="flex flex-wrap justify-end gap-1 mb-4">
          ${exp.skills.map(sk => `<span class="text-[8px] font-bold text-cyber-powder bg-cyber-navy border border-cyber-powder/20 px-1.5 py-0.5 rounded">${sk}</span>`).join('')}
        </div>

        <div class="flex items-center justify-between border-t border-cyber-powder/10 pt-3">
          <div class="flex items-center gap-1 text-slate-500 text-[8px] font-bold uppercase tracking-widest">
            <i data-lucide="shield-check" class="w-3 h-3 text-cyber-sapphire"></i>
            Verified
          </div>
          <button class="consult-trigger-btn bg-cyber-navy hover:bg-cyber-sapphire text-white px-4 py-1.5 rounded-lg text-[10px] font-black transition-all border border-cyber-powder/20 flex items-center gap-2" data-name="${exp.name}">
            استشارة
            <i data-lucide="send" class="w-3 h-3"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Attach modal trigger click listeners
  document.querySelectorAll('.consult-trigger-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = e.currentTarget.getAttribute('data-name');
      openConsultation(name);
    });
  });
}

function renderLearning() {
  const toolsContainer = document.getElementById('tools-container');
  const coursesContainer = document.getElementById('courses-container');

  if (toolsContainer) {
    toolsContainer.innerHTML = CYBER_TOOLS.map(tool => `
      <div class="group bg-cyber-ice/5 border border-cyber-powder/20 p-5 rounded-xl hover:bg-cyber-ice/10 transition-all text-right relative overflow-hidden animate-slide-up">
        <div class="absolute top-0 right-0 w-1 h-full bg-green-500/10 group-hover:bg-green-500 transition-all"></div>
        <div class="flex items-center justify-end gap-4 mb-3">
          <div class="text-right">
            <span class="text-[8px] font-black text-green-500 uppercase tracking-widest bg-green-500/5 px-2 py-0.5 rounded border border-green-500/10">${tool.category}</span>
            <h4 class="text-base font-black text-white mt-1">${tool.name}</h4>
          </div>
          <div class="p-2.5 bg-cyber-navy rounded-lg border border-cyber-powder/20 ${tool.color}">
            <i data-lucide="${tool.icon}" class="w-5 h-5"></i>
          </div>
        </div>
        <p class="text-slate-300 text-[11px] leading-relaxed mb-3">${tool.desc}</p>
        <div class="flex items-center justify-between pt-3 border-t border-cyber-powder/10">
           <span class="text-[8px] text-slate-400 font-bold uppercase tracking-widest">${tool.useCase}</span>
           <button class="text-[9px] font-black text-white hover:text-green-400 flex items-center gap-1.5 transition-colors">
              <i data-lucide="arrow-left" class="w-3 h-3"></i> التثبيت
           </button>
        </div>
      </div>
    `).join('');
  }

  if (coursesContainer) {
    coursesContainer.innerHTML = FREE_COURSES.map(course => `
      <div class="bg-cyber-ice/5 border border-cyber-sapphire/10 p-5 rounded-xl hover:border-cyber-sapphire/40 transition-all text-right group relative overflow-hidden flex flex-col justify-between animate-slide-up">
         <div class="flex justify-between items-start mb-3">
           <i data-lucide="${course.icon}" class="w-7 h-7 text-cyber-sapphire/30 group-hover:text-cyber-sapphire transition-colors"></i>
           <div class="text-right">
             <span class="px-2 py-0.5 bg-cyber-sapphire/10 border border-cyber-sapphire/20 text-[8px] text-cyber-powder font-black uppercase rounded-full">
               ${course.type}
             </span>
           </div>
         </div>
         <h4 class="text-base font-black text-white mb-2 group-hover:text-cyber-sapphire transition-colors">${course.title}</h4>
         <p class="text-slate-300 text-[11px] leading-relaxed mb-4">${course.desc}</p>
         <a href="${course.link}" target="_blank" class="w-full bg-cyber-navy hover:bg-cyber-sapphire text-white py-2.5 rounded-lg text-[10px] font-black border border-cyber-powder/20 transition-all flex items-center justify-center gap-2 group/btn">
           <i data-lucide="external-link" class="w-3 h-3"></i> الانتقال للموقع
         </a>
      </div>
    `).join('');
  }
}

function renderSectionsNavigation() {
  const desktopDropdown = document.getElementById('desktop-dropdown');
  const dropdownItems = document.getElementById('dropdown-items');
  const sidebarSectionsContainer = document.getElementById('sidebar-sections-container');

  if (dropdownItems) {
    dropdownItems.innerHTML = SECTIONS.map(sec => `
      <button class="section-nav-btn w-full flex items-center justify-end gap-3 p-2.5 rounded-lg hover:bg-cyber-sapphire/10 transition-all text-[11px] font-bold text-slate-300 group" 
        data-target-view="${sec.view || 'home'}" data-target-anchor="${sec.targetId || ''}">
        <span>${sec.title}</span>
        <i data-lucide="${sec.icon}" class="w-3.5 h-3.5 text-slate-500 group-hover:text-cyber-sapphire"></i>
      </button>
    `).join('');
  }

  if (sidebarSectionsContainer) {
    sidebarSectionsContainer.innerHTML = SECTIONS.map(sec => `
      <button class="section-nav-btn w-full flex items-center justify-end gap-2.5 p-2.5 rounded-lg hover:bg-cyber-sapphire/10 transition-all text-[13px] font-black text-slate-300 group"
        data-target-view="${sec.view || 'home'}" data-target-anchor="${sec.targetId || ''}">
        <span>${sec.title}</span>
        <i data-lucide="${sec.icon}" class="w-4 h-4 text-slate-500 group-hover:text-cyber-sapphire"></i>
      </button>
    `).join('');
  }

  // Attach navigation action listener to sections buttons
  document.querySelectorAll('.section-nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const view = e.currentTarget.getAttribute('data-target-view');
      const anchor = e.currentTarget.getAttribute('data-target-anchor');
      
      navigateTo(view);
      closeMobileSidebar();
      if (desktopDropdown) desktopDropdown.classList.add('hidden');

      if (anchor) {
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    });
  });
}

// --- 4. NAVIGATION & VIEW ROUTING CONTROLLER ---

function navigateTo(viewId) {
  // Hide all views
  document.querySelectorAll('.view-content').forEach(el => {
    el.classList.add('hidden');
  });

  // Reset navbar active styles
  const navBtns = {
    home: document.getElementById('nav-home'),
    experts: document.getElementById('nav-experts'),
    learning: document.getElementById('nav-learning')
  };

  Object.entries(navBtns).forEach(([key, btn]) => {
    if (!btn) return;
    if (key === viewId) {
      btn.className = "text-xs font-black transition-all flex items-center gap-2 px-3 py-1.5 rounded-lg text-cyber-sapphire bg-cyber-sapphire/10";
    } else {
      btn.className = "flex items-center gap-2 text-xs font-black transition-all px-3 py-1.5 rounded-lg text-slate-300 hover:text-cyber-sapphire";
    }
  });

  // Toggle dynamic sub-content for info page views (about, contact, privacy)
  if (viewId === 'about' || viewId === 'contact' || viewId === 'privacy') {
    const activeInfo = INFO_VIEWS[viewId];
    
    document.getElementById('info-title').innerText = activeInfo.title;
    document.getElementById('info-subtitle').innerText = activeInfo.subtitle;
    document.getElementById('info-text').innerText = activeInfo.text;
    
    const mainIcon = document.getElementById('info-main-icon');
    mainIcon.setAttribute('data-lucide', activeInfo.icon);

    const iconWrapper = document.getElementById('info-icon-wrapper');
    iconWrapper.className = `w-20 h-20 mx-auto rounded-2xl bg-cyber-navy border border-cyber-powder/20 flex items-center justify-center ${activeInfo.color} mb-8 shadow-2xl`;

    // Toggle extra details
    const extraAbout = document.getElementById('info-about-extra');
    const extraContact = document.getElementById('info-contact-extra');

    if (viewId === 'about') {
      extraAbout.classList.remove('hidden');
      extraContact.classList.add('hidden');
    } else if (viewId === 'contact') {
      extraAbout.classList.add('hidden');
      extraContact.classList.remove('hidden');
    } else {
      extraAbout.classList.add('hidden');
      extraContact.classList.add('hidden');
    }

    document.getElementById('view-info').classList.remove('hidden');
    lucide.createIcons();
  } else {
    const targetEl = document.getElementById(`view-${viewId}`);
    if (targetEl) targetEl.classList.remove('hidden');
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 5. MODALS & SLIDE-OUTS ENGINE ---

function openConsultation(expertName) {
  document.getElementById('modal-expert-name').innerText = expertName;
  document.getElementById('consultation-modal').classList.remove('hidden');
}

function closeConsultation() {
  document.getElementById('consultation-modal').classList.add('hidden');
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById('mobile-sidebar');
  sidebar.classList.toggle('hidden');
}

function closeMobileSidebar() {
  document.getElementById('mobile-sidebar').classList.add('hidden');
}

// --- 6. FLOATING CHATBOT CONTROLLER ---

const chatTrigger = document.getElementById('chat-trigger');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

let isChatOpen = false;

chatTrigger.addEventListener('click', () => {
  isChatOpen = !isChatOpen;
  if (isChatOpen) {
    chatTrigger.classList.add('hidden');
    chatWindow.classList.remove('hidden');
    chatInput.focus();
  }
});

chatClose.addEventListener('click', () => {
  isChatOpen = false;
  chatWindow.classList.add('hidden');
  chatTrigger.classList.remove('hidden');
});

async function handleSendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  chatInput.value = '';

  // Append User message
  const userBubble = document.createElement('div');
  userBubble.className = "flex justify-start animate-slide-up";
  userBubble.innerHTML = `
    <div class="max-w-[88%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-lg bg-cyber-sapphire text-white rounded-br-none border border-white/10 text-right">
      ${text}
    </div>
  `;
  chatMessages.appendChild(userBubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Append Thinking Bubble
  const thinkingBubble = document.createElement('div');
  thinkingBubble.id = "chat-thinking";
  thinkingBubble.className = "flex justify-end animate-pulse";
  thinkingBubble.innerHTML = `
    <div class="bg-cyber-ice/10 p-4 rounded-2xl rounded-bl-none border border-cyber-powder/10 flex gap-1.5 items-center">
      <span class="text-[10px] text-slate-500 font-bold ml-2">جاري التفكير</span>
      <div class="w-1.5 h-1.5 bg-cyber-sapphire rounded-full animate-bounce"></div>
      <div class="w-1.5 h-1.5 bg-cyber-sapphire rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
      <div class="w-1.5 h-1.5 bg-cyber-sapphire rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
    </div>
  `;
  chatMessages.appendChild(thinkingBubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Get Advice
  const reply = await getCyberAdvice(text);

  // Remove Thinking Bubble
  const thinking = document.getElementById('chat-thinking');
  if (thinking) thinking.remove();

  // Append AI message
  const aiBubble = document.createElement('div');
  aiBubble.className = "flex justify-end animate-slide-up";
  aiBubble.innerHTML = `
    <div class="max-w-[88%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-lg bg-cyber-ice/10 text-slate-100 rounded-bl-none border border-cyber-powder/10 backdrop-blur-md text-right">
      ${reply}
    </div>
  `;
  chatMessages.appendChild(aiBubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatSend.addEventListener('click', handleSendMessage);
chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSendMessage();
});

// --- 7. PARTICLE BACKGROUND CANVAS ANIMATION ---
const canvas = document.getElementById('bg-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.size = Math.random() * 1.5 + 0.5;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
      ctx.fillStyle = 'rgba(166, 197, 215, 0.3)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < 40; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    
    // Draw lines between close particles
    ctx.strokeStyle = 'rgba(15, 82, 186, 0.05)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// --- 8. SYSTEM INITIALIZATION EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => {
  // Render layout and lists
  renderNews();
  renderStories();
  renderExperts();
  renderLearning();
  renderSectionsNavigation();

  // Initialize all Lucide Icons
  lucide.createIcons();

  // Desktop Navbar Button Click Handlers
  document.getElementById('nav-home').addEventListener('click', () => navigateTo('home'));
  document.getElementById('nav-experts').addEventListener('click', () => navigateTo('experts'));
  document.getElementById('nav-learning').addEventListener('click', () => navigateTo('learning'));
  document.getElementById('nav-contact').addEventListener('click', () => navigateTo('contact'));

  // Mobile Sidebar Action Listeners
  const logoBtn = document.getElementById('logo-btn');
  logoBtn.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      toggleMobileSidebar();
    } else {
      navigateTo('home');
    }
  });

  document.getElementById('sidebar-overlay').addEventListener('click', closeMobileSidebar);
  document.getElementById('sidebar-close-btn').addEventListener('click', closeMobileSidebar);
  document.getElementById('sidebar-home').addEventListener('click', () => { navigateTo('home'); closeMobileSidebar(); });
  document.getElementById('sidebar-experts').addEventListener('click', () => { navigateTo('experts'); closeMobileSidebar(); });
  document.getElementById('sidebar-learning').addEventListener('click', () => { navigateTo('learning'); closeMobileSidebar(); });
  document.getElementById('sidebar-contact').addEventListener('click', () => { navigateTo('contact'); closeMobileSidebar(); });

  // Desktop sections dropdown menu toggle
  const sectionsBtn = document.getElementById('sections-btn');
  const desktopDropdown = document.getElementById('desktop-dropdown');
  if (sectionsBtn && desktopDropdown) {
    sectionsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      desktopDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
      desktopDropdown.classList.add('hidden');
    });
  }

  // Consultation popup close action
  document.getElementById('modal-overlay').addEventListener('click', closeConsultation);
  document.getElementById('modal-close').addEventListener('click', closeConsultation);

  // Footer Navigation Action Listeners
  document.getElementById('footer-btn-home').addEventListener('click', () => navigateTo('home'));
  document.getElementById('footer-btn-experts').addEventListener('click', () => navigateTo('experts'));
  document.getElementById('footer-btn-learning').addEventListener('click', () => navigateTo('learning'));
  document.getElementById('footer-btn-about').addEventListener('click', () => navigateTo('about'));
  document.getElementById('footer-btn-privacy').addEventListener('click', () => navigateTo('privacy'));
});
