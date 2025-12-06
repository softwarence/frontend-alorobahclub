import Image from "next/image";
import signUpSectionImage from "@/public/assets/Sign_up_section.svg";

function SignUpSection() {
  return (
    <div>
      <Image src={signUpSectionImage} alt="Sign Up Section icon" width="full" height={800} />
    </div>
  );
}

export default SignUpSection;
