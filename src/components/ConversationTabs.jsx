
import { Translators } from "./Translators";
import { CommonPhrases } from "./CommonPhrases";
import { useState } from "react";
import "./ConversationTabs.css";

export function ConversationTabs() {
  const [activeTab, setActiveTab] = useState(null);
  return (
    <>
      <p className="warning-label">အရေးပေါ်အခြေအနေရှိပါက 911 သို့ခေါ်ဆိုပါ။ (If there is an emergency situation, Please call 911)</p>
      <div className="button-flex-container">
        <button onClick={() => setActiveTab("Translators")} className="button-options">စကားပြော Conversation</button>
        <button onClick={() => setActiveTab("CommonPhrases")}className="button-options">
          အသုံးများသော စကားစုများ Phrases
        </button>
      </div>
      {activeTab === "Translators" && <Translators />}
      {activeTab === "CommonPhrases" && <CommonPhrases />}
    </>
  );
}
