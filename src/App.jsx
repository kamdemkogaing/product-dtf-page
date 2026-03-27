import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleCheck,
} from "lucide-react";
import { useState } from "react";

const bullets = [
  "Für mittlere bis hohe Produktionsvolumen konzipiert",
  "Epson® PrecisionCore I3200-A1 Druckköpfe für brillante Druckergebnisse",
  "Bis zu 35 % schneller - mehr Output bei kürzeren Produktionszeiten",
  "Flexible Tintenauswahl - passend zu Deinen Anforderungen.",
  "Leise, automatisierte und zuverlässige Fixiereinheit – für einen reibungslosen Workflow",
];

const features = [
  ["Abmessung:", "1330 x 750 x 1415 mm"],
  ["Ausführung:", "Drucker"],
  ["Betriebssystem:", "Windows 8, 10, 11 (64-bit) Mac OS"],
  ["Druckkopftechnologie:", "2 x Epson® I3200 (1x CMYK, 1x White)"],
  ["Druckleistung:", "6 m²/ Std / 11-12 lfm/ Std (600 mm Filmbreite)"],
  ["Druckverfahren:", "DTF (Direct-to-Film)"],
  [
    "Garantie:",
    "4 Monate auf Druckköpfe, 12 Monate Bring-In-Service, Ausgenommen sind tintenführende Teile",
  ],
  ["Gewicht ca.:", "150 kg"],
  ["Inhalt:", "1000 ml"],
  ["Leistung:", "1500 W"],
  ["Max. Druckauflösung:", "2400 dpi"],
  ["Medienbreite:", "600 mm"],
  ["Schnittstelle:", "Lan- Adapter"],
  ["Software:", "Print Suite"],
  ["Spannungsversorgung:", "230 V AC"],
  ["Tinten:", "DuPont™ Artistri® P1600 CMYKW, Kodak KODACOLOR CMYKW"],
  ["Tintenversorgung:", "Flaschen"],
];

const compareColumns = [
  {
    title: "XP600-PRO, Drucker inkl. 450 mm",
    image:
      "https://shop.printequipment.de/media/de/97/f0/1755782201/dtf-xp-start-450-web-02.webp",
    size: "450 mm",
    power: "230 V AC\n(kein Starkstrom benötigt)",
    dimensions:
      "1.330 x 525 x 450 mm (Druckstück)\n1.330 x 750 x 1.415 mm (inkl. Standfuß)\n2.350 x 730 x 946 mm (Fixiereinheit)",
    speed: "14-15 lfm. / Std.\n(450 mm Filmbreite)",
    usage: "35 lfm. / Woche,\nbei 20 Drucktagen / Woche",
    button: "MEHR ERFAHREN",
  },
  {
    title: "XP600-PRO, Fixiereinheit 600 mm",
    image:
      "https://shop.printequipment.de/media/2a/dc/2e/1755782017/dtf-xp-start-600-web-01.webp",
    size: "600 mm",
    power: "400 V AC",
    dimensions:
      "1.330 x 555 x 415 mm (Druckstück)\n1.330 x 750 x 1.415 mm (inkl. Standfuß)\n2.350 x 1.035 x 1.076 mm (Fixiereinheit)",
    speed: "11-12 lfm. / Std.\n(600 mm Filmbreite)",
    usage: "50 lfm. / Woche,\nbei 30 Drucktagen / Woche",
    button: "MEHR ERFAHREN",
  },
  {
    title: "XP600-PRO-4H-E, Fixiereinheit 600 mm",
    image:
      "https://shop.printequipment.de/media/2a/dc/2e/1755782017/dtf-xp-start-600-web-01.webp",
    size: "600 mm",
    power: "400 V AC",
    dimensions:
      "1.782 x 620 x 710 mm (Druckstück)\n1.900 x 990 x 1.460 mm (inkl. Standfuß)\n1.900 x 840 x 1.030 mm (Fixiereinheit)",
    speed: "~26 lfm. / Std.\n(600 mm Filmbreite)",
    usage: "50 lfm. / Tag,\nbei täglicher Produktion",
    button: "MEHR ERFAHREN",
  },
];

