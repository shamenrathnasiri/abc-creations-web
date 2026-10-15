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
      className="py-24 sm:py-32 relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.88), rgba(15, 15, 15, 0.92)), url(${letsConnectBg})`,
      }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[100px]" style={{ background: "hsl(28 84% 49% / 0.06)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full blur-[80px]" style={{ background: "hsl(38 100% 59% / 0.04)" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-xs uppercase tracking-[0.35em] text-primary font-semibold mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let's Connect</h2>
          <p className="text-xl text-white/40 max-w-xl mx-auto">
            Ready to bring your ideas to life? Get in touch with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
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
                  className="relative border border-white/[0.06] shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-3 cursor-pointer animate-scale-in overflow-hidden rounded-2xl"
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

                  <CardContent className="pt-8 pb-6 text-center relative">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 group-hover:scale-110 transition-all duration-500">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-white">{contact.title}</h3>
                    <p className="text-primary font-medium text-sm">{contact.value}</p>

                    {/* Arrow indicator */}
                    <div className="mt-4 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full border border-white/[0.06] flex items-center justify-center group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-primary transition-colors duration-300" />
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
