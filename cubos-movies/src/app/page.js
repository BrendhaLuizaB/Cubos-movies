import Image from "next/image";
import background from "./../assets/backgropund-krists-luhaers-unsplash.png";
import SearchInput from "@/components/Input/input";

export default function Home() {
  return (
    <div id="background">
      <div className="background">
        <Image
          className="bg-no-repeat bg-cover bg-center h-screen w-screen relative top-0 left-0 z-[-1]"
          src={background}
          alt="Imagem de fundo"
        />
      </div>
      <div
        className="absolute top-0 left-0 z-[-1] h-screen w-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(18,17,19,0.8016456582633054) 0%, rgba(0,0,0,0.70640756302521) 0%, rgba(18,17,19,0.9164915966386554) 100%)",
        }}
      >
     <SearchInput/>
      </div>
   
      
    </div>
  );
}
