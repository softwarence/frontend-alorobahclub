import Image from "next/image";

import p1 from "@/public/assets/payment/payment-icon1.svg";
import p2 from "@/public/assets/payment/payment-icon2.svg";
import p3 from "@/public/assets/payment/payment-icon3.svg";
import p4 from "@/public/assets/payment/payment-icon4.svg";

export const paymentData = [p1, p2, p3, p4, p1, p2];

const PaymentCard = () => {
  return (
    <div className="flex items-center gap-2 flex-wrap justify-center">
      {paymentData.map((icon, idx) => (
        <Image
          key={idx}
          src={icon}
          alt={`payment-icon-${idx}`}
          className="w-12 h-12 object-contain hover:scale-105"
        />
      ))}
    </div>
  );
};

export default PaymentCard;
