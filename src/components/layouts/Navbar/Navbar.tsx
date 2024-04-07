import CartIcon from "@/components/icons/CartIcon";
import HomeICon from "@/components/icons/HomeIcon";
import OrderIcon from "@/components/icons/OrderIcon";
import ShopIcon from "@/components/icons/ShopIcon";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0  bg-primary w-screen flex">
      <div className="flex flex-col justify-center items-center p-4 w-1/4 gap-2">
        <HomeICon className="text-white" />
        <span className="text-xs text-white">Trang chủ</span>
      </div>
      <div className="flex flex-col justify-center items-center p-4 w-1/4 gap-2">
        <ShopIcon className="text-white" />
        <span className="text-xs text-white">Sản phẩm</span>
      </div>
      <div className="flex flex-col justify-center items-center p-4 w-1/4 gap-2">
        <CartIcon className="!text-white" />
        <span className="text-xs text-white">Giỏ hàng</span>
      </div>
      <div className="flex flex-col justify-center items-center p-4 w-1/4 gap-2">
        <OrderIcon className="text-white" />
        <span className="text-xs text-white">Đơn hàng</span>
      </div>
    </nav>
  );
};
export default Navbar;
