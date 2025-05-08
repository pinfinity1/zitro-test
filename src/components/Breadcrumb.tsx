import Link from "next/link";
import ArrowLeft from "../../public/images/vuesax/linear/arrow-left.svg";
import Image from "next/image";

export default function Breadcrumb() {
  return (
    <div className="w-full max-w-[1600px] mx-auto md:min-h-[64px] py-4 flex items-center md:py-0 overflow-x-auto md:mt-0">
      <Link href={"/"} className="text-[10px] p-2 mb-0.5">
        زیترو
      </Link>
      <Image src={ArrowLeft} width={16} height={16} alt="arrow-left" />
      <Link href={"/"} className="text-[10px] p-2 mb-0.5">
        گوشی موبایل
      </Link>
      <Image src={ArrowLeft} width={16} height={16} alt="arrow-left" />
      <Link href={"/"} className="text-[10px] p-2 mb-0.5">
        موبایل
      </Link>
      <Image src={ArrowLeft} width={16} height={16} alt="arrow-left" />
      <Link href={"/"} className="text-[10px] p-2 mb-0.5">
        اپل
      </Link>
    </div>
  );
}
