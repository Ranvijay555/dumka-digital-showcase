import { team, companyInfo } from "./data";
import { 
  ShieldCheck, 
  Code2, 
  TrendingUp, 
  Sparkles, 
  Linkedin, 
  Mail, 
  Phone,
  MessageCircle,
  MapPin,
  Briefcase,
  Globe2
} from "lucide-react";

export default function Team() {
  const memberThemes = [
    {
      cardBg: "bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 text-white",
      border: "border-amber-400/80 hover:border-white shadow-xl shadow-orange-600/30 hover:shadow-2xl hover:shadow-orange-600/50",
      topBar: "from-yellow-300 via-amber-200 to-yellow-400",
      avatarGlow: "ring-4 ring-amber-300/60 shadow-xl shadow-black/40",
      avatarGradient: "from-yellow-400 via-amber-500 to-orange-600",
      badge: "bg-black/30 backdrop-blur-md text-amber-200 border-amber-300/40 shadow-sm",
      icon: <ShieldCheck className="w-4 h-4 text-amber-300" />,
      roleText: "text-amber-200",
      nameHover: "group-hover:text-yellow-200",
      bioText: "text-amber-50/95",
      skillHeading: "text-amber-200",
      skillTag: "bg-white/15 backdrop-blur-md border-white/25 text-white hover:bg-white/25",
      callBtn: "bg-white text-orange-950 hover:bg-amber-100 shadow-lg shadow-black/20 font-black",
      chatBtn: "bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-black/20 font-black",
    },
    {
      cardBg: "bg-gradient-to-br from-rose-600 via-pink-600 to-purple-800 text-white",
      border: "border-rose-400/80 hover:border-white shadow-xl shadow-rose-600/30 hover:shadow-2xl hover:shadow-rose-600/50",
      topBar: "from-pink-300 via-rose-200 to-purple-300",
      avatarGlow: "ring-4 ring-rose-300/60 shadow-xl shadow-black/40",
      avatarGradient: "from-pink-400 via-rose-500 to-purple-600",
      badge: "bg-black/30 backdrop-blur-md text-pink-200 border-pink-300/40 shadow-sm",
      icon: <Briefcase className="w-4 h-4 text-pink-300" />,
      roleText: "text-pink-200",
      nameHover: "group-hover:text-pink-200",
      bioText: "text-pink-50/95",
      skillHeading: "text-pink-200",
      skillTag: "bg-white/15 backdrop-blur-md border-white/25 text-white hover:bg-white/25",
      callBtn: "bg-white text-rose-950 hover:bg-pink-100 shadow-lg shadow-black/20 font-black",
      chatBtn: "bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-black/20 font-black",
    },
    {
      cardBg: "bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white",
      border: "border-blue-400/80 hover:border-white shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/50",
      topBar: "from-cyan-300 via-blue-200 to-indigo-300",
      avatarGlow: "ring-4 ring-cyan-300/60 shadow-xl shadow-black/40",
      avatarGradient: "from-cyan-400 via-blue-500 to-indigo-600",
      badge: "bg-black/30 backdrop-blur-md text-cyan-200 border-cyan-300/40 shadow-sm",
      icon: <Code2 className="w-4 h-4 text-cyan-300" />,
      roleText: "text-cyan-200",
      nameHover: "group-hover:text-cyan-200",
      bioText: "text-blue-50/95",
      skillHeading: "text-cyan-200",
      skillTag: "bg-white/15 backdrop-blur-md border-white/25 text-white hover:bg-white/25",
      callBtn: "bg-white text-blue-950 hover:bg-blue-100 shadow-lg shadow-black/20 font-black",
      chatBtn: "bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-black/20 font-black",
    },
    {
      cardBg: "bg-gradient-to-br from-emerald-700 via-teal-700 to-slate-900 text-white",
      border: "border-emerald-400/80 hover:border-white shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/50",
      topBar: "from-green-300 via-emerald-200 to-teal-300",
      avatarGlow: "ring-4 ring-emerald-300/60 shadow-xl shadow-black/40",
      avatarGradient: "from-green-400 via-emerald-500 to-teal-600",
      badge: "bg-black/30 backdrop-blur-md text-emerald-200 border-emerald-300/40 shadow-sm",
      icon: <TrendingUp className="w-4 h-4 text-emerald-300" />,
      roleText: "text-emerald-200",
      nameHover: "group-hover:text-emerald-200",
      bioText: "text-emerald-50/95",
      skillHeading: "text-emerald-200",
      skillTag: "bg-white/15 backdrop-blur-md border-white/25 text-white hover:bg-white/25",
      callBtn: "bg-white text-emerald-950 hover:bg-emerald-100 shadow-lg shadow-black/20 font-black",
      chatBtn: "bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-black/20 font-black",
    },
  ];

  return (
    <section id="team" className="mx-auto max-w-7xl px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200/80 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Leadership & Innovation</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Meet The Minds Behind <span className="text-blue-600">WebTech</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600">
          Our core leadership team combines business visionary leadership, sales & enterprise partnerships, engineering rigor, and data-driven marketing to deliver unmatched digital results for clients nationwide.
        </p>
      </div>

      {/* 100% Colorful Leadership Grid - Zero White Background */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, idx) => {
          const theme = memberThemes[idx % memberThemes.length];
          return (
            <div
              key={member.name}
              className={`group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 border-2 transition-all duration-300 hover:-translate-y-2.5 overflow-hidden ${theme.cardBg} ${theme.border}`}
            >
              {/* Top vibrant gradient highlight bar */}
              <div className={`absolute top-0 left-6 right-6 h-2 rounded-b-full bg-gradient-to-r ${theme.topBar} shadow-sm`} />

              {/* Subtle ambient light shape inside card */}
              <div className="absolute -right-12 -top-12 w-36 h-36 rounded-full bg-white/10 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Avatar & Role Badge */}
                <div className="flex items-center justify-between mb-5 pt-2">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`h-20 w-20 rounded-2xl object-cover group-hover:scale-105 transition-transform ${theme.avatarGlow}`}
                    />
                  ) : (
                    <div className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.avatarGradient} text-2xl font-black text-white group-hover:scale-105 transition-transform ${theme.avatarGlow}`}>
                      {member.initials}
                    </div>
                  )}
                  <div className="flex flex-col items-end">
                    <span className={`flex items-center gap-1.5 text-[11px] font-black rounded-full px-3 py-1 border ${theme.badge}`}>
                      {theme.icon}
                      <span>{member.badge}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-white/80 mt-1.5 flex items-center gap-1">
                      <Globe2 className="w-3.5 h-3.5 text-amber-300" /> Pan-India
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className={`font-display text-xl sm:text-2xl font-black text-white transition-colors ${theme.nameHover}`}>
                  {member.name}
                </h3>
                <p className={`text-xs sm:text-sm font-black mt-1 tracking-wider uppercase ${theme.roleText}`}>
                  {member.role}
                </p>

                {/* Bio */}
                <p className={`mt-3.5 text-xs sm:text-sm leading-relaxed font-normal ${theme.bioText}`}>
                  {member.bio}
                </p>

                {/* Skill Tags */}
                <div className="mt-5 pt-4 border-t border-white/20">
                  <p className={`text-[10px] font-black uppercase tracking-wider mb-2 ${theme.skillHeading}`}>
                    Core Expertise
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-lg px-2.5 py-1 text-[11px] font-bold border transition-all ${theme.skillTag}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Consultation Buttons */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/20 flex items-center justify-between gap-2 text-xs">
                <span className="text-[11px] font-black text-white/80 uppercase tracking-wider">
                  Direct Contact
                </span>
                <div className="flex items-center gap-2">
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 transition-all hover:scale-105 active:scale-95 ${theme.callBtn}`}
                      title={`Call ${member.name}: ${member.phone}`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call</span>
                    </a>
                  )}
                  <a
                    href={`https://wa.me/${(member.whatsapp || companyInfo.whatsapp).replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${member.name}, I would like to consult on a project with WebTech.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 transition-all hover:scale-105 active:scale-95 ${theme.chatBtn}`}
                    title={`WhatsApp ${member.name}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pan-India Partnership Callout */}
      <div className="mt-12 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Globe2 className="w-4 h-4" />
            <span>Serving Clients Pan-India • Registered Office: Dumka, Jharkhand</span>
          </div>
          <h4 className="font-display text-xl font-bold">
            Ready to Partner with Our Leadership Team on Your Next Big Launch?
          </h4>
          <p className="text-slate-400 text-xs sm:text-sm">
            Schedule a dedicated discovery session with Founders Ranvijay Kumar, Sreya Arora, and our tech leads to strategize your digital growth.
          </p>
        </div>
        <a
          href={`tel:${companyInfo.phone}`}
          className="btn-primary text-xs sm:text-sm whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <Phone className="w-4 h-4" />
          <span>Call: {companyInfo.phone}</span>
        </a>
      </div>
    </section>
  );
}
