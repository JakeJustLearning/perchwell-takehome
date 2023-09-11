import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { Vote } from './entities/vote.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
    @InjectRepository(Vote)
    private voteRepository: Repository<Vote>,
  ) {}

  async findAll() {
    return await this.clientRepository.find();
  }

  async findOneByClientId(clientId: number) {
    return await this.clientRepository.findOneBy({ id: clientId });
  }

  async addVoteToClient(client: Client) {
    const vote = this.voteRepository.create({ client });
    return await this.voteRepository.save(vote);
  }
}
