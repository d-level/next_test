import "@/styles/_components/Footer.css"

// TODO: Only show is the user is logged.
export default function Footer() {
	return (
    <footer className="footer">
      <div className="container">
        <p className="footer__copyright">
          &copy; 2026 Absencia. Tous droits réservés.
        </p>

        <p className="footer__authors">
          Projet final de la formation Diginamic CDA (2023-2024) réalisé par <a href="https://github.com/CedricBds" target="_blank">Cédric Baudais</a>, <a href="https://github.com/PamelaCalcei" target="_blank">Pamela Calcei</a>, <a href="https://github.com/Nerfez" target="_blank">Clément Olivier</a> et <a href="https://github.com/d-level" target="_blank">Mattéo Legagneux</a>.
        </p>
      </div>
    </footer>
  );
}