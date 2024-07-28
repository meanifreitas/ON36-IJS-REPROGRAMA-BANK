# ON36-IJS-REPROGRAMA-BANK
💡 Bancos comunitários são serviços financeiros solidários que visam gerar trabalho e renda, promovendo o desenvolvimento de economias locais, especialmente em territórios de baixa renda, por meio do apoio à economia popular e solidária.

Sabendo disso, a comunidade da {Reprograma} decidiu criar um banco comunitário pensando nos conceitos de economia popular solidária. Foram pensados alguns serviços baseados no documento feito pela Rede Brasileira de Bancos Comunitários.

## Serviços financeiros oferecidos pelo banco comunitário:
- Crédito para financiamento de empreendimentos solidários.
- Crédito para consumo pessoal e familiar, sem juros.
- Cartão de crédito popular solidário.
- Abertura e extrato de conta corrente.
- Depósito em conta corrente.
- Saque avulso ou com cartão magnético.
- Pagamento de contas (água, luz, telefone etc.).
- Recebimento de aposentadorias e outros valores governamentais
- Gerentes da conta
- Prestação de contas diário e semanal para toda a comunidade
- **Desafio extra:** Moeda social circulante local.
  A moeda social circulante local é uma forma complementar de dinheiro criada pelos bancos comunitários para incentivar a circulação de recursos dentro da própria comunidade. Seu objetivo é fortalecer a economia local, aumentando a atividade comercial e gerando trabalho e renda na comunidade. Essas moedas sociais têm características distintas que as diferenciam do dinheiro convencional:
  - Para cada unidade monetária social emitida existe, no banco comunitário, um valor correspondente em reais.
  - As moedas são produzidas com componentes de segurança para evitar falsificação.
  - Quem compra com a moeda social recebe descontos concedidos pelos comerciantes e produtores para incentivo ao uso da moeda no município ou bairro.
  - Qualquer produtor ou comerciante cadastrado no banco comunitário poderá trocar moeda social por reais no banco.


## Semana 01: Modelagem
**Data:** 06/07 a 12/07

**Feature:** diagrama de classes representando as entidades e suas relações.

## Semana 02: POO
**Data:** 13/07 a 19/07

**Feature:** classes e interfaces apropriadas para representar clientes, suas contas bancárias e métodos para interagir com esses dados, como criar uma nova conta para um cliente, depositar, sacar, transferir dinheiro entre contas, etc.

Cada cliente do banco deve ter as seguintes informações:
- Nome completo
- Número de identificação (ID)
- Endereço
- Número de telefone

Requisitos de negócio:
- Cada cliente pode ter uma ou mais contas bancárias. As contas podem ser do tipo Conta Corrente ou Conta Poupança.
- Para a conta corrente, é necessário armazenar o limite do cheque especial.
- Para a conta poupança, é necessário armazenar a taxa de juros.
- As Contas podem fazer tranferência e saque.