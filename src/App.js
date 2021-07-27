import './App.css';
import { useGlobal } from "reactn";
import { connectWallet } from './lib/blockchain';


function App() {

    const [ address ] = useGlobal('address');
    const [ chainId ] = useGlobal('chainId');

    // metamask is not installed
    if(typeof window.ethereum === 'undefined'){
        return (
            <div>
                Please install Metamask to use this application
            </div>
        );
    }

    // we dont have users address, metamask is not connected
    if(!address){
        return (
            <div>
                <button onClick={() => connectWallet()}>Connect with Metamask</button>
            </div>
        );
    }

    // user has a different network selected
    if(chainId !== 4){
        return (<div>
            Wrong network, please switch to rinkeby (selected {chainId})
        </div>)
    }

    // everything correct, user is connected and network is right!
    return (<div>
        <div>{address}</div>
        <div>{chainId}</div>
    </div>)
}

export default App;
