"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SignUpFrom = () => {
  return (
    <section className="bg-black pb-20">
      <div className="md:px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* LEFT TITLE */}
          <div className="text-white px-5 col-span-3">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
              SIGN UP TO OUR NEWSLETTER
            </h2>
          </div>

          {/* RIGHT FORM */}
          <form className="space-y-6 col-span-2 w-full px-5" action="#" method="POST">
            {/* FIRST + LAST NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                placeholder="First name"
                className="
                  bg-transparent
                  border-0 border-b border-gray-500
                  rounded-none
                  text-white
                  pb-2 px-0 h-auto
                  placeholder-gray-500
                  focus-visible:ring-0
                  focus-visible:border-[#ffda00]
                "
              />

              <Input
                type="text"
                placeholder="Last name"
                className="
                  bg-transparent
                  border-0 border-b border-gray-500
                  rounded-none
                  text-white
                  pb-2 px-0 h-auto
                  placeholder-gray-500
                  focus-visible:ring-0
                  focus-visible:border-[#ffda00]
                "
              />
            </div>

            {/* EMAIL */}
            <Input
              type="email"
              placeholder="Email"
              className="
                bg-transparent
                border-0 border-b border-gray-500
                rounded-none
                text-white
                pb-2 px-0 h-auto
                placeholder-gray-500
                focus-visible:ring-0
                focus-visible:border-[#ffda00]
              "
            />

            {/* PHONE */}
            <Input
              type="tel"
              placeholder="Phone number"
              className="
                bg-transparent
                border-0 border-b border-gray-500
                rounded-none
                text-white
                pb-2 px-0 h-auto
                placeholder-gray-500
                focus-visible:ring-0
                focus-visible:border-[#ffda00]
              "
            />

            {/* CONSENT */}
            <div className="flex md:items-center pt-2">
              <Checkbox
                id="consent"
                className="
                mt-1 md:mt-1
                  border-gray-600
                  bg-gray-700
                  data-[state=checked]:bg-[#ffda00]
                  data-[state=checked]:border-[#ffda00]
                "
              />
              <Label
                htmlFor="consent"
                className="ml-3 text-xs text-gray-400 cursor-pointer leading-relaxed"
              >
                By subscribing you consent to receive the latest news, products, and competitions
                from Al-Ittihad Club. You can unsubscribe at any time. For more information please
                see our Privacy Policy.
              </Label>
            </div>

            {/* SUBMIT BUTTON */}
            <Button variant={"primary"} type="submit" className="px-6">
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpFrom;
