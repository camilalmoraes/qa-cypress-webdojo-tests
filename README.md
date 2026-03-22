# QA Automation E2E | Cypress - WebDojo

Projeto de automação de testes end-to-end (E2E) desenvolvido com Cypress, com foco em qualidade de software, arquitetura escalável e boas práticas utilizadas em ambientes reais de desenvolvimento.

---

### Objetivo

Validar fluxos críticos da aplicação WebDojo garantindo:

* Funcionamento correto das funcionalidades principais
* Cobertura de cenários positivos e negativos
* Validação de regras de negócio
* Estabilidade e confiabilidade da aplicação

---

### Estratégia de Testes

A abordagem de QA adotada foi baseada em:

* Análise de requisitos e comportamento esperado do usuário
* Priorização de cenários críticos para automação
* Separação entre fluxos positivos e negativos
* Testes independentes e reexecutáveis
* Validação funcional e de mensagens de erro

---

### Arquitetura do Projeto

O projeto foi estruturado com foco em **manutenção, reutilização e escalabilidade**.

#### Page Object Pattern

Separação entre:

* **Testes (specs):** fluxo e validações
* **Page Objects:** interação com elementos da interface

```js
formPage.preencherCamposObrigatorios(dados)
formPage.enviarFormulario()
```

---

#### Commands

Centralização de ações reutilizáveis:

* Login do usuário
* Setup inicial dos testes

```js
cy.login()
```

---

#### Fixtures

Dados desacoplados dos testes:

```json
{
  "valido": {
    "email": "papito@webdojo.com",
    "senha": "katana123"
  }
}
```

---

### Estrutura do Projeto

```bash
cypress/
│
├── e2e/
│   ├── login/
│   ├── forms/
│   ├── video/
│
├── pages/
│   ├── LoginPage.js
│   ├── FormPage.js
│   ├── VideoPage.js
│
├── fixtures/
│   ├── login.json
│   ├── form.json
│
├── support/
│   ├── commands.js
│   ├── e2e.js
│
├── reports/
├── screenshots/
├── videos/
```

---

### Cenários Automatizados

#### Login

* CT-LOGIN-001 - Login com sucesso
* CT-LOGIN-002 - Login com senha inválida
* CT-LOGIN-003 - Campos obrigatórios vazios
* CT-LOGIN-004 - Email inválido

---

#### Formulário

* CT-FORM-001 - Envio com dados válidos
* CT-FORM-002 - Envio com campos obrigatórios
* CT-FORM-003 - Validação de obrigatoriedade
* CT-FORM-004 - Email inválido
* CT-FORM-005 - Termos obrigatórios

---

#### Vídeo

* CT-VIDEO-001 - Reprodução do vídeo

---

### Relatórios de Teste

O projeto possui geração automática de relatórios utilizando **Mochawesome**.

Informações disponíveis:

* Status dos testes (pass/fail)
* Tempo de execução
* Detalhes de falhas
* Stack trace
* Evidências

Localização:

```bash
cypress/reports/report.html
![Relatório Mochawesome](docs/images/report.png)
```

---

### Evidências

Durante a execução dos testes são geradas automaticamente:

* Screenshots em caso de falha
* Logs detalhados da execução
![Execução dos testes](docs/gif/test-run.gif)
---

### Tecnologias Utilizadas

* Cypress
* JavaScript (ES6+)
* Node.js

---

### Como executar o projeto

#### Pré-requisitos

Para execução correta dos testes automatizados, é necessário que a aplicação WebDojo esteja rodando localmente.

---

#### Backend + Frontend (Aplicação WebDojo)

Este projeto de automação depende da aplicação completa (frontend + backend).

Repositório da aplicação:

https://github.com/camilalmoraes/webdojo.git

---

#### Passos para subir a aplicação

1. Clone o repositório da aplicação:

```bash
git clone https://github.com/camilalmoraes/webdojo.git
```

---

2. Acesse a pasta do projeto:

```bash
cd webdojo/web
```

---

3. Instale as dependências:

```bash
npm install
```

---

4. Suba a aplicação:

```bash
npm run dev
```

---

A aplicação estará disponível em:

```text
http://localhost:3000
```

---

#### ▶️ Execução dos Testes

Após a aplicação estar em execução, siga os passos abaixo:

1. Clone o repositório de automação:

```bash
git clone https://github.com/camilalmoraes/qa-cypress-webdojo-tests.git
```

---

2. Acesse a pasta do projeto de testes:

```bash
cd qa-cypress-webdojo-tests
```

---

3. Instale as dependências:

```bash
npm install
```

---

4. Execute os testes:

Modo interativo:

```bash
npx cypress open
```

Modo headless com relatório:

```bash
npm run test:report
```

---

### Boas Práticas Aplicadas

* Page Object Pattern
* Separação de responsabilidades
* Reutilização de código
* Dados externos via fixtures
* Testes independentes
* Validações robustas
* Automação baseada em comportamento do usuário

---

### Diferenciais do Projeto

* Estrutura próxima de projetos reais de mercado
* Uso de relatório automatizado (Mochawesome)
* Tratamento de elementos complexos (ex: iframe)
* Validação de mensagens nativas do browser
* Organização por domínio de funcionalidade

---

### Próximos Passos

* Integração com CI/CD (GitHub Actions)
* Uso de dados dinâmicos (Faker)
* Implementação de testes de API
* Relatórios mais avançados (Allure)

---

### Sobre mim

Profissional de QA com foco em qualidade de software, atuando com visão analítica, investigativa e orientada à entrega de valor, garantindo estabilidade e aderência às regras de negócio.

---

### Conclusão

Este projeto demonstra na prática a aplicação de técnicas modernas de automação de testes, refletindo boas práticas de mercado e foco em qualidade, manutenção e escalabilidade.
