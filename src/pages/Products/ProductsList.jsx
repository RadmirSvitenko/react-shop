import Header from "../../components/Header/Header";
import AdBox from "../../components/AdBox/AdBox";
import BrandInfo from "../../components/BrandInfo/BrandInfo";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import VariantStyle from "../../components/VariantStyle/VariantStyle";
import TopSelling from "../../components/TopSelling/TopSelling";
import Comments from "../../components/Comments/Comments";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

const ProductsList = () => {
  return (
    <div>
      <Header />
      <AdBox />
      <BrandInfo />
      <NewArrivals />
      <TopSelling />
      <VariantStyle />
      <Comments />
      <Banner />
      <Footer />
    </div>
  );
};

export default ProductsList;
