import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold tracking-tight mb-2">
              SYNTECHS 2026
            </h3>
            <p className="text-sm text-primary-foreground/60">
              A National Level Hackathon organized by Trendians.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase mb-4 text-primary-foreground/50">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/problem-statements" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Problem Statements
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold tracking-wider uppercase mb-4 text-primary-foreground/50">
              Get in Touch
            </h4>
            <a
              href="mailto:trendians.in@gmail.com"
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-2 mb-4"
            >
              <Mail size={14} />
              trendians.in@gmail.com
            </a>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/40">
            © 2026 Syntechs. All rights reserved. Organized by Trendians.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
