import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import "./HomePage.css";
export function HomePage() {
  return (
    <>
      <title>Dear Voice</title>
      <Header />
      <h2>What's Happening ?</h2>
      <div className="button-container">
        <button>
          <Link to="/police">Police (ရဲ)</Link>
        </button>
        <button>Medical Emergency (ဆေးဘက်ဆိုင်ရာအရေးပေါ်အခြေအနေ)</button>
        <button>Immigration (လူဝင်မှုကြီးကြပ်ရေး)</button>
      </div>
    </>
  );
}
