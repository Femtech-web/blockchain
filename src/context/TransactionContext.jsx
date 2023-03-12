import React, { useEffect, useState, createContext} from "react";
import { ethers }  from "ethers";
import { contractAbi, contractAddress } from '../utils/constants';

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractAbi, signer);

   return transactionContract;
};

export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] = useState(null);
    const [formData, setFormData] = useState({addressTo: '', amount: '', keyword: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));

    const handleChange = (e) => {
        setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}));
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert('please install metamask');

            const accounts = await ethereum.request({method: 'eth_accounts'});
            
            if(accounts.length){
                setCurrentAccount(accounts[0]);

                getTransactions();

            } else {
                console.log('No ethereum accounts found')
            }
        } catch (error) {

            console.log(error);
            throw new Error('No Ethereum object.')
        }
    };

    const checkIfTransactionCount = async () => {
        try {
            const transactionContract = getEthereumContract();
            const transactionCount = await transactionContract.getTransactionsSCount();

            localStorage.setItem('transactionCount', transactionCount.toNumber());

        } catch (error) {
            
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert('please install metamask');

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            setCurrentAccount(accounts[0]);
        } catch (error) {

            console.log(error);
            
            throw new Error('No Ethereum object.')
        }
    }

    const sendTransactions = async () => {
        try {
            if(!ethereum) return alert('please install metamask');

            const {addressTo, amount, keyword, message} = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = new ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x8453',
                    value: parsedAmount._hex,
                }]
            })

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            setIsLoading(false);

            const transactionCount = await transactionContract.getTransactionsCount();
            setTransactionCount(transactionCount.toNumber());

            window.location.reload()
        } catch (error) {
            
            console.log(error);
            
            throw new Error('No Ethereum object.')
        }
    }

    const getTransactions = async () => {
        try {
            if(!ethereum) return alert('please install metamask');

            const transactionContract = getEthereumContract();
            const availableTransactions = await transactionContract.getAllTransactions();

            const structuredTransactions = availableTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber()).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10** 18)
            }))

                setTransactions(structuredTransactions)                
        } catch (error) {
            
        }
    }
    
    useEffect(() => {
            checkIfWalletIsConnected();
            checkIfTransactionCount();
    }, [])
   return (<TransactionContext.Provider 
   value={{
    connectWallet, 
    currentAccount, 
    formData,
    setFormData,
    handleChange, 
    sendTransactions, 
    isLoading, 
    transactions}} >
    {children}
    </TransactionContext.Provider>)
}