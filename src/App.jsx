import { CartProvider } from "./context/CartProvider";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";
import MainLayout from "./loyaut";
import AppRoutes from "./routes";

function App() {
  return (
    <CartProvider>
      <MainLayout>
        <DrinksProvider>
         <CategoriesProvider>
             <AppRoutes />
          </CategoriesProvider>
        </DrinksProvider>  
      </MainLayout>
    </CartProvider>
  );
}

export default App;
