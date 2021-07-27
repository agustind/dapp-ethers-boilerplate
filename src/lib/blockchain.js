import { setGlobal } from 'reactn';
import { ethers } from 'ethers';

export async function connectWallet(){

    if (typeof window.ethereum !== 'undefined') {

        window.provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.provider.send("eth_requestAccounts", []);
        window.signer = window.provider.getSigner();

        window.provider.getNetwork().then(n => setGlobal({ chainId: parseInt(n.chainId) }));
        window.ethereum.on('chainChanged', id => setGlobal({ chainId: parseInt(id) }));

        var address = await window.signer.getAddress();

        setGlobal({ address });

    }else{
        alert('Please install Metamask');
    }
}