import Link from "next/link";
import { ArrowRight, BarChart3, Calculator, Calendar, FileText, DollarSign, Building, Building2, Server, Hospital, Briefcase, Factory, ShieldAlert } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "project-controls",
      title: "Project Controls",
      desc: "Cost tracking, budget management, change order logs, risk tracking, and KPI dashboards.",
      icon: <BarChart3 className="w-8 h-8 text-kncc-green" />
    },
    {
      id: "estimation",
      title: "Estimation & Preconstruction",
      desc: "Quantity takeoffs, bid leveling, budget development, and value engineering.",
      icon: <Calculator className="w-8 h-8 text-kncc-green" />
    },
    {
      id: "scheduling",
      title: "Scheduling",
      desc: "CPM scheduling, lookahead schedules, delay analysis, and resource loading.",
      icon: <Calendar className="w-8 h-8 text-kncc-green" />
    },
    {
      id: "administration",
      title: "Construction Administration",
      desc: "RFI tracking, submittals, document control, meeting minutes, and contract logs.",
      icon: <FileText className="w-8 h-8 text-kncc-green" />
    },
    {
      id: "accounting",
      title: "Project Accounting",
      desc: "Invoice validation, cost coding, forecast tracking, and vendor payments.",
      icon: <DollarSign className="w-8 h-8 text-kncc-green" />
    },
    {
      id: "preconstruction",
      title: "Preconstruction",
      desc: "Site evaluation support, utility coordination, and entitlement documentation.",
      icon: <Building className="w-8 h-8 text-kncc-green" />
    }
  ];

  const industries = [
    { name: "Multifamily Residential", icon: <Building2 className="w-10 h-10 text-kncc-green" /> },
    { name: "Commercial Buildings", icon: <Briefcase className="w-10 h-10 text-kncc-green" /> },
    { name: "Healthcare Facilities", icon: <Hospital className="w-10 h-10 text-kncc-green" /> },
    { name: "Data Centers", icon: <Server className="w-10 h-10 text-kncc-green" /> },
    { name: "Infrastructure Support", icon: <Factory className="w-10 h-10 text-kncc-green" /> },
    { name: "Hospitality & Mixed Use", icon: <ShieldAlert className="w-10 h-10 text-kncc-green" /> },
  ];

  return (
    <div className="flex flex-col w-full bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-kncc-navy mb-6">Our Service Ecosystem</h1>
          <p className="text-xl text-gray-600">
            End-to-end project lifecycle support from preconstruction through project closeout.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-kncc-light-gray rounded-2xl p-8 border border-gray-100 hover:border-kncc-green transition-all shadow-sm hover:shadow-md group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-kncc-navy mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-8 min-h-[4rem]">{service.desc}</p>

            </div>
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <div id="industries" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kncc-navy mb-6">Industries We Support</h2>
          <p className="text-xl text-gray-600">
            We bring specialized domain expertise to scale operations across a wide range of highly technical and complex construction sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <div key={i} className="bg-kncc-light-gray p-8 rounded-2xl border border-gray-100 hover:border-kncc-green hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6">{ind.icon}</div>
              <h3 className="text-2xl font-bold text-kncc-navy mb-4">{ind.name}</h3>
              <p className="text-gray-600">
                Dedicated technical support tailored to the unique regulatory, technical, and scheduling demands of the {ind.name.toLowerCase()} sector.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
