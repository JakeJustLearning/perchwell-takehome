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
      throw new NotFoundException('Unable to find vote count for client');
    }
    return client.votes.length;
  }

  @Post(':clientId')
  async addVoteByClientId(@Param() params: any) {
    const client = await this.clientService.findOneByClientId(params.clientId);
    if (!client) {
      throw new NotFoundException(`Unable to create vote for clientId`);
    }

    const vote = await this.clientService.addVoteToClient(client);

    if (!vote) {
      throw new InternalServerErrorException(
        `Unable to create vote for clientId`,
      );
    }

    return client.votes.length + 1;
  }
}
