import { useNavigate } from "react-router";
import { IntroPhrase } from "./phrases/IntroPhrase";
import "./HomePage.css";
import PoliceIcon from '../assets/images/icons/police-icon.svg'
import MediIcon from '../assets/images/icons/medi-icon.svg'
import ImmigrationIcon from '../assets/images/icons/immigration-icon.svg'
export function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <title>Dear Voice</title>
      <h2>အရေးပေါ်အကူအညီ</h2>
      <p>Emergency Assistance</p>
      <IntroPhrase/>
      <div className="button-container">
        <button className="button-police" onClick={() => navigate("/police")}>
          ရဲ
          <p>Police</p>
        </button>
        <button className="button-med" onClick={() => navigate("/medical")}>
          ဆေးဘက်ဆိုင်ရာအရေးပေါ်အခြေအနေ
          <p>Medical Emergency</p>
        </button>
        <button className = "button-immigration" onClick={() => navigate("/immigration")}>
          လူဝင်မှုကြီးကြပ်ရေး
          <p>Immigration</p>
        </button>
      </div>
      <div className="instruction">
        <h3>အသုံးပြုနည်း (How To Use)</h3>
        <ol>
          <li>အထက်ပါ ခလုတ်များမှ သင့်အခြေအနေနှင့် ကိုက်ညီသော ခလုတ်ကို ရွေးချယ်ပါ။ (Choose the situation above) </li>
          <li>ကျေးဇူးပြု၍ မြန်မာဘာသာဖြင့် အခြေအနေကို ရှင်းပြပါ၊ ၎င်းကို အင်္ဂလိပ်ဘာသာဖြင့် ဘာသာပြန်ပါမည်။ (Explain the situation in Burmese,and the app will translate)</li>
          <li>ထိတ်လန့်ကြောက်ရွံ့မှု မဖြစ်ပါနှင့်။(Please don't be scared or panic)</li>
        </ol>
      </div>
    </>
  );
}
