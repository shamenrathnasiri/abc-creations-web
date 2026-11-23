import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import letsConnectBg from "@/assets/letsconnect.jpg";

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info.abcgraphics@gmail.com",
      link: "mailto:info.abcgraphics@gmail.com",
    },
    {
      icon: SiWhatsapp,
      title: "WhatsApp",
      value: "071 523 4993",
      link: "https://wa.me/94715234993",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "075 971 5913",
      link: "tel:+94759715913",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 md:py-32 relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.88), rgba(15, 15, 15, 0.92)), url(${letsConnectBg})`,
      }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full blur-[80px] sm:blur-[100px]" style={{ background: "hsl(28 84% 49% / 0.06)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[180px] sm:w-[250px] h-[180px] sm:h-[250px] rounded-full blur-[60px] sm:blur-[80px]" style={{ background: "hsl(38 100% 59% / 0.04)" }} />
      </div>

      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <span className="inline-block text-[0.6rem] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary font-semibold mb-2 sm:mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">Let's Connect</h2>
          <p className="text-base sm:text-xl text-white/40 max-w-xl mx-auto">
            Ready to bring your ideas to life? Get in touch with us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mx-auto">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.title}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card
                  className="relative border border-white/[0.06] shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 cursor-pointer animate-scale-in overflow-hidden rounded-xl sm:rounded-2xl"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    background: "linear-gradient(180deg, hsl(0 0% 14% / 0.8), hsl(0 0% 11% / 0.8))",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardContent className="pt-6 sm:pt-8 pb-5 sm:pb-6 text-center relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-500">
                      <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg mb-1.5 sm:mb-2 text-white">{contact.title}</h3>
                    <p className="text-primary font-medium text-xs sm:text-sm break-all sm:break-normal">{contact.value}</p>

                    {/* Arrow indicator */}
                    <div className="mt-3 sm:mt-4 flex items-center justify-center">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/[0.06] flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                        <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/30 group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default Contact;
