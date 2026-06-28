import React from "react";
import { ShieldAlert } from "lucide-react";

export default function StateOfPlagueWidget() {
  return (
    <div className="mt-8 p-4 bg-[#080808] border border-[#c5a05922] rounded-none relative">
      <div className="flex gap-3">
        <ShieldAlert className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
        <div>
          <h4 className="font-serif text-xs text-[#c5a059] font-semibold tracking-wider">
            CORRUPCIÓN DE CENIZA
          </h4>
          <p className="text-[11px] text-[#888] mt-1 leading-relaxed font-sans">
            La ceniza necrótica avanza sobre Eldergrove. Sir Gareth debe recuperar los fragmentos del Corazón del Bosque.
          </p>
        </div>
      </div>
    </div>
  );
}
