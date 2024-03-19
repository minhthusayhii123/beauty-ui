import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "~/config/firestore";

import Banner from "~/components/Layout/components/Banner";
import Slide from "~/components/Layout/components/Slide";
import Products from "~/components/Layout/components/ProductsSelling";
import SectionProduct from "~/components/Layout/components/SectionProduct";
import NewsAndPromotions from "~/components/Layout/components/NewsAndPromotions";

import spBanner from "~/assets/images/sp-banner.webp";
import dior_banner from "~/assets/images/dior-banner.webp";
import banner_br from "~/assets/images/romand.jpg";

import sp3ce from "~/assets/images/3ce.webp";
import sp3ce_2 from "~/assets/images/sp-3ce.webp";
import sp3ce_3 from "~/assets/images/sp3ce-2.webp";
import sp3ce_4 from "~/assets/images/son-3ce.webp";
import sp3ce_5 from "~/assets/images/sp3ce-5.webp";

import spDior from "~/assets/images/dior-1.webp";
import spDior_2 from "~/assets/images/dior-2.webp";
import spDior_3 from "~/assets/images/dior-4.webp";
import spDior_4 from "~/assets/images/dior-3.webp";
import spDior_5 from "~/assets/images/dior-5.webp";

import spRomand from "~/assets/images/romand-1.webp";
import spRomand_1 from "~/assets/images/romand-2.webp";
import spRomand_2 from "~/assets/images/romand-4.webp";
import spRomand_3 from "~/assets/images/romand-5.webp";
import spRomand_4 from "~/assets/images/romand-7.webp";

const products = [
  {
    name: "[PURE PAIRING] 3CE SOFT MATTE LIPSTICK",
    urlImage: sp3ce,
    priceCurrent: "390.000",
  },
  {
    name: "3CE MOOD RECIPE FACE BLUSH",
    urlImage: sp3ce_2,
    priceCurrent: "360.000",
  },
  {
    name: "3CE NEW TAKE EYESHADOW PALETTE",
    urlImage: sp3ce_3,
    priceCurrent: "990.000",
    priceOld: "1.119.000",
  },
  {
    name: "3CE SOFT MATTE LIPSTICK #SOFT MELLOW",
    urlImage: sp3ce_4,
    priceCurrent: "325.000",
  },
  {
    name: "3CE MULTI EYE COLOR PALETTE",
    urlImage: sp3ce_5,
    priceCurrent: "680.000",
  },
];

const productDior = [
  {
    name: "Son Dior Rouge Dior Mitzah Limited Edition",
    urlImage: spDior,
    priceCurrent: "1.650.000",
  },
  {
    name: "Bảng Phấn Mắt Dior 5 Couleurs Couture Eyeshadow Palette",
    urlImage: spDior_2,
    priceCurrent: "1.490.000",
  },
  {
    name: "DIOR ADDICT LIP GLOW Christian Dior Addict Lip Glow",
    urlImage: spDior_3,
    priceCurrent: "850.000",
  },
  {
    name: "Phấn nén Dior Snow Pefect Light Compact SPF 10 PA++",
    urlImage: spDior_4,
    priceCurrent: "1.530.000",
  },
  {
    name: "DIORSHOW ICONIC OVERCURL Mascara Dior Iconic Overcurl",
    urlImage: spDior_5,
    priceCurrent: "799.000",
  },
];

const productRomand = [
  {
    name: "SEE-THROUGH VEILIGHTER Romand See-Through Veillighter",
    urlImage: spRomand,
    priceCurrent: "199.000",
  },
  {
    name: "BETTER THAN EYES W03 DRY STRAWBERRY",
    urlImage: spRomand_1,
    priceCurrent: "386.000",
  },
  {
    name: "DEWY·FUL WATER TINT Milk Romand Milk Grocery Dewyful",
    urlImage: spRomand_2,
    priceCurrent: "190.000",
  },
  {
    name: "BETTER THAN FINISH Phấn Phủ Dạng Nén",
    urlImage: spRomand_3,
    priceCurrent: "299.000",
  },
  {
    name: "rom&nd Lip Mate Pencil Be Oveeer Shade",
    urlImage: spRomand_4,
    priceCurrent: "190.000",
  },
];
const sections = [
  {
    products: products,
    backgroundColor: "#fff3f3",
    poster: spBanner,
    title: "Sản phẩm 3CE",
    linkto: "/3ce",
  },
  {
    products: productDior,
    backgroundColor: "#fff3f3",
    poster: dior_banner,
    title: "Sản phẩm Dior",
    linkto: "/dior",
  },
  {
    products: productRomand,
    backgroundColor: "#fff3f3",
    poster: banner_br,
    title: "Sản phẩm Rom&nd",
    linkto: "/romand",
  },
];

function Home() {
  return (
    <div>
      <Banner />
      <Slide />
      <Products />
      {sections &&
        sections.length > 1 &&
        sections.map((section, index) => (
          <SectionProduct
            key={index}
            backgroundColor={section.backgroundColor}
            products={section.products}
            poster={section.poster}
            title={section.title}
            linkto={section.linkto}
          />
        ))}
      <NewsAndPromotions />
    </div>
  );
}

export default Home;
