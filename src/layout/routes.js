import { BrowserRouter } from "react-router-dom";
import { Header } from "./header";

export const LayoutRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />    
      </BrowserRouter>
    </div>
  );
};
