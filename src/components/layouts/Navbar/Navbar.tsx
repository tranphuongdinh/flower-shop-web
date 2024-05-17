'use client';

import CartIcon from '@/components/icons/CartIcon';
import HomeICon from '@/components/icons/HomeIcon';
import OrderIcon from '@/components/icons/OrderIcon';
import ShopIcon from '@/components/icons/ShopIcon';
import { PATHS } from '@/constant/path';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const activeHome = () => setActiveMenu(PATHS.HOME);
  const activeProductList = () => setActiveMenu(PATHS.PRODUCT_LIST);
  const activeOrderList = () => setActiveMenu(PATHS.ORDER_LIST);
  const activeCart = () => setActiveMenu(PATHS.CART);

  return (
    <nav className="fixed bottom-0 left-0  bg-primary w-screen flex shadow-xl">
      <Link
        onClick={activeHome}
        href={PATHS.HOME}
        className={`flex flex-col justify-center items-center py-2 px-4 w-1/4 gap-2 ${activeMenu === PATHS.HOME && 'bg-secondary'}`}
      >
        <HomeICon className="text-white w-5 h-5" />
        <span className="text-2xs font-semibold text-white">Trang chủ</span>
      </Link>
      <Link
        onClick={activeProductList}
        href={PATHS.PRODUCT_LIST}
        className={`flex flex-col justify-center items-center py-2 px-4 w-1/4 gap-2 ${activeMenu === PATHS.PRODUCT_LIST && 'bg-secondary'}`}
      >
        <ShopIcon className="text-white w-5 h-5" />
        <span className="text-2xs font-semibold text-white">Sản phẩm</span>
      </Link>
      <Link
        onClick={activeCart}
        href={PATHS.CART}
        className={`flex flex-col justify-center items-center py-2 px-4 w-1/4 gap-2 ${activeMenu === PATHS.CART && 'bg-secondary'}`}
      >
        <CartIcon className="!text-white w-5 h-5" />
        <span className="text-2xs font-semibold text-white">Giỏ hàng</span>
      </Link>
      <Link
        onClick={activeOrderList}
        href={PATHS.ORDER_LIST}
        className={`flex flex-col justify-center items-center py-2 px-4 w-1/4 gap-2 ${activeMenu === PATHS.ORDER_LIST && 'bg-secondary'}`}
      >
        <OrderIcon className="text-white w-5 h-5" />
        <span className="text-2xs font-semibold text-white">Đơn hàng</span>
      </Link>
    </nav>
  );
};
export default Navbar;
