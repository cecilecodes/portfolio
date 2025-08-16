import Image from 'next/image'

export default function Home() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: '#FFDCDC' }}
    >
      <h1 className="text-4xl italic text-gray-800">
        Bonjour, c'est Cécile!
      </h1>
      <h2 className="text-2xl italic text-gray-800">
        Thomas stupid fartty garcon
      </h2>
      <Image src="/quokka.webp" alt="Cécile" width={500} height={500} />
    </div>
  );
}
