import { useState } from "react";

const workData = [
  { id: 1, cat: "Haircuts", title: "Hairstyle", img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=600" },
  { id: 2, cat: "Dye", title: "Coloring", img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=600" },
  { id: 3, cat: "Hairstyle", title: "Hairstyle", img:  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400",big: true },
  { id: 4, cat: "Shave", title: "Barber", img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=400" },
  { id: 5, cat: "Haircuts", title: "Dyeing", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600" },
];

const cats = ["All", "Haircuts", "Dye", "Shave", "Hairstyle"];

export default function OurWork() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? workData : workData.filter(i => i.cat === active);

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-serif font-bold">Our Work</h2>
        <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
          Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="flex justify-center gap-7 mb-10">
        {cats.map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`text-[14px] pb-1 border-b-2 transition-all ${active === c ? "border-black text-black" : "border-transparent text-gray-600"}`}
          >
            {c}
          </button>
        ))}
      </div>

      
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-4 auto-rows-[300px]">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`relative group overflow-hidden ${item.big ? "md:row-span-2 md:h-full" : "h-[300px]"} cursor-pointer`}
          >
           
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

           
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
              <div className="flex gap-3 mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center">+</span>
                <span className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center">↗</span>
              </div>
              <h3 className="text-lg font-serif translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
              <p className="text-xs text-gray-200 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{item.cat}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="border border-black rounded-full px-10 py-2.5 text-[11px] tracking-widest hover:bg-black hover:text-white transition">
          VIEW ALL WORK
        </button>
      </div>
    </section>
  );
}