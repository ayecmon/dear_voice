
import { Translators } from "./Translators";
import { useState } from "react";
import "./ConversationTabs.css";

export function ConversationTabs() {
  const [showTranslators, setShowTranslators] = useState(false);
  return (
    <>
      <p className="warning-label">အရေးပေါ်အခြေအနေရှိပါက 911 သို့ခေါ်ဆိုပါ။ (If there is an emergency situation, Please call 911)</p>
      <div className="button-flex-container">
        <button onClick={() => setShowTranslators(true)} className="button-options">စကားပြော Conversation</button>
        <button className="button-options">
          အသုံးများသော စကားစုများ Phrases
        </button>
      </div>
      {showTranslators && <Translators />}
    </>
  );
}
