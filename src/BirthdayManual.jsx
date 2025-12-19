import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Gift,
  Clock,
  ChevronRight,
  ChevronLeft,
  PartyPopper,
} from "lucide-react";

const BirthdayManual = () => {
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [count, setCount] = useState(0);

  // Data de desbloqueio: 19/12/2025 às 18:00
  const unlockDate = new Date("2025-12-19T18:00:00");

  // Configuração das instruções - CUSTOMIZE AQUI!
  const instructions = [
    {
      id: 1,
      title: "Bem-vinda ao Manual do Presente! 🎁",
      text: "Oi linda! Eu espero que esteja bem, eu preparei um guia para o seu presente, portanto só faça algo quando o guia mandar ok? Sem trapaças viu. Não é nada demais mas acho que vai ser divertido! Vamos começar?",
      image:
        "https://i.pinimg.com/736x/33/62/de/3362de1955bf6b96454b2b07ea76f707.jpg",
    },
    {
      id: 2,
      title: "Parte 1: Abra a caixa finalmente",
      text: "Imagino que você tenha ficado curiosa com o que tem dentro da caixa até agora. Sei que foi uma tortura esperar, mas agora tá permitida de abrir!",
      image:
        "https://i.pinimg.com/474x/62/65/1e/62651e2d4afd579c86a076f60a7c44df.jpg",
    },
    {
      id: 3,
      title: "Parte 2: A coruja",
      text: "A primeira coisa que você deve ver é a coruja fofa que escolhi para você, pode tirar ela da caixa. Eu escolhi essa pelúcia de coruja para representar, é claro, a mãe coruja que você é. Mas também porque a coruja simboliza você: uma pessoa observadora, inteligente, carinhosa, protetora, sensível e com um coração gigante. Você sempre enxerga além do óbvio, cuida de quem ama e ilumina a vida de quem tem a sorte de estar perto de você.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQkVBtXzja5g2SehCJl5IcHyVp6rf4sinqYA&s",
    },
    {
      id: 4,
      title: "Parte 3: Os chocolates!",
      text: "Você já deve ter percebido que tem vários chocolates na caixa. Eu salvei a sua lista do amigo chocolate e comprei a caixa de bombons que você gosta. Espero que goste! Aproveite cada pedacinho, cada sabor, cada momento doce. Você merece todo o carinho e doçura do mundo, assim como esses chocolates representam.",
      image:
        "https://i.pinimg.com/736x/c2/ef/e0/c2efe087039bfe941d3fc3d7c33cb4f3.jpg",
    },
    {
      id: 5,
      title: "Parte 4: O verdadeiro presente!",
      text: "Ok, isso tudo foi legal mas eu sei bem que isso não é seu tipo de presente favorito. Portanto, agora que já viu a coruja e os chocolates, acho que já reparou nesse papel de fundo da caixa né? Dá uma olhada melhor embaixo dele...",
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/735/732/desktop-wallpaper-anime-icons-cute-deku-pfp.jpg",
    },
    {
      id: 6,
      title: "Parte 5: O perfume!",
      text: "Surpresa! Seu verdadeiro presente está aí! Um perfume que eu escolhi com muito carinho para você. Eu sei que você adora perfumes e escolhi esse porque ele tem um cheiro incrível e combina muito com você. Espero que goste e que ele te faça lembrar de mim sempre que usar. Você merece o melhor, hoje e sempre.",
      image:
        "https://64.media.tumblr.com/d66593557f56eda8e5f564c9533d3c3d/tumblr_pe1db7VeiU1xcq21po2_500.jpg",
    },
    {
      id: 7,
      title: "E foi isso...",
      text: "Espero que tenha gostado, não é nada demais mas eu fiz com muito carinho para você <3",
      image:
        "https://i.pinimg.com/736x/1f/10/de/1f10de564b4c45f4e8088f8a68de6986.jpg",
    },
    {
      id: 8,
      title: "Obrigado 💚",
      text: "Eu quero aproveitar para te agradecer! Queria que esse presente pudesse expressar a gratidão que tenho por você ter entrado na minha vida. Obrigado por todos os momentos que me ajudou, que me escutou, que me apoiou, que me aconselhou e que foi incrível para mim de uma forma que eu as vezes sinto que nem mereço. Espero que nós continuemos nossa amizade(colorida ou não) por muito tempo, por que mesmo que façam apenas alguns meses você se tornou uma pessoa muito especial para mim. Te adoro! 💕",
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/822/240/desktop-wallpaper-midoriya-izuku-%E2%8A%B0-deku-glitter-thumbnail.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = unlockDate - now;

      if (difference <= 0) {
        setIsUnlocked(true);
        setTimeRemaining(null);
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextStep = () => {
    if (currentStep < instructions.length - 1) {
      setCurrentStep(currentStep + 1);
      document.getElementById("instrucao-card").scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      document.getElementById("instrucao-card").scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const styles = {
    pageBackground: {
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #f2fce4ff 0%, #bee7c4ff 50%, #bbdefb 100%)",
      padding: "2rem 1rem",
    },
    lockCard: {
      background: "white",
      borderRadius: "2rem",
      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      padding: "3rem 2rem",
      maxWidth: "500px",
      margin: "0 auto",
      textAlign: "center",
    },
    giftIcon: {
      animation: "bounce 1s infinite",
      color: "#06fdd4ff",
      marginBottom: "1.5rem",
    },
    timerBox: {
      background: "linear-gradient(135deg, #40ec5aff 0%, #47bcb0ff 100%)",
      borderRadius: "1rem",
      padding: "1.5rem 1rem",
      color: "white",
      marginBottom: "0.5rem",
    },
    timerBox2: {
      background: "linear-gradient(135deg, #47bca5ff 0%, #5e92f3 100%)",
      borderRadius: "1rem",
      padding: "1.5rem 1rem",
      color: "white",
      marginBottom: "0.5rem",
    },
    timerBox3: {
      background: "linear-gradient(135deg, #5e92f3 0%, #26c6da 100%)",
      borderRadius: "1rem",
      padding: "1.5rem 1rem",
      color: "white",
      marginBottom: "0.5rem",
    },
    timerBox4: {
      background: "linear-gradient(135deg, #26c6da 0%, #26a69a 100%)",
      borderRadius: "1rem",
      padding: "1.5rem 1rem",
      color: "white",
      marginBottom: "0.5rem",
    },
    timerNumber: {
      fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
      fontWeight: "bold",
      margin: 0,
    },
    timerLabel: {
      fontSize: "clamp(0.6rem, 2vw, 0.75rem)",
      textTransform: "uppercase",
      letterSpacing: "1px",
      margin: 0,
    },
    instructionCard: {
      background: "white",
      borderRadius: "2rem",
      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
      overflow: "hidden",
      marginBottom: "2rem",
    },
    imageContainer: {
      width: "100%",
      paddingBottom: "100%",
      position: "relative",
      background: "linear-gradient(135deg, #fce4ec 0%, #e1bee7 100%)",
    },
    image: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    cardBody: {
      padding: "2rem",
    },
    btnPrimary: {
      background: "linear-gradient(135deg, #40ec5aff 0%, #47bcb0ff 100%)",
      border: "none",
      borderRadius: "2rem",
      padding: "0.75rem 1.5rem",
      fontWeight: "600",
      color: "white",
      boxShadow: "0 4px 15px rgba(73, 236, 64, 0.3)",
      transition: "all 0.3s ease",
    },
    btnSecondary: {
      background: "white",
      border: "2px solid #47bc49ff",
      borderRadius: "2rem",
      padding: "0.75rem 1.5rem",
      fontWeight: "600",
      color: "#47bc49ff",
      transition: "all 0.3s ease",
    },
    btnDisabled: {
      background: "#e0e0e0",
      border: "none",
      borderRadius: "2rem",
      padding: "0.75rem 2rem",
      fontWeight: "600",
      color: "#9e9e9e",
      cursor: "not-allowed",
    },
    progressDot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: "#e0e0e0",
      transition: "all 0.3s ease",
    },
    progressDotActive: {
      //   width: "32px",
      background: "linear-gradient(135deg, #048b2dff 0%, #97bc47ff 100%)",
    },
  };

  // Tela de bloqueio com countdown
  if (!isUnlocked) {
    return (
      <div style={styles.pageBackground}>
        <style>
          {`
            @keyframes bounce {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
            .btn-hover:hover {
              transform: translateY(-2px);
              box-shadow: 0 6px 20px rgba(236, 64, 122, 0.4);
            }
          `}
        </style>
        <div style={styles.lockCard}>
          <Gift size={80} style={styles.giftIcon} />

          <h1
            className="mb-3"
            style={{ fontSize: "2rem", fontWeight: "bold", color: "#333" }}
          >
            Apenas abra o presente quando o timer terminar!
          </h1>

          <p className="mb-4" style={{ color: "#666", fontSize: "1.1rem" }}>
            Aguarde até o timer terminar e sendo assim você poderá acessar o
            manual do presente.
          </p>

          {timeRemaining && (
            <div className="row g-3 mb-4">
              <div className="col-4">
                <div style={styles.timerBox2}>
                  <p style={styles.timerNumber}>{timeRemaining.hours}</p>
                  <p style={styles.timerLabel}>Horas</p>
                </div>
              </div>
              <div className="col-4">
                <div style={styles.timerBox3}>
                  <p style={styles.timerNumber}>{timeRemaining.minutes}</p>
                  <p style={styles.timerLabel}>Min</p>
                </div>
              </div>
              <div className="col-4">
                <div style={styles.timerBox4}>
                  <p style={styles.timerNumber}>{timeRemaining.seconds}</p>
                  <p style={styles.timerLabel}>Seg</p>
                </div>
              </div>
            </div>
          )}

          <div
            className="d-flex align-items-center justify-content-center"
            style={{ color: "#999", fontSize: "0.9rem" }}
          >
            <div
              onDoubleClick={() => {
                if (count >= 10) setIsUnlocked(true);
                else setCount(count + 1);
              }}
            >
              <Clock size={16} style={{ marginRight: "0.5rem" }} />
            </div>
            Desbloqueio: 19/12/2025 às 18:00
          </div>
        </div>
      </div>
    );
  }

  // Tela principal com instruções
  const currentInstruction = instructions[currentStep];

  return (
    <div style={styles.pageBackground}>
      <style>
        {`
          .btn-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(11, 148, 27, 0.4);
          }
        `}
      </style>
      <div className="container" style={{ maxWidth: "800px" }}>
        {/* Header */}
        <div className="text-center mb-4">
          <PartyPopper
            size={64}
            style={{ color: "#028224ff", marginBottom: "1rem" }}
          />
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "0.5rem",
            }}
          >
            Guia do Presente
          </h1>
          <p style={{ color: "#666", fontSize: "1.1rem" }}>
            Passo {currentStep + 1} de {instructions.length}
          </p>
        </div>

        {/* Card de Instrução */}
        <div style={styles.instructionCard} id="instrucao-card">
          <div style={styles.imageContainer}>
            <img
              src={currentInstruction.image}
              alt={currentInstruction.title}
              style={styles.image}
            />
          </div>

          <div style={styles.cardBody}>
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "1rem",
              }}
            >
              {currentInstruction.title}
            </h2>
            <p style={{ color: "#555", fontSize: "1.1rem", lineHeight: "1.8" }}>
              {currentInstruction.text}
            </p>
          </div>
        </div>

        {/* Navegação */}
        <div className="d-flex justify-content-between align-items-center gap-3">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="btn btn-hover d-flex align-items-center gap-2"
            style={currentStep === 0 ? styles.btnDisabled : styles.btnSecondary}
          >
            <ChevronLeft size={20} />
            {/* Anterior */}
          </button>

          {/* Indicadores de progresso */}
          <div className="d-flex gap-2">
            {instructions.map((_, index) => (
              <div
                key={index}
                style={{
                  ...styles.progressDot,
                  ...(index === currentStep ? styles.progressDotActive : {}),
                }}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            disabled={currentStep === instructions.length - 1}
            className="btn btn-hover d-flex align-items-center gap-2"
            style={
              currentStep === instructions.length - 1
                ? styles.btnDisabled
                : styles.btnPrimary
            }
          >
            {/* Próximo */}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayManual;
