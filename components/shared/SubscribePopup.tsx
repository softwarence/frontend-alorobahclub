import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import Official_Kit_Background from "@/public/assets/SubscriptionPopup-image.svg";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface SubscriptionPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SubscriptionPopup({ open, onOpenChange }: SubscriptionPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden border-0 bg-black">
        {/* --- CUSTOM CLOSE BUTTON --- */}
        <DialogPrimitive.Close className="absolute right-4 top-4 z-50 rounded-full bg-white p-3 opacity-100 transition-opacity hover:opacity-90 focus:outline-none disabled:pointer-events-none">
          <X className="h-6 w-6 text-black" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
        {/* --------------------------- */}
        <div className="relative w-full h-96">
          <Image src={Official_Kit_Background} alt="Official Kit" fill className="object-cover" />
        </div>
        <div className="px-8 pb-8 pt-6 text-center space-y-6 bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center font-black uppercase tracking-tight">
              Subscribe to our <br /> emails
            </DialogTitle>
            <DialogDescription className="text-sm font-medium text-zinc-700 pt-2">
              Get alerts on the latest collections and exclusive offers before everyone else.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <Input type="email" placeholder="Email" className="bg-[#F5F5F5] md:text-lg pl-5 h-12" />
            <Button className="w-full h-12 bg-[#FFEB00] hover:bg-[#E6D400] text-black font-black uppercase">
              Join Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
