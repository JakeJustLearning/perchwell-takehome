import {
  Controller,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('votes')
export class VoteController {
  constructor(private readonly clientService: ClientService) {}

  @Get('([0-9]+)')
  async countVotesByClientId(clientId: number) {
    const client = await this.clientService.findOneByClientId(clientId);
    if (!client) {
      throw new NotFoundException('Unable to find vote count for client');
    }
    return client.votes.length;
  }

  @Post('([0-9]+)')
  async addVoteByClientId(clientId: number) {
    const client = await this.clientService.findOneByClientId(clientId);
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
