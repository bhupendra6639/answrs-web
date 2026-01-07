import { Button } from "@/components/ui/button"

export function RedBanner() {
  return (
    <section className="bg-primary py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
              Amazing things happen to your business
            </h2>
            <p className="text-white/80 text-sm md:text-base">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <Button
            size="lg"
            variant="outline"
            className="w-full md:w-auto bg-transparent border border-white text-white hover:bg-white hover:text-primary px-6 md:px-8 h-11 md:h-12 font-bold rounded-full uppercase text-[10px] sm:text-xs tracking-widest transition-all"
          >
            MARKET SECTORS
          </Button>
        </div>
      </div>
    </section>
  )
}
