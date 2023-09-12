import { Tr, Td, HStack, Button, Text } from "@chakra-ui/react";
import * as clientService from "../api/client.service";
import { useState } from "react";

export const ClientRow = ({
  client,
}: {
  client: {
    votes: {}[];
    id: number;
    name: string;
  };
}) => {
  const [votesCount, setVotesCount] = useState(client.votes.length);

  const handleIncrement = (id: number) => {
    clientService.incrementClientVote(id).then((res) => {
      if (res != votesCount + 1) {
        console.error(
          `Votes count not in sync for Client: ${id}. Expected votes count: ${
            votesCount + 1
          }. Actual Votes Count ${res}`
        );
      }
      setVotesCount(res);
    });
  };

  const { id, name } = client;

  return (
    <Tr>
      <Td
        fontSize={"2xl"}
        text-overflow={"elipsis"}
        whiteSpace={"nowrap"}
        overflow={"hidden"}
      >
        {name}
      </Td>
      <Td>
        <HStack justifyContent={"space-between"}>
          <Text fontSize={"2xl"}>{votesCount}</Text>
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
