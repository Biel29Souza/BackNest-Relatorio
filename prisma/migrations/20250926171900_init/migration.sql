-- CreateTable
CREATE TABLE "Historico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idUsuario" INTEGER NOT NULL,
    "nomeRelatorio" TEXT NOT NULL,
    "dataGerado" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipoRelatorio" TEXT NOT NULL
);
