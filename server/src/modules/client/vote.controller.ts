import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('votes')
export class VoteController {
  constructor(private readonly clientService: ClientService) {}

  @Get(':clientId')
  async countVotesByClientId(@Param() params: any) {
    const client = await this.clientService.findOneByClientId(params.clientId);
    if (!client) {
      console.error(`No client with id ${params.clientId} found.`);
      throw new NotFoundException('Unable to find vote count for client');
    }
    return client.votes.length;
  }

  @Post(':clientId')
  async addVoteByClientId(@Param() params: any) {
    const client = await this.clientService.findOneByClientId(params.clientId);
    if (!client) {
      console.error(
        `Unable to create vote for clientId ${params.clientId}. No client with id found.`,
      );
      throw new NotFoundException(`Unable to create vote for Client`);
    }

    const vote = await this.clientService.addVoteToClient(client);

    if (!vote) {
      console.error(`Unable to create vote for clientId ${params.clientId}`);
      throw new InternalServerErrorException(
        `Unable to create vote for Client`,
      );
    }

    return client.votes.length + 1;
  }
}
