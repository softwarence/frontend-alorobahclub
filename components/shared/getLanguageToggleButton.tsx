import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { useState } from "react";
import switch_en_hanja_icon from "@/public/assets/switch_en_hanja_icon.svg";

const GetLanguageToggleButton = () => {
  const [lang, setLang] = useState("EN");

  return (
    <>
      <ToggleGroup
        type="single"
        value={lang}
        onValueChange={(v) => v && setLang(v)}
        className="bg-[#001E24] w-18 h-5 rounded flex flex-row-reverse p-0"
      >
        {/* EN BUTTON */}
        <ToggleGroupItem
          value="EN"
          className={`
            w-1/2 text-[12px] font-semibold
            flex items-center justify-center h-5

            text-white
            data-[state=on]:text-[#ffff]
            data-[state=off]:text-white/80

            data-[state=on]:bg-[#001317]
            data-[state=off]:bg-transparent

            hover:text-[#FFE000]
      `}
        >
          EN
        </ToggleGroupItem>

        {/* IMAGE BUTTON */}
        <ToggleGroupItem
          value="ICON"
          className={`
            w-1/2 h-5 flex items-center justify-center
            data-[state=on]:bg-[#001317]
            data-[state=off]:bg-transparent
      `}
        >
          <Image
            src={switch_en_hanja_icon}
            alt="switch icon"
            width={7}
            height={7}
            className="opacity-90"
          />
        </ToggleGroupItem>
      </ToggleGroup>
    </>
  );
};

export default GetLanguageToggleButton;
