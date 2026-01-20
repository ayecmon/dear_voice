import "/audio/starter.mp3";

export function PolicePage() {
  const play = (file) => {
    const audio = new Audio(`/audio/${file}`);
    audio.play();
  };
  return (
    <>
      <p>
        အင်္ဂလိပ်လို ကောင်းကောင်း မပြောတတ်ဘူး။ ကျေးဇူးပြုပြီးခဏစောင့်ပါ။ ဤအက်ပ်က
        ဘာသာပြန်ပေးပါမည်။
      </p>
      <button onClick={() => play("starter.mp3")}>▶ Play</button>
      <div>
        <button> English </button>
        <button> Burmese </button>
      </div>
      
    </>
  );
}
