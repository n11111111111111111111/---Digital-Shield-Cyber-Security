
import React from 'react';
import { Wrench, Terminal, Layers, ShieldCheck, Cpu, ArrowLeft, Unlock, Globe, ExternalLink, PlayCircle, Search, Bug, FileCode, Server } from 'lucide-react';

const LearningHub: React.FC = () => {
  const cyberTools = [
    { name: 'Burp Suite', category: 'Web App Security', desc: 'الأداة رقم 1 لاختبار اختراق تطبيقات الويب واعتراض وتحليل حركة مرور البيانات.', icon: Terminal, color: 'text-cyber-powder', useCase: 'فحص ثغرات المواقع' },
    { name: 'Nmap', category: 'Network Scanning', desc: 'أداة مفتوحة المصدر لاكتشاف الأجهزة والخدمات النشطة داخل أي شبكة برمجية.', icon: Layers, color: 'text-green-500', useCase: 'استطلاع الشبكات' },
    { name: 'Metasploit', category: 'Exploitation', desc: 'إطار عمل ضخم يحتوي على مئات الثغرات الجاهزة لاختبار قوة دفاع الأنظمة.', icon: ShieldCheck, color: 'text-red-500', useCase: 'تطوير الاستغلالات' },
    { name: 'Wireshark', category: 'Packet Analysis', desc: 'محلل بروتوكولات الشبكة لمراقبة كل "بايت" يخرج أو يدخل إلى جهازك بدقة متناهية.', icon: Cpu, color: 'text-cyber-sapphire', useCase: 'تحليل حركة المرور' },
    { name: 'Ghidra', category: 'Reverse Engineering', desc: 'أداة متطورة لتحليل وفك شفرات البرامج والملفات الخبيثة.', icon: Bug, color: 'text-purple-500', useCase: 'الهندسة العكسية' },
    { name: 'John the Ripper', category: 'Password Cracking', desc: 'أداة سريعة لاختبار قوة كلمات المرور وفك التشفير بالقاموس.', icon: FileCode, color: 'text-orange-500', useCase: 'اختراق كلمات المرور' }
  ];

  const freeCourses = [
    { title: 'مبادئ الأمن السيبراني (Cisco)', provider: 'Skills for All', type: 'مجاني بالكامل', link: 'https://skillsforall.com/', desc: 'كورس أساسي يغطي مبادئ الحماية والشبكات مع شهادة إتمام.', icon: Unlock },
    { title: 'شهادة جوجل المهنية (Financial Aid)', provider: 'Coursera / Google', type: 'دعم مادي متاح', link: 'https://www.coursera.org/google-cybersecurity', desc: 'واحد من أفضل الكورسات للدخول في سوق العمل العالمي.', icon: Globe },
    { title: 'أساسيات الهاكر الأخلاقي', provider: 'TryHackMe', type: 'مسار عملي مجاني', link: 'https://tryhackme.com/path/outline/hacking101', desc: 'تعلم من خلال التطبيق العملي المباشر في مختبرات افتراضية.', icon: PlayCircle },
    { title: 'أمن المعلومات للمبتدئين', provider: 'Cybrary', type: 'مستوى تأسيسي', link: 'https://www.cybrary.it/course/introduction-to-it-and-cybersecurity', desc: 'شرح مبسط وشامل لكل مصطلحات ومفاهيم الأمن الحديثة.', icon: ExternalLink },
    { title: 'أساسيات أمن السحابة (IBM)', provider: 'IBM Training', type: 'مستوى متوسط', link: 'https://www.ibm.com/training/cybersecurity', desc: 'تأمين هياكل البيانات السحابية وحماية الخدمات الموزعة.', icon: Server },
    { title: 'التحليل الجنائي الرقمي', provider: 'OpenLearn', type: 'تخصصي', link: 'https://www.open.edu/openlearn/free-courses/full-catalogue', desc: 'جمع الأدلة من الأجهزة المخترقة وتقديمها للعدالة.', icon: Search }
  ];

  return (
    <div className="py-16 bg-cyber-navy relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-right mb-16">
          <div className="inline-flex items-center gap-2 text-cyber-sapphire text-[9px] font-black uppercase tracking-[0.4em] mb-3">
            <Terminal className="w-3.5 h-3.5" />
            Cyber Toolbox & Resources
          </div>
          <h2 className="text-4xl font-black text-white italic tracking-tighter">قائمة <span className="text-cyber-sapphire">الأدوات والكورسات</span></h2>
          <p className="text-slate-400 mt-2 max-w-xl ml-auto leading-relaxed text-sm font-medium">
            مركز الموارد المجانية والمعزولة لطلاب الأمن السيبراني. اختر أدواتك، ابدأ تعلمك.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          <div>
            <div className="flex items-center justify-end gap-3 mb-8 border-b border-cyber-powder/10 pb-4">
              <div className="text-right">
                <h3 className="text-xl font-black text-white">صندوق الأدوات البرمجية</h3>
                <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest">Practical Essentials</p>
              </div>
              <Wrench className="w-6 h-6 text-green-500" />
            </div>
            
            <div className="space-y-4">
              {cyberTools.map((tool, i) => (
                <div key={i} className="group bg-cyber-ice/5 border border-cyber-powder/20 p-5 rounded-xl hover:bg-cyber-ice/10 transition-all text-right relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1 h-full bg-green-500/10 group-hover:bg-green-500 transition-all"></div>
                  <div className="flex items-center justify-end gap-4 mb-3">
                    <div className="text-right">
                      <span className="text-[8px] font-black text-green-500 uppercase tracking-widest bg-green-500/5 px-2 py-0.5 rounded border border-green-500/10">{tool.category}</span>
                      <h4 className="text-base font-black text-white mt-1">{tool.name}</h4>
                    </div>
                    <div className={`p-2.5 bg-cyber-navy rounded-lg border border-cyber-powder/20 ${tool.color}`}>
                      <tool.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed mb-3">{tool.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-cyber-powder/10">
                     <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">{tool.useCase}</span>
                     <button className="text-[9px] font-black text-white hover:text-green-400 flex items-center gap-1.5 transition-colors">
                        <ArrowLeft className="w-3 h-3" /> التثبيت
                     </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-end gap-3 mb-8 border-b border-cyber-powder/10 pb-4">
              <div className="text-right">
                <h3 className="text-xl font-black text-white">كورسات مجانية</h3>
                <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest">Zero Cost Paths</p>
              </div>
              <Unlock className="w-6 h-6 text-cyber-sapphire" />
            </div>

            <div className="grid gap-4">
              {freeCourses.map((course, i) => (
                <div key={i} className="bg-cyber-ice/5 border border-cyber-sapphire/10 p-5 rounded-xl hover:border-cyber-sapphire/40 transition-all text-right group relative overflow-hidden flex flex-col justify-between">
                   <div className="flex justify-between items-start mb-3">
                     <course.icon className="w-7 h-7 text-cyber-sapphire/30 group-hover:text-cyber-sapphire transition-colors" />
                     <div className="text-right">
                       <span className="px-2 py-0.5 bg-cyber-sapphire/10 border border-cyber-sapphire/20 text-[8px] text-cyber-powder font-black uppercase rounded-full">
                         {course.type}
                       </span>
                     </div>
                   </div>
                   <h4 className="text-base font-black text-white mb-2 group-hover:text-cyber-sapphire transition-colors">{course.title}</h4>
                   <p className="text-slate-300 text-[11px] leading-relaxed mb-4">{course.desc}</p>
                   <a href={course.link} target="_blank" className="w-full bg-cyber-navy hover:bg-cyber-sapphire text-white py-2.5 rounded-lg text-[10px] font-black border border-cyber-powder/20 transition-all flex items-center justify-center gap-2 group/btn">
                     <ExternalLink className="w-3 h-3" /> الانتقال للموقع
                   </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LearningHub;
