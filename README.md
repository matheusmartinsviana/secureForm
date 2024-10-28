# SecureForm

SecureForm é um aplicativo web que implementa proteção CSRF usando TypeScript e React. Este projeto apresenta um processo seguro de envio de formulários, garantindo que apenas solicitações autorizadas possam ser processadas pelo servidor.

## Características

- **Proteção CSRF**: Utiliza middleware `csurf` para proteção contra ataques CSRF.
- **Tokens baseados em cookies**: gera tokens CSRF que são enviados por meio de cookies para verificação segura.

## Tecnologias usadas

- **Frontend**: React, TypeScript, Axios
- **Backend**: Node.js, Express, csurf, dotenv
- **Outros**: Cookie parser, CORS

## Começando

### Pré-requisitos

Certifique-se de ter o seguinte instalado:

- Node.js (versão 14 ou superior)
- npm

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seunomedeusuario/secureform.git
   cd secureForm
   ```

2. Instale as dependências para frontend e backend:

   ```bash
   cd backend
   npm i
   cd ../frontend
   npm i
   ```
