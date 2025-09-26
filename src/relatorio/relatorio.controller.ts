import { Controller, Get, Query } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';

@Controller('relatorio')
export class RelatorioController {
  constructor(private readonly relatorioService: RelatorioService) {}

  @Get()
  async gerar(@Query('idUsuario') idUsuario: number) {
    return this.relatorioService.gerarRelatorio(idUsuario);
  }
}
