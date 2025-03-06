interface MedNavigation {
  title: string;
  description: string;
  img: string;
  routeTo: string;
}

export const medNavigationData: MedNavigation[] = [
  {
    title: "Бүгд",
    description: "Бүх эмийн жагсаалтыг үзэх",
    img: "https://picsum.photos/id/60/200/300",
    routeTo: "/products",
  },
  {
    title: "Тан",
    description: "Нунтаг тангийн жагсаалтыг үзэх",
    img: "https://picsum.photos/id/61/200/300",
    routeTo: "/products?type=tan",
  },
  {
    title: "Үрэл",
    description: "Үрлэн тангийн жагсаалтыг үзэх",
    img: "https://picsum.photos/id/63/200/300",
    routeTo: "/products?type=urel",
  },
];
