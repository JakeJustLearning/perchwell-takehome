import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findAll() {
    try {
      return await this.clientService.findAll();
    } catch (error) {
      console.error('internal error while fetching findall');
      throw new InternalServerErrorException(
        'Something went wrong please try again.',
      );
    }
  }
}
