import { Button } from "@mui/material";
import { products } from "./components/productsMock";
import { database } from "./firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Dashboard = () => {
  const rellenar = () => {
    products.forEach((prod) => {
      let refCollecion = collection(database, "products");
      addDoc(refCollecion, prod);
    });
  };

  return (
    <div>
      <Button onClick={rellenar}>RELLENAR</Button>
    </div>
  );
};

export default Dashboard;
