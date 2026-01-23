import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./Conversation.css";

export function Conversation() {
  return (
    <div className= "conversation-container">
       <Tabs className="tab-options">
      <Tab label="စကားပြော Conversation "> </Tab>
      <Tab label="အသုံးများသော စကားစုများ Phrases "> </Tab>
    </Tabs>
    </div>
   
  );
}
