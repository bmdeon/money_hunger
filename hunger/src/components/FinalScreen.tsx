export function FinalScreen() {
  return (
    <div className="page">
      <div className="shell">
        {/* HEADER DA MARCA */}
        <header className="brandHeader">
          <div className="brandLeft">
            <div className="logoBox" aria-label="Logo">
              LO<br />GO
            </div>

            <div className="brandText">
              <div className="brandTitle">Minha Marca</div>
              <div className="brandSlogan">Bem estar para todos</div>
            </div>
          </div>
        </header>

        {/* IMAGEM */}
        <div className="finalCard">
          <div className="finalCardIcon">✓</div>
          <h2 className="finalCardTitle">Avaliação Concluída!</h2>
          <p className="finalCardText">
            Analisamos suas respostas e encontramos a solução ideal para você
          </p>
        </div>



        <div className="diagnosticCard">
          <div className="diagnosticHeader">
            <span className="diagnosticBadge">★ Seu Diagnóstico</span>
            <h3 className="diagnosticTitle">Fome Emocional</h3>
          </div>

          <div className="diagnosticBody">
            <p className="diagnosticText">
              Baseado em sua avaliação, você precisa de um método focado em controlar a
              fome excessiva e regular seu metabolismo. Este ebook foi desenvolvido por
              especialistas para pessoas com seu perfil.
            </p>

            <div className="diagnosticSectionTitle">
              Suas características
            </div>

            <ul className="diagnosticList">
              <li>✔ Técnicas científicas para controlar a fome</li>
              <li>✔ Cardápio de 30 dias anti-compulsão</li>
              <li>✔ Suplementos naturais para saciedade</li>
              <li>✔ Exercícios específicos para acelerar o metabolismo</li>
            </ul>

            <div className="diagnosticMeta">
              <span>🛡 Garantia de 7 dias</span>
              <span>⚡ Acesso imediato</span>
            </div>

            <div className="diagnosticDivider" />

            <div className="diagnosticPrice">
              <span className="diagnosticOldPrice">R$ 97,00</span>
              <span className="diagnosticNewPrice">R$ 47,00</span>
            </div>

            <button
              className="diagnosticCTA"
              onClick={() => window.location.href = "https://deonix1.gumroad.com/l/millionaire"}
            >
              Quero Meu Ebook Agora →
            </button>
          </div>
        </div>















      </div>
    </div>
  );
}
