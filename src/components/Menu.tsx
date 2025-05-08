import Image from "next/image";
import bookIcon from "../../public/images/header/book.svg";
import labelIcon from "../../public/images/header/receipt-edit.svg";
import layerIcon from "../../public/images/header/layer.svg";
import shopIcon from "../../public/images/header/shop.svg";
import tagIcon from "../../public/images/header/tag.svg";

export default function Menu() {
  return (
    <menu className="hidden max-w-[1600px] mx-auto md:flex p-4 overflow-auto">
      <ul className="flex gap-6">
        <ListItem imgSrc={layerIcon} title="دسته بندی کالا" />

        <div className="border-[#CED4DA] border-[1px] w-[1px]"></div>
        <ListItem
          imgSrc={tagIcon}
          title="زیترو آف"
          bgColor="#FF878733"
          textColor="#FF6B6B"
        />
        <ListItem imgSrc={bookIcon} title="مجله آنلاین زیترو" />
        <ListItem imgSrc={labelIcon} title="درخواست تسهیلات" />
        <ListItem imgSrc={shopIcon} title="درخواست نمایندگی" />
      </ul>
    </menu>
  );
}

const ListItem = ({
  ...props
}: {
  imgSrc: string;
  title: string;
  bgColor?: string;
  textColor?: string;
}) => {
  const { imgSrc, title, bgColor, textColor } = props;

  return (
    <li
      className={`flex cursor-pointer gap-2 justify-start items-center ${
        bgColor ? `bg-[${bgColor}]` : "bg-white"
      } p-2 rounded-lg text-[${textColor ? textColor : "inherit"}]`}
    >
      <Image src={imgSrc} width={16} height={16} alt={title} />
      <span className="text-xs text-nowrap">{title}</span>
    </li>
  );
};
