import { Header } from "../components/Header";
import { NavLink } from "react-router";
import "./HomePage.css";
export function HomePage() {
  return (
    <>
      <title>Dear Voice</title>
      <Header />
      <h2>What's Happening ?</h2>
      <div className="button-container">
        <button>
          <NavLink to="/police">Police (ရဲ)</NavLink>
        </button>
        <button>Medical Emergency (ဆေးဘက်ဆိုင်ရာအရေးပေါ်အခြေအနေ)</button>
        <button>Immigration (လူဝင်မှုကြီးကြပ်ရေး)</button>
      </div>
    </>
  );
}
