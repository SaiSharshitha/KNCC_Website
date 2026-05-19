"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, Target, ShieldCheck, Clock } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-28 bg-kncc-navy overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-kncc-green/20 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Who We <span className="text-kncc-green">Are</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              KN Construction Consultants is a construction support and project management services firm founded in 2020 to provide scalable technical and commercial support to construction organizations by virtually supporting project execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR GROWTH STORY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-kncc-navy mb-6">Our Growth Story</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Since our inception, our model has focused on embedding dedicated offshore teams into client organizations to function as an extension of their project delivery operations rather than traditional outsourcing.
              </p>
              <div className="space-y-4">
                {[
                  "Scalable technical construction talent",
                  "Cost effective delivery models",
                  "Fast deployment teams",
                  "Process driven execution",
                  "Technology enabled delivery"
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-kncc-green mr-3" />
                    <span className="text-kncc-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-kncc-light-gray p-8 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-kncc-navy mb-2">2020</div>
                  <div className="text-gray-500 font-medium uppercase text-sm tracking-wider">Established</div>
                </div>
                <div className="bg-kncc-light-gray p-8 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-kncc-navy mb-2">70+</div>
                  <div className="text-gray-500 font-medium uppercase text-sm tracking-wider">Employees</div>
                </div>
                <div className="bg-kncc-light-gray p-8 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-kncc-navy mb-2">20+</div>
                  <div className="text-gray-500 font-medium uppercase text-sm tracking-wider">Active Clients</div>
                </div>
                <div className="bg-kncc-light-gray p-8 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-kncc-navy mb-2">98%</div>
                  <div className="text-gray-500 font-medium uppercase text-sm tracking-wider">Client Retention</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 bg-kncc-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kncc-navy mb-4">Leadership</h2>
            <p className="text-gray-600 text-lg">Guided by experts with deep construction domain focus.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-24 h-24 bg-kncc-navy rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                KY
              </div>
              <h3 className="text-2xl font-bold text-kncc-navy mb-2">Karthik Yenumula</h3>
              <p className="text-kncc-green font-medium mb-4">Founder</p>
              <a href="mailto:karthik@knconstructionconsultants.com" className="text-gray-500 hover:text-kncc-navy transition-colors text-sm">
                karthik@knconstructionconsultants.com
              </a>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-24 h-24 bg-kncc-navy rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                NB
              </div>
              <h3 className="text-2xl font-bold text-kncc-navy mb-2">Nikhil Bhonsle</h3>
              <p className="text-kncc-green font-medium mb-4">AVP Project Delivery</p>
              <a href="mailto:nikhil.b@knconstructionconsultants.com" className="text-gray-500 hover:text-kncc-navy transition-colors text-sm">
                nikhil.b@knconstructionconsultants.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEAM MODEL */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-kncc-navy mb-4">Our Resource Structure</h2>
            <p className="text-gray-600 text-lg">
              Unlike freelance staffing models, KNCC builds structured delivery teams with clear leadership and accountability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { level: "Junior Engineers", exp: "1–3 years", icon: <Users /> },
              { level: "Project Engineers", exp: "3–6 years", icon: <Target /> },
              { level: "Senior Engineers", exp: "6–10 years", icon: <TrendingUp /> },
              { level: "Technical Leads", exp: "10+ years", icon: <ShieldCheck /> }
            ].map((role, idx) => (
              <div key={idx} className="bg-white border border-gray-200 p-6 rounded-xl hover:border-kncc-green transition-colors">
                <div className="w-12 h-12 bg-kncc-light-gray rounded-full flex items-center justify-center text-kncc-navy mx-auto mb-4">
                  {role.icon}
                </div>
                <h3 className="font-bold text-kncc-navy mb-2">{role.level}</h3>
                <p className="text-kncc-green font-medium text-sm">{role.exp} Experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
