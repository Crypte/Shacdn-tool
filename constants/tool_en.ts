

export const TOOL_LIST = [
    {   id : 1,
        nom: "Proton Mail",
        url: "proton-mail",
        badge:["Ourchoice","Opensource","Encrypted"  ],
        description: "Lancé en 2013 par des scientifiques du CERN, il propose des services de messagerie sécurisée avec chiffrement de bout en bout. Basé en Suisse 🇨🇭, bénéficiant des lois strictes sur la confidentialité dans le pays.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/proton.png",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/protonfull.png",
        platform:["Mac","Ios","Android","Windows","Linux","Browser"],
        link:"https://pr.tn/ref/GE6SVZ71VBHG"
    },
    {
        id : 2,
        nom: "StartMail",
        badge:["Browser","Encrypted"],
        description: "Une plateforme de messagerie sécurisée utilisant un chiffrement de bout en bout pour la confidentialité. Avec une interface similaire à celle de Gmail, elle propose des fonctionnalités avancées telles que la suppression automatique des messages et la création d'alias d'e-mail.",
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
        description: "Un navigateur web open source, construit sur la base de Firefox, mettant l'accent sur la vie privée et la liberté des utilisateurs. Il bloque automatiquement les traceurs, les scripts et les publicités par défaut pour protéger les informations de l'utilisateur.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/libre-wolf.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/librewolffull.png",
        link:"https://librewolf.net/"
    }, 
    {
        id: 4,
        nom: "Tor Browser",
        url: "tor-browser",
        badge:["Opensource", "Anonymous","Basedonfirefox" ],
        description: "Un navigateur web open source basé sur Firefox qui garantit l'anonymat et la confidentialité de l'utilisateur en chiffrant et en routant les données via les nœuds Tor, tout en bloquant les scripts et les traceurs.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/tor.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/torfull.png",
        link: "https://www.torproject.org/"
      },
      {
        id: 5,
        nom: "Brave",
        url: "brave",
        badge:["Opensource","Basedonchromium","Monetizedata" ],
        description: "Navigateur open source basé sur Chromium, garantit la confidentialité par défaut avec blocage des publicités et des traceurs. Introduit un système de récompenses pour les utilisateurs visionnant des publicités sélectionnées, une approche alternative de la publicité en ligne.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/brave.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bravefull.png",
        link: "https://brave.com/"
      },
      {
        id: 6,
        nom: "Firefox Focus",
        url: "firefox-focus",
        badge:["Opensource", "Mobile"],
        description: "Un navigateur web mobile axé sur la confidentialité a été développé, mettant l'accent sur le blocage par défaut des traceurs et des publicités, ainsi que sur la suppression de l'historique de navigation à la sortie. Son interface minimaliste offre une expérience de navigation simplifiée",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/firefox-focus.jpeg",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bravefull.png",
        link: "https://www.mozilla.org/en-US/firefox/browsers/mobile/focus/"
      },
      {
        id: 7,
        nom: "YubiKey",
        url: "yubikey",
        badge:["Ourchoice", "PhysicalKey","Secondauth"],
        description: "Les YubiKeys sont des clés de sécurité matérielles compactes qui ajoutent une couche de protection supplémentaire aux comptes en ligne et aux données sensibles. Elles offrent une authentification à deux facteurs robuste.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/yubico.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/yubicofull.png",
        link: "https://www.yubico.com/"
      },
      {
        id: 8,
        nom: "Authy",
        url: "authy",
       
        description: "Authy is a mobile security application that allows users to generate one-time codes for two-factor authentication. It can be used to protect online accounts, applications, and services. It can be synchronized across multiple devices to allow remote access.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/authy.png",
        url_img: "",
        link: "https://authy.com/"
      },
      {
        id: 9,
        nom: "Nextcloud",
        url: "nextcloud",
        badge:["Opensource", "Encrypted"],
        description: "Nextcloud offre un stockage sécurisé et des services de gestion de fichiers avec synchronisation multi-appareils et collaboration en temps réel. Axé sur la confidentialité, les utilisateurs peuvent gérer leur infrastructure et chiffrer leurs fichiers pour une sécurité accrue.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nextcloud-logo.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/nextcloudfull.png",
        link: "https://nextcloud.com/"
      },
      {
        id: 10,
        nom: "KeepassXC",
        url: "keepassxc",
        badge:["Ourchoice","Opensource", "Yubikeys"],
        description: "Un gestionnaire de mots de passe open source multiplateforme qui stocke de manière sécurisée les mots de passe et informations de connexion dans un fichier chiffré. Il propose des fonctionnalités telles que la génération de mots de passe, la synchronisation entre appareils et une interface conviviale pour une gestion pratique des mots de passe.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/keepassxc.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/keepassxcfull.png",
        link: "https://keepassxc.org/"
      },
      {
        id: 11,
        nom: "Keepassium",
        url: "keepassium",
        badge:["Ourchoice","Opensource","Yubikeys"],
        description: "Une application mobile qui stocke et génère de manière sécurisée des mots de passe avec le chiffrement Keepass, permettant la synchronisation automatique et le partage de mots de passe entre utilisateurs. Elle privilégie l'utilisation hors ligne pour protéger les informations sensibles dans des environnements non sécurisés.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/keepassium.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/keepassiumfull.png",
        link: "https://keepassium.com/"
      },
      {
        id: 12,
        nom: "Electrum Wallet",
        url: "",
        badge:["Opensource","Bitcoinonly","Ledgersupport", "Advanced"],
        description: "Electrum Bitcoin Wallet est un portefeuille logiciel courant pour le stockage de Bitcoin. Doté d'une interface conviviale et de fonctionnalités avancées telles que la gestion de plusieurs adresses et la personnalisation des frais de transaction. Reconnu pour sa sécurité robuste, il utilise la technologie de portefeuille déterministe hiérarchique (HD) et la vérification en deux étapes.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/electrum.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/electrumfull.png",
        link: "https://electrum.org/#home"
      },
      {
        id: 13,
        nom: "Signal",
        url: "signal",
        badge:["Ourchoice","Opensource","Encrypted"],
        description: "An open-source mobile messaging app employing cryptography for user privacy. It facilitates secure text messages, voice calls, and video communication. It stands out as one of the most secure and private messaging apps, as it avoids storing user data and deploys end-to-end cryptographic protocols to safeguard communications.",
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
        description: "An open-source mobile messaging app that prioritizes user privacy through end-to-end cryptographic protocols. It enables secure text messages and voice calls. With an easy-to-use interface, it ensures fast and secure communication by employing the Signal protocol for encryption.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/session.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/sessionfull.png",
        link: "https://getsession.org/"
      },
      {
        id: 15,
        nom: "ProtonVPN",
        url: "protonvpn",
        badge:["Ourchoice"],
        description: "Encrypting your online traffic, it safeguards privacy by thwarting third-party surveillance and censorship. You can connect to servers in various countries and enjoy extra safeguards like DNS leak protection and a kill switch.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/protonvpn.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/protonvpnfull.png",
        link: "https://protonvpn.com/"
      },
      {
        id: 16,
        nom: "Swissborg",
        url: "swissborg",
        badge:["Ourchoice","Bitcoin","Proofofreserves","Spot"],
        description: "A Swiss firm providing crypto-currency services like digital wallets, wealth management for pros, and a trading app for individuals. Its goal is to make crypto-currencies and blockchain tech accessible to all through a user-friendly, secure platform.",
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
        description: "A company that develops and sells hardware wallets for crypto-currencies. These wallets are designed to store private keys securely, allowing users to maintain control over their crypto assets. They allow the owner to sign transactions without exposing the private key.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/ledger.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/ledgerfull.png",
        link: "https://shop.ledger.com/fr/?r=9e045121f48b",
      },
      {
        id: 18,
        nom: "Binance",
        url: "binance",
        badge:["Ourchoice","Bitcoin","Proofofreserves","Spot","margin"],
        description: "A trading platform enabling users to purchase, sell, and hold cryptocurrencies. It provides diverse trading pairs for numerous cryptos. Regarded as a trustworthy and secure platform, Binance offers added services like crypto investment funds and a staking system to optimize crypto investments.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/binance.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/binancefull.png",
        link: "https://accounts.binance.com/register?ref=A9FUKHBT"
      },
      {
        id: 19,
        nom: "dYdX",
        url: "dydx",
        badge:["Spot","Margin"],
        description: "Bisq is an open-source crypto-currency exchange platform that allows users to trade crypto-currencies with a strong emphasis on privacy and security. It does not require registration, and users remain in control of their funds throughout the trading process.",
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
        description: "A software safeguarding computers against viruses, malware, and online threats. It employs advanced technologies, including AI-based detection and behavioral analysis.",
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
        description: "Bitdefender is a suite of antivirus and security software known for its power and effectiveness in protecting against malware.",
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
        description: "VeraCrypt is an open-source disk encryption software that encrypts hard drives, partitions, and files to protect data from unauthorized access.",
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
        description: "Obsidian is a note-taking software that helps users organize and connect their ideas. It allows you to create links between different notes to make it easier to navigate and find information.",
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
        description: "Logseq is a digital note-taking software that allows users to create links between different notes to better organize their ideas.",
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
        description: "Nord VPN is a virtual private network (VPN) service that allows users to browse the Internet securely and confidentially.",
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
        description: "Surfshark is a virtual private network (VPN) service that allows users to browse the Internet securely and privately.",
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
        description: "OpenVPN is an open-source VPN solution known for its transparency and flexibility.",
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
        description: "Cryptomator is an open-source file encryption software that secures data stored in the cloud.",
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
        description: "Yubico Authenticator is an open-source tool for generating one-time codes for strong authentication.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/authentificator.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/yubicoauthentificatorfull.png",
        link: "https://www.yubico.com/products/yubico-authenticator/"
      },
      {
        id: 30,
        nom: "Filen",
        url: "filen",
        badge:["Ourchoice","Opensoure","Encrypted"],
        description: "Filen is a secure cloud storage service that makes it easy to backup, share and access files from any device. It offers advanced features such as secure file sharing, real-time synchronisation and enhanced data protection, tailored to the needs of individuals and businesses. Filen offers a convenient and reliable alternative to traditional physical storage media.",
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
        description: "DuckDuckGo is a search engine that focuses on protecting the privacy of its users by not storing their personal data or tracking them on the web. It uses third-party sources to provide relevant search results while protecting user privacy. In addition, it offers features such as search shortcuts and instant answers to enhance the online search experience.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/duckduckgo.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://duckduckgo.com/"
      },
      {
        id: 32,
        nom: "Qwant",
        url: "qwant",
        badge:["Ownindexer"],
        description: "Qwant is a French search engine that stands out for its respect for privacy and neutrality. It uses its own search index to provide relevant and unfiltered results, without collecting personal data from its users. In addition, it offers unique features such as social search and shopping search to enhance the online search experience.",
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
        description: "Startpage is a search engine that respects the privacy of its users by not recording their IP address or search history. It uses a proxy to perform anonymous searches, without tracking users or filtering results. In addition, it offers a browser extension for an even more private online search experience.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/startpage.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.startpage.com/fr/"
      },
      {
        id: 34,
        nom: "Search.brave",
        url: "brave-search",
        badge:["Ownindexer"],
        description: "Brave Search is a search engine launched by the Brave company that focuses on protecting the privacy of its users. It uses its own search index independent of other search engines to provide transparent and relevant search results. In addition, it offers advanced search options and result filters to allow users to customise their search experience.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/bravesearch.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://search.brave.com/"
      },
      {
        id: 35,
        nom: "Mozilla Firefox",
        url: "mozilla-firefox",
        badge:["Opensource"],
        description: "Firefox is an open source web browser developed by the Mozilla Foundation. It is known for its security, speed and customisation. It also offers features such as private browsing, protection against online tracking and the ability to install extensions to customise the online browsing experience.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/firefox.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/firefoxfull.png",
        link: "https://www.mozilla.org/fr/firefox/new/"
      },
      {
        id: 36,
        nom: "uBlock Origin",
        url: "ublock-origin",
        badge:["Ourchoice","Opensource","Chrome","firefox"],
        description: "uBlock Origin is an open source ad blocking extension that uses filters to block online ads and trackers. It is known for its lightness, speed and ease of use. It also offers an advanced customisation option for users who wish to have fine control over blocking items on web pages.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/ublockorigin.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/ublockoriginfull.png",
        link: "https://ublockorigin.com/"
      },
      {
        id: 37,
        nom: "Bitwarden",
        url: "bitwarden",
        badge:["Yubikeys"],
        description: "Bitwarden is an open source password manager for securely storing user IDs and passwords. It offers features such as multi-device synchronisation, secure password sharing and strong password generation. In addition, it is compatible with many browsers and platforms, including smartphones and tablets.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/bitwarden.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bitwardenfull.png",
        link: "https://bitwarden.com/"
      },
      {
        id: 38,
        nom: "Malwarebytes",
        url: "malwarebytes",
        description: "Malwarebytes Anti-Malware is powerful security software that provides effective protection against malware, proactively detecting and removing threats. Its advantage lies in its ability to combine advanced malware detection features with a user-friendly interface, providing a solid defence against online attacks.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/malwarebytes.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/malwarebytesfull.png",
        link: "https://www.malwarebytes.com/"
      },
      {
        id: 39,
        nom: "BleachBit",
        url: "bleachbit",
        description: "BleachBit is a secure file deletion tool that cleans up the digital footprint on your computer by permanently deleting unwanted files, cookies, caches and other potentially sensitive data, ensuring your privacy.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/bleachbit.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bleachbitfull.png",
        link: "https://www.bleachbit.org/"
      },
      {
        id: 40,
        nom: "GnuPG",
        url: "gnupg",
        description: "GnuPG is an open-source data encryption software offering key features such as encryption key creation, file and email encryption, and file authenticity verification through digital signature. It ensures the confidentiality of your sensitive information, protects against data manipulation and facilitates secure communication over networks.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/gnupg.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://gnupg.org/download/"
      },
      {
        id: 41,
        nom: "Bridge Wallet",
        url: "gnupg",
        description: "Bridge Wallet by Mt Pelerin is a secure and user-friendly crypto-currency wallet. It offers an intuitive interface allowing users to easily manage their digital assets. It also allows users to purchase crypto-currencies directly from the app without KYC. This provides additional convenience by eliminating the need to go through third-party exchange platforms.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/mtpelerin.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bridgefull.png",
        link: "http://mtpelerin.com/fr/join?rfr=bWetdkDV"
      },
      {
        id: 42,
        nom: "Aegis Auth",
        url: "gnupg",
        description: "Aegis Authenticator is an open-source two-factor authentication (2FA) application that stores your data locally for better privacy and security, offering a private alternative to other authentication applications.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/aegis.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://getaegis.app"
      },
      {
        id: 44,
        nom: "Paraswap",
        url: "Paraswap",
        badge:["Spot",""],
        description: "Paraswap is a decentralised trading protocol on Ethereum. It allows users to obtain the best prices by aggregating liquidity from different exchange platforms, facilitating efficient and cost-effective trading of ERC-20 tokens.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/paraswap.png",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/paraswapfull.png",
        link: "https://app.paraswap.io/?ref=MHgxRkE2QzdBMkI0ODI9MzQxMkNEQjNFZjZCQzMxRjA1OUFiNTdkN2Y0"
      },
      {
        id: 45,
        nom: "Tutanota",
        url: "tutanota",
        description: "Tutanota is a secure, privacy-focused email service that offers end-to-end encryption for all emails, including attachments. It stores encryption keys securely on users' devices, ensuring that only recipients can access messages in the clear. Tutanota also offers features such as confidential emails, enhanced protection against online tracking and a user-friendly interface.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/tutanota.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://tutanota.com/"
      },
      {
        id: 46,
        nom: "Metamask",
        url: "metamask",
        type: "",
        description: "Metamask is a popular Ethereum wallet that allows users to store, manage and send Ethereum tokens. It works as a browser extension and provides a user-friendly interface for interacting with DApps and conducting transactions securely. Metamask also facilitates private key management and supports test networks as well as the main Ethereum network.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/metamask.png",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/metamaskfull.png",
        link: "https://metamask.io/"
      },
      {
        id: 47,
        nom: "Talisman",
        url: "metamask",
        description: "Talisman Wallet is an open-source wallet focused on privacy and security of crypto-currencies. It offers advanced features such as end-to-end encryption, transaction anonymity and user privacy protection. Talisman Wallet allows users to securely store, manage and send their digital assets while maintaining their privacy.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/talisman.png",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/talismanfull.png",
        link: "https://www.talisman.xyz"
      },
      {
        id: 48,
        nom: "AdGuard",
        url: "Adguard",
        description: "AdGuard is an ad blocking and privacy extension that provides an ad-free browsing experience while enhancing the user's online security. With its advanced features, it allows users to customise filters and settings for tailored protection.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/adguard.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://adguard.com/en/welcome.html"
      },
      {
        id: 49,
        nom: "Time Guardian",
        url: "Adguard",
        description: "Time Guardian by Ternoa is a concept of a digital time capsule guaranteed by the Ternoa blockchain. It enables users to store data, messages, or memories in a secure and verifiable virtual vault, ensuring long-term preservation. Time Guardian allows users to define specific sending protocols, such as sending data at a precise date, postmortem deliveries, or through consensus agreements.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/timeguardian.jpg",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/timeguardianfull.png",
        link: "https://time-guardian.app/"
      },
      {
        id: 50,
        nom: "Relai.app",
        url: "Adguard",
        badge:["Bitcoin","Spot"],
        description: "Relai app is a popular mobile application for purchasing Bitcoin in Switzerland and Europe. It provides users with a simple and secure way to buy Bitcoin using SEPA bank transfers. Known for its user-friendly interface, Relai allows individuals to invest in Bitcoin seamlessly without requiring extensive technical knowledge.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/relaiapp.png",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/relaiappfull.png",
        link: "https://relai.app/"
      },
      {
        id: 51,
        nom: "Skiff Pages",
        url: "Skiff",
        description: "Skiff is a secure collaboration software that focuses on data confidentiality and privacy. It offers features such as document sharing, end-to-end encrypted messaging and access permission control. Skiff enables teams to work together securely and confidentially, with an emphasis on protecting sensitive information.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/skiff.png",
        url_img:"https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/skiffpagefull.png",
        link: "https://skiff.com/pages"
      },{
        id: 52,
        nom: "Skiff Drive",
        url: "Skiff",
        badge:["Opensource"],
        description: "Skiff Drive is a secure cloud storage solution that focuses on data privacy. It offers end-to-end encryption to ensure that only authorised users can access and read stored files. Skiff Drive allows users to securely sync and back up their files, giving them full control over their sensitive data.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/skiff.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/skiffdrivefull.png",
        link: "https://skiff.com/drive"
      },
      {
        id: 53,
        nom: "Joplin",
        url: "Joplin",
        badge:["Opensource",""],
        description: "Joplin is an open source note-taking application that offers great flexibility and advanced note management. With its cross-platform synchronisation features, you can access your notes from different devices and back them up securely via cloud storage services. Joplin also focuses on security by offering end-to-end encryption to protect your sensitive data.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/joplin.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/joplinfull.png",
        link: "https://joplinapp.org/"
      },
      {
        id: 54,
        nom: "KeepassDX",
        url: "keepassdx",
        description: "KeePassDX is an Android app for secure password management, featuring a user-friendly interface and custom password organization. It supports KeePass database format, offers strong password generation, cloud synchronization, and two-factor authentication support for enhanced security.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/keepassdx.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.keepassdx.com/"
      },
      {
        id: 55,
        nom: "Notion",
        url: "notion",
        description: "Notion is a versatile productivity tool that allows users to create and organize their notes, documents, and tasks in a unified workspace. It provides a collaborative platform for teams to work together, share information, and track progress on projects. With its flexible structure and wide range of features, Notion has gained popularity as a powerful all-in-one tool for personal and professional use.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/notion.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/notionfull.png",
        link: "https://www.notion.so/product"
      },
      {
        id: 56,
        nom: "Spectre.app",
        url: "Spectreapp",
        description: "Spectre Password stands out by generating unique passwords without storing any of them. By utilizing your master password, full name, and website URL, it dynamically creates passwords, ensuring security and convenience while eliminating the need for centralized storage of sensitive information.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/spectre.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/spectrefull.png",
        link: "https://spectre.app/"
      },
      {
        id: 57,
        nom: "Escalidraw",
        url: "Spectreapp",
        badge:["Opensource","Local","",""],
        description: "Escalidraw is an online drawing tool that allows you to create diagrams and sketches easily. It provides a simple and intuitive interface, with a variety of customizable drawing elements such as shapes, arrows, and text. It is ideal for creating wireframes, architecture diagrams, floor plans, and other visual illustrations. In addition to its creation features, Escalidraw also enables real-time collaboration, allowing multiple users to work together on the same sketch or diagram.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/escalidraw.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/escalidrawfull.png",
        link: "https://excalidraw.com/"
      },
      {
        id: 58,
        nom: "Kraken",
        url: "kraken",
        badge:["Proofofreserves","Spot","Margin"],
        description: "Kraken is a cryptocurrency exchange platform that enables users to trade futures and perpetual contracts with leverage. It offers a user-friendly interface and advanced tools such as real-time charts and conditional orders to facilitate trading operations. Kraken is also known for its robust security, high liquidity, and responsive customer service, making it a popular choice among cryptocurrency traders.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/kraken.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/krakenfull.png",
        link: "https://www.kraken.com/"
      },
      {
        id: 59,
        nom: "ChatGPT",
        url: "chat-gpt",
        description: "Chat GPT is a powerful AI language model developed by OpenAI. It utilizes natural language processing to generate responses and engage in conversational interactions with users. Leveraging advanced machine learning techniques, Chat GPT can understand and provide accurate and fluent responses to a wide range of questions and topics.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/chatgpt.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/chatgptfull.png",
        link: "https://openai.com/blog/chatgpt"
      },
      {
        id: 60,
        nom: "Grammarly",
        url: "grammarly",
        description: "Grammarly is a widely-used online writing enhancement tool. It utilizes AI algorithms and machine learning to detect grammatical errors, spelling mistakes, incorrect punctuation, and style issues. It provides instant correction suggestions, enabling users to improve the clarity and quality of their writing effectively.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/grammarly.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/grammarlyfull.png",
        link: "https://www.grammarly.com/"
      },
      {
        id: 61,
        nom: "Deepl",
        url: "deepl",
        description: "DeepL is a renowned online translation service known for its accuracy and quality. It utilizes advanced machine learning techniques to provide more natural and faithful translations to the original text. Supporting multiple languages, DeepL is widely used by translation professionals as well as general users seeking precise and reliable translations.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/deepl.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/deeplfull.png",
        link: "https://www.deepl.com"
      },
      {
        id: 62,
        nom: "Proton Drive",
        url: "proton-drive",
        badge:["Encrypted"],
        description: "Proton Drive is a secure cloud storage service developed by ProtonMail, offering end-to-end encryption to protect your files. It provides a seamless and user-friendly experience, allowing you to store, sync, and share your data across devices while maintaining the highest level of privacy. With Proton Drive, you can confidently store your files in a secure environment, knowing that your data remains private and under your control.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/protondrive.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/protondrivefull.png",
        link: "https://pr.tn/ref/GE6SVZ71VBHG"
      },
      {
        id: 63,
        nom: "NordPass",
        url: "nordpass",
        description: "NordPass is a secure password manager that simplifies and safeguards access to online accounts through features like password storage, strong password generation, and cross-platform syncing. Its advanced functionalities, including form autofill and password security auditing, provide added protection for sensitive online information.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nordpass.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/nordpassfull.png",
        link: "https://nordpass.com/"
      },
      {
        id: 64,
        nom: "Privacy.com",
        url: "privacy",
        description: "Privacy.com is a privacy-focused online service that provides virtual debit cards to users. These virtual cards can be used for online purchases, offering an extra layer of security by keeping users' personal and financial information hidden from merchants. Privacy.com helps users safeguard their privacy and control their online transactions.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/privacy.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://privacy.com/"
      },
      {
        id: 65,
        nom: "Lydia",
        url: "lydia",
        description: "Popular mobile payment app that enables users to send and receive money instantly with their smartphones. It also offers a unique feature of ephemeral cards, allowing users to create temporary virtual cards for secure online transactions.z",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/lydia.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.lydia-app.com/"
      },
      {
        id: 66,
        nom: "Revolut",
        url: "revolut",
        description: "Revolut is a digital banking platform that offers various financial services, including international money transfers, currency exchange, and virtual debit cards. Revolut provides users with enhanced security features such as the ability to freeze/unfreeze cards instantly from the app and disabling contactless payments or online transactions, providing users with greater control over their financial information and transactions.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/revolut.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.revolut.com/"
      },
      {
        id: 67,
        nom: "Wise",
        url: "wise",
        description: "Wise is a global money transfer service that enables users to send and receive money internationally at competitive exchange rates. Wise prioritizes privacy and freedom by employing secure encryption protocols to protect user data and transactions. They also advocate for transparency, openly disclosing their fees upfront and providing users with detailed information about the exchange rates applied.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/wise.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://wise.com/"
      },
      {
        id: 68,
        nom: "Nvidia Broadcast",
        url: "wise",
        description: "NVIDIA Broadcast is an AI-powered software suite that enhances audio and video quality, offering features like noise removal and virtual backgrounds, ideal for content creators. It provides a user-friendly interface and real-time processing capabilities, making it a convenient tool for streamers and professionals looking to improve their content creation experience.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nvidiabroadcast.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.nvidia.com/fr-fr/geforce/broadcasting/broadcast-app/"
      },
      {
        id: 69,
        nom: "DaVinci Resolve",
        url: "wise",
        description: "DaVinci Resolve is a professional video editing software that offers a comprehensive range of editing tools and features. It provides advanced color grading capabilities, allowing users to achieve stunning visual effects and enhance the overall look of their videos. With its intuitive interface and powerful capabilities, DaVinci Resolve is a go-to choice for many filmmakers and video editors.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/davinciresolve.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.blackmagicdesign.com/products/davinciresolve"
      },
      {
        id: 70,
        nom: "OBS",
        url: "wise",
        description: "OBS (Open Broadcaster Software) is a popular streaming and recording software used by content creators and gamers. It allows users to capture and broadcast their screen or webcam footage, making it ideal for live streaming on platforms like Twitch or YouTube. With its user-friendly interface and customizable settings, OBS provides a seamless experience for capturing, editing, and streaming high-quality content.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/obs.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://obsproject.com/"
      },
      {
        id: 71,
        nom: "Audacity",
        url: "wise",
        description: "Audacity is a free and open-source audio editing software that offers a wide range of features for recording, editing, and mixing audio files. It provides a simple and intuitive interface, making it accessible to both beginners and experienced users. Audacity supports various audio formats and offers tools for removing background noise, adjusting volume levels, and applying effects to enhance the audio quality. With its versatility and ease of use, Audacity is a popular choice for audio editing tasks of all kinds.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/audacity.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.audacityteam.org/"
      },
      {
        id: 72,
        nom: "CapCut",
        url: "wise",
        description: "CapCut is a user-friendly mobile video editing application that offers a variety of features for editing and enhancing videos on the go. It provides a straightforward interface with intuitive controls, making it accessible to both beginners and casual users. CapCut allows users to trim, merge, and add various effects, filters, and transitions to their videos. With its simplicity and versatility, CapCut is a convenient choice for quick and easy video editing tasks directly from your mobile device.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/capcut.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.png",
        link: "https://www.capcut.com/"
      },
      {
        id: 73,
        nom: "Hat.sh",
        url: "wise",
        description: "Hat.sh is a powerful online tool that provides secure and anonymous file encryption. With its user-friendly interface, users can easily encrypt their files and protect them from unauthorized access. By leveraging state-of-the-art encryption algorithms, Hat.sh ensures the confidentiality and privacy of sensitive data, making it a valuable resource for individuals and businesses seeking secure file sharing and storage solutions.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/hatsh.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/hatshfull.png",
        link: "https://hat.sh/"
      },
      {
        id: 74,
        nom: "Skiff Mail",
        url: "wise",
        badge:["Opensource"],
        description: "Skif Mail is a secure messaging platform that prioritizes user privacy and data protection through end-to-end encryption. It offers advanced features such as message recall, automatic message destruction, and robust protection against spam and phishing attacks.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/skiff.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/skiffmailfull.png",
        link: "https://skiff.com/mail"
      },
      {
        id: 75,
        nom: "Proton Pass",
        url: "proton-pass",
        description: "Proton Pass is part of the Proton suite, offering a secure password management solution with encrypted storage, giving users easy access while preserving their privacy.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/protonpass.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/protonpassfull.png",
        link: "https://proton.me/pass"
      },
      {
        id: 76,
        nom: "Element",
        url: "element",
        badge:["Matrix"],
        description: "The Element messaging application stands out for its commitment to confidentiality and security thanks to the Matrix protocol, offering end-to-end encrypted discussions and chat spaces. It offers a decentralized alternative to conventional messaging services.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/element.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/elementfull.png",
        link: "https://element.io/"
      },
      {
        id: 77,
        nom: "Arc",
        url: "element",
        description: "Arc is a new Chromium-based web browser developed by The Browser Company. It is designed to be fast, lightweight and energy-efficient.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/arc.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/arcfull.png",
        link: "https://arc.net/"
      },
      {
        id: 78,
        nom: "CleanMyMac",
        url: "CleanMyMac",
        description: "A popular Mac optimization tool who offer features such as cleaning junk files, uninstalling applications thoroughly, and optimizing system performance.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/cleanmymac.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cleanmymacfull.png",
        link: "https://cleanmymac.com/"
      },
      {
        id: 79,
        nom: "DeBank",
        url: "DeBank",
        description: "Debank est une plateforme social de suivi de portefeuille offrant une vue complète des performances des investissements et des possibilités d'intéragir avec les autres utilisateurs",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/debank.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/debankfull.png",
        link: "https://debank.com/"
      },
      {
        id: 80,
        nom: "Internxt",
        url: "internxt",
        badge:["Opensource"],
        description: "Debank est une plateforme de suivi de portefeuille offrant une vue complète des performances des investissements et des variations de prix",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/internxt.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/internxtfull.png",
        link: "https://internxt.com/"
      },
      {
        id: 81,
        nom: "Tangem",
        url: "Tangem",
        badge:["HardwareWallet","Allcrypto" ],
        description: "Debank est une plateforme de suivi de portefeuille offrant une vue complète des performances des investissements et des variations de prix",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/tangem.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/tangemfull.png",
        link: "https://tangem.com/en/",
        offer:"10% de réduction",
        info :"Tangem est un wallet physique sout la forme d'une carte de crédit et permet de le ranger facilement dans votre portfeuille."
      },
      {
        id: 82,
        nom: "Rabby Wallet",
        url: "Rabby",
        badge:["Opensource"],
        description: "Debank est une plateforme de suivi de portefeuille offrant une vue complète des performances des investissements et des variations de prix",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/rabby.jpg",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/rabbyfull.png",
        link: "https://rabby.io/"
      },
      {
        id: 83,
        nom: "Draw.io",
        url: "drawio",
        badge:["Opensource","Local"],
        description: "Debank est une plateforme de suivi de portefeuille offrant une vue complète des performances des investissements et des variations de prix",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/drawio.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/drawiofull.png",
        link: "https://Draw.io"
      },
      {
        id: 84,
        nom: "Blockstream Jade",
        url: "jade",
        badge:["Opensource","Bitcoinonly"],
        description: "Debank est une plateforme de suivi de portefeuille offrant une vue complète des performances des investissements et des variations de prix",
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
        description: "Debank est une plateforme de suivi de portefeuille offrant une vue complète des performances des investissements et des variations de prix",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/secux.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/secuxfull.png",
        link: "https://shop.secuxtech.com/products/x-seed-plus-seed-phrase-storage"
      },
      {
        id: 86,
        nom: "Cryptotag Zeus",
        url: "Zeus",
        badge:["Bitcoin"],
        description: "Debank est une plateforme de suivi de portefeuille offrant une vue complète des performances des investissements et des variations de prix",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/cryptotag.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptotagfull.png",
        link: "https://cryptotag.io/experience/zeus/"
      },
      {
        id: 87,
        nom: "Incogni",
        url: "incogni",
        badge:[],
        description: "Debank est une plateforme de suivi de portefeuille offrant une vue complète des performances des investissements et des variations de prix",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/incogni.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/incognifull.png",
        link: "https://incogni.com/"
      },
      {
        id: 88,
        nom: "Dune",
        url: "dune",
        badge:[],
        description: "Interrogez, visualisez, partagez et exportez des données sur plus de 15 blockchains différentes.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/dune.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/incognifull.png",
        link: "https://dune.com/home"
      },
      {
        id: 89,
        nom: "Revoke.cash",
        url: "revoke",
        badge:[],
        description: "Interrogez, visualisez, partagez et exportez des données sur plus de 15 blockchains différentes.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/revoke.jpg",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/revokecashfull.png",
        link: "https://dune.com/home"
      },
      {
        id: 90,
        nom: "Mistral.ai",
        url: "Mistral",
        badge:[],
        description: "Interrogez, visualisez, partagez et exportez des données sur plus de 15 blockchains différentes.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/mistral.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/mistralfull.png",
        link: "https://dune.com/home"
      },
      {
        id: 91,
        nom: "Mega",
        url: "mega",
        badge:["Opensource"],
        description: "Interrogez, visualisez, partagez et exportez des données sur plus de 15 blockchains différentes.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/mega.png",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/megafull.png",
        link: "https://mega.io/"
      },
      {
        id: 92,
        nom: "NextDNS",
        url: "nextdns",
        badge:[],
        description: "Interrogez, visualisez, partagez et exportez des données sur plus de 15 blockchains différentes.",
        url_logo: "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nextdns.jpg",
        url_img: "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/incognifull.png",
        link: "https://mega.io/"
      }
      
      


]