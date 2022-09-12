const chainId = 137;
const NVAContractAddress = "0x5fAecbfD3eD2D51d49a0408377F48bDC5FB11020";
const NVAabi = [
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_daiToken",
                "type": "address"
            },
            {
                "internalType": "contract NVAToken",
                "name": "_NVAtoken",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Burn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Stake",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Unstake",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "YieldWithdraw",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "NVAtoken",
        "outputs": [
            {
                "internalType": "contract NVAToken",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "calculateYieldTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "calculateYieldTotal",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "new_rate",
                "type": "uint256"
            }
        ],
        "name": "changeRate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractDai",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "daiToken",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isStaking",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "pmknBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rate",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "stake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "stakingBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "startTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "unstake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawDai",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawYield",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
        ];


window.onload = async function() {
    if (window.ethereum !== "undefined") {
        if (parseInt(window.ethereum.networkVersion !== chainId)) {
            alert("Please connect wallet and switch to Polygon Mainnet (id: " + chainId + ")")
            return
        }
        try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const NVAContract = new ethers.Contract(NVAContractAddress, NVAabi, provider)
        const staked_it = document.getElementById("staked")
        const reward_it = document.getElementById("reward")
        const address = await signer.getAddress()
        var staked = await NVAContract.stakingBalance(address)
        staked = staked / 10 ** 18
        var reward = await NVAContract.calculateYieldTotal(address)
        reward = reward / 10 ** 18
        staked_it.textContent = staked
        reward_it.textContent = reward
        } catch {
            alert("Please connect wallet and switch to Polygon Mainnet (id: " + chainId + ")")
        }
        alert("WELCOME!\nSince we want to launch this new farming platform at it's best: if you will stake your DAI with us for 2 or more years you will get a 0.20% APY on DAIs!\nOnce you have staked for more than 2 years, please contact us at https://t.me/Condonato")
    }
}


async function calcDAI(theEvent) {
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
    }
    nva = document.getElementById("NVA")
    dai = document.getElementById("DAI")
    value = parseFloat(nva.value) * 100 / 1100.05
    if (nva.value === "") {
        dai.value = ""
        dai.placeholder = "DAI"
        return false
    }
    dai.value = value
    value.toFixed(30)
}

async function calcNVA(theEvent) {
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
    }
    nva = document.getElementById("NVA")
    dai = document.getElementById("DAI")
    value = parseFloat(dai.value) * 1100.05 / 100
    if (dai.value === "") {
        nva.value = ""
        nva.placeholder = "NVA"
        return false
    }
    nva.value = value.toFixed(30)
}

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        await ethereum.request({method: "eth_requestAccounts"})
        if (parseInt(window.ethereum.networkVersion !== chainId)) {
            alert("Please connect wallet and switch to Polygon Mainnet (id: " + chainId + ")")
            return
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const NVAContract = new ethers.Contract(NVAContractAddress, NVAabi, signer)
        const staked_it = document.getElementById("staked")
        const reward_it = document.getElementById("reward")
        const address = await signer.getAddress()
        var staked = await NVAContract.stakingBalance(address)
        staked = staked / 10 ** 18
        var reward = await NVAContract.calculateYieldTotal(address)
        reward = reward / 10 ** 18
        staked_it.textContent = staked
        reward_it.textContent = reward
    }
}


async function unstake() {

    var network = parseInt(window.ethereum.networkVersion)
    if (network !== chainId) {
        alert("Please switch to Polygon mainnet network (id: "+ chainId + ")")
        return
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const contract = new ethers.Contract(NVAContractAddress, NVAabi, signer)
    const address = await signer.getAddress()
    var bal = await contract.stakingBalance(address)
    var contract_balance = await contract.contractDai()
    if (contract_balance < bal) {
        alert("The smart contract does not have enough balance to perform this transaction. Please contract the support on telegram at: https://t.me/condonato")
        return false;
    }
    const tx = await contract.unstake(bal)
    try{
        let receipt = await tx.wait()
        alert("Succesfully unstaked. TX Hash: " + tx.hash)
    } catch (error) {
        alert("ERROR: " + error)
        return false;
    }

    
}

async function reqApprove() {
    dai = document.getElementById("DAI")
    if (parseFloat(dai.value) < 8) {
        alert("Staked DAI must be atleast 8")
        return false
    }
    var network = parseInt(window.ethereum.networkVersion)
    if (network !== chainId) {
        alert("Please switch to Polygon mainnet network (id: "+ chainId + ")")
        return
    }
    const contractAddress = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063";
    // hidden code
        const DAIabi = [
            {
                "constant": true,
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_spender",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "name": "",
                        "type": "string"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "name": "_value",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "name": "_spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "payable": true,
                "stateMutability": "payable",
                "type": "fallback"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            }
        ]
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const DAIcontract = new ethers.Contract(contractAddress, DAIabi, signer)
    const NVAContract = new ethers.Contract(NVAContractAddress, NVAabi, signer)
    stakebtn = document.getElementById("stake-btn")
    approvebtn = document.getElementById("approve-btn")
    value = (dai.value * 10 ** 18).toString()
    const tx = await DAIcontract.approve(NVAContractAddress, value)
    try {
        let receipt = await tx.wait()
        approvebtn.disabled = true
        approvebtn.style.backgroundColor = "#717171"
        stakebtn.disabled = false
        stakebtn.style.backgroundColor = "#69bcef"
        alert("Succesfully Approved tokens. TX Hash: " + tx.hash)
    } catch (error) {
        alert("ERROR: " + error)
        return false
    }
}

async function withdrawYield() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const NVAContract = new ethers.Contract(NVAContractAddress, NVAabi, signer)
    const address = await signer.getAddress()
    const tx = await NVAContract.withdrawYield()
    try {
        let receipt = await tx.wait()
        alert("Succesfully Withdrawn NVA Tokens. TX Hash: " + tx.hash)
    } catch (error) {
        alert("ERROR: " + error)
        return false
    }
}

async function stake() {
    dai = document.getElementById("DAI")
    if (parseFloat(dai.value) < 8) {
        alert("Staked DAI must be atleast 8")
        return false
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const NVAContract = new ethers.Contract(NVAContractAddress, NVAabi, signer)
    value = (dai.value*10**18).toString()
    const tx = await NVAContract.stake(value)
    try {
        let receipt = await tx.wait()
        stakebtn = document.getElementById("stake-btn")
        approvebtn = document.getElementById("approve-btn")
        approvebtn.disabled = false
        approvebtn.style.backgroundColor = "#69bcef"
        stakebtn.disabled = true
        approvebtn.style.backgroundColor = "#717171"
        alert("Stake started. TX hash: " + tx.hash)
    } catch (error) {
        alert("ERROR: " + error)
        return false
    }
}