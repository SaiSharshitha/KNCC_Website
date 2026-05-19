import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-kncc-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="bg-white p-4 inline-block rounded">
              <Image
                src="/logo.jpg"
                alt="KNCC Logo"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are not a staffing agency. We are a structured construction support organization providing scalable technical teams for enterprise growth and project excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Services & Industries</h3>
            <ul className="space-y-3">
              {[
                { name: "Project Controls", href: "/services/project-controls" },
                { name: "Estimation & Costing", href: "/services/estimation" },
                { name: "Project Planning", href: "/services/planning" },
                { name: "Construction Administration", href: "/services/administration" },
                { name: "Project Accounting", href: "/services/accounting" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-kncc-green text-sm transition-colors flex items-center before:content-[''] before:w-1 before:h-1 before:bg-kncc-green before:rounded-full before:mr-2">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Industries Served", href: "/services#industries" },
                { name: "Careers", href: "/careers" },
                { name: "Leadership", href: "/about#leadership" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-kncc-green text-sm transition-colors flex items-center before:content-[''] before:w-1 before:h-1 before:bg-kncc-green before:rounded-full before:mr-2">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-kncc-green mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Headquarters: India<br />
                  Global Support Ready
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-kncc-green mr-3 flex-shrink-0" />
                <a href="mailto:contact@knconstructionconsultants.com" className="text-gray-300 hover:text-white text-sm transition-colors">
                  info@kncc.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-kncc-green mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Schedule a Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} KN Construction Consultants (KNCC). All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
