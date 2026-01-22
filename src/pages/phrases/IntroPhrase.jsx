import "/audio/starter.mp3";
import "./IntroPhrase.css";

export function IntroPhrase() {
  const play = (file) => {
    const audio = new Audio(`/audio/${file}`);
    audio.play();
  };
  return (
    <div className="introphrase-container">
      <p>
        အင်္ဂလိပ်လို ကောင်းကောင်း မပြောတတ်ဘူး။ ကျေးဇူးပြုပြီးခဏစောင့်ပါ။ ဤအက်ပ်က
        ဘာသာပြန်ပေးပါမည်။
      </p>
      <button className="intro-button" onClick={() => play("starter.mp3")}>
        ▶ Play
      </button>
    </div>
  );
}
