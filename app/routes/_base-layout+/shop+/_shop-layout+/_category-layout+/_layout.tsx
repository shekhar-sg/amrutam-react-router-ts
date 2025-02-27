import { Outlet } from "react-router";
import "swiper/css";

const Index = () => {
  return (
    <>
      <h1>Shop</h1>
      <Outlet />
    </>
  );
};

export default Index;
