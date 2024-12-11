import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { VirtualBook } from "@/lib/types/VirtualBook";
import { format } from "date-fns";
import React from "react";
import { NavLink } from "react-router";

interface Props {
  virtualBook: VirtualBook;
}

const VirtualBookCard: React.FC<Props> = ({ virtualBook }) => {
  return (
    <div className="flex w-full flex-col justify-between gap-4 rounded-xl bg-sum-blue p-5">
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-4">
          <div className="flex-[1]">
            <img
              src={`https://picsum.photos/seed/${virtualBook.isbn}/200/300`}
              alt={virtualBook.title}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex h-full flex-[4] flex-col justify-evenly gap-2">
            <h2 className="text-2xl font-bold text-sum-red">
              {virtualBook.title}
            </h2>
            <NavLink
              to={`/authors/${virtualBook.authorId}`}
              className="font-semibold text-sum-red-foreground">
              {virtualBook.authorName}
            </NavLink>
          </div>
        </div>
        <p className="text-sum-red-foreground">{virtualBook.summary}</p>
      </div>
      <Collapsible asChild>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start justify-between gap-4 2xl:flex-row 2xl:items-end">
            <CollapsibleTrigger asChild>
              <Button
                variant="sum-secondary"
                className="w-full 2xl:w-auto">
                Više informacija
              </Button>
            </CollapsibleTrigger>
            <div className="flex w-full flex-row-reverse items-center justify-between gap-2 2xl:w-auto 2xl:flex-col">
              {virtualBook.digitalizedContent !== null ? (
                <>
                  <span className="text-sum-blue-muted-foreground">
                    {virtualBook.digitalizedContent.pageCount} stranica
                  </span>
                  <Button
                    variant="sum"
                    asChild>
                    <a
                      href={virtualBook.digitalizedContent.pdfUrl}
                      target="_blank"
                      rel="noreferrer">
                      Preuzmi PDF
                    </a>
                  </Button>
                </>
              ) : (
                <Button
                  variant="sum"
                  disabled
                  className="mr-auto">
                  Nije digitalizirana
                </Button>
              )}
            </div>
          </div>
          <CollapsibleContent>
            <ul className="flex flex-col items-center gap-2">
              <li className="flex items-center gap-1">
                <span className="font-bold text-sum-red-foreground">ISBN:</span>
                <span className="text-sum-red-foreground">
                  {virtualBook.isbn}
                </span>
              </li>
              <li className="flex items-center gap-1">
                <span className="font-bold text-sum-red-foreground">
                  Lokacija:
                </span>
                <span className="text-sum-red-foreground">
                  {virtualBook.locationInfo.locationName}
                </span>
              </li>
              {virtualBook.digitalizedContent !== null && (
                <>
                  <li className="flex items-center gap-1">
                    <span className="font-bold text-sum-red-foreground">
                      Digitalizirao/la:
                    </span>
                    <span className="text-sum-red-foreground">
                      {virtualBook.digitalizedContent.digitalizedByUserName}
                    </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="font-bold text-sum-red-foreground">
                      Datum digitaliziranja:
                    </span>
                    <span className="text-sum-red-foreground">
                      {format(
                        virtualBook.digitalizedContent.digitalizedAt,
                        "dd.MM.yyyy"
                      )}
                    </span>
                  </li>
                </>
              )}
            </ul>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </div>
  );
};

export default VirtualBookCard;
