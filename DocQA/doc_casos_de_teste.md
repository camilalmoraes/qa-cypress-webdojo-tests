📄 Módulo: Login
🎯 Objetivo

Validar autenticação do usuário, comportamento do sistema e tratamento de erros.

🧪 Casos de Teste

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