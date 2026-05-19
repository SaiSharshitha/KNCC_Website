export const metadata = {
  title: "Contact Us | KN Construction Consultants",
  description: "Contact KN Construction Consultants to discuss your dedicated construction support team needs.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-kncc-navy mb-6">Schedule an Executive Consultation</h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover how KNCC can build a dedicated, scalable support team for your organization.
          </p>

          <div className="space-y-6">
            <div className="bg-kncc-light-gray p-6 rounded-xl">
              <h3 className="font-bold text-kncc-navy text-lg mb-2">Headquarters</h3>
              <p className="text-gray-600">India<br/>Serving clients globally.</p>
            </div>
            <div className="bg-kncc-light-gray p-6 rounded-xl">
              <h3 className="font-bold text-kncc-navy text-lg mb-2">Leadership Contacts</h3>
              <ul className="text-gray-600 space-y-2">
                <li><span className="font-semibold text-kncc-navy">Karthik Yenumula</span> - karthik@knconstructionconsultants.com</li>
                <li><span className="font-semibold text-kncc-navy">Nikhil Bhonsle</span> - nikhil.b@knconstructionconsultants.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-kncc-navy mb-6">Let's Discuss Your Needs</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full border border-gray-300 p-3 rounded-md focus:ring-kncc-green focus:border-kncc-green outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input type="text" className="w-full border border-gray-300 p-3 rounded-md focus:ring-kncc-green focus:border-kncc-green outline-none transition-colors" placeholder="Acme Construction" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 p-3 rounded-md focus:ring-kncc-green focus:border-kncc-green outline-none transition-colors" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Interest</label>
              <select className="w-full border border-gray-300 p-3 rounded-md focus:ring-kncc-green focus:border-kncc-green outline-none bg-white transition-colors">
                <option>Project Controls</option>
                <option>Estimation & Preconstruction</option>
                <option>Scheduling</option>
                <option>Dedicated Resource Deployment</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full border border-gray-300 p-3 rounded-md focus:ring-kncc-green focus:border-kncc-green outline-none transition-colors" placeholder="Tell us about your operational bottlenecks..."></textarea>
            </div>
            <button type="button" className="w-full bg-kncc-navy text-white font-bold py-4 rounded-md hover:bg-opacity-90 transition-all shadow-md">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
