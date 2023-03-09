import { useParams } from "react-router-dom";
const Product = () => {
  const { productid, country } = useParams();
  return (
    <h1>
      Product {productid} - {country}
    </h1>
  );
};

export default Product;
