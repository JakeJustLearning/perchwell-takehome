import {
  Center,
  Flex,
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
  Tbody,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import * as clientService from "../api/client.service";
import { ClientRow } from "./ClientRow.component";

export const ClientTable = () => {
  const [clients, setClients] = useState<
    { votes: any[]; id: number; name: string }[]
  >([]);

  const getClients = async () => {
    const fetchedClients = await clientService.getClients();
    setClients(fetchedClients);
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <Center>
      <Flex
        padding={"50px"}
        width={"100vw"}
        height={"100vh"}
        justifyContent={"center"}
      >
        <TableContainer>
          <Table
            border={"4px"}
            variant="striped"
            width={"80vw"}
            overflowY={"scroll"}
            size={"sm"}
            table-layout={"fixed"}
          >
            <Thead>
              <Tr backgroundColor={"navy"} height={"50px"}>
                <Th color={"white"} fontSize={"2xl"}>
                  Client
                </Th>
                <Th color={"white"} fontSize={"2xl"}>
                  Num Requests
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Center>
  );
};
