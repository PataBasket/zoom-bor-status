import { useState } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase";

function App() {
  const [message, setMessage] = useState("");

  const testConnection = async () => {
    try {
      const healthCheck = httpsCallable<
        void,
        { message: string }
      >(functions, "healthCheck");

      const result = await healthCheck();

      setMessage(result.data.message);
    } catch (error) {
      console.error(error);
      setMessage("接続失敗");
    }
  };

  return (
    <div>
      <h1>Zoom BOR App</h1>

      <button onClick={testConnection}>
        Firebase接続テスト
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;
