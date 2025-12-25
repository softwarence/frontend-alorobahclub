"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Asset imports
import h1_image from "@/public/assets/store/h1.svg";
import orderIcon from "@/public/assets/order-box-icon.svg";
import dolorIcon from "@/public/assets/dollar-icon.svg";
import { SubscriptionPopup } from "../shared/SubscribePopup";
import SingleStoreImageSlider from "../shared/SingleStoreImageSlider";
import PaymentCard from "./PaymentCard";

// --- DATA FROM REFERENCE IMAGES ---
const PRODUCT_DATA = {
  id: 101,
  name: "حقيبة شخصية الاتحاد",
  sku: "S2526ACCFC8B004",
  price: "259",
  currency: "SAR",
  shippingNote: "Tax included. Shipping calculated at checkout.",
  features: [
    "منتجات فريدة مصنوعة من أطقم رسمية لموسم الثنائية 24/25",
    "كل منتج يحمل قصة وذكرى من تاريخ نادي الاتحاد",
    "إصدار محدود وقطع لا تُكرر",
  ],
};

export default function StoreSingleProductContainer() {
  const [quantity, setQuantity] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const increaseQty = useCallback(() => setQuantity((q) => q + 1), []);
  const decreaseQty = useCallback(() => setQuantity((q) => Math.max(1, q - 1)), []);

  return (
    <div className="w-full text-white py-8 px-4 md:px-8 lg:px-20 min-h-screen ">
      {/* Container dir removed to force left alignment for all content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
        {/* LEFT SIDE — IMAGE SLIDER */}
        <div className="w-full col-span-3 order-1 lg:order-1">
          <SingleStoreImageSlider />
        </div>

        {/* RIGHT SIDE — PRODUCT DETAILS (All text-left) */}
        <div className="flex flex-col space-y-6 col-span-2 text-left order-2 lg:order-2">
          {/* HEADER */}
          <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{PRODUCT_DATA.name}</h1>
            <p className="text-zinc-500 text-xs font-mono">{PRODUCT_DATA.sku}</p>
            <div className="pt-4">
              <span className="text-4xl font-black">
                {PRODUCT_DATA.price} {PRODUCT_DATA.currency}
              </span>
            </div>
            <p className="text-zinc-400 text-[10px]">{PRODUCT_DATA.shippingNote}</p>
          </div>

          {/* STOCK STATUS */}
          <div className="flex items-center gap-2 text-[#00FF85] text-xs font-bold justify-start">
            <div className="w-2 h-2 rounded-full bg-[#00FF85]" />
            In stock
          </div>

          <Link
            href="#"
            className="text-white text-xs underline underline-offset-8 font-bold tracking-widest uppercase decoration-zinc-700 w-fit"
          >
            SIZE CHART
          </Link>

          {/* QUANTITY & ACTIONS */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center border border-zinc-800 w-fit h-14 rounded-sm bg-black/40">
              <button onClick={decreaseQty} className="px-5 text-xl hover:text-[#FFE000]">
                -
              </button>
              <span className="px-6 font-bold text-lg border-x border-zinc-800">{quantity}</span>
              <button onClick={increaseQty} className="px-5 text-xl hover:text-[#FFE000]">
                +
              </button>
            </div>

            <Button
              onClick={() => setIsPopupOpen(true)}
              className="w-full h-14 bg-white text-black hover:bg-zinc-200 font-black uppercase tracking-widest text-sm rounded-sm"
            >
              ADD TO CART
            </Button>

            <Link href={"/checkout"}>
              <Button
                // onClick={() => setIsPopupOpen(true)}
                className="w-full h-14 bg-[#FFE000] text-black hover:bg-[#F0D000] font-black uppercase tracking-widest text-sm rounded-sm"
              >
                BUY IT NOW
              </Button>
            </Link>
          </div>

          {/* PAYMENT SPLITS */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between p-4 border border-zinc-800 rounded-sm bg-black/20">
              <p className="text-[11px] text-zinc-300">
                Split your purchase into monthly payments.{" "}
                <span className="font-bold underline cursor-pointer">Learn more</span>
              </p>
              <div className="bg-[#39FFBD] text-black text-[10px] font-black px-2 py-0.5 rounded-sm">
                tabby
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-zinc-800 rounded-sm bg-black/20">
              <div className="text-[11px] text-zinc-300 leading-tight">
                Or split in 4 payments of <span className="font-bold">64.75 SAR</span> <br />
                No late fees, Sharia compliant!{" "}
                <span className="font-bold underline cursor-pointer">More options</span>
              </div>
              <div className="bg-[#FF96C5] text-black text-[10px] font-black px-2 py-0.5 rounded-sm italic">
                tamara
              </div>
            </div>
          </div>

          <PaymentCard />

          {/* DESCRIPTION SECTION (Forced text-left) */}
          <div className="pt-6 border-t border-zinc-900 space-y-6 text-right">
            <p className="text-xs text-zinc-300 leading-relaxed font-medium">
              مجموعة استثنائية تجمع بين{" "}
              <span className="text-white font-bold">الوفاء للتاريخ والالتزام بالاستدامة</span>.
              أطلق نادي الاتحاد مجموعة <span className="text-white font-bold">الإرث المستدام</span>{" "}
              التي تعيد الحياة لذكريات موسم الثنائية عبر إعادة تدوير وتحويلها إلى منتجات عصرية
              بأسلوب <span className="text-white font-bold">Upcycle</span> مبتكر.
            </p>

            <p className="text-xs text-zinc-300 leading-relaxed">
              كل قطعة في هذه المجموعة تحكي قصة من{" "}
              <span className="text-white font-bold">قصص الصدارة، والمنتادا، وصعود المنصات</span>.
              وتخلّد لحظات لا تُنسى من أمجاد العميد.
            </p>

            <p className="text-xs text-zinc-300 leading-relaxed">
              صُممت هذه المجموعة بحب وشغف من خامات مستدامة، لتجسد روح نادي الاتحاد الأصيلة{" "}
              <span className="text-white font-bold">إرث يُلبس، وتاريخ يُحفظ، واستدامة تُحتذى</span>
              .
            </p>

            {/* FEATURES SECTION */}
            <div className="space-y-4 pt-4 text-right">
              <h3 className="font-black text-3xl">المميزات:</h3>
              <ul className="space-y-4 text-right">
                {PRODUCT_DATA.features.map((feature, idx) => (
                  <li key={idx} className="text-right">
                    <span className="mt-1.5 w-1 h-1 bg-zinc-500 rounded-full shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SHIPPING & ACTIONS */}
          <div className="pt-8 space-y-4 border-t border-zinc-900 text-right">
            <div className="flex items-center gap-3 text-xs text-zinc-300 font-medium justify-start">
              <Image src={orderIcon} alt="" width={18} height={18} className="opacity-80" />
              Estimated delivery: Nov 19 - Nov 23
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-300 font-medium justify-start">
              <Image src={dolorIcon} alt="" width={18} height={18} className="opacity-80" />
              Orders over 499 SAR ship free
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-300 font-medium pb-4 justify-start">
              <span className="text-lg font-bold">7</span> 7 day returns
            </div>

            <div className="flex items-center gap-10 pt-6 border-t border-zinc-900 justify-start">
              <button className="flex items-center gap-2 text-sm font-bold hover:text-[#FFE000]">
                <Share2 size={18} /> Share
              </button>
              <button className="flex items-center gap-2 text-sm font-bold hover:text-[#FFE000]">
                <HelpCircle size={18} /> Ask a question
              </button>
            </div>
          </div>
        </div>
      </div>

      <SubscriptionPopup open={isPopupOpen} onOpenChange={setIsPopupOpen} />
    </div>
  );
}
