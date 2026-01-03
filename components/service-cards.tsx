import { Zap, Factory, Droplet, Car } from "lucide-react"

export function ServiceCards() {
  const services = [
    {
      title: "Power & Energy",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Petroleum Refinery",
      icon: <Droplet className="w-8 h-8" />,
    },
    {
      title: "Oil & Gas Industry",
      icon: <Factory className="w-8 h-8" />,
    },
    {
      title: "Automotive Manufacturing",
      icon: <Car className="w-8 h-8" />,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border-2 border-gray-100 hover:border-primary transition-all p-8 text-center cursor-pointer"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
