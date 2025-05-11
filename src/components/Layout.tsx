import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, BarChart, Users, MapPin, Home } from "lucide-react";
import { cn } from "@/lib/utils";
type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};
const Layout: React.FC<LayoutProps> = ({
  children,
  className
}) => {
  return <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-white/10 py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold bg-gradient-to-r from-purple-400 to-accent bg-clip-text text-rose-600 text-xl">
              Konoha Daily
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              <NavLink to="/" icon={<Home size={18} />} label="Home" />
              <NavLink to="/corruption" icon={<BarChart size={18} />} label="Corruption" />
              <NavLink to="/politicians" icon={<Users size={18} />} label="Politicians" />
              <NavLink to="/regions" icon={<MapPin size={18} />} label="Regions" />
            </ul>
          </nav>
        </div>
      </header>

      <main className={cn("flex-1 container mx-auto py-6 px-4", className)}>
        {children}
      </main>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-secondary border-t border-white/10 py-2">
        <div className="flex justify-around">
          <MobileNavLink to="/" icon={<Home size={20} />} />
          <MobileNavLink to="/corruption" icon={<BarChart size={20} />} />
          <MobileNavLink to="/politicians" icon={<Users size={20} />} />
          <MobileNavLink to="/regions" icon={<MapPin size={20} />} />
        </div>
      </div>
    </div>;
};
type NavLinkProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
};
const NavLink: React.FC<NavLinkProps> = ({
  to,
  icon,
  label
}) => {
  return <li>
      <Link to={to} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
        {icon}
        <span>{label}</span>
      </Link>
    </li>;
};
type MobileNavLinkProps = {
  to: string;
  icon: React.ReactNode;
};
const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  to,
  icon
}) => {
  return <Link to={to} className="flex flex-col items-center justify-center p-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
      {icon}
    </Link>;
};
export default Layout;