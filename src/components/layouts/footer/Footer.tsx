import LocationIcon from "@/components/icons/LocationIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";

const Footer = () => {
  return (
    <footer className="mb-12 bg-primary-light flex items-start flex-col py-8 gap-1 px-4">
      <p className="text-primary text-lg italic font-bold">Pearly Minh Shop</p>
      <div className="flex gap-2 items-center">
        <LocationIcon className="text-primary" />
        <span className="text-primary text-xs ">457 Kho Dầu, Phường 5, Trà Vinh</span>
      </div>
      <a  href="tel:+84979987976">
      <div className="flex gap-2 items-center">
        <PhoneIcon className="text-primary" />
        <span className="text-primary text-sm font-bold font-sans">0979 987 976</span>
      </div>
      </a>
    </footer>
  );
};
export default Footer;
