"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Building2, ShieldCheck, ChevronRight, Quote, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-kncc-navy pt-24 pb-32">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Abstract architectural grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-3/5 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-kncc-green text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-kncc-green animate-pulse"></span>
              Integrated Construction Support Services
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Your Scalable <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kncc-green to-[#a3e635]">Construction Talent</span> Partner
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Integrated construction support services engineered for enterprise growth, project excellence, and scalable operational success. We are not a staffing agency. We are a structured construction support organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex justify-center items-center gap-2 bg-kncc-green text-kncc-navy px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#8ade2a] transition-all shadow-[0_0_20px_rgba(124,194,66,0.3)] hover:shadow-[0_0_30px_rgba(124,194,66,0.5)]">
                Schedule Executive Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="inline-flex justify-center items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/20 transition-all">
                Explore Services
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-2/5 hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-kncc-green/20 to-transparent rounded-3xl transform rotate-6 scale-105 border border-kncc-green/30 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-kncc-navy border border-white/10 rounded-3xl shadow-2xl p-8 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-kncc-green/10 rounded-bl-full blur-2xl"></div>
                
                <div>
                  <h3 className="text-white text-xl font-bold mb-4">Fast Deployment Teams</h3>
                  <div className="space-y-4">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center justify-between">
                      <span className="text-gray-300">1 Resource</span>
                      <span className="text-kncc-green font-semibold">Within 2 weeks</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center justify-between">
                      <span className="text-gray-300">3–5 Resources</span>
                      <span className="text-kncc-green font-semibold">Within 3-4 weeks</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center justify-between">
                      <span className="text-gray-300">10+ Resources</span>
                      <span className="text-kncc-green font-semibold">Structured ramp</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-kncc-green/20 flex items-center justify-center">
                      <ShieldCheck className="text-kncc-green w-5 h-5" />
                    </div>
                    <span className="text-white font-medium">98% Client Retention</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        

      </section>

      {/* KPI METRICS SECTION */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-gray-100">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-4xl md:text-5xl font-bold text-kncc-navy mb-2">70+</div>
              <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">Employees</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="text-4xl md:text-5xl font-bold text-kncc-navy mb-2">20+</div>
              <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">Active Clients</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-4xl md:text-5xl font-bold text-kncc-navy mb-2">$200M+</div>
              <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">Value Supported</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="text-4xl md:text-5xl font-bold text-kncc-green mb-2">2500+</div>
              <div className="text-gray-500 font-medium uppercase tracking-wider text-sm">Estimates Completed</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY KNCC SECTION */}
      <section className="py-24 bg-kncc-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kncc-navy mb-4">The KNCC Difference</h2>
            <p className="text-gray-600 text-lg">
              We are not a staffing agency. We build dedicated teams, manage quality, provide senior oversight, and ensure operational continuity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-kncc-green" />,
                title: "Cohesive Units",
                desc: "We build dedicated teams—cohesive units integrated into your workflows, rather than isolated freelancers.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-kncc-green" />,
                title: "Quality Managed",
                desc: "Rigorous internal QA/QC before client delivery, with senior leadership oversight on all deployments.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-kncc-green" />,
                title: "Knowledge Retention",
                desc: "Robust cross-training ensures continuity. We integrate into your ERP and tech stack rather than forcing our own.",
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-kncc-green/10 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-kncc-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES ECOSYSTEM */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-kncc-navy mb-4">Our Service Ecosystem</h2>
              <p className="text-gray-600 text-lg">
                End-to-end project lifecycle support from preconstruction through project closeout.
              </p>
            </div>
            <Link href="/services" className="hidden md:flex items-center text-kncc-green font-semibold hover:text-kncc-navy transition-colors mt-4 md:mt-0">
              View all services <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Project Controls",
                items: ["Cost tracking & Budget", "Change order logs", "Risk tracking", "KPI dashboards"],
              },
              {
                title: "Estimation & Takeoffs",
                items: ["Quantity takeoffs", "Bid leveling", "Budget development", "Value engineering"],
              },
              {
                title: "Scheduling",
                items: ["CPM scheduling", "Lookahead schedules", "Delay analysis", "Resource loading"],
              },
              {
                title: "Construction Admin",
                items: ["RFI tracking & Submittals", "Document control", "Meeting minutes", "Contract logs"],
              },
              {
                title: "Project Accounting",
                items: ["Invoice validation", "Cost coding", "Forecast tracking", "Vendor payments"],
              },
              {
                title: "Preconstruction",
                items: ["Site evaluation support", "Utility coordination", "Entitlement documents", "Infrastructure tracking"],
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-kncc-green hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-kncc-navy mb-6 group-hover:text-kncc-green transition-colors">{service.title}</h3>
                <ul className="space-y-3 mb-8">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-kncc-green mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link href="/services" className="inline-flex items-center text-kncc-green font-semibold hover:text-kncc-navy transition-colors">
              View all services <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-kncc-light-gray relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-kncc-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-kncc-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kncc-navy mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 text-lg">
              Hear how we've helped enterprise construction firms scale their operations and achieve project excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "KNCC didn't just give us extra hands; they provided a fully integrated team that immediately understood our workflows. Our estimation throughput increased by 40%.",
                name: "Michael R.",
                role: "VP of Preconstruction",
                company: "Top 50 ENR Contractor"
              },
              {
                quote: "The quality of their project controls support is unmatched. They act as a true extension of our internal PMs, catching issues before they impact the critical path.",
                name: "Sarah T.",
                role: "Operations Director",
                company: "National Commercial Builder"
              },
              {
                quote: "Scaling our scheduling department was a major bottleneck until we partnered with KNCC. Their senior oversight and rigorous QA processes give us complete peace of mind.",
                name: "David L.",
                role: "Chief Operating Officer",
                company: "Infrastructure Developer"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-md transition-all duration-300"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-kncc-green/10 group-hover:text-kncc-green/20 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-kncc-gold text-kncc-gold" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-8 relative z-10 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 bg-kncc-navy rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-kncc-navy">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <p className="text-xs text-kncc-green font-medium mt-0.5">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 bg-kncc-navy overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-kncc-navy to-kncc-navy/80"></div>
          {/* Abstract structural overlay */}
          <svg className="absolute top-0 right-0 h-full text-white/5 transform translate-x-1/3" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,100 100,0 100,100" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Project Delivery?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Partner with KNCC to build your dedicated offshore technical team. High-quality support, exactly when you need it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex justify-center items-center gap-2 bg-kncc-green text-kncc-navy px-8 py-4 rounded-md font-bold text-lg hover:bg-[#8ade2a] transition-all shadow-lg hover:shadow-kncc-green/20">
              Build Your Dedicated Team
            </Link>
            <Link href="/about" className="inline-flex justify-center items-center gap-2 bg-transparent text-white border border-white/30 px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all">
              Learn About Our Model
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Internal component for ChevronDown since it's not exported in the lucide import above
function ChevronDown(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
