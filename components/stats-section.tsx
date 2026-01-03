export function StatsSection() {
  const stats = [
    { label: "Projects Completed", value: "1,200+", description: "Delivered on schedule" },
    { label: "Efficiency Increase", value: "300%", description: "Post-implementation avg" },
    { label: "Safety Rating", value: "99.9%", description: "Certified ISO standards" },
    { label: "Global Reach", value: "45+", description: "Active countries" },
  ]

  return (
    <section className="py-24 border-y border-zinc-900 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-8 border-l border-zinc-800 flex flex-col gap-2 group hover:bg-zinc-900/30 transition-colors"
            >
              <span className="text-4xl font-bold tracking-tighter text-white group-hover:translate-x-1 transition-transform">
                {stat.value}
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">{stat.label}</span>
              <p className="text-sm text-zinc-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
