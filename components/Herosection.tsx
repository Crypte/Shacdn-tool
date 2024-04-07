

import { Carrousel } from "./Carrousel";



export const Herosection = () => {
    return (
        <div className="mt-[400px] flex items-center relative">
            <div className="container flex flex-col items-center overflow-hidden">
                <div className="text-center">
                    <div className="gradient-background red"></div>
                    <div className="gradient-background blue"></div>
                    <div className="gradient-background green"></div>
                    <h2 className=' text-xl text-primary mb-8'>Reprenez le contrôle</h2>
                    <h1 className=' text-6xl lg:text-7xl font-bold tracking-tight text-center mb-14'>Sécurité. Productivité. Efficacité. </h1>
                </div>
                <Carrousel />
            </div>
            
        </div>
    );
};
