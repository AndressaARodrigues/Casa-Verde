"use client"
import AssinaturaNewsletter from "./components/AssinaturaNewsletter";
import ComoConseguir from "./components/ComoConseguir";
import ConhecaOfertas from "./components/ConhecaOfertas";
import Menu from "./components/Menu";
import OfertasCard from "./components/OfertasCard";

export default function Home() {
  return (
    <main>
      <Menu/>
      <AssinaturaNewsletter />
      <ComoConseguir/>
      <ConhecaOfertas/>
    </main>
  );
}
