import ProductCard from "../../common/productCard/ProductCard";
import "./itemList.css";
const ItemList = ({ items }) => {
  return (
    <div>
      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          paddingTop: "50px",
          gap: "20px",
        }}
      >
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};

export default ItemList;
