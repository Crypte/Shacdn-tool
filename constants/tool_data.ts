

export const TOOL_LIST = [
    {   id : 1,
        nom: "Proton Mail",
        url: "proton-mail",
        badge:["Ourchoice","Opensource","Encrypted"  ],
        description: "Renowned for its strict adherence to privacy, Proton Mail offers encrypted email services from Switzerland, utilizing the country's stringent privacy laws to protect user data.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/proton.png",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/protonfull.png",
        platform:["Mac","Ios","Android","Windows","Linux","Browser"],
        link:"https://pr.tn/ref/GE6SVZ71VBHG"
    },
    {
        id : 2,
        nom: "StartMail",
        badge:["Browser","Encrypted"],
        description: " StartMail provides a secure email environment with a familiar interface, featuring unique tools like auto-deletion and alias creation to enhance user privacy.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/startmail.jpg",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/startmailfull.png",
        platform:["Browser"],
        link:"https://www.startmail.com/en/"
    },
    {   
        id : 3,
        nom: "Libre Wolf",
        url: "libre-Wolf",
        badge:["Ourchoice", "Opensource","Basedonfirefox" ],
        description: "A privacy-centric browser, Libre Wolf is built on Firefox’s architecture but removes telemetry and integrates privacy enhancements by default.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/libre-wolf.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/librewolffull.png",
        link:"https://librewolf.net/"
    }, 
    {
        id: 4,
        nom: "Tor Browser",
        url: "tor-browser",
        badge:["Opensource", "Anonymous","Basedonfirefox" ],
        description: "Distinctive for its approach to anonymity, Tor Browser routes user data through multiple nodes in the Tor network, ensuring untraceable web browsing.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/tor.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/torfull.png",
        link: "https://www.torproject.org/"
      },
      {
        id: 5,
        nom: "Brave",
        url: "brave",
        badge:["Opensource","Basedonchromium","Monetizedata" ],
        description: "Brave redefines browser monetization by integrating an opt-in ad viewing system that rewards users with cryptocurrency, while maintaining a strong privacy stance.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/brave.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bravefull.png",
        link: "https://brave.com/"
      },
      {
        id: 6,
        nom: "Firefox Focus",
        url: "firefox-focus",
        badge:["Opensource", "Mobile"],
        description: "Designed for mobile use, Firefox Focus automatically deletes history and blocks a wide range of online trackers for a clean, private browsing experience.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/firefox-focus.jpeg",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bravefull.png",
        link: "https://www.mozilla.org/en-US/firefox/browsers/mobile/focus/"
      },
      {
        id: 7,
        nom: "YubiKey",
        url: "yubikey",
        badge:["Ourchoice", "PhysicalKey","Secondauth"],
        description: "YubiKey stands out by offering physical two-factor authentication which is more secure against phishing attacks than software-based solutions.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/yubico.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/yubicofull.png",
        link: "https://www.yubico.com/"
      },
      {
        id: 8,
        nom: "Authy",
        url: "authy",
       
        description: "Authy sets itself apart with its multi-device synchronization, allowing users to access their two-factor authentication codes from any device, enhancing convenience and security.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/authy.png",
        url_img: "",
        link: "https://authy.com/"
      },
      {
        id: 9,
        nom: "Nextcloud",
        url: "nextcloud",
        badge:["Opensource", "Encrypted"],
        description: "Unique in its private cloud storage solution, Nextcloud allows users to self-host their cloud services, giving them full control over their data.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nextcloud-logo.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/nextcloudfull.png",
        link: "https://nextcloud.com/"
      },
      {
        id: 10,
        nom: "KeepassXC",
        url: "keepassxc",
        badge:["Ourchoice","Opensource", "Yubikeys"],
        description: "Notable for its robust security features, KeepassXC uses extensive encryption allowing for secure storage and management of passwords across multiple platforms.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/keepassxc.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/keepassxcfull.png",
        link: "https://keepassxc.org/"
      },
      {
        id: 11,
        nom: "Keepassium",
        url: "keepassium",
        badge:["Ourchoice","Opensource","Yubikeys"],
        description: "Keepassium excels in mobile password management, integrating Keepass with iOS to deliver a seamless and secure user experience.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/keepassium.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/keepassiumfull.png",
        link: "https://keepassium.com/"
      },
      {
        id: 12,
        nom: "Electrum Wallet",
        url: "",
        badge:["Opensource","Bitcoinonly","Ledgersupport", "Advanced"],
        description: " Electrum stands out by offering a lightweight Bitcoin wallet with features like cold storage and multisig functionality, appealing to advanced users.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/electrum.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/electrumfull.png",
        link: "https://electrum.org/#home"
      },
      {
        id: 13,
        nom: "Signal",
        url: "signal",
        badge:["Ourchoice","Opensource","Encrypted"],
        description: "Signal is distinguished by its state-of-the-art end-to-end encryption for messages and calls, prioritizing security and privacy without storing user data.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/signal.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/signalfull.png",
        link: "https://www.signal.org/",
        info: "info"
      },
      {
        id: 14,
        nom: "Session",
        url: "session",
        badge:["Opensource","Encrypted"],
        description: "Session offers decentralized messaging, ensuring privacy and security without relying on typical centralized servers, and uses onion routing to protect user identities.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/session.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/sessionfull.png",
        link: "https://getsession.org/"
      },
      {
        id: 15,
        nom: "ProtonVPN",
        url: "protonvpn",
        badge:["Ourchoice"],
        description: "ProtonVPN is known for its Secure Core architecture that routes traffic through multiple servers before leaving its network, providing enhanced security against network-based attacks.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/protonvpn.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/protonvpnfull.png",
        link: "https://protonvpn.com/"
      },
      {
        id: 16,
        nom: "Swissborg",
        url: "swissborg",
        badge:["Ourchoice","Bitcoin","Proofofreserves","Spot"],
        description: "Swissborg is pioneering by integrating community-centric features in its wealth management and trading platform, utilizing blockchain technology to democratize finance.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/swissborg.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/swissborgfull.png",
        link: "https://join.swissborg.com/fr/r/louisCEI6",
        offer:"Entre 1 et 100 euros offert(s)"
      },
      {
        id: 17,
        nom: "Ledger",
        url: "ledger",
        badge:["Ourchoice","HardwareWallet","Allcrypto" ],
        description: " Ledger’s hardware wallets are notable for their security, using a unique operating system (BOLOS) and certified secure chip technology to safeguard cryptocurrency assets.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/ledger.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/ledgerfull.png",
        link: "https://shop.ledger.com/fr/?r=9e045121f48b",
      },
      {
        id: 18,
        nom: "Binance",
        url: "binance",
        badge:["Ourchoice","Bitcoin","Proofofreserves","Spot","margin"],
        description: "Binance differentiates itself with a broad array of services including futures, margin trading, and a proprietary secure asset fund for users (SAFU), making it a comprehensive crypto platform.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/binance.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/binancefull.png",
        link: "https://accounts.binance.com/register?ref=A9FUKHBT"
      },
      {
        id: 19,
        nom: "dYdX",
        url: "dydx",
        badge:["Spot","Margin"],
        description: "dYdX stands out by offering decentralized trading with a focus on privacy, enabling users to trade cryptocurrencies without needing to provide personal information.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/dydx.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/dydxfull.png",
        link: "https://bisq.network/"
      }, 
      {
        id: 20,
        nom: "Kaspersky",
        url: "kaspersky",
        badge:["Ourchoice"],
        type: "Antivirus",
        description: "Kaspersky offers distinctive features like real-time protection, system rollback, and privacy cleaner tools, making it a comprehensive security solution.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/kaspersky.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/kasperskyfull.png",
        link: "https://www.kaspersky.fr"
      },
      {
        id: 21,
        nom: "Bitdefender",
        url: "bitdefender",
        badge:["Ourchoice"],
        type: "Antivirus",
        description: "Bitdefender sets itself apart with multi-layer ransomware protection, web attack prevention, and vulnerability assessments, providing top-tier security.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/bitdefender.jpg",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bitdefenderfull.png",
        link: "https://www.bitdefender.com"
      },
      {
        id: 22,
        nom: "Veracrypt",
        url: "veracrypt",
        badge:["Ourchoice","Opensource"],
        type: "Chiffrement",
        description: "VeraCrypt enhances security by offering hidden volumes within encrypted disks, making it impossible to prove the existence of data stored this way.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/veracrypt.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.veracrypt.fr/en/Home.html"
      },
      {
        id: 23,
        nom: "Obsidian",
        url: "obsidian",
        badge:["Ourchoice","Local"],
        type: "Notes",
        description: "Unique for its link-based note organization, Obsidian allows users to create a personal knowledge base using interconnected text documents.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/obsidian.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/obsidianfull.png",
        link: "https://obsidian.md"
      },
      {
        id: 24,
        nom: "Logseq",
        url: "logseq",
        badge:["Opensource"],
        type: "Notes",
        description: "Logseq offers a unique outliner-centric interface for note-taking, supporting both markdown and org-mode, catering to users who need structured data and powerful search capabilities.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/logseq.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/logseqfull.png",
        link: "https://logseq.com"
      },
      {
        id: 25,
        nom: "NordVPN",
        url: "nordvpn",
        badge:[""],
        type: "VPN",
        description: "NordVPN is distinct for its Double VPN feature, which routes traffic through two VPN servers, adding an extra layer of security for sensitive online activities.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nordvpn.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/nordvpnfull.png",
        link: "https://nordVPN.com"
      },
      {
        id: 26,
        nom: "Surfshark",
        url: "surfshark",
        badge:["Ourchoice"],
        type: "VPN",
        description: "Surfshark allows unlimited simultaneous connections, making it stand out as a value option for individuals with multiple devices.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/surfshark.jpg",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/surfsharkfull.png",
        link: "https://surfshark.com"
      },
      {
        id: 27,
        nom: "OpenVPN",
        url: "openvpn",
        badge:["Opensource","Advanced"],
        type: "VPN",
        description: "OpenVPN is highly customizable, offering a flexible VPN solution that can be tailored to meet specific security requirements and deployment scenarios.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/openvpn.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://openvpn.net"
      },
      {
        id: 28,
        nom: "Cryptomator",
        url: "cryptomator",
        badge:["Opensource","Cloud","Encrypted"],
        type: "Chiffrement",
        description: "Unique for its client-side encryption, Cryptomator secures files before they are uploaded to any cloud storage, ensuring that no unencrypted data leaves the user’s device.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/cryptomator.svg",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://cryptomator.org"
      },
      {
        id: 29,
        nom: "Yubico Auth",
        url: "yubico-authenticator",
        badge:["Ourchoice","Yubikeys"],
        type: "2FA",
        description: "Unlike typical authenticators, Yubico Authenticator supports NFC, enabling secure two-factor authentication in a tap without relying on a mobile phone’s network connectivity.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/authentificator.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/yubicoauthentificatorfull.png",
        link: "https://www.yubico.com/products/yubico-authenticator/"
      },
      {
        id: 30,
        nom: "Filen",
        url: "filen",
        badge:["Ourchoice","Opensoure","Encrypted"],
        description: "Filen is distinctive for its emphasis on security with zero-knowledge encryption and a straightforward, privacy-focused European service.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/filen.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/filenfull.png",
        link: "https://filen.io/r/16fb5fa982e795e33f3d9780a098b037",
        offer:"20 Go offert"
      },
      {
        id: 31,
        nom: "DuckDuckGo",
        url: "duckduckgo",
        badge:["Ourchoice","Ownindexer"],
        description: "Known for its privacy-first approach, DuckDuckGo does not track its users and offers unique features like bang commands for faster searches and instant answers from a variety of sources.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/duckduckgo.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://duckduckgo.com/"
      },
      {
        id: 32,
        nom: "Qwant",
        url: "qwant",
        badge:["Ownindexer"],
        description: " Distinctive for its commitment to privacy and neutrality, Qwant uses its own indexing engine to provide unprofiled search results and has a strong focus on European data protection standards.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/qwant.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.qwant.com/"
      },
      {
        id: 33,
        nom: "Startpage",
        url: "startpage",
        badge:["Googleindexer"],
        type: "Moteur de recherche",
        description: "Startpage offers anonymous web browsing via an integrated proxy service, allowing users to view websites without revealing their IP address or location, ensuring complete search privacy.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/startpage.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.startpage.com/fr/"
      },
      {
        id: 34,
        nom: "Search.brave",
        url: "brave-search",
        badge:["Ownindexer"],
        description: "Brave Search stands out by not tracking users and by being independent of big tech companies, providing a private and transparent search experience with its own search index.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/bravesearch.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://search.brave.com/"
      },
      {
        id: 35,
        nom: "Mozilla Firefox",
        url: "mozilla-firefox",
        badge:["Opensource"],
        description: " Firefox is unique for its strong privacy tools and open-source transparency, offering extensive customization through add-ons and powerful developer tools.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/firefox.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/firefoxfull.png",
        link: "https://www.mozilla.org/fr/firefox/new/"
      },
      {
        id: 36,
        nom: "uBlock Origin",
        url: "ublock-origin",
        badge:["Ourchoice","Opensource","Chrome","firefox"],
        description: "This extension is distinguished by its efficiency and lower CPU footprint, blocking ads and trackers with a high degree of customization available to users.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/ublockorigin.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/ublockoriginfull.png",
        link: "https://ublockorigin.com/"
      },
      {
        id: 37,
        nom: "Bitwarden",
        url: "bitwarden",
        badge:["Yubikeys"],
        description: "Bitwarden offers a fully open-source password management solution that includes self-hosting options, giving users complete control over their data security and privacy.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/bitwarden.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bitwardenfull.png",
        link: "https://bitwarden.com/"
      },
      {
        id: 38,
        nom: "Malwarebytes",
        url: "malwarebytes",
        description: "Malwarebytes excels with its layered approach to security, combining traditional malware scanning with real-time protection against new and emerging online threats.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/malwarebytes.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/malwarebytesfull.png",
        link: "https://www.malwarebytes.com/"
      },
      {
        id: 39,
        nom: "BleachBit",
        url: "bleachbit",
        description: "BleachBit is notable for its comprehensive cleaning capabilities, which extend beyond simple file deletion to include deep system cleaning and disk space recovery.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/bleachbit.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bleachbitfull.png",
        link: "https://www.bleachbit.org/"
      },
      {
        id: 40,
        nom: "GnuPG",
        url: "gnupg",
        description: "GnuPG is unique for its versatility in encryption, supporting both symmetric and asymmetric encryption methods and a variety of encryption algorithms.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/gnupg.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://gnupg.org/download/"
      },
      {
        id: 41,
        nom: "Bridge Wallet",
        url: "gnupg",
        description: "Bridge Wallet stands out by allowing direct cryptocurrency purchases without KYC checks, focusing on user privacy and convenience.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/mtpelerin.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bridgefull.png",
        link: "http://mtpelerin.com/fr/join?rfr=bWetdkDV"
      },
      {
        id: 42,
        nom: "Aegis Auth",
        url: "gnupg",
        description: "Aegis sets itself apart by storing all authentication data securely on the device itself, not relying on cloud backups, enhancing local control and security.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/aegis.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://getaegis.app"
      },
      {
        id: 44,
        nom: "Paraswap",
        url: "Paraswap",
        badge:["Spot",""],
        description: "Paraswap provides a unique feature by aggregating liquidity from various decentralized exchanges to ensure users always get the best possible rates on their trades.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/paraswap.png",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/paraswapfull.png",
        link: "https://app.paraswap.io/?ref=MHgxRkE2QzdBMkI0ODI9MzQxMkNEQjNFZjZCQzMxRjA1OUFiNTdkN2Y0"
      },
      {
        id: 45,
        nom: "Tutanota",
        url: "tutanota",
        description: "utanota offers an end-to-end encrypted email service that also encrypts the subject line, body, and attachments, not just the message content as most other encrypted services.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/tutanota.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://tutanota.com/"
      },
      {
        id: 46,
        nom: "Metamask",
        url: "metamask",
        type: "",
        description: "Metamask is not just a wallet but also acts as a bridge to the decentralized web, allowing users to interact with decentralized applications directly through their browser.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/metamask.png",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/metamaskfull.png",
        link: "https://metamask.io/"
      },
      {
        id: 47,
        nom: "Talisman",
        url: "metamask",
        description: "Talisman is distinctive for its focus on the privacy and security of cryptocurrency transactions, with advanced features such as end-to-end encryption and transaction anonymity.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/talisman.png",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/talismanfull.png",
        link: "https://www.talisman.xyz"
      },
      {
        id: 48,
        nom: "AdGuard",
        url: "Adguard",
        description: "AdGuard not only blocks ads but also protects users from phishing and malicious websites, offering a comprehensive solution for safer browsing.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/adguard.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://adguard.com/en/welcome.html"
      },
      {
        id: 49,
        nom: "Time Guardian",
        url: "Adguard",
        description: "Time Guardian offers a novel concept of a digital time capsule, using blockchain technology to ensure the longevity and authenticity of stored data.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/timeguardian.jpg",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/timeguardianfull.png",
        link: "https://time-guardian.app/"
      },
      {
        id: 50,
        nom: "Relai.app",
        url: "Adguard",
        badge:["Bitcoin","Spot"],
        description: "Unique in its simplicity, Relai allows for Bitcoin investment via straightforward bank transfers, emphasizing ease of use with no need for registration or KYC.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/relaiapp.png",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/relaiappfull.png",
        link: "https://relai.app/"
      },
      {
        id: 51,
        nom: "Skiff Pages",
        url: "Skiff",
        description: "Skiff Pages stands out for its commitment to data privacy with end-to-end encryption for document sharing and collaboration in a secure environment.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/skiff.png",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/skiffpagefull.png",
        link: "https://skiff.com/pages"
      },{
        id: 52,
        nom: "Skiff Drive",
        url: "Skiff",
        badge:["Opensource"],
        description: "Skiff Drive offers secure cloud storage with a focus on privacy through end-to-end encryption, giving users full control over their data.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/skiff.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/skiffdrivefull.png",
        link: "https://skiff.com/drive"
      },
      {
        id: 53,
        nom: "Joplin",
        url: "Joplin",
        badge:["Opensource",""],
        description: "Joplin’s uniqueness lies in its open-source nature and offline-first approach, providing a high degree of privacy and security for note-taking and data management.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/joplin.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/joplinfull.png",
        link: "https://joplinapp.org/"
      },
      {
        id: 54,
        nom: "KeepassDX",
        url: "keepassdx",
        description: "Specifically designed for Android, KeepassDX offers a clean, intuitive interface and supports the popular KeePass database format, making it an ideal choice for mobile password management.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/keepassdx.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.keepassdx.com/"
      },
      {
        id: 55,
        nom: "Notion",
        url: "notion",
        description: "Notion is unique for its modular approach to organization, allowing users to create custom layouts and databases to manage projects, notes, and tasks in a highly flexible way.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/notion.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/notionfull.png",
        link: "https://www.notion.so/product"
      },
      {
        id: 56,
        nom: "Spectre.app",
        url: "Spectreapp",
        description: "Spectre stands out by using a deterministic algorithm to generate passwords on the fly from your master password, site name, and your username, ensuring you never need to store passwords.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/spectre.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/spectrefull.png",
        link: "https://spectre.app/"
      },
      {
        id: 57,
        nom: "Escalidraw",
        url: "Spectreapp",
        badge:["Opensource","Local","",""],
        description: "Escalidraw distinguishes itself with a focus on simplicity and privacy, offering an intuitive interface for sketching diagrams and collaborative drawing with real-time sync.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/escalidraw.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/escalidrawfull.png",
        link: "https://excalidraw.com/"
      },
      {
        id: 58,
        nom: "Kraken",
        url: "kraken",
        badge:["Proofofreserves","Spot","Margin"],
        description: "Kraken is unique for its comprehensive security measures and a wide range of trading options including futures and margin trading, catering to both beginners and experienced traders.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/kraken.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/krakenfull.png",
        link: "https://www.kraken.com/"
      },
      {
        id: 59,
        nom: "ChatGPT",
        url: "chat-gpt",
        description: "OpenAI's ChatGPT stands out for its advanced natural language processing capabilities, enabling highly conversational interactions and providing insightful and context",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/chatgpt.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/chatgptfull.png",
        link: "https://openai.com/blog/chatgpt"
      },
      {
        id: 60,
        nom: "Grammarly",
        url: "grammarly",
        description: " Grammarly excels with its sophisticated AI-based grammatical correction and style suggestions, helping users improve their writing across many platforms.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/grammarly.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/grammarlyfull.png",
        link: "https://www.grammarly.com/"
      },
      {
        id: 61,
        nom: "Deepl",
        url: "deepl",
        description: "DeepL is renowned for its translation accuracy, utilizing advanced machine learning to deliver more natural translations than other services, supporting a wide range of languages.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/deepl.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/deeplfull.png",
        link: "https://www.deepl.com"
      },
      {
        id: 62,
        nom: "Proton Drive",
        url: "proton-drive",
        badge:["Encrypted"],
        description: "Proton Drive offers a secure cloud storage solution with end-to-end encryption, focusing on user privacy and seamless integration with other Proton services like ProtonMail.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/protondrive.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/protondrivefull.png",
        link: "https://pr.tn/ref/GE6SVZ71VBHG"
      },
      {
        id: 63,
        nom: "NordPass",
        url: "nordpass",
        description: "NordPass offers a distinctive security feature set including data breach scanning and password health reports, enhancing overall cybersecurity awareness and protection.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nordpass.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/nordpassfull.png",
        link: "https://nordpass.com/"
      },
      {
        id: 64,
        nom: "Privacy.com",
        url: "privacy",
        description: "Privacy.com provides unique virtual card capabilities, allowing users to make secure online purchases without revealing their actual credit card information.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/privacy.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://privacy.com/"
      },
      {
        id: 65,
        nom: "Lydia",
        url: "lydia",
        description: "Lydia is notable for its innovative mobile payment solutions in Europe, offering features like instant money transfers and the creation of ephemeral cards for secure transactions.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/lydia.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.lydia-app.com/"
      },
      {
        id: 66,
        nom: "Revolut",
        url: "revolut",
        description: "Revolut distinguishes itself by offering global financial services including currency exchange, budgeting tools, and cryptocurrency support, all within an intuitive app.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/revolut.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.revolut.com/"
      },
      {
        id: 67,
        nom: "Wise",
        url: "wise",
        description: "Wise is unique for its transparent fee structure and real-time exchange rates in international money transfers, making it a favorite for users seeking cost-effective and straightforward solutions.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/wise.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://wise.com/"
      },
      {
        id: 68,
        nom: "Nvidia Broadcast",
        url: "wise",
        description: "NVIDIA Broadcast stands out with AI-powered audio and video enhancements, tailored specifically for content creators looking to improve their production quality.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nvidiabroadcast.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.nvidia.com/fr-fr/geforce/broadcasting/broadcast-app/"
      },
      {
        id: 69,
        nom: "DaVinci Resolve",
        url: "wise",
        description: "Known for its professional-grade video editing capabilities, DaVinci Resolve offers extensive color grading and audio post-production tools, catering to filmmakers and video professionals.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/davinciresolve.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.blackmagicdesign.com/products/davinciresolve"
      },
      {
        id: 70,
        nom: "OBS",
        url: "wise",
        description: "OBS provides a powerful, open-source solution for video recording and live streaming, featuring extensive customization and compatibility with multiple streaming services.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/obs.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://obsproject.com/"
      },
      {
        id: 71,
        nom: "Audacity",
        url: "wise",
        description: "Audacity is unique for its accessibility and comprehensive set of audio editing tools, making it widely used for podcasting, music recording, and audio editing.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/audacity.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.audacityteam.org/"
      },
      {
        id: 72,
        nom: "CapCut",
        url: "wise",
        description: "CapCut offers mobile users powerful video editing tools in a user-friendly interface, making it ideal for quick edits on the go.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/capcut.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.capcut.com/"
      },
      {
        id: 73,
        nom: "Hat.sh",
        url: "wise",
        description: "Hat.sh provides easy-to-use, secure file encryption directly in your browser, supporting strong encryption standards to protect files before they are shared or stored.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/hatsh.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/hatshfull.png",
        link: "https://hat.sh/"
      },
      {
        id: 74,
        nom: "Skiff Mail",
        url: "wise",
        badge:["Opensource"],
        description: "Skiff Mail prioritizes security with end-to-end encryption for email communication, standing out with features like message recall and automatic destruction.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/skiff.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/skiffmailfull.png",
        link: "https://skiff.com/mail"
      },
      {
        id: 75,
        nom: "Proton Pass",
        url: "proton-pass",
        description: "As part of the Proton suite, Proton Pass offers encrypted password management, ensuring user data remains private and secure across multiple devices.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/protonpass.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/protonpassfull.png",
        link: "https://proton.me/pass"
      },
      {
        id: 76,
        nom: "Element",
        url: "element",
        badge:["Matrix"],
        description: "Element uses the decentralized Matrix protocol to offer secure and private communications, providing an alternative to traditional messaging apps with its focus on user-controlled encryption and data ownership.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/element.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/elementfull.png",
        link: "https://element.io/"
      },
      {
        id: 77,
        nom: "Arc",
        url: "element",
        description: "Arc distinguishes itself with a design-centric approach, aiming to reinvigorate the web browsing experience with a focus on usability and customization.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/arc.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/arcfull.png",
        link: "https://arc.net/"
      },
      {
        id: 78,
        nom: "CleanMyMac",
        url: "CleanMyMac",
        description: "CleanMyMac excels with its comprehensive cleaning tools that extend beyond simple file removal, optimizing Mac performance through deep system maintenance tasks.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/cleanmymac.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cleanmymacfull.png",
        link: "https://cleanmymac.com/"
      },
      {
        id: 79,
        nom: "DeBank",
        url: "DeBank",
        description: "DeBank provides a social platform for tracking cryptocurrency portfolios, offering interactive tools to visualize and analyze asset performance in real time.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/debank.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/debankfull.png",
        link: "https://debank.com/"
      },
      {
        id: 80,
        nom: "Internxt",
        url: "internxt",
        badge:["Opensource"],
        description: "Internxt offers a decentralized approach to cloud storage, focusing on privacy and security with zero-knowledge encryption for all stored data.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/internxt.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/internxtfull.png",
        link: "https://internxt.com/"
      },
      {
        id: 81,
        nom: "Tangem",
        url: "Tangem",
        badge:["HardwareWallet","Allcrypto" ],
        description: "Tangem introduces a card-shaped cold wallet for cryptocurrencies, supporting over 6000 coins and tokens with robust security features to give users full control of their private keys.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/tangem.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/tangemfull.png",
        link: "https://tangem.com/en/",
        offer:"10% de réduction",
        info :"Card-shaped cold wallet which supports 6000+ of coins and tokens and gives you full control of your private keys."
      },
      {
        id: 82,
        nom: "Rabby Wallet",
        url: "Rabby",
        badge:["Opensource"],
        description: "Rabby Wallet excels in managing digital identities and blockchain interactions, providing a streamlined and secure interface for managing multiple blockchain accounts.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/rabby.jpg",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/rabbyfull.png",
        link: "https://rabby.io/"
      },
      {
        id: 83,
        nom: "Draw.io",
        url: "drawio",
        badge:["Opensource","Local"],
        description: "Draw.io is known for its versatility in creating diagrams and flowcharts directly in the browser, offering an extensive array of templates and tools for rapid visual planning.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/drawio.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/drawiofull.png",
        link: "https://Draw.io"
      },
      {
        id: 84,
        nom: "Blockstream Jade",
        url: "jade",
        badge:["Opensource","Bitcoinonly"],
        description: "Blockstream Jade offers a unique open-source hardware wallet for Bitcoin, focusing on enhanced security features like full node support and two-factor authentication.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/jade.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/jadefull.png",
        link: "https://blockstream.com/jade/",
        offer: "10 % de réduction avec le code XXXX"
      },
      {
        id: 85,
        nom: "SecuX XSEED Plus",
        url: "xseed",
        badge:[""],
        description: " SecuX XSEED Plus offers robust security for backing up seed phrases, using tamper-evident materials to ensure that recovery phrases are securely stored.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/secux.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/secuxfull.png",
        link: "https://shop.secuxtech.com/products/x-seed-plus-seed-phrase-storage"
      },
      {
        id: 86,
        nom: "Cryptotag Zeus",
        url: "Zeus",
        badge:["Bitcoin"],
        description: "Cryptotag Zeus provides a unique solution for physically backing up cryptocurrency keys using extremely durable materials to withstand extreme conditions.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/cryptotag.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptotagfull.png",
        link: "https://cryptotag.io/experience/zeus/"
      },
      {
        id: 87,
        nom: "Incogni",
        url: "incogni",
        badge:[],
        description: "Incogni focuses on automating the data deletion process from various online services, helping users reclaim their privacy with minimal effort.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/incogni.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/incognifull.png",
        link: "https://incogni.com/"
      },
      {
        id: 88,
        nom: "Dune",
        url: "dune",
        badge:[],
        description: "Dune offers comprehensive tools for querying, visualizing, sharing, and exporting data across over 15 different blockchains, providing a powerful analytics platform for cryptocurrency users.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/dune.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/incognifull.png",
        link: "https://dune.com/home"
      },
      {
        id: 89,
        nom: "Revoke.cash",
        url: "revoke",
        badge:[],
        description: "Revoke.cash allows users to manage and revoke permissions for smart contracts on Ethereum, enhancing security and control over",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/revoke.jpg",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/revokecashfull.png",
        link: "https://revoke.cash/"
      },
      {
        id: 90,
        nom: "Mistral.ai",
        url: "Mistral",
        badge:[],
        description: "Mistral.ai offers advanced data analytics and visualization tools, supporting queries and data sharing across multiple blockchain platforms for enhanced market analysis.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/mistral.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/mistralfull.png",
        link: "https://mistral.ai/"
      },
      {
        id: 91,
        nom: "Mega",
        url: "mega",
        badge:["Opensource"],
        description: "Mega distinguishes itself with a strong emphasis on privacy, offering end-to-end encrypted file storage and sharing services with a generous free storage quota.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/mega.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/megafull.png",
        link: "https://mega.io/"
      },
      {
        id: 92,
        nom: "NextDNS",
        url: "nextdns",
        badge:[],
        description: "NextDNS provides customizable DNS services that enhance internet privacy and security, offering features like ad blocking and threat protection at the DNS level.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nextdns.jpg",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/incognifull.png",
        link: "https://nextdns.io/"
      },
      {
        id: 93,
        nom: "Github Copilot",
        url: "github-copilot",
        badge:[],
        description: "GitHub Copilot stands out by offering AI-powered coding assistance, helping developers write code faster and more efficiently by suggesting entire lines or blocks of code.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/githubcopilot.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/githubcopilotfull.png",
        link: "https://github.com/features/copilot"
      }
      
      


]