import { useState } from "react";
import Login from "./components/Login/Login";
import Web3 from "web3";

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);

  const onLogin = async (provider) => {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
      setIsConnected(true);
    }
  };

  return (
    <div>
      <div>
        {!isConnected?<div>MetaMask is locked - please login</div>:<div>{currentAccount}</div>}
        {!isConnected && <Login onLogin={onLogin} />}
      </div>
    </div>
  );
}

export default App;
