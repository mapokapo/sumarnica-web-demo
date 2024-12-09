import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Book, House, Users } from "lucide-react";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-sum-blue">
      <section className="flex w-full flex-1 flex-col bg-gradient-to-b from-white to-sum-blue p-4 pt-16">
        <div className="mx-auto flex h-full w-full flex-col-reverse justify-center gap-8 lg:w-5/6 lg:flex-row lg:gap-4 xl:w-4/6">
          <div className="flex-[5]">
            <div className="flex flex-col">
              <span className="text-center text-2xl font-semibold text-sum-blue">
                Dobrodošli
              </span>
              <h1 className="z-10 my-16 text-center text-5xl font-bold text-sum-blue lg:text-7xl">
                SUMarnica
              </h1>
            </div>
            <div className="mx-8 flex flex-col gap-8 bg-gradient-to-b from-sum-red via-sum-red to-transparent p-8 pb-32 text-sum-red-foreground">
              <p className="text-lg font-semibold">
                SUMarnica je najlakši način za upravljanje pametnih radionica i
                digitalnih knjižnica.
              </p>
              <p>
                SUMarnica je platforma dizajnirana kako bi studenti i profesori
                imali lakši pristup pametnim učionicama i knjižnicama. Pomaže u
                organizaciji, dijeljenju znanja i povezivanju akademske
                zajednice na potpuno novi način. Bez obzira jeste li student,
                predavač ili istraživač, SUMarnica pojednostavljuje vaš rad i
                širi mogućnosti za učenje i suradnju.
              </p>
            </div>
            <div className="mx-auto -mt-16 flex w-full flex-col gap-8 sm:flex-row">
              <div className="flex w-full flex-col bg-sum-blue p-4 text-sum-blue-foreground shadow-md shadow-black/60 lg:aspect-video">
                <House className="mx-auto h-8 w-8 text-sum-red" />
                <h2 className="mb-3 text-center text-2xl font-bold">
                  Pametne učionice
                </h2>
                <p className="my-auto text-center font-semibold">
                  Sustav upravljanja i rezerviranja pametnih učionica za
                  studentski rad
                </p>
              </div>
              <div className="flex w-full flex-col bg-sum-blue p-4 text-sum-blue-foreground shadow-md shadow-black/60 lg:aspect-video">
                <Book className="mx-auto h-8 w-8 text-sum-red" />
                <h2 className="mb-3 text-center text-2xl font-bold">
                  Virtualna knjižnica
                </h2>
                <p className="my-auto text-center font-semibold">
                  Pristup sadržaju svih sveučilišnih knjižnica na jednom mjestu
                </p>
              </div>
              <div className="flex w-full flex-col bg-sum-blue p-4 text-sum-blue-foreground shadow-md shadow-black/60 lg:aspect-video">
                <Users className="mx-auto h-8 w-8 text-sum-red" />
                <h2 className="mb-3 text-center text-2xl font-bold">
                  Online zajednica
                </h2>
                <p className="my-auto text-center font-semibold">
                  Studenti se mogu povezati i surađivati na projektima
                </p>
              </div>
            </div>
          </div>
          <div className="hidden max-h-full flex-[2] flex-col gap-8 self-center lg:flex">
            <img
              src="/stock/students-meeting-classroom.jpg"
              alt="Students having a work session around a table with laptops and notebooks"
              className="h-full w-full rounded-lg object-cover opacity-90"
            />
            <img
              src="/stock/student-laptop.jpg"
              alt="A student reading something on a laptop"
              className="ml-8 h-full w-full rounded-lg object-cover opacity-90"
            />
          </div>
        </div>
      </section>
      <section className="flex h-full w-full flex-1 flex-col bg-sum-blue p-4">
        <Collapsible asChild>
          <div className="flex flex-col items-start gap-4 md:mx-16 lg:flex-row lg:gap-16">
            <div className="flex items-center justify-between gap-16 bg-sum-red p-8">
              <p className="flex-[1] font-semibold text-sum-red-foreground">
                Što dobivate kada koristite SUMarnicu?
              </p>
              <CollapsibleTrigger asChild>
                <Button className="rounded-none bg-white text-foreground hover:bg-gray-100">
                  Pročitaj
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="flex-[2]">
              <CollapsibleContent>
                <ol className="flex list-inside list-decimal flex-col gap-2 bg-sum-blue text-sum-blue-foreground">
                  <li className="border border-sum-blue-foreground/50 p-2">
                    <p className="inline">
                      Poboljšajte svoje obrazovno iskustvo uz brže rezervacije
                      učionica, pristup korisnim resursima i alatima za
                      kolaboraciju. Naša platforma olakšava povezivanje s
                      drugima i organizaciju vašeg vremena.
                    </p>
                  </li>
                  <li className="border border-sum-blue-foreground/50 p-2">
                    <p className="inline">
                      Digitalizacija knjižnica omogućuje vam pristup svim
                      akademskim materijalima s jednog mjesta. Pronađite knjige,
                      radove i članke koji su vam potrebni za istraživanje i
                      studiranje, brzo i jednostavno.
                    </p>
                  </li>
                </ol>
              </CollapsibleContent>
            </div>
          </div>
        </Collapsible>
      </section>
      <section className="mb-16 w-full bg-sum-blue p-4 text-sum-blue-foreground">
        <div className="mx-auto flex w-5/6 flex-col space-y-8 divide-y">
          <div className="flex flex-col">
            <h2 className="mb-3 text-3xl font-bold">
              Pametna <span className="text-sum-red">učionica</span>
            </h2>
            <p>
              SUMarnica vam omogućuje rezervaciju učionica s naprednom
              tehnologijom u samo nekoliko klikova. Organizirajte svoje timske
              sastanke, učite u mirnom prostoru ili sudjelujte u radionici bez
              brige o dostupnosti prostora. Jednostavno, praktično i učinkovito.
            </p>
          </div>
          <div className="flex flex-col pt-8">
            <h2 className="mb-3 text-3xl font-bold">
              Virtualna <span className="text-sum-red">knjižnica</span>
            </h2>
            <p>
              Naša virtualna knjižnica povezuje sve sveučilišne resurse, čineći
              ih dostupnima na jednom mjestu. Bez obzira tražite li znanstveni
              rad, udžbenik ili referentni materijal, SUMarnica je vaš ključ za
              uspjeh.
            </p>
          </div>
          <div className="flex flex-col pt-8">
            <h2 className="mb-3 text-3xl font-bold">
              Online <span className="text-sum-red">zajednica</span>
            </h2>
            <p>
              Platforma koja potiče suradnju među studentima kroz dijeljenje
              projekata, ideja i resursa. Povežite se s kolegama, pronađite
              inspiraciju i zajedno rješavajte izazove koristeći mogućnosti koje
              nudi SUMarnica.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
