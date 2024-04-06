import { Carrousel } from "./Carrousel";


export const Herosection = () => {

    return (
        <div className="h-screen flex items-center relative">
                <div className="container flex flex-col items-center">
                        <div className="text-center">
                       
                        <h2 className=' text-xl text-primary mb-8'>Reprenez le contrôle</h2>
                        <h1 className=' text-6xl lg:text-7xl font-bold tracking-tight text-center mb-14'>Sécurité. Productivité. Efficacité. </h1>
                        </div>
                        <Carrousel/>
                       
                        
                     
                </div>
            </div>

    );};
