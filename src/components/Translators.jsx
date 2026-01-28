import "./Translator.css";
export function Translators(){
    return(
        <div className="translators-flex-container">
            <button className="burmese-translator">
                MM မြန်မာ
                <p> Speak Burmese</p>
            </button>
            <button className="english-translator">
                En English
                <p>Speak English</p>
            </button>
        </div>
    );
}