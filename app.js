/**
 * SOS INFANTIL — Remédios Caseiros de Geração em Geração
 * Motor Reativo do Funil (Quiz de 14 Telas + Página de Vendas)
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.FUNNEL_DATA;
  if (!data) {
    console.error("Dados do funil não carregados.");
    return;
  }

  // Estado do Quiz
  const state = {
    currentStepIndex: 0,
    responses: {},
    history: [],
    isProcessing: false
  };

  // Elementos da DOM
  const quizWrapper = document.getElementById("quizWrapper");
  const quizCard = document.getElementById("quizCard");
  const btnBack = document.getElementById("btnBack");
  const stepIndicator = document.getElementById("stepIndicator");
  const progressBarFill = document.getElementById("progressBarFill");
  const salesPage = document.getElementById("salesPage");
  const stickyMobileCta = document.getElementById("stickyMobileCta");

  // Iniciar Quiz
  renderStep(state.currentStepIndex);

  // Botão Voltar
  if (btnBack) {
    btnBack.addEventListener("click", () => {
      if (state.history.length > 0 && !state.isProcessing) {
        state.currentStepIndex = state.history.pop();
        renderStep(state.currentStepIndex, false);
      }
    });
  }

  /**
   * Renderiza a etapa do Quiz
   */
  function renderStep(index, pushToHistory = true) {
    const step = data.quizSteps[index];
    if (!step) return;

    // Atualizar Barra de Progresso e Indicador
    const totalSteps = data.quizSteps.length;
    const progressPercent = Math.min(100, Math.round(((index + 1) / totalSteps) * 100));
    
    if (progressBarFill) {
      progressBarFill.style.width = `${progressPercent}%`;
    }
    if (stepIndicator) {
      stepIndicator.textContent = step.stepIndicator || `Etapa ${index + 1} de ${totalSteps}`;
    }

    // Gerenciar estado do Botão Voltar
    if (btnBack) {
      btnBack.disabled = index === 0 || step.type === "processing" || step.type === "transition";
      btnBack.style.visibility = index === 0 ? "hidden" : "visible";
    }

    // Animação de Entrada
    quizCard.innerHTML = "";
    quizCard.style.animation = "none";
    void quizCard.offsetWidth; // Trigger reflow
    quizCard.style.animation = "slideFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards";

    // Construtores de tela de acordo com o tipo
    switch (step.type) {
      case "intro":
        renderIntroStep(step);
        break;
      case "single_choice":
        renderSingleChoiceStep(step, index);
        break;
      case "multi_choice":
        renderMultiChoiceStep(step, index);
        break;
      case "processing":
        renderProcessingStep(step, index);
        break;
      case "result":
        renderResultStep(step, index);
        break;
      case "micro_commitment":
        renderMicroCommitmentStep(step, index);
        break;
      case "transition":
        renderTransitionStep(step);
        break;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /**
   * 1. Tela de Abertura (Intro)
   */
  function renderIntroStep(step) {
    quizCard.innerHTML = `
      <div style="text-align: center;">
        <span class="heritage-badge">${step.badge}</span>
        
        <div class="mandatory-callout">
          <span class="mandatory-callout-icon">💡</span>
          <div class="mandatory-callout-text">${step.mandatoryPhrase}</div>
        </div>

        <h1 class="quiz-headline font-heading" style="font-size: 1.65rem; margin-top: 10px;">
          ${step.headline}
        </h1>
        
        <p class="quiz-subheadline">
          ${step.subheadline}
        </p>

        <div style="margin: 28px 0 16px;">
          <button id="btnStartQuiz" class="btn-cta pulse-animation">
            <span>${step.buttonText}</span>
            <span>👉</span>
          </button>
        </div>

        <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 12px;">
          ${step.microcopy}
        </p>
      </div>
    `;

    document.getElementById("btnStartQuiz").addEventListener("click", () => {
      advanceStep(0);
    });
  }

  /**
   * 2, 3, 4, 6, 7, 8, 9, 11. Telas de Seleção Única
   */
  function renderSingleChoiceStep(step, index) {
    const isGrid = step.layout === "grid-2x2";
    const selectedValue = state.responses[step.id];

    let optionsHtml = "";
    step.options.forEach(opt => {
      const isSelected = selectedValue === opt.id ? "selected" : "";
      const badgeHtml = opt.badge ? `<span style="font-size: 0.75rem; background: #E0F2FE; color: #0369A1; padding: 2px 8px; border-radius: 99px; font-weight: 700; margin-left: auto;">${opt.badge}</span>` : "";
      
      optionsHtml += `
        <div class="option-card ${isSelected}" data-option-id="${opt.id}">
          <span class="option-icon">${opt.icon}</span>
          <div class="option-content">
            <div class="option-title">${opt.text}</div>
            ${opt.desc ? `<div class="option-desc">${opt.desc}</div>` : ""}
          </div>
          ${badgeHtml}
          <div class="option-radio"></div>
        </div>
      `;
    });

    quizCard.innerHTML = `
      <div>
        <h2 class="quiz-headline font-heading">${step.question}</h2>
        
        ${step.note ? `
          <div class="quiz-note">
            <span>${step.note}</span>
          </div>
        ` : ""}

        <div class="${isGrid ? 'grid-2x2' : 'options-list'}">
          ${optionsHtml}
        </div>
      </div>
    `;

    // Eventos de clique nas opções com avanço automático suave (320ms)
    const cards = quizCard.querySelectorAll(".option-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");

        const chosenId = card.getAttribute("data-option-id");
        state.responses[step.id] = chosenId;

        setTimeout(() => {
          advanceStep(index);
        }, 320);
      });
    });
  }

  /**
   * 5. Tela de Múltipla Escolha (Ingredientes)
   */
  function renderMultiChoiceStep(step, index) {
    const chosenList = state.responses[step.id] || ["mel", "cebola", "canela", "frutas"];
    state.responses[step.id] = chosenList;

    let gridHtml = "";
    step.options.forEach(opt => {
      const isChecked = chosenList.includes(opt.id) ? "checked" : "";
      gridHtml += `
        <div class="ingredient-check-card ${isChecked}" data-ing-id="${opt.id}">
          <span class="ing-icon">${opt.icon}</span>
          <div class="ing-info">
            <div class="ing-name">${opt.text}</div>
            <div class="ing-hint">${opt.hint}</div>
          </div>
          <div class="custom-checkbox">
            ${isChecked ? '✓' : ''}
          </div>
        </div>
      `;
    });

    quizCard.innerHTML = `
      <div>
        <h2 class="quiz-headline font-heading">${step.question}</h2>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 18px;">
          ${step.subtitle}
        </p>

        <div class="ingredients-grid">
          ${gridHtml}
        </div>

        <div style="margin-top: 24px; text-align: center;">
          <button id="btnContinueMulti" class="btn-cta">
            <span>${step.buttonText}</span>
            <span>👉</span>
          </button>
        </div>
      </div>
    `;

    const cards = quizCard.querySelectorAll(".ingredient-check-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-ing-id");
        card.classList.toggle("checked");
        const checkbox = card.querySelector(".custom-checkbox");

        let current = state.responses[step.id] || [];
        if (card.classList.contains("checked")) {
          if (!current.includes(id)) current.push(id);
          checkbox.textContent = "✓";
        } else {
          current = current.filter(item => item !== id);
          checkbox.textContent = "";
        }
        state.responses[step.id] = current;
      });
    });

    document.getElementById("btnContinueMulti").addEventListener("click", () => {
      advanceStep(index);
    });
  }

  /**
   * 10. Tela de Análise e Processamento Inteligente (Futurista & Natural)
   */
  function renderProcessingStep(step, index) {
    state.isProcessing = true;

    quizCard.innerHTML = `
      <div class="processing-container">
        <div class="processing-radar">
          <div class="radar-ring"></div>
          <div class="radar-ring"></div>
          <div class="radar-ring"></div>
          <div class="radar-core">🌿</div>
        </div>

        <h2 class="quiz-headline font-heading" style="font-size: 1.45rem;">
          ${step.title}
        </h2>
        
        <p style="font-size: 0.92rem; color: var(--text-secondary); max-width: 480px; margin: 0 auto;">
          ${step.subtitle}
        </p>

        <div class="processing-steps-list">
          ${step.steps.map((s, idx) => `
            <div class="processing-step-item" id="procStep_${idx}">
              <span style="font-size: 1.1rem;">${s.icon}</span>
              <span style="flex: 1;">${s.text}</span>
              <span class="step-status-icon">⏳</span>
            </div>
          `).join("")}
        </div>

        <div class="live-progress-bar">
          <div class="live-progress-bar-fill" id="liveFill"></div>
        </div>
        <div id="livePercent" style="font-size: 0.85rem; font-weight: 800; color: var(--leaf-green); margin-top: 8px;">
          Processando: 15%
        </div>
      </div>
    `;

    const liveFill = document.getElementById("liveFill");
    const livePercent = document.getElementById("livePercent");
    const stepItems = [0, 1, 2, 3].map(i => document.getElementById(`procStep_${i}`));

    // Sequência de 3.8 segundos
    let progress = 15;
    const interval = setInterval(() => {
      progress += 5;
      if (progress > 100) progress = 100;
      
      if (liveFill) liveFill.style.width = `${progress}%`;
      if (livePercent) livePercent.textContent = `Organizando conhecimentos: ${progress}%`;

      // Atualiza os status visuais
      if (progress >= 30 && stepItems[0]) markStepDone(stepItems[0]);
      if (progress >= 55 && stepItems[1]) markStepDone(stepItems[1]);
      if (progress >= 80 && stepItems[2]) markStepDone(stepItems[2]);
      if (progress >= 100 && stepItems[3]) {
        markStepDone(stepItems[3]);
        clearInterval(interval);

        setTimeout(() => {
          state.isProcessing = false;
          advanceStep(index);
        }, 600);
      }
    }, 180);

    function markStepDone(el) {
      if (!el.classList.contains("completed")) {
        el.classList.add("completed");
        const status = el.querySelector(".step-status-icon");
        if (status) status.innerHTML = "✅";
      }
    }
  }

  /**
   * 12. Tela de Resultado (Perfil Identificado com Métricas Dinâmicas)
   */
  function renderResultStep(step, index) {
    let metricsHtml = "";
    step.metrics.forEach(m => {
      metricsHtml += `
        <div class="metric-row">
          <div class="metric-header">
            <div class="metric-title-group">
              <span>${m.icon}</span>
              <span>${m.title}</span>
            </div>
            <div class="metric-percentage">${m.percentage}%</div>
          </div>
          <div class="metric-bar-track">
            <div class="metric-bar-fill" style="width: 0%; background: ${m.color};" data-target-width="${m.percentage}%"></div>
          </div>
          <div class="metric-desc">${m.subtitle}</div>
        </div>
      `;
    });

    quizCard.innerHTML = `
      <div>
        <div style="text-align: center; margin-bottom: 20px;">
          <span class="heritage-badge">🎯 PERFIL DE CUIDADO IDENTIFICADO</span>
          <h2 class="quiz-headline font-heading" style="font-size: 1.55rem; margin-top: 8px;">
            ${step.title}
          </h2>
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.55;">
            ${step.description}
          </p>
        </div>

        <div class="metrics-container">
          ${metricsHtml}
        </div>

        <div style="background: #FEF3C7; border: 1px solid #FDE68A; padding: 14px 18px; border-radius: var(--radius-sm); font-size: 0.9rem; color: #92400E; font-weight: 700; text-align: center; margin-bottom: 24px;">
          ${step.conclusion}
        </div>

        <div style="text-align: center;">
          <button id="btnResultAdvance" class="btn-cta pulse-animation">
            <span>${step.buttonText}</span>
            <span>👉</span>
          </button>
        </div>
      </div>
    `;

    // Animar as barras de métricas após renderizar
    setTimeout(() => {
      const fills = quizCard.querySelectorAll(".metric-bar-fill");
      fills.forEach(f => {
        const target = f.getAttribute("data-target-width");
        f.style.width = target;
      });
    }, 200);

    document.getElementById("btnResultAdvance").addEventListener("click", () => {
      advanceStep(index);
    });
  }

  /**
   * 13. Tela de Microcompromisso
   */
  function renderMicroCommitmentStep(step, index) {
    let optionsHtml = "";
    step.options.forEach(opt => {
      optionsHtml += `
        <div class="option-card" data-commit-id="${opt.id}">
          <span class="option-icon">${opt.icon}</span>
          <div class="option-content">
            <div class="option-title">${opt.text}</div>
          </div>
          <div class="option-radio"></div>
        </div>
      `;
    });

    quizCard.innerHTML = `
      <div>
        <h2 class="quiz-headline font-heading" style="text-align: center; font-size: 1.45rem;">
          ${step.question}
        </h2>
        <p style="text-align: center; font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 22px;">
          ${step.subtitle}
        </p>

        <div class="options-list">
          ${optionsHtml}
        </div>
      </div>
    `;

    const cards = quizCard.querySelectorAll(".option-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        cards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        setTimeout(() => {
          advanceStep(index);
        }, 320);
      });
    });
  }

  /**
   * 14. Tela de Transição para a Página de Vendas
   */
  function renderTransitionStep(step) {
    quizCard.innerHTML = `
      <div style="text-align: center; padding: 10px 0;">
        <span class="heritage-badge">${step.badge}</span>

        <h2 class="quiz-headline font-heading" style="font-size: 1.6rem; margin-top: 10px;">
          ${step.title}
        </h2>

        <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.6; margin: 18px 0 28px;">
          ${step.description}
        </p>

        <div style="margin-bottom: 20px;">
          <button id="btnGoToSales" class="btn-cta pulse-animation">
            <span>${step.buttonText}</span>
            <span>👉</span>
          </button>
        </div>

        <div style="display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.85rem; color: var(--leaf-green); font-weight: 700;">
          <span>🔒 Acesso seguro e imediato</span>
          <span>•</span>
          <span>⚡ Liberação automática</span>
        </div>
      </div>
    `;

    document.getElementById("btnGoToSales").addEventListener("click", () => {
      transitionToSalesPage();
    });
  }

  /**
   * Avançar Etapa
   */
  function advanceStep(currentIndex) {
    state.history.push(currentIndex);
    state.currentStepIndex = currentIndex + 1;

    if (state.currentStepIndex < data.quizSteps.length) {
      renderStep(state.currentStepIndex);
    } else {
      transitionToSalesPage();
    }
  }

  /**
   * Revelar a Página de Vendas com Transição Fluida
   */
  function transitionToSalesPage() {
    // Esconder o Quiz e exibir a Página de Vendas
    quizWrapper.style.display = "none";
    salesPage.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Inicializar componentes interativos da Página de Vendas
    initSalesPageInteractions();
  }

  /**
   * Inicializar Interações da Página de Vendas
   */
  function initSalesPageInteractions() {
    // 1. Timer Regressivo de Oferta
    initCountdownTimer();

    // 2. Carrossel de Depoimentos com Imagens Reais
    initTestimonialsCarousel();

    // 3. FAQ Accordion
    initFaqAccordion();

    // 4. Sticky CTA Mobile que surge com o Scroll
    initStickyMobileCta();

    // 5. Botões de Ação (CTAs) redirecionando para Checkout ou Seção de Oferta
    initCtaButtons();
  }

  /**
   * Timer Regressivo de Oferta (15 Minutos Exatos)
   */
  function initCountdownTimer() {
    const timerDisplay = document.getElementById("countdownTimer");
    if (!timerDisplay) return;

    let timeInSeconds = 15 * 60; // 15 minutos
    const updateTimer = () => {
      const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
      const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
      timerDisplay.textContent = `${minutes}:${seconds}`;
    };
    updateTimer();

    setInterval(() => {
      if (timeInSeconds <= 0) {
        timeInSeconds = 15 * 60;
      } else {
        timeInSeconds--;
      }
      updateTimer();
    }, 1000);
  }

  /**
   * Carrossel de Depoimentos Reais
   */
  function initTestimonialsCarousel() {
    const track = document.getElementById("testimonialsTrack");
    const btnPrev = document.getElementById("btnPrevTestimonial");
    const btnNext = document.getElementById("btnNextTestimonial");
    if (!track) return;

    let currentIndex = 0;
    const slides = track.querySelectorAll(".testimonial-card-slide");
    const totalSlides = slides.length;

    function updateCarousel() {
      const isMobile = window.innerWidth < 768;
      const slideWidthPercent = isMobile ? 100 : 50;
      const maxIndex = isMobile ? totalSlides - 1 : totalSlides - 2;

      if (currentIndex > maxIndex) currentIndex = 0;
      if (currentIndex < 0) currentIndex = maxIndex;

      track.style.transform = `translateX(-${currentIndex * slideWidthPercent}%)`;
    }

    if (btnNext) {
      btnNext.addEventListener("click", () => {
        currentIndex++;
        updateCarousel();
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener("click", () => {
        currentIndex--;
        updateCarousel();
      });
    }

    // Autoplay a cada 5.5s
    setInterval(() => {
      currentIndex++;
      updateCarousel();
    }, 5500);

    window.addEventListener("resize", updateCarousel);
  }

  /**
   * FAQ Accordion
   */
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
      const questionBtn = item.querySelector(".faq-question");
      questionBtn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach(i => i.classList.remove("active"));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    });
  }

  /**
   * Barra Inferior Fixa no Mobile (Sticky CTA)
   */
  function initStickyMobileCta() {
    if (!stickyMobileCta) return;

    window.addEventListener("scroll", () => {
      // Exibir quando rolar mais de 450px para baixo
      if (window.scrollY > 450) {
        stickyMobileCta.classList.add("visible");
      } else {
        stickyMobileCta.classList.remove("visible");
      }
    });
  }

  /**
   * Botões CTA: Efeito tátil de ondas (ripple), micro-interações e direcionamento para Checkout Cakto
   */
  function initCtaButtons() {
    const caktoCheckoutUrl = data.product.checkoutUrl || "https://pay.cakto.com.br/a8cwrvz_1124406";
    const ctaButtons = document.querySelectorAll(".btn-cta");
    ctaButtons.forEach(btn => {
      // Efeito de onda luminosa ao clicar/tocar
      btn.addEventListener("pointerdown", function(e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement("span");
        ripple.className = "btn-ripple";
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      });

      // Garantir destino do checkout Cakto em todos os botões de compra/CTA da página de vendas
      if (btn.classList.contains("btn-trigger-checkout") || btn.closest("#salesPage")) {
        btn.setAttribute("href", caktoCheckoutUrl);
        btn.setAttribute("target", "_blank");
        btn.setAttribute("rel", "noopener");
      }
    });
  }
});
