import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { TodosStateContextProvider } from "./context/todosContext/todosStateContext";
import { UserStateContextProvider } from "./context/userContext/userStateContext";
import { TodoStateContextProvider } from "./context/todoContext/todoStateContext";
import RoutesComponent from "./Routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStateContextProvider>
          <TodosStateContextProvider>
            <TodoStateContextProvider>
              <ErrorBoundary>
                <RoutesComponent />
              </ErrorBoundary>
            </TodoStateContextProvider>
          </TodosStateContextProvider>
        </UserStateContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
