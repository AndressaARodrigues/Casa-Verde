"use client"
import AssinaturaNewsletter from "./components/AssinaturaNewsletter";
import ComoConseguir from "./components/ComoConseguir";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main>
      <Menu/>
      <AssinaturaNewsletter />
      <ComoConseguir/>
    </main>
  );
}
