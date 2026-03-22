📄 Módulo: Login
🎯 Objetivo

Validar autenticação do usuário, comportamento do sistema e tratamento de erros.


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

________________________________________________________________________

FUNCIONALIDADE - FORMULÁRIO:

CT-FORM-001

Título: Envio com campos obrigatórios válidos
Severidade: Crítica
Tipo de Teste: Funcional
Behavior: Positivo

Pré-condição: Usuário na tela de formulário

Given: usuário autenticado acessa a tela de formulário de consultoria
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

Given: usuário autenticado acessa a tela de formulário de consultoria
When: preenche todos os campos obrigatórios corretamente
And: aceita os termos de uso
And: clica em "Enviar formulário"
Then: o formulário deve ser enviado com sucesso

CT-FORM-003

Título: Envio sem preencher campos obrigatórios
Severidade: Alta
Tipo de Teste: Validação
Behavior: Negativo

Given: usuário autenticado acessa a tela de formulário de consultoria
When: tenta enviar sem preencher Nome e Email
Then: deve exibir mensagens de obrigatoriedade

CT-FORM-004

Título: Email em formato inválido
Severidade: Alta
Tipo de Teste: Validação
Behavior: Negativo

Given: usuário autenticado acessa a tela de formulário de consultoria
When: insere email inválido
And: tenta enviar o formulário
Then: deve exibir mensagem "Digite nome e sobrenome"
And: deve exibir mensagem "Informe um email válido"

CT-FORM-005

Título: Envio sem aceitar termos de uso
Severidade: Crítica
Tipo de Teste: Regra de Negócio
Behavior: Negativo

Given: usuário preenche os campos obrigatórios corretamente
When: não aceita os termos de uso
And: tenta enviar o formulário
Then: o envio deve ser bloqueado

________________________________________________________________________

FUNCIONALIDADE: VIDEO

CT-VIDEO-001
Título: Reprodução do vídeo ao clicar no player
Severidade: Alta
Tipo de Teste: Funcional
Pré-condições: Usuário autenticado e na tela "Vídeo"
Behavior: Positivo

Given: o usuário está na tela de vídeo
When: visualiza o player de vídeo
And: clica no botão de play
Then: o vídeo deve iniciar a reprodução
And: o tempo do vídeo deve começar a avançar