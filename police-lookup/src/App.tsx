import { useState } from "react";
import "./App.css"; // Import the CSS file

const correctName = "blanche"; // Replace with the actual criminal name

export default function PoliceLookup() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleCheck = () => {
    if (name.trim().toLowerCase() !== correctName.toLowerCase()) {
      setMessage("❌ Suivant vos consignes, nous avons arrêté "+name+"... Et ce n'était pas Belette. La pilule de cyanure a été croquée, vous avez maintenant cela sur la conscience. Mais vous avez une chance malgré tout : Belette n'a pas encore pris la fuite ! Vous pouvez réessayer... En essayant de viser juste, cette fois.");
    } else {
      setMessage("✅ Félicitations, vous avez trouvé Belette ! Il s'agissait bien de Blanche, en effet... Le mandat d'arrêt a été prononcé, elle n'aura plus aucune influence à Amsterdam. Elle a cependant réussi à prendre la fuite, donc qui sait ce que l'avenir vous réserve... Mais pour l'instant c'est une victoire, fêtez ça dignement !");
    }
  };

  return (
    <div className="container">
      <div className="lookup-box">
        <h1>Police Criminal Lookup</h1>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleCheck}>Check</button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
