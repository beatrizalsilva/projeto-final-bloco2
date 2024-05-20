# PharmaVida
Este é o resultado do meu projeto final do bloco 2 do bootcamp da Generation Brasil. Durante este período, fui desafiada a aplicar os conhecimentos adquiridos em um projeto prático (performance goal), recebemos [instruções](./documents/Performance%20Goal%2002.pdf) detalhadas e um tempo limite de 4 horas e 45 minutos para concluir a tarefa.

Assim, apresento o projeto <strong>PharmaVida</strong>, um sistema de farmácia personalizado para atender ás necessidades específicas de empresas atuantes no setor farmacêutico.

## Recursos
O PharmaVida possui dois recursos principais: Produto e Categoria.
- Permite o cadastro de produtos farmacêuticos, incluindo informações detalhadas como nome, descrição, preço e quantidade em estoque.
- Permite o cadastro de categorias relacionas aos produtos, como medicamentos e produtos de beleza.
- Possui operações CRUD completas, permitindo a criação, leitura, atualização e exclusão de produtos e categorias.
- Os produtos estão relacionados com as categorias, seguindo uma relação do tipo Um para Muitos.

## Tecnologias usadas
- TypeScript
- Nest JS
- Git
- MySQL
- Insomnia

## Como usar
1. Clone o repositório:
```cmd
git clone https://github.com/beatrizalsilva/projeto-final-bloco2.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute a aplicação com os seguintes comandos:
```bash
# modo desenvolvedor
npm run start:dev

# modo de produção
npm run start:prod
```

4. Para testar a aplicação, utilize os seguintes comandos:
```bash
# teste unitário
npm run test

#teste ent-to-end (e2e)
npm run test:e2e 
```

5. Para executar os testes do Insomnia:
- [Baixe e instale o Insomia](https://insomnia.rest/download).
- Importe o arquivo [PharmaVida Teste](./documents/PharmaVida%20Teste) para o Insomnia.
- Execute os teste da coleção "PharmaVida (Performance Goal)".

## Conclusão
Foi uma experiência gratificante e desafiadora ao mesmo tempo. Durante esse processo, pude aplicar não apenas conhecimentos técnicos, mas também a resiliência e gestão de tempo neste curto período.

Ao fazer este projeto, pude aprofundar meus conhecimentos em Nest JS e banco de dados. Isso me permitiu desenvolver uma aplicação de forma mais simples e eficiente, além de compreender melhor como armazenar e manipular dados de forma eficaz.

Reconheço que ainda há pontos a serem melhorados, e estou comprometida em continuar estudando e trazendo essas melhorias nos meus futuros projetos.