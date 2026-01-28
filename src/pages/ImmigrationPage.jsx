import { Header } from "../components/Header";
import { ConversationTabs } from "../components/ConversationTabs";
export function ImmigrationPage(){
    return(
        <div className = "immigration-container">
            <Header className="header"/>
            <ConversationTabs />
        </div>
        
    );
}