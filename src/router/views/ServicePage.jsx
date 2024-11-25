import ServiceCard from '../../components/ServiceCard'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            title="Veterinary Care" 
            description="Professional medical care for your pets" 
            icon="stethoscope"
          />
          <ServiceCard 
            title="Grooming" 
            description="Keep your pet looking their best" 
            icon="cut"
          />
          <ServiceCard 
            title="Training" 
            description="Behavior training for dogs and cats" 
            icon="graduation-cap"
          />
          <ServiceCard 
            title="Boarding" 
            description="Safe and comfortable pet boarding" 
            icon="home"
          />
          <ServiceCard 
            title="Pet Sitting" 
            description="In-home pet care while you're away" 
            icon="user"
          />
          <ServiceCard 
            title="Pet Adoption" 
            description="Find your new furry friend" 
            icon="heart"
          />
        </div>
      </main>
    </div>
  )
}