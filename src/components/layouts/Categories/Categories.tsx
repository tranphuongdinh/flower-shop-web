import Image from 'next/image';

const CATE = [
  {
    name: 'Tinh yeu',
    image: 'https://hoatuoi24h.com.vn/wp-content/uploads/2019/05/bo-hoa-hong-goi-giay-den.png',
  },
  {
    name: 'Tot nghiep',
    image: 'https://domyflower.vn/wp-content/uploads/2023/10/Thiet-ke-chua-co-ten-16-2.png',
  },
  {
    name: 'Lang hoa',
    image: 'https://hoatuoihuythao.com/upload/sanpham/langhoakhaitruongdepgiare015.jpg',
  },
  {
    name: 'Tinh yeu',
    image: 'https://hoatuoi24h.com.vn/wp-content/uploads/2019/05/bo-hoa-hong-goi-giay-den.png',
  },
  {
    name: 'Tot nghiep',
    image: 'https://domyflower.vn/wp-content/uploads/2023/10/Thiet-ke-chua-co-ten-16-2.png',
  },
  {
    name: 'Lang hoa',
    image: 'https://hoatuoihuythao.com/upload/sanpham/langhoakhaitruongdepgiare015.jpg',
  },
];

const Categories = () => {
  return (
    <section className=" px-4 my-5">
      <h2 className="text-base text-primary font-bold">Danh mục</h2>
      <div className="flex overflow-y-scroll py-4 gap-3">
        {CATE.map((cate, index) => (
          <div key={`${cate.name}${index}`} className="flex flex-col gap-2 items-center  min-w-fit">
            <Image
              src={cate.image}
              alt={cate.name}
              width={80}
              height={80}
              className="rounded-full aspect-square object-cover w-20 h-20 overflow-hidden bg-[#D9D9D9]"
            />
            <span className="text-black text-xs font-semibold">{cate.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
