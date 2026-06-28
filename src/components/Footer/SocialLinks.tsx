import React from "react";
import { Github, MessageSquare, Twitter } from "lucide-react";

export default function SocialLinks() {
  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Discord", icon: MessageSquare, href: "#" },
    { name: "GitHub", icon: Github, href: "#" }
  ];

  return (
    <div className="flex items-center gap-6 mb-12">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            className="w-11 h-11 border border-[#c5a05933] hover:border-[#c5a059] bg-[#050505] text-[#888] hover:text-white hover:bg-[#c5a059]/10 transition-all duration-300 flex items-center justify-center rounded-none relative group"
            aria-label={social.name}
          >
            {/* Visual corners on the social icons */}
            <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[#c5a059]" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[#c5a059]" />
            
            <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
          </a>
        );
      })}
    </div>
  );
}
