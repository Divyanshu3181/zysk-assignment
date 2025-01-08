interface CompanyLogoProps {
  name: string;
  logo: string;
}

export default function CompanyLogo({ name, logo }: CompanyLogoProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 group">
      <div className="mb-2">
        <img 
          src={logo} 
          alt={name} 
          className="h-12 object-contain hover:scale-105 transition-all duration-300" 
        />
      </div>
      <p className="text-sm text-gray-600 font-medium text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </p>
    </div>
  );
}