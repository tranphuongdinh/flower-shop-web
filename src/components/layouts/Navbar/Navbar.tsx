import CartIcon from "@/components/icons/CartIcon";
import HomeICon from "@/components/icons/HomeIcon";
import OrderIcon from "@/components/icons/OrderIcon";
import ShopIcon from "@/components/icons/ShopIcon";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0  bg-primary w-screen flex shadow-xl">
      <div className="flex flex-col justify-center items-center py-2 px-4 w-1/4 gap-2">
        <HomeICon className="text-white w-5 h-5" />
        <span className="text-2xs font-semibold text-white">Trang chủ</span>
      </div>
      <div className="flex flex-col justify-center items-center py-2  px-4 w-1/4 gap-2">
        <ShopIcon className="text-white w-5 h-5" />
        <span className="text-2xs font-semibold text-white">Sản phẩm</span>
      </div>
      <div className="flex flex-col justify-center items-center py-2  px-4 w-1/4 gap-2">
        <CartIcon className="!text-white w-5 h-5" />
        <span className="text-2xs font-semibold text-white">Giỏ hàng</span>
      </div>
      <div className="flex flex-col justify-center items-center py-2  px-4 w-1/4 gap-2">
        <OrderIcon className="text-white w-5 h-5" />
        <span className="text-2xs font-semibold text-white">Đơn hàng</span>
      </div>
    </nav>
  );
};
export default Navbar;
