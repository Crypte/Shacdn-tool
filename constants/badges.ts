// icone pour badge
import { IconType } from "react-icons";

import {AiFillTool,AiFillWindows,AiFillBank,AiOutlineGoogle,AiFillCheckCircle,AiFillApple,AiOutlineSwap} from 'react-icons/ai'
import {FaAndroid,FaKey,FaUsb,FaBitcoin,FaChrome,FaGooglePlay,FaLinux,FaAppStoreIos,FaApple,FaIdCard,FaWallet,FaCoins,FaEthereum,FaCodeBranch,FaWindows,} from 'react-icons/fa'
import {BiWorld,BiHide,BiCoinStack,BiCheckDouble,BiTargetLock,BiCandles,BiSolidMedal} from 'react-icons/bi'
import {BsToggleOn,BsBrowserChrome,BsCurrencyExchange,BsFillCreditCard2BackFill,BsBrowserFirefox,BsCloudCheckFill,BsNvidia,BsBrowserEdge} from 'react-icons/bs'
import {GoDeviceMobile} from 'react-icons/go'
import {TbTargetOff,TbExchange} from 'react-icons/tb'
import {SiYubico,SiAppstore,SiPolkadot,SiMatrix} from 'react-icons/si'
import {MdMoneyOffCsred, MdLocalAirport} from 'react-icons/md'
import {DiBingSmall} from 'react-icons/di'
import { GiReceiveMoney } from "react-icons/gi";
import { IoHardwareChip } from "react-icons/io5";
import {IoLogoAndroid} from "react-icons/io"
import { RiFinderFill } from "react-icons/ri";



export interface BADGE_TAB {
  name: string;
  icon: IconType;
  color?:string;
}

export const BADGE_TAB: Record<string, BADGE_TAB> = {
  Ourchoice: {
    name: "Our choice",
    icon: BiSolidMedal,
    color:"#ffd500"
  },
  Opensource: {
    name: "Open source",
    icon: FaCodeBranch,
  },
  Encrypted: {
    name: "Encrypted",
    icon: FaKey,
  },
  Browser: {
    name: "Browser",
    icon: BiWorld,
  },
  Anonymous: {
    name: "Anonymous",
    icon: BiHide,
  },
  Ads:{
    name: "With or Without ads",
    icon: BsToggleOn,
  },
  Basedonchromium: {
    name: "Based on chromium",
    icon: BsBrowserChrome,
  },
  Monetizedata: {
    name: "Monetize your data",
    icon: BiCoinStack,
  },
  Mobile: {
    name: "Mobile only",
    icon: GoDeviceMobile,
  },
  Antitrackers: {
    name: "Anti-trackers",
    icon: TbTargetOff,
  },
  PhysicalKey: {
    name: "Physical key",
    icon: FaUsb,
  },
  Yubikeys: {
    name: "Yubikeys",
    icon: SiYubico,
    color:"#89C129"
  },
  Exchange: {
    name: "Exchange",
    icon: BsCurrencyExchange,
  },
  Creditcard: {
    name: "Credit card",
    icon: BsFillCreditCard2BackFill,
  },
  HardwareWallet: {
    name: "Hardware Wallet",
    icon: IoHardwareChip,
  },
  Freeplan: {
    name: "Free Plan",
    icon: MdMoneyOffCsred,
  },
  Bitcoin: {
    name: "Bitcoin",
    icon: FaBitcoin,
    color:"#F7931A"
  },
  Bitcoinonly: {
    name: "Bitcoin only",
    icon: FaBitcoin,
    color:"#F7931A",
  },
  Basedonfirefox: {
    name: "Based on Firefox",
    icon: BsBrowserFirefox,
  },
  Advanced: {
    name: "Advanced",
    icon: AiFillTool,
  },
  Firefox: {
    name: "Firefox",
    icon: BsBrowserFirefox,
  },
  Chrome: {
    name: "Chrome",
    icon: FaChrome,
  },

  Cloud: {
    name: "Cloud",
    icon: BsCloudCheckFill,
  },
  Secondauth: {
    name: "2nd authentification",
    icon: BiCheckDouble,
  },
  NoKYC: {
    name: "No KYC",
    icon: FaIdCard,
  },
  Walletrequired: {
    name: "Wallet required",
    icon: FaWallet,
  },
  DEX: {
    name: "DEX",
    icon: TbExchange,
  },
  Ledgersupport: {
    name: "Ledger support",
    icon: FaUsb,
  },
  Ethereum: {
    name: "Ethereum",
    icon: FaEthereum,
  },
  Polkadot: {
    name: "Polkadot",
    icon: SiPolkadot,
    color:"#FF09B6"
  },
  Banktransfer: {
    name: "Bank transfer",
    icon: AiFillBank,
  },
  Ownindexer: {
    name: "Own indexer",
    icon: BiTargetLock,
  },
  Googleindexer: {
    name: "Google indexer",
    icon: AiOutlineGoogle,
  },
  Bingindexer: {
    name: "Bing indexer",
    icon: DiBingSmall,
  },
  Proofofreserves: {
    name: "Proof of reserves",
    icon: AiFillCheckCircle,
    color:"#0BDA51",
  },
  Applepay: {
    name: "Apple Pay",
    icon: AiFillApple,
  },
  Googlepay: {
    name: "Google Pay",
    icon: AiOutlineGoogle,
  },
  RTXOnly: {
    name: "RTX only",
    icon: BsNvidia,
  },
  Margin: {
    name: "Margin",
    icon: BiCandles,
  },
  Spot: {
    name: "Spot",
    icon: AiOutlineSwap,
  },
  Edge: {
    name: "Edge",
    icon: BsBrowserEdge,
  },
  Allcrypto: {
    name: "All crypto",
    icon: FaCoins,
  },
  Stakeandyield: {
    name: "Earn",
    icon: GiReceiveMoney,
  },
  Local: {
    name: "Local",
    icon: MdLocalAirport,
  },
  Matrix: {
    name: "Protocole Matrix",
    icon: SiMatrix,
  },

}as const;

// icone pour platform

export interface PLATFORM_TAB {
  category:string;
  icon: IconType;
}


export const PLATFORM_TAB: Record<string, PLATFORM_TAB> = {
Mac: {
  category :"desktop",
  icon: FaApple,
},
Windows: {
  category :"desktop",
  icon: FaWindows,
},
Linux: {
  category :"desktop",
  icon: FaLinux,
},
Ios: {
  category :"mobile",
  icon: FaAppStoreIos,
},
Browser: {
  category :"Browser",
  icon: BiWorld,
},
Android: {
  category :"mobile",
  icon: IoLogoAndroid,
}
}




  
