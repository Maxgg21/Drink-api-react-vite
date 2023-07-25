import { CategoriesProvider } from "./context/CategoriesProvider";
import MainLayout from "./loyaut";
import AppRoutes from "./routes";


function App() {
  return (
    <MainLayout>
      <CategoriesProvider>
        <AppRoutes/>
      </CategoriesProvider>
    </MainLayout>
  )
}

export default App;
