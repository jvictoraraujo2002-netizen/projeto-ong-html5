# Entrega Unidade 1 — Fundamentos HTML5

Conteúdo incluído:
- index.html (página inicial institucional)
- projetos.html (lista e detalhes de projetos, voluntariado e doação)
- cadastro.html (formulário complexo com validação e máscaras)
- assets/css/style.css
- assets/js/masks.js
- assets/images (logo.svg, project.svg)

## Como validar (W3C)
1. Abra cada HTML no navegador e copie o URL (ex.: file:///.../index.html) ou publique no GitHub Pages.
2. Vá para https://validator.w3.org/ e cole a URL ou faça upload do arquivo.
3. Corrija as mensagens (se houver) — os arquivos foram feitos para seguir padrões semânticos; ainda assim valide antes de entregar.

## Como entregar no GitHub (público)
```bash
# dentro da pasta do projeto
git init
git add .
git commit -m "Entrega unidade 1 - HTML5 semântico"
# crie um repo público no GitHub (via UI) e adicione remoto:
git remote add origin git@github.com:SEU_USUARIO/nome-repo.git
git branch -M main
git push -u origin main
```
Certifique-se que o repositório está **PÚBLICO** nas configurações do GitHub antes de enviar o link à avaliação.

## Observações
- As máscaras de CPF/telefone/CEP usam JS leve (progressive enhancement).
- O formulário usa validação nativa HTML5 via attributes (required, pattern, type, min/max).
- As imagens são SVGs otimizadas; substitua por fotos reais otimizadas se desejar.
