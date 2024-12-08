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
    <div className="flex h-full flex-col items-center justify-center">
      <section className="flex min-h-screen w-full flex-1 flex-col bg-gradient-to-b from-transparent to-sum-blue p-4">
        <span className="text-center text-2xl font-semibold text-sum-blue">
          Dobrodošli
        </span>
        <h1 className="my-16 text-center text-5xl font-bold text-sum-blue lg:text-7xl">
          SUMarnica
        </h1>
        <div className="mx-auto flex h-full w-full flex-col-reverse justify-center gap-8 lg:w-5/6 lg:flex-row lg:gap-4">
          <div className="flex-[2]">
            <div className="mx-8 flex flex-col gap-8 bg-gradient-to-b from-sum-red via-sum-red to-transparent p-8 pb-32 text-sum-red-foreground">
              <p className="text-lg font-semibold">
                SUMarnica je najlakši način za upravljanje pametnih radionica i
                digitalnih knjižnica.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                suscipit quidem earum asperiores sint, amet inventore eum omnis
                consequatur ipsam adipisci pariatur officiis quia, natus
                reiciendis itaque iste delectus molestiae at ipsa. Vitae
                provident, aperiam, fugiat iusto explicabo, reprehenderit
                dolores deleniti ipsam omnis atque vero cumque ipsa! Iusto,
                optio exercitationem? Voluptates nisi quas hic commodi minus
                sunt, ad ex enim dolorem dolorum nam animi autem tenetur labore
                doloremque delectus quaerat earum repudiandae cumque atque.
                Saepe sed tempora neque atque laboriosam nemo similique ratione
                aliquid id, iste provident non perferendis reiciendis
                voluptatibus nulla quibusdam, commodi tenetur modi, soluta
                eligendi beatae. Molestias.
              </p>
            </div>
            <div className="mx-auto -mt-16 flex w-1/2 flex-col gap-8 lg:w-full lg:flex-row">
              <div className="flex aspect-video w-full flex-col bg-sum-blue p-4 text-sum-blue-foreground shadow-md shadow-black/60">
                <House className="mx-auto h-8 w-8 text-sum-red" />
                <h2 className="text-center text-3xl font-bold">
                  Pametne učionice
                </h2>
                <p className="my-auto text-center font-semibold">
                  Sustav upravljanja i rezerviranja pametnih učionica za
                  studentski rad
                </p>
              </div>
              <div className="flex aspect-video w-full flex-col bg-sum-blue p-4 text-sum-blue-foreground shadow-md shadow-black/60">
                <Book className="mx-auto h-8 w-8 text-sum-red" />
                <h2 className="text-center text-3xl font-bold">
                  Virtualna knjižnica
                </h2>
                <p className="my-auto text-center font-semibold">
                  Pristup sadržaju svih sveučilišnih knjižnica na jednom mjestu
                </p>
              </div>
              <div className="flex aspect-video w-full flex-col bg-sum-blue p-4 text-sum-blue-foreground shadow-md shadow-black/60">
                <Users className="mx-auto h-8 w-8 text-sum-red" />
                <h2 className="text-center text-3xl font-bold">
                  Online zajednica
                </h2>
                <p className="my-auto text-center font-semibold">
                  Studenti se mogu povezati i surađivati na projektima
                </p>
              </div>
            </div>
          </div>
          <div className="max-h-32 flex-[1] overflow-hidden rounded-lg lg:max-h-full lg:self-baseline">
            <img
              src="/stock/students-meeting-classroom.jpg"
              alt="Students having a work session around a table with laptops and notebooks"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="flex h-full w-full flex-1 flex-col bg-sum-blue p-4">
        <Collapsible asChild>
          <div className="mx-16 flex flex-col items-start gap-4 lg:flex-row lg:gap-16">
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
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Facere recusandae sit quibusdam obcaecati cum suscipit
                      perferendis libero numquam incidunt dolor?
                    </p>
                  </li>
                  <li className="border border-sum-blue-foreground/50 p-2">
                    <p className="inline">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Facere recusandae sit quibusdam obcaecati cum suscipit
                      perferendis libero numquam incidunt dolor?
                    </p>
                  </li>
                </ol>
              </CollapsibleContent>
            </div>
          </div>
        </Collapsible>
      </section>
    </div>
  );
};

export default LandingPage;
