import logo from "@/assets/logo.png";
import {
  Mail,
  MessageCircle,
  Phone,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const rotatingWords = ["your idea", "your project", "your design"];

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate("/");

    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
      attempts += 1;
      if (attempts < 20) {
        setTimeout(tryScroll, 150);
      }
    };

    setTimeout(tryScroll, 150);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { name: "Logo Design" },
    { name: "Social Media Design" },
    { name: "Print Design" },
    { name: "Tute & Book Cover" },
    { name: "UI/UX Design" },
    { name: "Web Development" },
  ];

  const company = [
    { name: "About Us", sectionId: "about" },
    { name: "Our Work", sectionId: "portfolio" },
    { name: "Pricing", sectionId: "prices" },
  ];

  const support: Array<{
    name: string;
    href?: string;
    action?: () => void;
    sectionId?: string;
  }> = [

    { name: "Privacy Policy", action: () => setShowPrivacy(true) },
    { name: "Terms & Conditions", action: () => setShowTerms(true) },
  ];

  const contacts = [
    {
      label: "Facebook",
      value: "Visit our page for the latest designs",
      href: "https://www.facebook.com/profile.php?id=100095599507570",
      icon: FaFacebookF,
      external: true,
    },
    {
      label: "WhatsApp",
      value: "+94 71 523 4993",
      href: "https://wa.me/94715234993",
      icon: MessageCircle,
      external: true,
    },
    {
      label: "Email",
      value: "info.abcgraphics@gmail.com",
      href: "mailto:info.abcgraphics@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "+94 75 971 5913",
      href: "tel:+94759715913",
      icon: Phone,
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=100095599507570",
      label: "Facebook",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/94715234993",
      label: "WhatsApp",
    },
    {
      icon: Mail,
      href: "mailto:info.abcgraphics@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: "#0A0A0A" }}>
      {/* ─── Pre-Footer CTA Box ─── */}
      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <div
            className="relative -mb-1 rounded-t-[2rem] px-8 py-10 md:px-14 md:py-14 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(28 84% 49%), hsl(38 100% 59%))",
            }}
          >
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, #fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Experience The ABC Graphics Advantage.
                </h3>
                <p className="text-white/80 text-sm md:text-base max-w-lg">
                  Maximize your brand impact with ABC Graphics - where creativity
                  meets excellence for unmatched design results.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                {[
                  "Premium Designs and Developments",
                  "Expert Team",
                  "100% Satisfaction",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white text-sm font-medium">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Main Footer ─── */}
      <div
        className="relative pt-20 pb-8"
        style={{
          background: "linear-gradient(180deg, #0A0A0A 0%, #060606 100%)",
        }}
      >
        {/* Ambient glow effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -bottom-20 left-0 w-[400px] h-[300px] rounded-full blur-[120px]"
            style={{ background: "hsl(28 84% 49% / 0.06)" }}
          />
          <div
            className="absolute -bottom-20 right-0 w-[350px] h-[300px] rounded-full blur-[100px]"
            style={{ background: "hsl(38 100% 59% / 0.04)" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Top section: CTA + Link columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            {/* Left: Big CTA text */}
            <div className="lg:col-span-5">
              <span
                className="text-xs font-bold uppercase tracking-[0.25em] mb-4 block"
                style={{ color: "hsl(28 84% 49%)" }}
              >
                Hello! We're Listening
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight"
                style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em" }}
              >
                Let's talk about
              </h2>
              {/* Animated rotating text */}
              <div className="mb-6 h-[3rem] md:h-[3.5rem] overflow-hidden relative">
                <span
                  className="text-3xl md:text-4xl font-bold inline-block transition-all duration-500 ease-in-out"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "-0.02em",
                    background: "linear-gradient(135deg, hsl(28 84% 49%), hsl(38 100% 59%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    transform: isAnimating ? "translateY(-100%)" : "translateY(0)",
                    opacity: isAnimating ? 0 : 1,
                  }}
                >
                  {rotatingWords[wordIndex]}.
                </span>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group transition-all duration-300"
                style={{ color: "hsl(28 84% 49%)" }}
              >
                <span className="group-hover:tracking-widest transition-all duration-300">
                  Sounds Good? Let's Connect
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right: Three nav columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-6 lg:pl-8">
              {/* Services */}
              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "hsl(28 84% 49%)" }}
                  />
                  Services
                </h4>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <button
                        onClick={() => scrollToSection("portfolio")}
                        className="text-white/40 text-sm hover:text-white transition-all duration-300 hover:pl-1 block text-left"
                      >
                        {service.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "hsl(28 84% 49%)" }}
                  />
                  Company
                </h4>
                <ul className="space-y-3">
                  {company.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => scrollToSection(item.sectionId)}
                        className="text-white/40 text-sm hover:text-white transition-all duration-300 hover:pl-1 block text-left"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "hsl(28 84% 49%)" }}
                  />
                  Support
                </h4>
                <ul className="space-y-3">
                  {support.map((item) => (
                    <li key={item.name}>
                      {item.action ? (
                        <button
                          onClick={item.action}
                          className="text-white/40 text-sm hover:text-white transition-all duration-300 hover:pl-1 block text-left"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          to={item.href!}
                          className="text-white/40 text-sm hover:text-white transition-all duration-300 hover:pl-1 block"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Location */}
                <div className="mt-8">
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "hsl(28 84% 49%)" }}
                    />
                    Location
                  </h4>
                  <div className="flex items-start gap-2 text-white/40 text-sm">
                    <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(28 84% 49%)" }} />
                    <span>Sri Lanka,</span>
                     <span>Polonnaruwa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            {contacts.map(({ label, value, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 rounded-xl border border-white/[0.05] px-4 py-3 text-white/60 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.03] group"
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white shadow-sm transition-all duration-300 group-hover:shadow-lg flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, hsl(28 84% 49%), hsl(38 100% 59%))",
                    boxShadow: "0 4px 12px hsl(28 84% 49% / 0.25)",
                  }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-wider text-white/30">
                    {label}
                  </span>
                  <span className="font-medium text-white/70 group-hover:text-white transition-colors duration-300 text-xs">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="section-divider mx-auto" />

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Logo + copyright */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="ABC Graphic"
                className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
              <p className="text-white/25 text-xs">
                Copyright &copy; {new Date().getFullYear()} ABC Graphics. All rights reserved.
              </p>
            </div>

            {/* Right: Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-white/40 transition-all duration-300 hover:text-white hover:border-primary/40 hover:shadow-lg"
                  style={{
                    background: "hsl(0 0% 100% / 0.03)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "linear-gradient(135deg, hsl(28 84% 49%), hsl(38 100% 59%))";
                    (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "hsl(0 0% 100% / 0.03)";
                    (e.currentTarget as HTMLElement).style.borderColor = "hsl(0 0% 100% / 0.08)";
                  }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ Privacy Policy Modal ═══ */}
      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="max-w-2xl text-white border-white/[0.06]" style={{ background: "#141414" }}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gradient">Privacy Policy</DialogTitle>
            <p className="text-white/30 text-xs">ABC Graphics - www.abcgraphics.lk | Last Updated: March 6, 2026</p>
          </DialogHeader>
          <ScrollArea className="max-h-[65vh] pr-4">
            <div className="space-y-5 text-sm text-white/60 leading-relaxed">
              <section>
                <h3 className="font-semibold text-white mb-1">1. Introduction</h3>
                <p>ABC Graphics is a freelance digital service provider based in Sri Lanka offering graphic design, website development, and system/software development services.</p>
                <p>We respect your privacy and are committed to protecting the personal information you provide through our website and services.</p>
                <p>By using this website, you agree to the practices described in this Privacy Policy.</p>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">2. Information We Collect</h3>
                <p className="mb-2">We may collect the following information when you contact us or request our services:</p>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company or business name (if applicable)</li>
                  <li>Project details and requirements</li>
                  <li>Website or system specifications</li>
                  <li>Files, images, logos, text, or other content you provide</li>
                  <li>Communication records between you and ABC Graphics</li>
                </ul>
                <p className="mt-2">We only collect information that is necessary to provide our services.</p>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">3. How We Use Your Information</h3>
                <p className="mb-2">Your information may be used for the following purposes:</p>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  <li>Responding to inquiries and service requests</li>
                  <li>Providing graphic design services</li>
                  <li>Developing websites and web applications</li>
                  <li>Developing software systems and digital solutions</li>
                  <li>Communicating project updates and progress</li>
                  <li>Sending quotations, invoices, and project documentation</li>
                  <li>Improving our website and services</li>
                  <li>Providing customer support</li>
                </ul>
                <p className="mt-2">ABC Graphics does not sell, rent, or trade personal information to third parties.</p>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">4. Project Files and Client Content</h3>
                <p>Any files, images, logos, text, or other materials provided by clients are used only for the purpose of completing the requested project.</p>
                <p>We will not share or distribute client materials without permission unless required by law.</p>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">5. Data Protection</h3>
                <p>We take reasonable technical and organizational measures to protect your personal information from:</p>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  <li>Unauthorized access</li>
                  <li>Loss or misuse</li>
                  <li>Unauthorized disclosure</li>
                  <li>Data alteration</li>
                </ul>
                <p>However, no online system can guarantee 100% security, and users share information at their own risk.</p>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">6. Third-Party Services</h3>
                <p>We may use trusted third-party services to support our work, such as:</p>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  <li>Email communication services</li>
                  <li>Cloud storage for project files</li>
                  <li>Website hosting providers</li>
                  <li>Payment processing services</li>
                </ul>
                <p>These services may have their own privacy policies governing how they handle data.</p>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">7. Cookies</h3>
                <p>Our website may use basic cookies to:</p>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  <li>Improve user experience</li>
                  <li>Analyze website performance</li>
                  <li>Remember user preferences</li>
                </ul>
                <p>You can disable cookies through your browser settings if you prefer.</p>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">8. Your Rights</h3>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  <li>Request access to your personal data</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information (where applicable)</li>
                </ul>
                <p>Requests can be made by contacting us using the details below.</p>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">9. Updates to This Policy</h3>
                <p>ABC Graphics may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.</p>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">10. Contact Information</h3>
                <p>If you have any questions regarding this Privacy Policy, please contact:</p>
                <p>ABC Graphics</p>
                <p>Website: <a href="https://www.abcgraphics.lk" className="text-primary hover:underline">https://www.abcgraphics.lk</a></p>
                <p>Email: <a href="mailto:info.abcgraphics@gmail.com" className="text-primary hover:underline">info.abcgraphics@gmail.com</a></p>
                <p>Phone: <a href="tel:+94759715913" className="text-primary hover:underline">+94 75 971 5913</a></p>
              </section>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* ═══ Terms & Conditions Modal ═══ */}
      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="max-w-2xl text-white border-white/[0.06]" style={{ background: "#141414" }}>
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gradient">Terms &amp; Conditions</DialogTitle>
            <p className="text-white/30 text-xs">ABC Graphics - www.abcgraphics.lk | Last Updated: March 6, 2026</p>
          </DialogHeader>
          <ScrollArea className="max-h-[65vh] pr-4">
            <div className="space-y-5 text-sm text-white/60 leading-relaxed">
              <p>Terms & Conditions</p>
              <p>Effective Date: March 6, 2026</p>
              <p>By accessing this website and using the services provided by ABC Graphics, you agree to comply with the following Terms & Conditions.</p>
              <section>
                <h3 className="font-semibold text-white mb-1">1. Services</h3>
                <p className="mb-2">ABC Graphics provides professional freelance services including but not limited to:</p>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  <li>Graphic Design (logo design, social media design, banner design, flyer design, tute cover design, branding materials)</li>
                  <li>Website Design and Development</li>
                  <li>Web Application Development</li>
                  <li>System / Software Development</li>
                  <li>UI/UX Design</li>
                  <li>Custom digital solutions and design services</li>
                </ul>
                <p>All services are provided based on the project requirements agreed upon with the client.</p>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">2. Project Process</h3>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  <li>Clients must provide a clear project brief and requirements before work begins.</li>
                  <li>Project timelines depend on project complexity, scope, and client responsiveness.</li>
                  <li>Delays in providing required information or feedback may affect delivery timelines.</li>
                </ul>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">3. Payments</h3>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  <li>A deposit or advance payment may be required before starting any project.</li>
                  <li>The remaining balance must be paid before final files, source code, or completed work is delivered.</li>
                  <li>Payments made are non-refundable once the project work has started.</li>
                  <li>For large development projects, payments may be arranged in milestones.</li>
                </ul>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">4. Revisions</h3>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  <li>A limited number of revisions will be provided as agreed during project confirmation.</li>
                  <li>Additional revisions beyond the agreed limit may require additional charges.</li>
                  <li>Major changes that alter the original project scope may require a new quotation.</li>
                </ul>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">5. Intellectual Property</h3>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  <li>Full ownership rights of the final approved design, website, or software will be transferred to the client after full payment is completed.</li>
                  <li>Until payment is completed, ABC Graphics retains ownership of all work.</li>
                  <li>ABC Graphics reserves the right to display completed work in its portfolio, marketing materials, or website unless otherwise agreed.</li>
                </ul>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">6. Client Responsibilities</h3>
                <p className="mb-2">The client agrees to:</p>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  <li>Provide accurate project information and materials</li>
                  <li>Ensure that all content provided (images, text, logos, etc.) does not violate copyright or trademark laws</li>
                  <li>Provide timely feedback and approvals</li>
                  <li>Test and review delivered work before final approval</li>
                </ul>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">7. Website & Software Development Disclaimer</h3>
                <p>For website and system development services:</p>
                <ul className="list-disc list-inside space-y-1 text-white/50">
                  <li>ABC Graphics is not responsible for issues caused by third-party hosting providers, plugins, or external services.</li>
                  <li>Maintenance, updates, and technical support may require separate agreements.</li>
                  <li>The client is responsible for maintaining login credentials and hosting accounts.</li>
                </ul>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">8. Limitation of Liability</h3>
                <p>ABC Graphics shall not be held liable for any indirect, incidental, or consequential damages resulting from the use of our services, website, or delivered products.</p>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">9. Changes to Terms</h3>
                <p>ABC Graphics reserves the right to update or modify these Terms & Conditions at any time without prior notice. Updated terms will be posted on this page.</p>
              </section>
              <section>
                <h3 className="font-semibold text-white mb-1">10. Contact</h3>
                <p>If you have any questions about these Terms & Conditions, please contact:</p>
                <p>ABC Graphics</p>
                <p>Website: <a href="https://www.abcgraphics.lk" className="text-primary hover:underline">https://www.abcgraphics.lk</a></p>
                <p>Email: <a href="mailto:info.abcgraphics@gmail.com" className="text-primary hover:underline">info.abcgraphics@gmail.com</a></p>
              </section>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
