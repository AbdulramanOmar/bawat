import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { TiLocation } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Company",
    href: "/about",
    list: ["About Us", "Organizational Structure", "Our Mission"],
  },
  {
    name: "Services",
    href: "/services",
    list: [
      "Fuel Sourcing ",
      "Construction ",
      " Oil & Gas Supply",
      " Business Consulting",
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className=" text-white">
      <div className="containe">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div>
              <Image
                width={200}
                height={100}
                src={logo}
                alt="Bawabt Albargsiyah-Logo"
              />
            </div>
               <p className="my-3 text-base font-bold text-white">
              BAWABA AL-BARGSIYAH for general services and general
              transportation
              <hr className="my-3 text-[#7777]" />
              Achieving hard work in hard places
            </p>
            <div className="flex gap-3">
              <SocialIcon
                icon={<FaXTwitter className="w-5 h-5" />}
                link="https://x.com/Wathar2030"
              />
              <SocialIcon icon={<FaInstagram className="w-5 h-5" />} link="#" />
              <SocialIcon icon={<FaLinkedin className="w-5 h-5" />} link="#" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6"> Links</h3>
            <ul className="space-y-3">
              {navLinks.map((nav, i) => {
                return (
                  <li key={i}>
                    <FooterLink href={nav.href}> {nav.name} </FooterLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services </h3>
            <ul className="space-y-3">
              {[
                "Fuel Sourcing ",
                "Construction ",
                "Oil & Gas Supply ",
                "Business Consulting ",
              ].map((service, index) => (
                <li key={index}>
                  <FooterLink href="services">{service}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6"> Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mx-3" />
                <span>
                  {" "}
                  <a
                    href="tel:+9647803709593"
                    className=" hover:underline mb-1"
                  >
                    +964 780 370 9593
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <IoMdMail className="w-5 h-5 mx-3" />
                <span>
                  {" "}
                  <a
                    href="mailto:info@bawabt-albargsiyah.com"
                    className="hover:underline "
                  >
                    info@bawabt-albargsiyah.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <TiLocation className="w-5 h-5 mx-3 mt-1" />
                <span> BASRA – HQ</span>
              </li>
              <li className="flex items-start">
                <TiLocation className="w-5 h-5 mx-3 mt-1" />
                <span> DUBAI – CITY BAY</span>
              </li>
              <li className="flex items-start">
                <TiLocation className="w-5 h-5 mx-3 mt-1" />
                <span> BAGHDAD – INNER KARADA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/20 flex flex-col md:flex-row justify-center items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            © {new Date().getFullYear()} bawabt-albargsiyah . جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    className=" text-white text-lg transition-colors duration-300 block"
  >
    {children}
  </Link>
);

const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
  >
    {icon}
  </a>
);

export default Footer;


