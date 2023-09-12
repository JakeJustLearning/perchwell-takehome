import {
  Center,
  Flex,
  Table,
  TableContainer,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Button,
  Tbody,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import * as clientService from "../api/client.service";

export const Home = () => {
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

  const handleIncrement = (id: number) => {
    console.log(id);
    clientService.incrementClientVote(id).then(() => {
      const newClients = clients.map((client) => {
        if (client.id == id) {
          client.votes.push(1);
        }
        return client;
      });
      setClients(newClients);
    });
  };

  const createTableRow = (client: {
    votes: {}[];
    id: number;
    name: string;
  }) => {
    const { votes, id, name } = client;
    return (
      <Tr key={id}>
        <Td fontSize={"2xl"}>{name}</Td>
        <Td>
          <HStack justifyContent={"space-between"}>
            <Text fontSize={"2xl"}>{votes.length}</Text>
            <Button
              backgroundColor={"navy"}
              color={"white"}
              onClick={() => handleIncrement(id)}
            >
              Increment
            </Button>
          </HStack>
        </Td>
      </Tr>
    );
  };

  const createRows = () => {
    return clients.map((client) => createTableRow(client));
  };

  return (
    <Center>
      <Flex
        padding={"50px"}
        width={"calc(100vw)"}
        height={"calc(100vh)"}
        justifyContent={"center"}
      >
        <TableContainer>
          <Table
            border={"4px"}
            variant="striped"
            width={"calc(180vh)"}
            overflowY={"scroll"}
            size={"sm"}
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
            <Tbody>{createRows()}</Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Center>
  );
};
