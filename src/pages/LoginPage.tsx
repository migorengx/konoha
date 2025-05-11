
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Random name generator for simulating 290 million possibilities
const firstNames = [
  "Naruto", "Sakura", "Sasuke", "Hinata", "Shikamaru", "Ino", "Choji", "Kiba", 
  "Neji", "Lee", "Tenten", "Shino", "Sai", "Kakashi", "Kurenai", "Asuma", 
  "Gai", "Tsunade", "Jiraiya", "Orochimaru", "Itachi", "Kisame", "Deidara", 
  "Sasori", "Hidan", "Konan", "Nagato", "Yahiko", "Obito", "Madara",
  "Hashirama", "Tobirama", "Hiruzen", "Minato", "Kushina", "Boruto", "Sarada",
  "Mitsuki", "Kawaki", "Temari", "Kankuro", "Gaara", "Killer", "Konohamaru",
  "Teuchi", "Ayame", "Danzo", "Shizune", "Yamato"
];

const lastNames = [
  "Uzumaki", "Haruno", "Uchiha", "Hyuga", "Nara", "Yamanaka", "Akimichi", 
  "Inuzuka", "Hyuga", "Rock", "Aburame", "Hatake", "Yuhi", "Sarutobi", 
  "Might", "Senju", "Umino", "Namikaze", "Otsutsuki", "Hoshigaki", 
  "Akasuna", "Jashin", "Amegakure", "Uchiha-Madara", "Shimura", "Terumi",
  "Hozuki", "Momochi", "Yuki", "Kurama", "Kaguya", "Shiranui", "Mitarashi",
  "Morino", "Gekko", "Namiashi", "Hagane", "Kamizuki", "Tatami", "Ebisu"
];

const middleNames = [
  "", "no", "of", "the", "from", "son-of", "daughter-of", "clan", "family", 
  "heir", "legacy", "shadow", "light", "spirit", "chakra", "ninja", "sensei"
];

const storageKey = "konoha_user";

function generateRandomName() {
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const middle = Math.random() > 0.5 ? middleNames[Math.floor(Math.random() * middleNames.length)] : "";
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  
  return middle ? `${first} ${middle} ${last}` : `${first} ${last}`;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState(generateRandomName());

  const handleLogin = () => {
    // Store just "Konoha Daily" as the name, not the random name
    localStorage.setItem(storageKey, "Konoha Daily");
    navigate("/");
  };

  const handleRandomize = () => {
    setName(generateRandomName());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-secondary/70 glass-card p-8 rounded-xl flex flex-col items-center max-w-sm mx-auto shadow-xl">
        <h1 className="text-2xl font-bold mb-4">Anonymous Login</h1>
        <p className="mb-4 text-muted-foreground text-center">
          You must login to post anonymously.
          <br />
          Your random name: <span className="font-semibold text-accent">{name}</span>
        </p>
        <div className="flex gap-2 w-full justify-center mb-6">
          <Button variant="secondary" onClick={handleRandomize}>Randomize</Button>
          <Button onClick={handleLogin} className="bg-accent text-accent-foreground hover:bg-accent/80 w-32">Login</Button>
        </div>
        <span className="text-xs text-muted-foreground text-center">
          * Only used to prevent bots. Your posts will appear from "Konoha Daily".
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
