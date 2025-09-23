async function carregarOutrasViagens() {
  try {
    // Array com todas as imagens da pasta IMG/viagens
    const imagensViagens = [
      'IMG/viagens/viagem1.jpg',
      'IMG/viagens/viagem2.jpg',
      'IMG/viagens/viagem3.jpg',
      'IMG/viagens/viagem4.jpg',
      'IMG/viagens/viagem5.jpg',
      'IMG/viagens/viagem6.jpg',
      'IMG/viagens/viagem7.jpg',
      'IMG/viagens/viagem8.jpg',
      'IMG/viagens/viagem9.jpg',
      'IMG/viagens/viagem10.jpg',
      'IMG/viagens/viagem12.jpg',
      'IMG/viagens/viagem11.jpg'
    ];

    // 5,6,10,12

    const wrapper = document.getElementById('outras-viagens-wrapper');
    if (!wrapper) return;
    
    wrapper.innerHTML = '';
    
    if (imagensViagens.length > 0) {
      imagensViagens.forEach((imagem, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `
          <div class="card-popup-container">
            <img src="${imagem}" alt="Viagem ${index + 1}">
            <div class="popup-reserva">
              <span>Gostou desta viagem?</span>
              <a class="btn-whatsapp" href="https://api.whatsapp.com/send/?phone=5598981906414&text&type=phone_number&app_absent=0" target="_blank">
                <i class="bi bi-whatsapp"></i> Reservar
              </a>
            </div>
          </div>
        `;
        wrapper.appendChild(slide);
      });
    } else {
      wrapper.innerHTML = '<div class="swiper-slide"><p>Nenhuma viagem cadastrada.</p></div>';
    }
    
    // Atualiza o Swiper (caso já esteja inicializado)
    if (window.swiper2) {
      window.swiper2.update();
    }
  } catch (err) {
    console.error('Erro ao carregar viagens:', err);
  }
}

document.addEventListener('DOMContentLoaded', carregarOutrasViagens); 