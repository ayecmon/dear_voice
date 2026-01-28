import { Header } from "../components/Header";
import { ConversationTabs } from "../components/ConversationTabs";
export function MedicalEmergencyPage() {
    return(
        <div className="medic-container">
            <Header className="header"/>
            <ConversationTabs />
        </div>
        
    );
}