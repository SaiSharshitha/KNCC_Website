import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Mock database of services based on the brochure
const servicesData: Record<string, any> = {
  "project-controls": {
    title: "Project Controls",
    subtitle: "Complete visibility and financial control over your project execution.",
    items: ["Budget tracking & management", "Cost reporting", "Earned value tracking", "Change management logs", "Client dashboards"],
    role: "Lead: Sr. Project Controls Specialist. Members: Cost Engineers, Analysts",
    seoDesc: "Outsource project controls to KNCC for expert budget tracking, cost reporting, and change order logs.",
  },
  "estimation": {
    title: "Estimation & Costing",
    subtitle: "Precision quantity takeoffs and strategic bid leveling.",
    items: ["Quantity takeoffs", "Cost estimates", "Bid comparison sheets", "Vendor pricing analysis", "Budget validation"],
    role: "Lead: Senior Estimator. Members: Quantity Surveyors, Takeoff Specialists, Bid Analysts",
    seoDesc: "Professional estimation outsourcing and quantity takeoff services by KN Construction Consultants.",
  },
  "scheduling": {
    title: "Project Planning & Scheduling",
    subtitle: "Robust CPM scheduling and delay analysis to keep your project on track.",
    items: ["CPM schedules", "Baseline schedules", "Progress updates", "Delay analysis", "Recovery schedules"],
    role: "Lead: Senior Scheduler. Members: Planning Engineers, Schedule Analysts",
    seoDesc: "Expert construction scheduling, Primavera P6, and delay analysis consulting.",
  },
  "administration": {
    title: "Construction Administration",
    subtitle: "Streamlined document control and RFI tracking.",
    items: ["Procurement tracking", "Submittal management", "RFI tracking", "Meeting minutes", "Document control"],
    role: "Members: Coordinators, Doc Controllers, Tech Coordinators",
    seoDesc: "Dedicated construction administration support for seamless document control and submittal tracking.",
  },
  "accounting": {
    title: "Project Accounting Support",
    subtitle: "Accurate invoice validation and vendor reconciliation.",
    items: ["Cost reports", "Invoice validation", "Forecast tracking", "Vendor reconciliation"],
    role: "Lead: Commercial Manager. Members: Project Accountants, Cost Coordinators",
    seoDesc: "Reliable offshore project accounting support and vendor payment tracking for construction projects.",
  },
  "preconstruction": {
    title: "Preconstruction Support",
    subtitle: "Early-stage documentation and coordination for a successful start.",
    items: ["Bid package preparation", "Prebid coordination", "Site evaluation support", "Utility coordination tracking"],
    role: "Lead: Precon Manager. Members: Bid Coordinators",
    seoDesc: "Comprehensive preconstruction support services to lay the foundation for successful project delivery.",
  },
};

export async function generateMetadata({ params }: { params: { service: string } }) {
  const service = servicesData[params.service];
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: `${service.title} | KN Construction Consultants`,
    description: service.seoDesc,
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const data = servicesData[params.service];
  if (!data) notFound();

  return (
    <div className="flex flex-col w-full bg-white">
      {/* SERVICE HERO */}
      <section className="bg-kncc-navy text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.title}</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">{data.subtitle}</p>
      </section>

      {/* SERVICE CONTENT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-kncc-navy mb-8">What We Deliver</h2>
            <ul className="space-y-4">
              {data.items.map((item: string, i: number) => (
                <li key={i} className="flex items-start p-4 bg-kncc-light-gray rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-kncc-green mr-4 flex-shrink-0" />
                  <span className="text-kncc-navy font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="bg-white border-2 border-kncc-light-gray rounded-2xl p-8 mb-8 shadow-sm">
              <h3 className="text-xl font-bold text-kncc-navy mb-4">Team Structure</h3>
              <p className="text-gray-600 mb-6">{data.role}</p>
              <div className="w-full h-px bg-gray-200 mb-6"></div>
              <h4 className="font-semibold text-kncc-navy mb-3">Tools & Systems</h4>
              <p className="text-sm text-gray-500">Procore, Autodesk BIM 360, Aconex, Primavera P6, MS Project, CostX, Planswift, Bluebeam, Power BI</p>
            </div>
            
            <div className="bg-kncc-navy text-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need a dedicated team?</h3>
              <p className="text-gray-300 mb-8">Deploy resources within 2-4 weeks.</p>
              <Link href="/contact" className="inline-flex justify-center items-center bg-kncc-green text-kncc-navy px-6 py-3 rounded-md font-bold hover:bg-[#8ade2a] transition-all w-full">
                Consult With Us <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
