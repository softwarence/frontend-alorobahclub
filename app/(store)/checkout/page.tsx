import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { HelpCircle, Search, CreditCard } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import PaymentCard from "@/components/store/PaymentCard";
import Link from "next/link";

import img from "@/public/assets/store/p14.svg";
import icon from "@/public/assets/tag-icon.svg";
import totalSavingIcon from "@/public/assets/total-saving-icon.svg";

import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      {/* Left side  */}
      <div className="bg-[#001317] w-full md:max-w-1/2 flex md:justify-end">
        <div className="text-white max-w-[503px] w-full mx-5 md:mx-10 pt-10 md:pt-0">
          {/* LEFT COLUMN: Forms */}
          <div className="lg:col-span-7 space-y-10 pb-10">
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Contact</h2>
                <a href="#" className="text-xs text-blue-400 underline">
                  Sign in
                </a>
              </div>
              <Input className="bg-transparent border-[#00B8DF] h-12" placeholder="Email" />
              <div className="flex items-start space-x-2 mt-4">
                <Checkbox id="marketing" className="border-[#00B8DF]" />
                <Label htmlFor="marketing" className="text-sm text-[#707070] leading-tight">
                  I would like to receive the latest news, products, and competitions from Al-
                  Ittihad Club. You can unsubscribe at any time. For more information, please see
                  our Privacy Policy
                </Label>
              </div>
            </section>

            {/* Delivery Section */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Delivery</h2>
              <div className="relative">
                {/* The Label positioned to look like the image overlay */}
                <Label className="absolute left-3 top-1.5 text-[12px] text-gray-500 z-10 font-semibold">
                  Country/Region
                </Label>

                <Select defaultValue="saudi-arabia">
                  <SelectTrigger className="w-full bg-transparent border-[#707070] pt-8 pb-4 focus:ring-1 focus:ring-teal-700 text-sm">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#001c22] border-[#707070] text-white">
                    <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                    <SelectItem value="united-arab-emirates">United Arab Emirates</SelectItem>
                    <SelectItem value="kuwait">Kuwait</SelectItem>
                    <SelectItem value="qatar">Qatar</SelectItem>
                    <SelectItem value="bahrain">Bahrain</SelectItem>
                    <SelectItem value="oman">Oman</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input className="bg-transparent border-[#707070] h-12" placeholder="First name" />
                <Input className="bg-transparent border-[#707070] h-12" placeholder="Last name" />
              </div>
              <div className="relative">
                <Input
                  className="bg-transparent border-[#707070] h-12 pr-10"
                  placeholder="Address"
                />
                <Search className="absolute right-3 top-3.5 w-5 h-5 text-gray-500" />
              </div>
              <Input
                className="bg-transparent border-[#707070] h-12"
                placeholder="Apartment, suite, etc. (optional)"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input className="bg-transparent border-[#707070] h-12" placeholder="City" />
                <Input
                  className="bg-transparent border-[#707070] h-12"
                  placeholder="Postal code (optional)"
                />
              </div>
              <div className="relative">
                <Input
                  id="phone"
                  type="tel"
                  className="bg-transparent border-[#707070] h-12 pr-10 text-white focus-visible:ring-1 "
                  placeholder="Phone"
                />

                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="w-4 h-4 text-gray-500 cursor-help hover:text-gray-300 transition-colors" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-[#002b33] border-teal-800 text-xs text-white">
                        <p>Needed for delivery updates and shipping carrier contact.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div className="flex items-start space-x-2 mt-4">
                <Checkbox id="marketing" className="border-[#00B8DF]" />
                <Label htmlFor="marketing" className="text-sm text-[#707070] leading-tight">
                  Save this information for next time
                </Label>
              </div>
            </section>

            {/* Shipping method Section */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Shipping method</h2>

              <div className="relative flex items-center justify-between p-5 rounded-lg border-2 border-cyan-500/50 bg-[#003b44] transition-all">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">Standard</span>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-400 line-through decoration-gray-500">
                    SAR 20.00
                  </p>
                  {/* Highlighted FREE text */}
                  <p className="text-sm font-bold text-yellow-400 tracking-wide">FREE</p>
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">Payment</h2>
                <p className="text-xs text-gray-500">All transactions are secure and encrypted.</p>
              </div>

              <RadioGroup
                defaultValue="mada"
                className="border border-gray-800 rounded-lg overflow-hidden"
              >
                {/* Mada Option (Selected State) */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-3">
                      <RadioGroupItem
                        value="mada"
                        id="mada"
                        className="border-cyan-400 text-cyan-400"
                      />
                      <Label htmlFor="mada" className="text-xs leading-tight max-w-[200px]">
                        mada, Card & Wallet Payments powered by PayTabs
                      </Label>
                    </div>
                    <div className="flex gap-1">
                      <PaymentCard item={4}></PaymentCard>
                    </div>
                  </div>

                  {/* Redirect Info Box */}
                  <div className="py-8 border-t border-gray-800 flex flex-col items-center">
                    <div className="w-32 h-20 border border-gray-700 rounded mb-4 relative">
                      <div className="absolute top-1 left-1 flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-gray-700" />
                        <div className="w-1 h-1 rounded-full bg-gray-700" />
                        <div className="w-1 h-1 rounded-full bg-gray-700" />
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-8 h-[1px] bg-gray-700 rotate-45" />
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-400 max-w-[280px] text-center leading-relaxed">
                      After clicking {'\"'}Pay now{'\"'}, you will be redirected to mada, Card &
                      Wallet Payments powered by PayTabs to complete your purchase securely.
                    </p>
                  </div>
                </div>

                {/* Tabby Option */}
                <div className="flex items-center justify-between p-4 pb-2 border-t border-gray-800 bg-transparent">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="tabby" id="tabby" />
                    <Label htmlFor="tabby" className="text-xs">
                      Pay later with Tabby
                    </Label>
                  </div>
                  <div className="bg-[#3df3a3] text-black text-[9px] font-bold px-1.5 py-1.5  rounded-[2px]">
                    tabby
                  </div>
                </div>

                {/* Tamara Option */}
                <div className="flex items-center justify-between p-4 border-t border-gray-800 bg-transparent">
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="tamara" id="tamara" />
                    <Label htmlFor="tamara" className="text-xs">
                      Tamara - Monthly payments. Sharia compliant
                    </Label>
                  </div>
                  <div className="w-10 h-6 bg-white rounded-[2px]" />
                </div>
              </RadioGroup>
            </section>
            {/* Billing Address section  */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">Billing address</h2>
              <RadioGroup
                defaultValue="same"
                className="border border-[#707070] rounded-lg overflow-hidden"
              >
                {/* Same as Shipping */}
                <div className="flex items-center space-x-3 p-4 bg-[#002b33]/30 border border-[#00B8DF] rounded-t-lg">
                  <RadioGroupItem
                    value="same"
                    id="same"
                    className="border-cyan-400 text-cyan-400"
                  />
                  <Label htmlFor="same" className="text-xs">
                    Same as shipping address
                  </Label>
                </div>

                {/* Different Billing Address */}
                <div className="flex items-center space-x-3 p-4 border-t border-gray-800">
                  <RadioGroupItem value="different" id="different" />
                  <Label htmlFor="different" className="text-xs">
                    Use a different billing address
                  </Label>
                </div>
              </RadioGroup>
            </section>

            <Button className="w-full bg-[#FFE000] hover:bg-[#eab308] text-black font-bold h-14 rounded-md text-lg">
              Pay now
            </Button>
            {/* Footer Links */}
            <footer className="pt-8 border-t border-teal-900/50">
              <div className="flex flex-wrap gap-4 text-[14px] text-[#FFE000]">
                <Link href="#" className="hover:underline">
                  Refund policy
                </Link>
                <Link href="#" className="hover:underline">
                  Shipping
                </Link>
                <Link href="#" className="hover:underline">
                  Privacy policy
                </Link>
                <Link href="#" className="hover:underline">
                  Terms of service
                </Link>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </div>
      {/* right side  */}
      <div className="bg-[#001E24] w-full md:max-w-1/2">
        <div className="text-white max-w-[503px]">
          {/* RIGHT COLUMN: Summary */}
          <div className="lg:col-span-5 md:p-10 p-5 rounded-xl self-start lg:sticky lg:top-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative w-16 h-16 bg-[#002b33] rounded-lg border border-teal-800 flex items-center justify-center">
                <span className="absolute -top-2 -right-2 bg-white text-black text-[12px] w-5 h-5 rounded flex items-center justify-center">
                  1
                </span>
                <Image
                  src={img}
                  fill
                  className="object-cover overflow-hidden p-2 rounded-xl"
                  alt=""
                ></Image>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Al-Orobah FC Club Hoodie</p>
                <p className="text-xs text-gray-500">XS / Black</p>
              </div>
              <p className="text-sm">SAR 399.00</p>
            </div>

            <div className="flex space-x-2 mb-6">
              <Input
                className="border-white h-13 bg-white text-black md:text-md"
                placeholder="Discount code"
              />
              <Button
                variant="secondary"
                className="bg-[#002b33] text-gray-400 border-none h-13 hover:bg-[#01343d]"
              >
                Apply
              </Button>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Subtotal</span>
                <span>SAR 399.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300 flex items-center">
                  Shipping <HelpCircle className="w-3 h-3 ml-1" />
                </span>
                <p className="">
                  <span className="line-through pr-1">SAR 20.00 </span>
                  <span>FREE</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 flex items-center">
                  <Image src={icon} alt=""></Image>
                  <span className="pl-2">-</span>
                </span>
              </div>
              <Separator className="bg-teal-900 my-4" />
              <div className="flex justify-between items-end">
                <div className="w-full">
                  <div className="flex justify-between w-full">
                    <p className="text-lg font-bold pb-2">Total</p>
                    <p className="text-xl font-bold">SAR 399.00</p>
                  </div>
                  <p className="text-[10px] text-gray-300 uppercase">
                    Including SAR 52.04 in taxes
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
              <Image src={totalSavingIcon} alt=""></Image>
              TOTAL SAVINGS SAR 20.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
