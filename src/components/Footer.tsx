import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Mail, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        <div className="grid md:flex gap-12 items-between justify-between w-full">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold tracking-tight">
              SYNTECHS 2026
            </h3>

            <div>
              <p className="text-xs uppercase tracking-widest text-primary-foreground/50">
                Organized By
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-wide leading-tight">
                TRENDIANS
              </h2>
            </div>

            <p className="text-sm text-primary-foreground/70 max-w-xs">
              A National Level Hackathon proudly organized by Trendians.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:flex gap-12 md:gap-40">
            <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-primary-foreground/50">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/problem-statements"
                className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                Problem Statements
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase text-primary-foreground/50">
              Connect With TRENDIANS
            </h4>

            <a
              href="mailto:trendians.in@gmail.com"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2"
            >
              <Mail size={14} />
              trendians.in@gmail.com
            </a>

            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/trendiansofficial?igsh=MTc4ZGg1NmZ6b28zOA==" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/trendians_in" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <X size={20} />
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm font-semibold tracking-wide text-primary-foreground">
            © 2026 SYNTECHS — An Initiative by TRENDIANS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;