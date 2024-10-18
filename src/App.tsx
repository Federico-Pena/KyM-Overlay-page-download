import { useState } from "react";
import "./App.css";
import { texts } from "./texts";

type Language = "en" | "es";
function App() {
  const [language, setLanguage] = useState<Language>("en");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  const t = texts[language];

  return (
    <main>
      <header>
        <div className="language-selector">
          <label htmlFor="language">Lang: </label>
          <select
            id="language"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>

        <h1>{t.title}</h1>
        <a
          href="./downloadable/KyM_Overlay-setup.zip"
          download
          className="download-button"
          aria-label={t.download}
        >
          {t.download}
        </a>
        <span>{t.platform}</span>
      </header>

      <section>
        <video
          src="demo.mp4"
          autoPlay
          loop
          muted
          className="hero-video"
        ></video>

        <h2>{t.featuresTitle}</h2>
        <ul>
          {t.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{t.whyTitle}</h2>
        <p>{t.whyText}</p>
      </section>

      <footer>
        <p>
          {t.contact}{" "}
          <a href="mailto:federpena22@gmail.com">federpena22@gmail.com</a>.
        </p>
      </footer>
    </main>
  );
}

export default App;
