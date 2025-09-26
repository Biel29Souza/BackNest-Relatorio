import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { buscarUsuarios } from './apis/usuarios.api';
import { buscarLivros } from './apis/livros.api';
import { buscarEstoque } from './apis/estoque.api';
import { buscarAtrasos } from './apis/atrasos.api';
import { buscarMultas } from './apis/multas.api';

@Injectable()
export class RelatorioService {
  constructor(private prisma: PrismaService) {}

  async gerarRelatorio(idUsuario: number) {
    const [usuarios, livros, estoque, atrasos, multas] = await Promise.all([
      buscarUsuarios(),
      buscarLivros(),
      buscarEstoque(),
      buscarAtrasos(),
      buscarMultas(),
    ]);

    const relatorio = {
      totalUsuarios: usuarios.length,
      totalLivros: livros.length,
      totalEstoque: estoque.reduce((acc, item) => acc + item.quantidade, 0),
      totalAtrasos: atrasos.length,
      totalMultas: multas.reduce((acc, m) => acc + m.valor, 0),
    };

    await this.prisma.historico.create({
      data: {
        idUsuario,
        nomeRelatorio: 'Relatório Geral',
        tipoRelatorio: 'consulta',
        dataGerado: new Date(),
      },
    });

    return relatorio;
  }
}
