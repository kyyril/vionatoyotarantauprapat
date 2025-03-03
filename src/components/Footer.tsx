import { FacebookIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactDialog from "./FormContact";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Mobil", href: "/mobil" },
    { name: "Gallery", href: "/gallery" },
    { name: "Rekomendasi AI", href: "/rekomendasi-ai" },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/viona_elisa",
      icon: InstagramIcon,
      color: "text-pink-600",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61555485359987#",
      icon: FacebookIcon,
      color: "text-blue-500",
    },
  ];

  return (
    <footer className="bg-primary-foreground w-full mt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="relative w-40 h-20">
              <Image
                src="/images/logo.png"
                alt="Toyota Rantauprapat"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-xl font-bold">VionaToyota Rantauprapat</h2>
            <p className="text-sm text-gray-500 text-center md:text-left">
              Beli Mobil Impian Jadi Lebih Mudah, Proses Cepat, Angsuran Ringan,
              dan Pelayanan Purna Jual Terjamin.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-red-500 text-center md:text-left">
              Navigasi
            </h3>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm hover:text-red-500 transition-colors duration-200 text-center md:text-left"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-red-500 text-center md:text-left">
              Ikuti Kami
            </h3>
            <div className="flex flex-col space-y-2">
              {socialMedia.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start space-x-2 hover:opacity-80 transition-opacity duration-200"
                >
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Toyota Rantauprapat. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
