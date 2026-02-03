import { Header } from "../components/Header";
import { ConversationTabs } from "../components/ConversationTabs";
import "./PolicePage.css";

export function PolicePage() {
  return (
    <>
      <Header className="police-header"/>
      <ConversationTabs />
    </>
  );
}
