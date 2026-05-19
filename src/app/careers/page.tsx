export const metadata = {
  title: "Careers | KN Construction Consultants",
  description: "Join the KNCC team. We are looking for talented construction professionals for our global offshore teams.",
};

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-kncc-navy mb-6">Join Our Global Team</h1>
          <p className="text-xl text-gray-600">
            We are a structured construction support organization. Build your career working on high-impact projects for top global firms.
          </p>
        </div>

        <div className="bg-kncc-navy text-white rounded-3xl p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Currently Open Roles</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We are always looking for driven Project Engineers, Cost Controllers, Estimators, and Schedulers (Junior to Technical Leads).
          </p>
          <a href="mailto:info@kncc.com" className="inline-block bg-kncc-green text-kncc-navy px-8 py-4 rounded-md font-bold text-lg hover:bg-[#8ade2a] transition-all">
            Send Your Resume
          </a>
        </div>
      </div>
    </div>
  );
}
