import React from "react";
import "./styles/style.css";
import logo from "./assets/LOGO.jpeg";
import linkedinIcon from "./assets/linkedin1.png";
import githubIcon from "./assets/github1.png";
import profileImage from "./assets/image.jpeg";
import aboutImage from "./assets/image1.jpeg";
import vehcImage from "./assets/vehc.PNG";
import schlImage from "./assets/schl.PNG";
import urnaImage from "./assets/urna.PNG";
import lognImage from "./assets/logn.PNG";
import linkedinImg from "./assets/linkedin.png";
import githubImg from "./assets/github.png";
import cvImg from "./assets/cv.png";
import cv from "./assets/cvyudi.pdf";

function App() {
  return (
    <React.Fragment>
      <header>
        <a href="#!" className="logo">
          <img src={logo} className="logo2" alt="Logo" />
        </a>
        <ul className="links">
          <li><a href="#home">Home</a></li>
          <li><a href="#abt">About</a></li>
          <li><a href="#skill">Skills</a></li>
          <li><a href="#port">Portfolio</a></li>
          <li><a href="#end">Contact</a></li>
        </ul>
      </header>

      <main>
        <section className="topo" id="home">
          <div className="container">
            <div className="texto">
              <h2>yudi, estudante de desenvolvimento web fullstack</h2>
              <p> Seja muito bem-vindo ao meu projeto de Portfólio! 🌳 Aqui você encontrará um pouco sobre mim, minhas habilidades e projetos construídos. Abaixo, você pode conferir minhas redes para acompanhar meu trabalho e entrar em contato.</p>
              <div className="principal__botao">
                <a href="https://www.linkedin.com/in/yudi-honda-22716725a/" target="_blank" rel="noreferrer">
                  <div className="botaolinkedin">
                    <img src={linkedinIcon} alt="LinkedIn" />
                    <p>LinkedIn</p>
                  </div>
                </a>
                <a href="https://github.com/yudihonda" target="_blank" rel="noreferrer">
                  <div className="botaogithub">
                    <img src={githubIcon} alt="GitHub" />
                    <p>Github</p>
                  </div>
                </a>
                <a href={cv} download="cvyudi.pdf">
                <div className="botaocv">
                    <img src={cvImg} alt="cv" />
                    <p>Download</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="image">
              <img src={profileImage} alt="Minha Foto" />
            </div>
          </div>
        </section>

        <section className="abt" id="abt">
          <div className="contain3">
            <div className="imgg">
              <img src={aboutImage} alt="Sobre mim" />
            </div>
            <div className="textabt">
              <h2>Olá, sou o Yudi</h2>
              <p>Olá visitante, me chamo Yudi. Atualmente cursando Análise e Desenvolvimento de sistemas na UniSociesc Joinville, mesclando estudos e trabalhos acadêmicos com o hábito de pesquisar por conta e se arriscar em projetos práticos, aprendendo técnologias com a "mão na massa". Apesar de ja ter tido experiências em linguagens como C, C++, JAVA e PYTHON, tenho focado atualmente em desenvolvimento web, mergulhando de cabeça em JavaScript e seus frameworks com minha base sólida de lógica. Além disso, estou em busca de oportunidades como estágio ou desenvolvedor trainee para adquirir minhas primeiras experiências profissionais e dar os primeiros passos no mercado de trabalho. 🚀</p>
            </div>
          </div>
        </section>

        <section className="spec" id="skill">
          <div className="contain2">
            <div className="boxes">
              <div className="box">
                <i className="bi bi-window-fullscreen" aria-hidden="true"></i>
                <h3>Soft-Skills</h3>
                <p>Tenho um perfil analítico e uma comunicação clara, o que me permite compreender problemas em profundidade e transmitir ideias de forma objetiva. Sou comprometido com o aprendizado contínuo, sempre buscando novos conhecimentos para aprimorar minhas habilidades. Minha adaptabilidade me permite enfrentar desafios e mudanças com eficiência, mantendo um alto desempenho. Além disso, minha abordagem criativa e inovadora na resolução de problemas contribui para soluções eficazes e diferenciadas. Sou focado em resultados e tenho como objetivo alcançar a excelência em cada projeto que realizo.</p>
              </div>
              <div className="box">
                <i className="bi bi-code-square" aria-hidden="true"></i>
                <h3>Hard-Skills</h3>
                <p>Tenho habilidades que complementam meu trabalho em desenvolvimento. Em Modelagem UML, crio diagramas detalhados para planejar sistemas de forma eficiente. Sou proficiente no Pacote Office (Excel, Word e PowerPoint) para análise de dados e documentação. Tenho domínio do Windows e Terminal, utilizando-os para automação de tarefas. No Desenvolvimento Web, construo páginas responsivas para uma experiência fluida em diversos dispositivos. Possuo experiência com SQL e Banco de Dados, otimizando consultas para melhor desempenho. Minha capacidade de Resolução Lógica de Problemas me permite solucionar desafios complexos com eficiência, e minha base sólida em Lógica de Programação facilita o desenvolvimento e manutenção de sistemas.</p>
              </div>
              <div className="box">
                <i className="bi bi-file-lock" aria-hidden="true"></i>
                <h3>Coding</h3>
                <p>Tenho conhecimento em diversas linguagens e tecnologias de programação. Iniciei com C, onde aprendi lógica de programação e conceitos fundamentais. Tenho experiência em Java, focando em orientação a objetos e planejando aprofundamento em frameworks para backend. No desenvolvimento web, utilizo HTML e CSS para estruturar e estilizar páginas de forma eficiente. Estou explorando JavaScript, incluindo frameworks como React e Node.js, para aprimorar minhas habilidades no frontend e backend. Além disso, tenho noções básicas de PHP para desenvolvimento web dinâmico e estou aprendendo Python, com foco em automação e scripts simples.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="portf" id="port">
            <div class="projeto">
                <img src={vehcImage} alt=""/>
                <div class="info">
                    <h3>CRUD de Veículos</h3>
                    <p>Aplicação web para gerenciar veículos em plataformas como "Uber", tendo total registro de informações sobre cada veículo e sua exata coordenada. permite adicionar, editar e excluir campos. Inclui um histórico de alterações no sistema para controle de uso, além de páginas para login e cadastro de usuários, salvando as informações por meio de LocalStorage. Desenvolvida com HTML, CSS e JavaScript.</p>
                    <a href="https://github.com/yudihonda/CRUDVeiculos" target="_blank" class="btn">Ver Projeto</a>
                </div>
            </div>
            <div class="projeto">
                  <img src={schlImage} alt=""/>
                <div class="info">
                    <h3>Gerenciamento Escola</h3>
                    <p>Aplicação Java feita para trabalho universitário. Construída visando controle e organização em um ambiente escolar, contém diferentes funcionalidades como Adicionar Aluno, Adicionar Professor, Adicionar Curso, Adicionar Turma, Cadastro e visualização de dados. Desenvolvido com Java puro, conceitos de ArrayList e Programação Orientada a Objetos.</p>
                    <a href="https://github.com/yudihonda/JavaSchoolManagement" target="_blank" class="btn">Ver Projeto</a>
                </div>
            </div>
            <div class="projeto">
                <img src={urnaImage} alt=""/>
                <div class="info">
                    <h3>Urna de Votação com Cadastro</h3>
                    <p>Aplicação web construída visando pessoas que não podem ou têm dificuldades em locomoção até locais designados para votação eleitoral, possui páginas de cadastro e de seleção de candidatos, além de um gráfico em tempo real dos votos. Salva dados completos em banco de dados MySQL e PHP Desenvolvida com HTML, CSS, JavaScript, PHP e SQL.</p>
                    <a href="https://github.com/yudihonda/bocadeurnaphp" target="_blank" class="btn">Ver Projeto</a>
                </div>
        </div>
        <div class="projeto">
            <img src={lognImage} alt=""/>
            <div class="info">
                <h3>Portfolio Pessoal</h3>
                <p>Projeto pessoal "Portfolio". Aplicação web feita principalmente em HTML e CSS, junto de JavaScript e React, com objetivo de apresentar meus trabalhos de desenvolvimento. Possui 5 seções, "Home" "About" "Skills" "Portfolio" e "Contact". Inclui diversos links de direcionamento para meu LinkedIn e GitHub.</p>
                <a href="https://github.com/yudihonda/portfolio" target="_blank" class="btn">Ver Projeto</a>
            </div>
            </div>        
            </section>

        <section className="rodape" id="end">
          <div className="contain5">
            <div className="ttx">
              <h3>yudihonda4661@gmail.com</h3>
              <h3>+55 (47) 99976 - 9979</h3>
            </div>
            <div className="iconss">
              <a href="https://www.linkedin.com/in/yudi-honda-22716725a/">
                <img src={linkedinImg} alt="LinkedIn" />
              </a>
              <a href="https://github.com/yudihonda">
                <img src={githubImg} alt="GitHub" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