const carouselDots = [0, 1, 2, 3, 4];

function AccordionItem({ title }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#ededed] bg-[#fafafa]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-[10px] text-left text-[15px] text-[#444]"
      >
        <span>{title}</span>
        {open ? (
          <ChevronUp size={14} strokeWidth={1.5} />
        ) : (
          <ChevronDown size={14} strokeWidth={1.5} />
        )}
      </button>

      {open && (
        <div className="px-4 pb-4 text-[15px] text-[#666]">
          Inhalt wie im Screenshot nicht geöffnet dargestellt.
        </div>
      )}
    </div>
  );
}

function PdfCard({ label }) {
  return (
    <div className="flex cursor-pointer flex-col items-center gap-2">
      <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-[#ff6158] bg-white">
        <img
          src="/assets/pdf-icon.png"
          alt="PDF"
          className="h-[36px] w-[36px] object-contain"
        />
      </div>
      <span className="text-center text-[12px] text-[#333]">{label}</span>
    </div>
  );
}

function CompareRowLabel({ children }) {
  return (
    <div className="whitespace-pre-line px-5 py-6 text-center text-[15px] font-bold leading-[1.45] text-[#222]">
      {children}
    </div>
  );
}

function CompareRowValue({ children }) {
  return (
    <div className="whitespace-pre-line px-5 py-6 text-center text-[15px] leading-[1.45] text-[#222]">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen  text-[#111]">
      <div className="mx-auto w-full max-w-[1280px]">
        <section className="grid grid-cols-[70px_640px_1fr] gap-0 px-[34px] pb-[26px] pt-[46px]">
          <div className="flex flex-col items-center pt-[8px]">
            <button type="button" className="text-[#b9b9b9]">
              <ChevronUp size={16} strokeWidth={1.5} />
            </button>

            <div className="mt-[4px] flex h-[47px] w-[54px] items-center justify-center border border-[#bfc3c7] bg-[#f7f7f7] p-[4px]">
              <img
                src="https://shop.printequipment.de/media/2a/dc/2e/1755782017/dtf-xp-start-600-web-01.webp"
                alt="Produkt Thumbnail"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <button type="button" className="mt-[4px] text-[#b9b9b9]">
              <ChevronDown size={16} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-[405px] w-full items-center justify-center">
              <img
                src="https://shop.printequipment.de/media/2a/dc/2e/1755782017/dtf-xp-start-600-web-01.webp"
                alt="DTF Drucksystem XP600-Pro"
                className="ml-[-6px] mt-[8px] w-[470px] object-contain"
              />
            </div>

            <div className="mt-[18px] flex items-center justify-center gap-[11px]">
              <button type="button" className="text-[#d3d3d3]">
                <ChevronLeft size={14} strokeWidth={1.5} />
              </button>

              {carouselDots.map((dot, index) => (
                <span
                  key={dot}
                  className={`block h-[10px] w-[10px] rounded-full border border-[#707070] ${
                    index === 0 ? "bg-black" : "bg-transparent"
                  }`}
                />
              ))}

              <button type="button" className="text-[#d3d3d3]">
                <ChevronRight size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="pl-[48px] pt-[4px]">
            <h1 className="max-w-[490px] text-[28px] font-bold leading-[1.12] text-black">
              DTF Drucksystem XP600-Pro, Drucker und Fixiereinheit (600 mm)
            </h1>

            <p className="mt-[18px] text-[18px] leading-none text-[#555]">
              Drucker und Fixiereinheit (600 mm)
            </p>

            <div className="mt-[34px] flex flex-col gap-[10px]">
              <button
                type="button"
                className="flex h-[35px] w-[300px] items-center justify-center rounded-full bg-black text-[15px] font-bold uppercase leading-none text-white"
              >
                PREIS ANFRAGEN
              </button>

              <button
                type="button"
                className="flex h-[35px] w-[300px] items-center justify-center rounded-full bg-black text-[15px] font-bold uppercase leading-none text-white"
              >
                JETZT BERATUNG ANFORDERN
              </button>
            </div>

            <div className="mt-[30px] text-[13px] leading-[1.38] text-[#222]">
              <p className="text-[15px]">
                <span className="font-bold uppercase">ART-NR:</span>{" "}
                <span className="font-normal">DTF-XP-START-600</span>
              </p>

              <ul className="mt-[18px] space-y-[8px]">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-[6px]">
                    <CircleCheck
                      className="mt-[2px] shrink-0 text-black"
                      size={15}
                      fill="black"
                      stroke="white"
                      strokeWidth={2}
                    />
                    <span className="whitespace-nowrap text-[15px] leading-[1.15]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 border-t border-[#dfdfdf] px-[5px] pt-4">
          <div className="min-h-[400px] bg-[#f3f3f3] px-[20px] pb-8 pt-[22px]">
            <h2 className="text-[17px] font-bold uppercase tracking-[0.01em] text-black">
              PRODUKTINFORMATIONEN
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-[1.42] text-[#2d2d2d]">
              <p>
                Das DTF-Systembundle XP600-PRO kombiniert modernste Drucktechnik
                mit einer effizienten Fixierein-
                <br />
                heit – perfekt für professionelle Druckdienstleister und
                Textilhersteller, die Qualität, Geschwindigkeit und
                <br />
                Nachhaltigkeit schätzen.
              </p>

              <div>
                <p className="font-bold">
                  Drucksystem XP600-Pro – Innovation trifft Leistung
                </p>
                <p>
                  Das Drucksystem XP600-Pro überzeugt durch technische
                  Innovationen und eine kompakte Bauweise,
                  <br />
                  die Effizienz und Präzision maximiert.
                </p>
              </div>

              <div>
                <p>Technische Highlights:</p>
                <ul className="ml-4 mt-1 list-disc space-y-[2px]">
                  <li>
                    Zwei Epson® PrecisionCore I3200-A1-Druckköpfe – linear
                    versetzt angeordnet, für einen simultanen Farbauftrag von
                    CMYK und Weiß.
                  </li>
                  <li>
                    Kompakte Bauweise – reduziert den Fahrweg des
                    Druckkopfschlittens und steigert die Druckgeschwindigkeit um
                    bis zu 35 % gegenüber Vorgängermodellen.
                  </li>
                  <li>
                    Hohe Auflösung – in der Produktionseinstellung 11–12 lfm pro
                    Stunde.
                  </li>
                  <li>
                    Nachhaltige Tintenlösungen – wähle zwischen DuPont™
                    Artistri® P1600 Series und Kodakcolor DTF / PTF Series,
                    beide zertifiziert nach ECO PASSPORT by OEKO-TEX®, die
                    Artistri® P1600 ist zusätzlich GOTS-zertifiziert. Damit
                    setzt das System auf umweltfreundliche und zugleich
                    hochwertige Tintentechnologie.
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-bold">
                  Fixiereinheit – Komfort und Effizienz
                </p>
                <p>
                  Die Fixiereinheit ist auf einfache Bedienung und niedrige
                  Betriebskosten ausgelegt:
                </p>
                <ul className="ml-4 mt-1 list-disc space-y-[2px]">
                  <li>Automatische Steuerung wichtiger Funktionen</li>
                  <li>
                    Reduzierte Geräuschentwicklung – optimierte Isolierung sorgt
                    für leisen Betrieb
                  </li>
                  <li>Zuverlässige Fixierung für dauerhafte Druckqualität</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="min-h-[400px] bg-[#f3f3f3] px-[20px] pb-8 pt-[22px]">
            <h2 className="text-[17px] font-bold uppercase tracking-[0.01em] text-black">
              EIGENSCHAFTEN
            </h2>

            <div className="mt-6 space-y-[10px]">
              {features.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[225px_1fr] bg-[#f7f7f7] px-[8px] py-[8px] text-[15px] leading-[1.35]"
                >
                  <div className="font-bold text-[#222]">{label}</div>
                  <div className="text-[#555]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-4 grid grid-cols-2 gap-4 px-[5px]">
          <div className="bg-[#f3f3f3] px-[20px] pb-6 pt-[28px]">
            <h2 className="text-[17px] font-bold uppercase text-black">
              WEITERFÜHRENDE INFORMATIONEN
            </h2>

            <div className="mt-5 overflow-hidden bg-[#f8f8f8]">
              <AccordionItem title="Lieferumfang" />
              <AccordionItem title="Garantie" />
              <AccordionItem title="FAQ" />
            </div>
          </div>

          <div className="bg-[#f3f3f3] px-[20px] pb-6 pt-[28px]">
            <h2 className="text-[17px] font-bold uppercase text-black">
              DONWLOAD
            </h2>

            <div className="mt-10 grid grid-cols-4 justify-items-center gap-4">
              <PdfCard label="Katalog DTF DE" />
              <PdfCard label="Katalog DTF EN" />
              <PdfCard label="Katalog DTF FR" />
              <PdfCard label="Verarbeitung DTF" />
            </div>
          </div>
        </section>

        <section className="mt-6 bg-[#f3f3f3] px-[18px] pb-8 pt-[18px] mb-[7.5rem]">
          <div className="grid grid-cols-[240px_1fr_1fr_1fr]">
            <div></div>

            {compareColumns.map((column) => (
              <div key={column.title} className="px-4 text-center">
                <img
                  src={column.image}
                  alt={column.title}
                  className="mx-auto h-[100px] object-contain"
                />
                <p className="mt-2 text-[15px] font-bold leading-[1.3] text-[#111]">
                  {column.title}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-[12px]">
            <div className="grid grid-cols-[240px_1fr_1fr_1fr] bg-[#f9f9f9]">
              <CompareRowLabel>Max. Medienbreite</CompareRowLabel>
              <CompareRowValue>{compareColumns[0].size}</CompareRowValue>
              <CompareRowValue>{compareColumns[1].size}</CompareRowValue>
              <CompareRowValue>{compareColumns[2].size}</CompareRowValue>
            </div>

            <div className="grid grid-cols-[240px_1fr_1fr_1fr] bg-[#f9f9f9]">
              <CompareRowLabel>
                Spannungsversorgung{"\n"}Fixiereinheit
              </CompareRowLabel>
              <CompareRowValue>{compareColumns[0].power}</CompareRowValue>
              <CompareRowValue>{compareColumns[1].power}</CompareRowValue>
              <CompareRowValue>{compareColumns[2].power}</CompareRowValue>
            </div>

            <div className="grid grid-cols-[240px_1fr_1fr_1fr] bg-[#f9f9f9]">
              <CompareRowLabel>Abmessungen{"\n"}(L x B x H)</CompareRowLabel>
              <CompareRowValue>{compareColumns[0].dimensions}</CompareRowValue>
              <CompareRowValue>{compareColumns[1].dimensions}</CompareRowValue>
              <CompareRowValue>{compareColumns[2].dimensions}</CompareRowValue>
            </div>

            <div className="grid grid-cols-[240px_1fr_1fr_1fr] bg-[#f9f9f9]">
              <CompareRowLabel>
                Druckgeschwindigkeit{"\n"}Produktionseinstellung
              </CompareRowLabel>
              <CompareRowValue>{compareColumns[0].speed}</CompareRowValue>
              <CompareRowValue>{compareColumns[1].speed}</CompareRowValue>
              <CompareRowValue>{compareColumns[2].speed}</CompareRowValue>
            </div>

            <div className="grid grid-cols-[241px_1fr_1fr_1fr] bg-[#f9f9f9]">
              <CompareRowLabel>
                Empfohlenes{"\n"}Mindest-Produktionsvolumen
              </CompareRowLabel>
              <CompareRowValue>{compareColumns[0].usage}</CompareRowValue>
              <CompareRowValue>{compareColumns[1].usage}</CompareRowValue>
              <CompareRowValue>{compareColumns[2].usage}</CompareRowValue>
            </div>
          </div>

          <div className="grid grid-cols-[240px_1fr_1fr_1fr] pt-6">
            <div></div>

            {compareColumns.map((column) => (
              <div
                key={column.title + column.button}
                className="flex justify-center px-4"
              >
                <button
                  type="button"
                  className="h-[34px] w-[170px] rounded-full bg-black text-[15px] font-bold uppercase text-white"
                >
                  {column.button}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
