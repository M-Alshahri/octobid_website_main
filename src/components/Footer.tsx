import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const aboutLinks = [
    { name: "About Us", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Users", href: "#user" },
    { name: "Testimonials", href: "#testimonials" },
  ];

    const companyLinks = [
      { name: "Our Team", href: "/" },
      { name: "Terms & Condition", href: "/terms" },
      { name: "FAQ", href: "#faqs" },
      { name: "Hospitals", href: "/" },
    ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      iconSrc: "/images/fb.svg",
    },
    {
      name: "Twitter",
      href: "#",
      iconSrc: "/images/x.svg",
    },
    {
      name: "Instagram",
      href: "#",
      iconSrc: "/images/insta.svg",
    },
  ];

  const addressData = [
    "1234 Saudi Arabia",
    "Saudi Arabia 31134",
    "(+96)555-0103",
    "octobid@gmail.com",
  ];

  return (
    <footer className="bg-[#284A9A] text-white font-geist-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="flex flex-col mr-8">
            <div className="flex items-center space-x-2 mb-12">
              <Image
                src="/images/Logo_White.svg"
                alt="Octobid Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold font-poppins">Octobid</span>
            </div>
            <p className=" text-lg leading-relaxed mb-10 max-w-xs">
              With Octobid, hospitals can buy and manage products, order
              packages, join co-buying opportunities.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="hover:opacity-80 transition-opacity duration-200"
                  aria-label={social.name}
                >
                  <Image
                    src={social.iconSrc}
                    alt={`${social.name} icon`}
                    width={42}
                    height={42}
                    className="w-10.5 h-10.5"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-12">About</h3>
            <ul className="space-y-6">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className=" hover:opacity-80 transition-opacity duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-12">Company</h3>
            <ul className="space-y-6">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className=" hover:opacity-80 transition-opacity duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-12">Contact Us</h3>
          
              <ul className="space-y-6">
                {addressData.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
             
           
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#EAF2FF]/65 mt-13 pt-8 flex flex-col md:flex-row justify-between items-center pr-16">
          <p className=" text-lg font-geist-sans">
            Copyright @2025 Octobid | All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className=" text-lg font-geist-sans">
              Designed by
            </span>
            <span className=" text-lg font-geist-sans font-bold">
              Octobid
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
