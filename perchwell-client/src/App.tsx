import { ChakraProvider } from "@chakra-ui/react";
import { ClientTable } from "./components/ClientTable.component";

function App() {
  return (
    <ChakraProvider>
      <ClientTable />
    </ChakraProvider>
  );
}

export default App;
