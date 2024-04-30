// NAVIGATION
import { Search, EyeOff,ShieldX, Mail, MessageCircle,FormInput,CheckCheck,ShieldCheck,CircuitBoard,Wallet, Coins,PackageCheck, UploadCloud, FileKey,Compass,Eraser,BrainCircuit,StickyNote,Users } from "lucide-react"

export const NAV_BAR = [
    {
        label: 'Navigation Web',
        key: 'Communication',
        submenu: [
            { label: 'Navigateur', icon: Compass, href:'/explore/navigateur',title: "Navigateurs les plus sécurisés", subtitle: "Naviguez sur le web en toute tranquillité."  },
            { label: 'Moteur de recherche', icon: Search, href:'/explore/moteur-recherche',title: "Les meilleurs moteurs de recherche", subtitle: "Vie privée et résultats optimaux."  },
            { label: 'Bloqueur de publicités', icon: ShieldX, href:'/explore/ad-blocker',title: "Les bloqueurs les plus efficaces", subtitle: "Plus de publicités, aussi simple que cela.",  },
            { label: 'VPN', icon: EyeOff, href:'/explore/vpn',title: "VPN les plus polyvalents", subtitle: "Pour votre divertissement ou votre sécurité."  }
        ]
    },
    {
        label: 'Communication',
        key: 'Communication',
        submenu: [
            { label: 'Email', icon: Mail, href:'/explore/email', subtitle: "idée? " },
            { label: 'Messagerie', icon: MessageCircle, href:'/explore/messagerie', title: "Services de messagerie confidentiels.", subtitle: "Des conversations privées."  }
        ]
    },
    {
        label: 'Sécurité',
        key: 'Sécurité',
        submenu: [
            { label: 'Mots de passe', icon: FormInput, href:'/explore/gestionnaire-mdp',title: "Meilleurs gestionnaires de mots de passe.", subtitle: "Plus jamais le même mot de passe.",  },
            { label: 'Auth à deux facteurs', icon: CheckCheck, href:'/explore/2FA', title: "Authentification à deux facteurs (2FA).", subtitle: "Une couche supplémentaire de sécurité."  },
            { label: 'Antivirus', icon: ShieldCheck, href:'/explore/antivirus',title: "Antivirus les plus efficaces", subtitle: "Votre meilleur allié."  },
            { label: 'Matériel', icon: CircuitBoard, href:'/explore/materiel',title: "Outils de sécurité matérielle", subtitle: "Minimisez les risques."  }
        ]
    },
    {
        label: 'Crypto',
        key: 'Crypto',
        submenu: [
            { label: 'Wallet', icon: Wallet, href:'/explore/wallet', subtitle: "Pour votre fortune"},
            { label: 'Échanges Crypto', icon: Coins, href:'/explore/exchanges',title: "Plateformes d'échange fiables", subtitle: "Pour vos achats."  },
            { label: 'Explorateur', icon: PackageCheck, href:'/explore/explorer',title: "Explorateurs", subtitle: "Ne loupez rien on chain."  }
        ]
    },
    {
        label: 'Stockage et Fichiers',
        key: 'Stockage et Fichiers',
        submenu: [
            { label: 'Cloud', icon:  UploadCloud, href:'/explore/cloud',title: "Services cloud chiffrés", subtitle: "Stockez tout ce que vous voulez."  },
            { label: 'Chiffrement', icon: FileKey, href:'/explore/chiffrement',title: "Outils de chiffrement", subtitle: "Protégez vos données les plus importantes."  },
            { label: 'Nettoyage & Optimisation', icon: Eraser, href:'/explore/nettoyage',title: "Outils de suppression", subtitle: "Ne laissez plus aucune trace."  }
        ]
    },
    {
        label: 'Productivité',
        key: 'Productivité',
        submenu: [
            { label: 'Prise de notes', icon: StickyNote, href:'/explore/notes',title: "Meilleur preneur de notes", subtitle: "N'oubliez plus jamais rien."  },
            { label: 'Collaboration', icon: Users, href:'/explore/collaboration',title: "Outils de collaboration", subtitle: "Travaillez, Partagez, Lancez."  },
            { label: 'Outils d\'IA', icon: BrainCircuit , href:'/explore/IA',title: "Outils d'IA", subtitle: "IA. Simplifiez. Optimisez."  }
        ]
    }
];
