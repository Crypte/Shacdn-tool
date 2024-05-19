export const TOOL_LIST = [
  {
    id: 0,
    nom: "Github Copilot",
    url: "github-copilot",
    badge: [],
    description:
      "GitHub Copilot stands out by offering AI-powered coding assistance, helping developers write code faster and more efficiently by suggesting entire lines or blocks of code.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/githubcopilot.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/githubcopilotfull.webp",
    link: "https://github.com/features/copilot",
  },
  {
    id: 1,
    nom: "Proton Mail",
    url: "proton-mail",
    badge: ["Ourchoice", "Opensource", "Encrypted"],
    description:
      "Renowned for its strict adherence to privacy, Proton Mail offers encrypted email services from Switzerland, utilizing the country's stringent privacy laws to protect user data.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/proton.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/protonfull.webp",
    platform: ["Mac", "Ios", "Android", "Windows", "Linux", "Browser"],
    link: "https://pr.tn/ref/GE6SVZ71VBHG",
  },
  {
    id: 2,
    nom: "StartMail",
    url: "startmail",
    badge: ["Browser", "Encrypted"],
    description:
      " StartMail provides a secure email environment with a familiar interface, featuring unique tools like auto-deletion and alias creation to enhance user privacy.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/startmail.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/startmailfull.webp",
    platform: ["Browser"],
    link: "https://www.startmail.com/en/",
  },
  {
    id: 3,
    nom: "Libre Wolf",
    url: "libre-Wolf",
    badge: ["Ourchoice", "Opensource", "Basedonfirefox"],
    description:
      "A privacy-centric browser, Libre Wolf is built on Firefox’s architecture but removes telemetry and integrates privacy enhancements by default.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/libre-wolf.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/librewolffull.webp",
    link: "https://librewolf.net/",
  },
  {
    id: 4,
    nom: "Tor Browser",
    url: "tor-browser",
    badge: ["Opensource", "Anonymous", "Basedonfirefox"],
    description:
      "Distinctive for its approach to anonymity, Tor Browser routes user data through multiple nodes in the Tor network, ensuring untraceable web browsing.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/tor.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/torfull.webp",
    link: "https://www.torproject.org/",
  },
  {
    id: 5,
    nom: "Brave",
    url: "brave",
    badge: ["Opensource", "Basedonchromium", "Monetizedata"],
    description:
      "Brave redefines browser monetization by integrating an opt-in ad viewing system that rewards users with cryptocurrency, while maintaining a strong privacy stance.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/brave.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bravefull.webp",
    link: "https://brave.com/",
  },
  {
    id: 6,
    nom: "Firefox Focus",
    url: "firefox-focus",
    badge: ["Opensource", "Mobile"],
    description:
      "Designed for mobile use, Firefox Focus automatically deletes history and blocks a wide range of online trackers for a clean, private browsing experience.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/firefox-focus.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bravefull.webp",
    link: "https://www.mozilla.org/en-US/firefox/browsers/mobile/focus/",
  },
  {
    id: 7,
    nom: "YubiKey",
    url: "yubikey",
    badge: ["Ourchoice", "PhysicalKey", "Secondauth"],
    description:
      "YubiKey stands out by offering physical two-factor authentication which is more secure against phishing attacks than software-based solutions.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/yubico.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/yubicofull.webp",
    link: "https://www.yubico.com/",
  },
  {
    id: 8,
    nom: "Authy",
    url: "authy",
    description:
      "Authy sets itself apart with its multi-device synchronization, allowing users to access their two-factor authentication codes from any device, enhancing convenience and security.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/authy.webp",
    url_img: "",
    link: "https://authy.com/",
  },
  {
    id: 9,
    nom: "Nextcloud",
    url: "nextcloud",
    badge: ["Opensource", "Encrypted"],
    description:
      "Unique in its private cloud storage solution, Nextcloud allows users to self-host their cloud services, giving them full control over their data.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nextcloud-logo.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/nextcloudfull.webp",
    link: "https://nextcloud.com/",
  },
  {
    id: 10,
    nom: "KeepassXC",
    url: "keepassxc",
    badge: ["Ourchoice", "Opensource", "Yubikeys"],
    description:
      "Notable for its robust security features, KeepassXC uses extensive encryption allowing for secure storage and management of passwords across multiple platforms.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/keepassxc.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/keepassxcfull.webp",
    link: "https://keepassxc.org/",
  },
  {
    id: 11,
    nom: "Keepassium",
    url: "keepassium",
    badge: ["Ourchoice", "Opensource", "Yubikeys"],
    description:
      "Keepassium excels in mobile password management, integrating Keepass with iOS to deliver a seamless and secure user experience.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/keepassium.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/keepassiumfull.webp",
    link: "https://keepassium.com/",
  },
  {
    id: 12,
    nom: "Electrum Wallet",
    url: "electrum wallet",
    badge: ["Opensource", "Bitcoinonly", "Ledgersupport", "Advanced"],
    description:
      " Electrum stands out by offering a lightweight Bitcoin wallet with features like cold storage and multisig functionality, appealing to advanced users.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/electrum.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/electrumfull.webp",
    link: "https://electrum.org/#home",
  },
  {
    id: 13,
    nom: "Signal",
    url: "signal",
    badge: ["Ourchoice", "Opensource", "Encrypted"],
    description:
      "Signal is distinguished by its state-of-the-art end-to-end encryption for messages and calls, prioritizing security and privacy without storing user data.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/signal.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/signalfull.webp",
    link: "https://www.signal.org/",
    info: "info",
  },
  {
    id: 14,
    nom: "Session",
    url: "session",
    badge: ["Opensource", "Encrypted"],
    description:
      "Session offers decentralized messaging, ensuring privacy and security without relying on typical centralized servers, and uses onion routing to protect user identities.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/session.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/sessionfull.webp",
    link: "https://getsession.org/",
  },
  {
    id: 15,
    nom: "ProtonVPN",
    url: "protonvpn",
    badge: ["Ourchoice"],
    description:
      "ProtonVPN is known for its Secure Core architecture that routes traffic through multiple servers before leaving its network, providing enhanced security against network-based attacks.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/protonvpn.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/protonvpnfull.webp",
    link: "https://protonvpn.com/",
  },
  {
    id: 16,
    nom: "Swissborg",
    url: "swissborg",
    badge: ["Ourchoice", "Bitcoin", "Proofofreserves", "Spot"],
    description:
      "Swissborg is pioneering by integrating community-centric features in its wealth management and trading platform, utilizing blockchain technology to democratize finance.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/swissborg.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/swissborgfull.webp",
    link: "https://join.swissborg.com/fr/r/louisCEI6",
    offer: "Entre 1 et 100 euros offert(s)",
  },
  {
    id: 17,
    nom: "Ledger",
    url: "ledger",
    badge: ["Ourchoice", "HardwareWallet", "Allcrypto"],
    description:
      " Ledger’s hardware wallets are notable for their security, using a unique operating system (BOLOS) and certified secure chip technology to safeguard cryptocurrency assets.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/ledger.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/ledgerfull.webp",
    link: "https://shop.ledger.com/fr/?r=9e045121f48b",
  },
  {
    id: 18,
    nom: "Binance",
    url: "binance",
    badge: ["Ourchoice", "Bitcoin", "Proofofreserves", "Spot", "margin"],
    description:
      "Binance differentiates itself with a broad array of services including futures, margin trading, and a proprietary secure asset fund for users (SAFU), making it a comprehensive crypto platform.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/binance.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/binancefull.webp",
    link: "https://accounts.binance.com/register?ref=A9FUKHBT",
  },
  {
    id: 19,
    nom: "dYdX",
    url: "dydx",
    badge: ["Spot", "Margin"],
    description:
      "dYdX stands out by offering decentralized trading with a focus on privacy, enabling users to trade cryptocurrencies without needing to provide personal information.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/dydx.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/dydxfull.webp",
    link: "https://bisq.network/",
  },
  {
    id: 20,
    nom: "Kaspersky",
    url: "kaspersky",
    badge: ["Ourchoice"],
    type: "Antivirus",
    description:
      "Kaspersky offers distinctive features like real-time protection, system rollback, and privacy cleaner tools, making it a comprehensive security solution.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/kaspersky.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/kasperskyfull.webp",
    link: "https://www.kaspersky.fr",
  },
  {
    id: 21,
    nom: "Bitdefender",
    url: "bitdefender",
    badge: ["Ourchoice"],
    type: "Antivirus",
    description:
      "Bitdefender sets itself apart with multi-layer ransomware protection, web attack prevention, and vulnerability assessments, providing top-tier security.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/bitdefender.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bitdefenderfull.webp",
    link: "https://www.bitdefender.com",
  },
  {
    id: 22,
    nom: "Veracrypt",
    url: "veracrypt",
    badge: ["Ourchoice", "Opensource"],
    type: "Chiffrement",
    description:
      "VeraCrypt enhances security by offering hidden volumes within encrypted disks, making it impossible to prove the existence of data stored this way.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/veracrypt.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://www.veracrypt.fr/en/Home.html",
  },
  {
    id: 23,
    nom: "Obsidian",
    url: "obsidian",
    badge: ["Ourchoice", "Local"],
    type: "Notes",
    description:
      "Unique for its link-based note organization, Obsidian allows users to create a personal knowledge base using interconnected text documents.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/obsidian.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/obsidianfull.webp",
    link: "https://obsidian.md",
  },
  {
    id: 24,
    nom: "Logseq",
    url: "logseq",
    badge: ["Opensource"],
    type: "Notes",
    description:
      "Logseq offers a unique outliner-centric interface for note-taking, supporting both markdown and org-mode, catering to users who need structured data and powerful search capabilities.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/logseq.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/logseqfull.webp",
    link: "https://logseq.com",
  },
  {
    id: 25,
    nom: "NordVPN",
    url: "nordvpn",
    badge: [""],
    type: "VPN",
    description:
      "NordVPN is distinct for its Double VPN feature, which routes traffic through two VPN servers, adding an extra layer of security for sensitive online activities.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nordvpn.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/nordvpnfull.webp",
    link: "https://nordVPN.com",
  },
  {
    id: 26,
    nom: "Surfshark",
    url: "surfshark",
    badge: ["Ourchoice"],
    type: "VPN",
    description:
      "Surfshark allows unlimited simultaneous connections, making it stand out as a value option for individuals with multiple devices.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/surfshark.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/surfsharkfull.webp",
    link: "https://surfshark.com",
  },
  {
    id: 27,
    nom: "OpenVPN",
    url: "openvpn",
    badge: ["Opensource", "Advanced"],
    type: "VPN",
    description:
      "OpenVPN is highly customizable, offering a flexible VPN solution that can be tailored to meet specific security requirements and deployment scenarios.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/openvpn.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://openvpn.net",
  },
  {
    id: 28,
    nom: "Cryptomator",
    url: "cryptomator",
    badge: ["Opensource", "Cloud", "Encrypted"],
    type: "Chiffrement",
    description:
      "Unique for its client-side encryption, Cryptomator secures files before they are uploaded to any cloud storage, ensuring that no unencrypted data leaves the user’s device.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/cryptomator.svg",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://cryptomator.org",
  },
  {
    id: 29,
    nom: "Yubico Auth",
    url: "yubico-authenticator",
    badge: ["Ourchoice", "Yubikeys"],
    type: "2FA",
    description:
      "Unlike typical authenticators, Yubico Authenticator supports NFC, enabling secure two-factor authentication in a tap without relying on a mobile phone’s network connectivity.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/authentificator.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/yubicoauthentificatorfull.webp",
    link: "https://www.yubico.com/products/yubico-authenticator/",
  },
  {
    id: 30,
    nom: "Filen",
    url: "filen",
    badge: ["Ourchoice", "Opensoure", "Encrypted"],
    description:
      "Filen is distinctive for its emphasis on security with zero-knowledge encryption and a straightforward, privacy-focused European service.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/filen.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/filenfull.webp",
    link: "https://filen.io/r/16fb5fa982e795e33f3d9780a098b037",
    offer: "20 Go offert",
  },
  {
    id: 31,
    nom: "DuckDuckGo",
    url: "duckduckgo",
    badge: ["Ourchoice", "Ownindexer"],
    description:
      "Known for its privacy-first approach, DuckDuckGo does not track its users and offers unique features like bang commands for faster searches and instant answers from a variety of sources.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/duckduckgo.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://duckduckgo.com/",
  },
  {
    id: 32,
    nom: "Qwant",
    url: "qwant",
    badge: ["Ownindexer"],
    description:
      " Distinctive for its commitment to privacy and neutrality, Qwant uses its own indexing engine to provide unprofiled search results and has a strong focus on European data protection standards.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/qwant.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/qwantfull.webp",
    link: "https://www.qwant.com/",
  },
  {
    id: 33,
    nom: "Startpage",
    url: "startpage",
    badge: ["Googleindexer"],
    type: "Moteur de recherche",
    description:
      "Startpage offers anonymous web browsing via an integrated proxy service, allowing users to view websites without revealing their IP address or location, ensuring complete search privacy.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/startpage.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/startpagefull.webp",
    link: "https://www.startpage.com/fr/",
  },
  {
    id: 34,
    nom: "Search.brave",
    url: "brave-search",
    badge: ["Ownindexer"],
    description:
      "Brave Search stands out by not tracking users and by being independent of big tech companies, providing a private and transparent search experience with its own search index.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/bravesearch.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://search.brave.com/",
  },
  {
    id: 35,
    nom: "Mozilla Firefox",
    url: "mozilla-firefox",
    badge: ["Opensource"],
    description:
      " Firefox is unique for its strong privacy tools and open-source transparency, offering extensive customization through add-ons and powerful developer tools.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/firefox.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/firefoxfull.webp",
    link: "https://www.mozilla.org/fr/firefox/new/",
  },
  {
    id: 36,
    nom: "uBlock Origin",
    url: "ublock-origin",
    badge: ["Ourchoice", "Opensource", "Chrome", "firefox"],
    description:
      "This extension is distinguished by its efficiency and lower CPU footprint, blocking ads and trackers with a high degree of customization available to users.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/ublockorigin.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/ublockoriginfull.webp",
    link: "https://ublockorigin.com/",
  },
  {
    id: 37,
    nom: "Bitwarden",
    url: "bitwarden",
    badge: ["Yubikeys"],
    description:
      "Bitwarden offers a fully open-source password management solution that includes self-hosting options, giving users complete control over their data security and privacy.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/bitwarden.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bitwardenfull.webp",
    link: "https://bitwarden.com/",
  },
  {
    id: 38,
    nom: "Malwarebytes",
    url: "malwarebytes",
    description:
      "Malwarebytes excels with its layered approach to security, combining traditional malware scanning with real-time protection against new and emerging online threats.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/malwarebytes.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/malwarebytesfull.webp",
    link: "https://www.malwarebytes.com/",
  },
  {
    id: 39,
    nom: "BleachBit",
    url: "bleachbit",
    description:
      "BleachBit is notable for its comprehensive cleaning capabilities, which extend beyond simple file deletion to include deep system cleaning and disk space recovery.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/bleachbit.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bleachbitfull.webp",
    link: "https://www.bleachbit.org/",
  },
  {
    id: 40,
    nom: "GnuPG",
    url: "gnupg",
    description:
      "GnuPG is unique for its versatility in encryption, supporting both symmetric and asymmetric encryption methods and a variety of encryption algorithms.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/gnupg.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://gnupg.org/download/",
  },
  {
    id: 41,
    nom: "Bridge Wallet",
    url: "gnupg",
    description:
      "Bridge Wallet stands out by allowing direct cryptocurrency purchases without KYC checks, focusing on user privacy and convenience.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/mtpelerin.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/bridgefull.webp",
    link: "http://mtpelerin.com/fr/join?rfr=bWetdkDV",
  },
  {
    id: 42,
    nom: "Aegis Auth",
    url: "gnupg",
    description:
      "Aegis sets itself apart by storing all authentication data securely on the device itself, not relying on cloud backups, enhancing local control and security.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/aegis.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://getaegis.app",
  },
  {
    id: 44,
    nom: "Paraswap",
    url: "Paraswap",
    badge: ["Spot", ""],
    description:
      "Paraswap provides a unique feature by aggregating liquidity from various decentralized exchanges to ensure users always get the best possible rates on their trades.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/paraswap.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/paraswapfull.webp",
    link: "https://app.paraswap.io/?ref=MHgxRkE2QzdBMkI0ODI9MzQxMkNEQjNFZjZCQzMxRjA1OUFiNTdkN2Y0",
  },
  {
    id: 45,
    nom: "Tutanota",
    url: "tutanota",
    description:
      "utanota offers an end-to-end encrypted email service that also encrypts the subject line, body, and attachments, not just the message content as most other encrypted services.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/tutanota.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://tutanota.com/",
  },
  {
    id: 46,
    nom: "Metamask",
    url: "metamask",
    type: "",
    description:
      "Metamask is not just a wallet but also acts as a bridge to the decentralized web, allowing users to interact with decentralized applications directly through their browser.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/metamask.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/metamaskfull.webp",
    link: "https://metamask.io/",
  },
  {
    id: 47,
    nom: "Talisman",
    url: "metamask",
    description:
      "Talisman is distinctive for its focus on the privacy and security of cryptocurrency transactions, with advanced features such as end-to-end encryption and transaction anonymity.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/talisman.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/talismanfull.webp",
    link: "https://www.talisman.xyz",
  },
  {
    id: 48,
    nom: "AdGuard",
    url: "Adguard",
    description:
      "AdGuard not only blocks ads but also protects users from phishing and malicious websites, offering a comprehensive solution for safer browsing.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/adguard.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://adguard.com/en/welcome.html",
  },
  {
    id: 49,
    nom: "Time Guardian",
    url: "time-guardian",
    description:
      "Time Guardian offers a novel concept of a digital time capsule, using blockchain technology to ensure the longevity and authenticity of stored data.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/timeguardian.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/timeguardianfull.webp",
    link: "https://time-guardian.app/",
  },
  {
    id: 50,
    nom: "Relai.app",
    url: "relai-app",
    badge: ["Bitcoin", "Spot"],
    description:
      "Unique in its simplicity, Relai allows for Bitcoin investment via straightforward bank transfers, emphasizing ease of use with no need for registration or KYC.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/relaiapp.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/relaiappfull.webp",
    link: "https://relai.app/",
  },
  {
    id: 51,
    nom: "Skiff Pages",
    url: "Skiff",
    description:
      "Skiff Pages stands out for its commitment to data privacy with end-to-end encryption for document sharing and collaboration in a secure environment.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/skiff.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/skiffpagefull.webp",
    link: "https://skiff.com/pages",
  },
  {
    id: 52,
    nom: "Skiff Drive",
    url: "Skiff",
    badge: ["Opensource"],
    description:
      "Skiff Drive offers secure cloud storage with a focus on privacy through end-to-end encryption, giving users full control over their data.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/skiff.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/skiffdrivefull.webp",
    link: "https://skiff.com/drive",
  },
  {
    id: 53,
    nom: "Joplin",
    url: "Joplin",
    badge: ["Opensource", ""],
    description:
      "Joplin’s uniqueness lies in its open-source nature and offline-first approach, providing a high degree of privacy and security for note-taking and data management.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/joplin.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/joplinfull.webp",
    link: "https://joplinapp.org/",
  },
  {
    id: 54,
    nom: "KeepassDX",
    url: "keepassdx",
    description:
      "Specifically designed for Android, KeepassDX offers a clean, intuitive interface and supports the popular KeePass database format, making it an ideal choice for mobile password management.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/keepassdx.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://www.keepassdx.com/",
  },
  {
    id: 55,
    nom: "Notion",
    url: "notion",
    description:
      "Notion is unique for its modular approach to organization, allowing users to create custom layouts and databases to manage projects, notes, and tasks in a highly flexible way.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/notion.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/notionfull.webp",
    link: "https://www.notion.so/product",
  },
  {
    id: 56,
    nom: "Spectre.app",
    url: "Spectre-app",
    description:
      "Spectre stands out by using a deterministic algorithm to generate passwords on the fly from your master password, site name, and your username, ensuring you never need to store passwords.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/spectre.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/spectrefull.webp",
    link: "https://spectre.app/",
  },
  {
    id: 57,
    nom: "Escalidraw",
    url: "escalidraw",
    badge: ["Opensource", "Local", "", ""],
    description:
      "Escalidraw distinguishes itself with a focus on simplicity and privacy, offering an intuitive interface for sketching diagrams and collaborative drawing with real-time sync.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/escalidraw.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/escalidrawfull.webp",
    link: "https://excalidraw.com/",
  },
  {
    id: 58,
    nom: "Kraken",
    url: "kraken",
    badge: ["Proofofreserves", "Spot", "Margin"],
    description:
      "Kraken is unique for its comprehensive security measures and a wide range of trading options including futures and margin trading, catering to both beginners and experienced traders.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/kraken.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/krakenfull.webp",
    link: "https://www.kraken.com/",
  },
  {
    id: 59,
    nom: "ChatGPT",
    url: "chat-gpt",
    description:
      "OpenAI's ChatGPT stands out for its advanced natural language processing capabilities, enabling highly conversational interactions and providing insightful and context",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/chatgpt.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/chatgptfull.webp",
    link: "https://openai.com/blog/chatgpt",
  },
  {
    id: 60,
    nom: "Grammarly",
    url: "grammarly",
    description:
      " Grammarly excels with its sophisticated AI-based grammatical correction and style suggestions, helping users improve their writing across many platforms.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/grammarly.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/grammarlyfull.webp",
    link: "https://www.grammarly.com/",
  },
  {
    id: 61,
    nom: "Deepl",
    url: "deepl",
    description:
      "DeepL is renowned for its translation accuracy, utilizing advanced machine learning to deliver more natural translations than other services, supporting a wide range of languages.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/deepl.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/deeplfull.webp",
    link: "https://www.deepl.com",
  },
  {
    id: 62,
    nom: "Proton Drive",
    url: "proton-drive",
    badge: ["Encrypted"],
    description:
      "Proton Drive offers a secure cloud storage solution with end-to-end encryption, focusing on user privacy and seamless integration with other Proton services like ProtonMail.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/protondrive.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/protondrivefull.webp",
    link: "https://pr.tn/ref/GE6SVZ71VBHG",
  },
  {
    id: 63,
    nom: "NordPass",
    url: "nordpass",
    description:
      "NordPass offers a distinctive security feature set including data breach scanning and password health reports, enhancing overall cybersecurity awareness and protection.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nordpass.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/nordpassfull.webp",
    link: "https://nordpass.com/",
  },
  {
    id: 64,
    nom: "Privacy.com",
    url: "privacy",
    description:
      "Privacy.com provides unique virtual card capabilities, allowing users to make secure online purchases without revealing their actual credit card information.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/privacy.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://privacy.com/",
  },
  {
    id: 65,
    nom: "Lydia",
    url: "lydia",
    description:
      "Lydia is notable for its innovative mobile payment solutions in Europe, offering features like instant money transfers and the creation of ephemeral cards for secure transactions.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/lydia.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://www.lydia-app.com/",
  },
  {
    id: 66,
    nom: "Revolut",
    url: "revolut",
    description:
      "Revolut distinguishes itself by offering global financial services including currency exchange, budgeting tools, and cryptocurrency support, all within an intuitive app.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/revolut.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://www.revolut.com/",
  },
  {
    id: 67,
    nom: "Wise",
    url: "wise",
    description:
      "Wise is unique for its transparent fee structure and real-time exchange rates in international money transfers, making it a favorite for users seeking cost-effective and straightforward solutions.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/wise.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://wise.com/",
  },
  {
    id: 68,
    nom: "Nvidia Broadcast",
    url: "nvidia-broadcast",
    description:
      "NVIDIA Broadcast stands out with AI-powered audio and video enhancements, tailored specifically for content creators looking to improve their production quality.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nvidiabroadcast.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://www.nvidia.com/fr-fr/geforce/broadcasting/broadcast-app/",
  },
  {
    id: 69,
    nom: "DaVinci Resolve",
    url: "davinci-resolve",
    description:
      "Known for its professional-grade video editing capabilities, DaVinci Resolve offers extensive color grading and audio post-production tools, catering to filmmakers and video professionals.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/davinciresolve.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://www.blackmagicdesign.com/products/davinciresolve",
  },
  {
    id: 70,
    nom: "OBS",
    url: "obs",
    description:
      "OBS provides a powerful, open-source solution for video recording and live streaming, featuring extensive customization and compatibility with multiple streaming services.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/obs.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://obsproject.com/",
  },
  {
    id: 71,
    nom: "Audacity",
    url: "audacity",
    description:
      "Audacity is unique for its accessibility and comprehensive set of audio editing tools, making it widely used for podcasting, music recording, and audio editing.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/audacity.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://www.audacityteam.org/",
  },
  {
    id: 72,
    nom: "CapCut",
    url: "capcut",
    description:
      "CapCut offers mobile users powerful video editing tools in a user-friendly interface, making it ideal for quick edits on the go.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/capcut.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptomatorfull.webp",
    link: "https://www.capcut.com/",
  },
  {
    id: 73,
    nom: "Hat.sh",
    url: "hat-sh",
    description:
      "Hat.sh provides easy-to-use, secure file encryption directly in your browser, supporting strong encryption standards to protect files before they are shared or stored.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/hatsh.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/hatshfull.webp",
    link: "https://hat.sh/",
  },
  {
    id: 74,
    nom: "Skiff Mail",
    url: "skiff-mail",
    badge: ["Opensource"],
    description:
      "Skiff Mail prioritizes security with end-to-end encryption for email communication, standing out with features like message recall and automatic destruction.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/skiff.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/skiffmailfull.webp",
    link: "https://skiff.com/mail",
  },
  {
    id: 75,
    nom: "Proton Pass",
    url: "proton-pass",
    description:
      "As part of the Proton suite, Proton Pass offers encrypted password management, ensuring user data remains private and secure across multiple devices.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/protonpass.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/protonpassfull.webp",
    link: "https://proton.me/pass",
  },
  {
    id: 76,
    nom: "Element",
    url: "element",
    badge: ["Matrix"],
    description:
      "Element uses the decentralized Matrix protocol to offer secure and private communications, providing an alternative to traditional messaging apps with its focus on user-controlled encryption and data ownership.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/element.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/elementfull.webp",
    link: "https://element.io/",
  },
  {
    id: 77,
    nom: "Arc",
    url: "arc",
    description:
      "Arc distinguishes itself with a design-centric approach, aiming to reinvigorate the web browsing experience with a focus on usability and customization.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/arc.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/arcfull.webp",
    link: "https://arc.net/",
  },
  {
    id: 78,
    nom: "CleanMyMac",
    url: "CleanMyMac",
    description:
      "CleanMyMac excels with its comprehensive cleaning tools that extend beyond simple file removal, optimizing Mac performance through deep system maintenance tasks.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/cleanmymac.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cleanmymacfull.webp",
    link: "https://cleanmymac.com/",
  },
  {
    id: 79,
    nom: "DeBank",
    url: "DeBank",
    description:
      "DeBank provides a social platform for tracking cryptocurrency portfolios, offering interactive tools to visualize and analyze asset performance in real time.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/debank.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/debankfull.webp",
    link: "https://debank.com/",
  },
  {
    id: 80,
    nom: "Internxt",
    url: "internxt",
    badge: ["Opensource"],
    description:
      "Internxt offers a decentralized approach to cloud storage, focusing on privacy and security with zero-knowledge encryption for all stored data.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/internxt.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/internxtfull.webp",
    link: "https://internxt.com/",
  },
  {
    id: 81,
    nom: "Tangem",
    url: "tangem",
    badge: ["HardwareWallet", "Allcrypto"],
    description:
      "Tangem introduces a card-shaped cold wallet for cryptocurrencies, supporting over 6000 coins and tokens with robust security features to give users full control of their private keys.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/tangem.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/tangemfull.webp",
    link: "https://tangem.com/en/",
    offer: "10% de réduction",
    info: "Card-shaped cold wallet which supports 6000+ of coins and tokens and gives you full control of your private keys.",
  },
  {
    id: 82,
    nom: "Rabby Wallet",
    url: "Rabby-wallet",
    badge: ["Opensource"],
    description:
      "Rabby Wallet excels in managing digital identities and blockchain interactions, providing a streamlined and secure interface for managing multiple blockchain accounts.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/rabby.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/rabbyfull.webp",
    link: "https://rabby.io/",
  },
  {
    id: 83,
    nom: "Draw.io",
    url: "draw-io",
    badge: ["Opensource", "Local"],
    description:
      "Draw.io is known for its versatility in creating diagrams and flowcharts directly in the browser, offering an extensive array of templates and tools for rapid visual planning.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/drawio.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/drawiofull.webp",
    link: "https://Draw.io",
  },
  {
    id: 84,
    nom: "Blockstream Jade",
    url: "blockstream-jade",
    badge: ["Opensource", "Bitcoinonly"],
    description:
      "Blockstream Jade offers a unique open-source hardware wallet for Bitcoin, focusing on enhanced security features like full node support and two-factor authentication.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/jade.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/jadefull.webp",
    link: "https://blockstream.com/jade/",
    offer: "10 % de réduction avec le code XXXX",
  },
  {
    id: 85,
    nom: "SecuX XSEED Plus",
    url: "secux-xseed-plus",
    badge: [""],
    description:
      " SecuX XSEED Plus offers robust security for backing up seed phrases, using tamper-evident materials to ensure that recovery phrases are securely stored.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/secux.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/secuxfull.webp",
    link: "https://shop.secuxtech.com/products/x-seed-plus-seed-phrase-storage",
  },
  {
    id: 86,
    nom: "Cryptotag Zeus",
    url: "cryptotag-zeus",
    badge: ["Bitcoin"],
    description:
      "Cryptotag Zeus provides a unique solution for physically backing up cryptocurrency keys using extremely durable materials to withstand extreme conditions.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/cryptotag.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/cryptotagfull.webp",
    link: "https://cryptotag.io/experience/zeus/",
  },
  {
    id: 87,
    nom: "Incogni",
    url: "incogni",
    badge: [],
    description:
      "Incogni focuses on automating the data deletion process from various online services, helping users reclaim their privacy with minimal effort.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/incogni.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/incognifull.webp",
    link: "https://incogni.com/",
  },
  {
    id: 88,
    nom: "Dune",
    url: "dune",
    badge: [],
    description:
      "Dune offers comprehensive tools for querying, visualizing, sharing, and exporting data across over 15 different blockchains, providing a powerful analytics platform for cryptocurrency users.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/dune.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/incognifull.webp",
    link: "https://dune.com/home",
  },
  {
    id: 89,
    nom: "Revoke.cash",
    url: "revoke-cash",
    badge: [],
    description:
      "Revoke.cash allows users to manage and revoke permissions for smart contracts on Ethereum, enhancing security and control over",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/revoke.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/revokecashfull.webp",
    link: "https://revoke.cash/",
  },
  {
    id: 90,
    nom: "Mistral.ai",
    url: "Mistral-ai",
    badge: [],
    description:
      "Mistral.ai offers advanced data analytics and visualization tools, supporting queries and data sharing across multiple blockchain platforms for enhanced market analysis.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/mistral.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/mistralfull.webp",
    link: "https://mistral.ai/",
  },
  {
    id: 91,
    nom: "Mega",
    url: "mega",
    badge: ["Opensource"],
    description:
      "Mega distinguishes itself with a strong emphasis on privacy, offering end-to-end encrypted file storage and sharing services with a generous free storage quota.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/mega.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/megafull.webp",
    link: "https://mega.io/",
  },
  {
    id: 92,
    nom: "NextDNS",
    url: "nextdns",
    badge: [],
    description:
      "NextDNS provides customizable DNS services that enhance internet privacy and security, offering features like ad blocking and threat protection at the DNS level.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/nextdns.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/incognifull.webp",
    link: "https://nextdns.io/",
  },
  {
    id: 93,
    nom: "Ollama",
    url: "ollama",
    badge: [],
    description:
      "Ollama allows you to run with 2 clicks a variety of AI models locally and customize them for your specific needs.",
    url_logo:
      "https://tool-image.s3.eu-north-1.amazonaws.com/logo_tools/ollama.webp",
    url_img:
      "https://tool-image.s3.eu-north-1.amazonaws.com/img_tools/ollamafull.webp",
    link: "https://github.com/features/copilot",
  },
];
