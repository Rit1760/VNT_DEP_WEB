
import Link from "next/link";
import "../Styles/EVHOME.css";

export default function EVHOME() {
  return (
    <div className="fixed-bottom-button">
      <Link href="/">
        <button className="cta-button">EV HOME</button>
      </Link>
    </div>
  );
} 