import Categories from "@/components/layouts/Categories/Categories";
import MainBanner from "@/components/layouts/MainBanner/MainBanner";
import Search from "@/components/layouts/Search/Search";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      <Search />
      <MainBanner />

      <Categories />
    </div>
  );
}
