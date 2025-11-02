// ======== SIMPLES SISTEMA DE SPA E TEMPLATES JS ========

// Seleciona o container principal onde o conteúdo será carregado
const app = document.querySelector("#app");

// Templates HTML das páginas
const templates = {
    home: `
        <section class="hero">
            <h1>Bem-vindo à ONG Exemplo</h1>
            <p>Transformando vidas com projetos sociais de impacto.</p>
            <button class="btn btn-secondary" onclick="navigateTo('projetos')">Conheça Nossos Projetos</button>
        </section>

        <section class="cards">
            <div class="card">
                <img src="https://via.placeholder.com/400x180" alt="Educação">
                <div class="card-body">
                    <h3>Educação</h3>
                    <p>Promovemos oportunidades educacionais para crianças e jovens em situação de vulnerabilidade.</p>
                </div>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/400x180" alt="Cultura">
                <div class="card-body">
                    <h3>Cultura</h3>
                    <p>Incentivamos atividades culturais e artísticas como ferramentas de inclusão social e transformação.</p>
                </div>
            </div>
            <div class="card">
                <img src="https://via.placeholder.com/400x180" alt="Meio Ambiente">
                <div class="card-body">
                    <h3>Meio Ambiente</h3>
                    <p>Desenvolvemos ações de preservação ambiental e conscientização ecológica.</p>
                </div>
            </div>
        </section>
    `,

    projetos: `
        <section class="hero">
            <h1>Nossos Projetos</h1>
            <p>Conheça as iniciativas que transformam vidas todos os dias.</p>
        </section>

        <section class="cards">
            <div class="card">
                <img src="https://via.placeholder.com/600x250" alt="Projeto Educação">
                <div class="card-body">
                    <h3>Educação</h3>
                    <p>Oferecemos cursos, oficinas e apoio escolar gratuito para crianças e adolescentes. Nosso objetivo é diminuir a evasão escolar e proporcionar novas oportunidades através do conhecimento.</p>
                </div>
            </div>

            <div class="card">
                <img src="https://via.placeholder.com/600x250" alt="Projeto Cultura">
                <div class="card-body">
                    <h3>Cultura</h3>
                    <p>Realizamos eventos culturais, exposições e oficinas de arte e música, promovendo o acesso à cultura e estimulando talentos locais.</p>
                </div>
            </div>

            <div class="card">
                <img src="https://via.placeholder.com/600x250" alt="Projeto Meio Ambiente">
                <div class="card-body">
                    <h3>Meio Ambiente</h3>
                    <p>Trabalhamos com reciclagem, hortas comunitárias e educação ambiental, incentivando práticas sustentáveis e responsabilidade ecológica.</p>
                </div>
            </div>
        </section>
    `,

    cadastro: `
        <section class="hero">
            <h1>Cadastro de Voluntários</h1>
            <p>Faça parte da transformação. Cadastre-se para ser voluntário!</p>
        </section>

        <section style="padding: 48px;">
            <form id="formCadastro" class="form">
                <div class="form-group">
                    <label>Nome Completo</label>
                    <input type="text" required placeholder="Seu nome completo">
                </div>
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="email" required placeholder="seuemail@exemplo.com">
                </div>
                <div class="form-group">
                    <label>Telefone</label>
                    <input type="text" id="telefone" placeholder="(00) 00000-0000">
                </div>
                <div class="form-group">
                    <label>Mensagem</label>
                    <textarea placeholder="Conte-nos um pouco sobre você"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
            </form>
        </section>

        <section style="background-color:#f5f5f5; padding:48px; text-align:center;">
            <h2>Entre em Contato</h2>
            <p>📍 Endereço: Rua das Flores, 123 - São Paulo/SP</p>
            <p>📞 Telefone: (11) 99999-0000</p>
            <p>✉️ E-mail: contato@ongexemplo.org.br</p>
        </section>
    `
};

// Função para renderizar a página selecionada
function navigateTo(page) {
    if (templates[page]) {
        app.innerHTML = templates[page];
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.pushState({ page }, "", `#${page}`);
    }
}

// Carregar a rota ao voltar no histórico
window.onpopstate = () => {
    const page = location.hash.replace("#", "") || "home";
    navigateTo(page);
};

// Inicializa com a Home
document.addEventListener("DOMContentLoaded", () => {
    const initialPage = location.hash.replace("#", "") || "home";
    navigateTo(initialPage);
});
