📄 Módulo: Login
🎯 Objetivo

Validar autenticação do usuário, comportamento do sistema e tratamento de erros.

🧪 Casos de Teste

FUNCIONALIDADE - LOGIN: 
CT-LOGIN-001

Título: Login com sucesso
Severidade: Crítica
Tipo de Teste: Funcional
Behavior: Positivo

Pré-condição: Usuário válido cadastrado

Given: usuário está na tela de login
When: insere email e senha válidos
And: clica no botão "Entrar"
Then: deve ser redirecionado para a área logada

CT-LOGIN-002

Título: Login com senha inválida
Severidade: Alta
Tipo de Teste: Funcional
Behavior: Negativo

Pré-condição: Usuário válido cadastrado

Given: usuário está na tela de login
When: insere email válido e senha incorreta
And: clica em "Entrar"
Then: deve exibir mensagem de erro

CT-LOGIN-003

Título: Login com campos vazios
Severidade: Média
Tipo de Teste: Validação
Behavior: Negativo

Given: usuário está na tela de login
When: clica em "Entrar" sem preencher os campos
Then: deve exibir validação de campos obrigatórios

CT-LOGIN-004

Título: Email com formato inválido
Severidade: Média
Tipo de Teste: Validação
Behavior: Negativo

Given: usuário está na tela de login
When: insere email em formato inválido
And: insere senha válida
And: clica em "Entrar"
Then: deve exibir mensagem de email inválido

________________________________________________________

FUNCIONALIDADE - FORMULÁRIO:

CT-FORM-001

Título: Envio do formulário com todos os campos validos e preenchidos
Severidade: Crítica
Tipo de Teste: Funcional
Behavior: Positivo

Pré-condição: Usuário na tela de formulário

Given: usuário acessa o formulário
When: preenche todos os campos corretamente
And: aceita os termos de uso
And: clica em "Enviar formulário"
Then: o formulário deve ser enviado com sucesso

CT-FORM-002

Título: Envio do formulário com apenas dados obrigatórios válidos
Severidade: Crítica
Tipo de Teste: Funcional
Behavior: Positivo

Pré-condição: Usuário na tela de formulário

Given: usuário acessa o formulário
When: preenche todos os campos obrigatórios corretamente
And: aceita os termos de uso
And: clica em "Enviar formulário"
Then: o formulário deve ser enviado com sucesso

CT-FORM-003

Título: Envio sem preencher campos obrigatórios
Severidade: Alta
Tipo de Teste: Validação
Behavior: Negativo

Given: usuário acessa o formulário
When: tenta enviar sem preencher Nome e Email
Then: deve exibir mensagens de obrigatoriedade

CT-FORM-004

Título: Email em formato inválido
Severidade: Alta
Tipo de Teste: Validação
Behavior: Negativo

Given: usuário acessa o formulário
When: insere email inválido
And: tenta enviar o formulário
Then: deve exibir mensagem de email inválido

CT-FORM-005

Título: Telefone em formato inválido
Severidade: Média
Tipo de Teste: Validação
Behavior: Negativo

Given: usuário acessa o formulário
When: insere telefone fora do padrão
Then: deve impedir envio ou exibir erro

CT-FORM-006

Título: Seleção de tipo de pessoa física
Severidade: Média
Tipo de Teste: Funcional
Behavior: Positivo

Given: usuário acessa o formulário
When: seleciona "Pessoa Física"
Then: campo CPF deve estar disponível

CT-FORM-007

Título: Seleção de tipo de pessoa jurídica
Severidade: Média
Tipo de Teste: Funcional
Behavior: Positivo

Given: usuário acessa o formulário
When: seleciona "Pessoa Física"
Then: campo CPF deve estar disponível

CT-FORM-008

Título: Upload de arquivo válido
Severidade: Média
Tipo de Teste: Funcional
Behavior: Positivo

Given: usuário acessa o formulário
When: anexa arquivo válido (PNG/JPG/PDF até 5MB)
Then: o arquivo deve ser aceito

CT-FORM-009

Título: Upload de arquivo acima do limite
Severidade: Alta
Tipo de Teste: Validação
Behavior: Negativo

Given: usuário acessa o formulário
When: anexa arquivo maior que 5MB
Then: deve exibir erro

CT-FORM-010

Título: Seleção múltipla em "Como nos conheceu"
Severidade: Baixa
Tipo de Teste: Funcional
Behavior: Positivo

Given: usuário acessa o formulário
When: seleciona múltiplas opções
Then: todas devem ser registradas

CT-FORM-011

Título: Campo "Mais detalhes" opcional
Severidade: Baixa
Tipo de Teste: Negócio
Behavior: Positivo

Given: usuário acessa o formulário
When: deixa o campo em branco
Then: o formulário deve ser enviado normalmente

CT-FORM-012

Título: Não aceitar termos de uso
Severidade: Crítica
Tipo de Teste: Regra de Negócio
Behavior: Negativo

Given: usuário preenche o formulário corretamente
When: não aceita os termos
And: tenta enviar
Then: o envio deve ser bloqueado

CT-FORM-013

Título: Campo tecnologias com múltiplas entradas
Severidade: Média
Tipo de Teste: Funcional
Behavior: Positivo

Given: usuário acessa o formulário
When: adiciona múltiplas tecnologias
Then: todas devem ser registradas corretamente