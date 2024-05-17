import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-[#FAFAFA] h-[100px]">
      <div className="flex justify-center items-center h-full w-full">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <h1 className="text-primary text-2xl font-bold leading-[40px] text-center">Pearly Minh Flower</h1>
      </div>
    </header>
  );
};
export default Header;
