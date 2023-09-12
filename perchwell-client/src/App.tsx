import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./components/home.component";

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
