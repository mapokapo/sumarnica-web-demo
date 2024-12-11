import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { PopoverClose } from "@radix-ui/react-popover";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  dateValue?: Date;
  onPickDate?: (date: Date) => void;
};

const DatePickerButton: React.FC<Props> = ({
  className,
  label,
  dateValue,
  onPickDate,
  ...rest
}) => {
  const [date, setDate] = useState<Date | null>(dateValue ?? null);

  const handleSelectDate = (date: Date | null) => {
    if (onPickDate !== undefined && date !== null) {
      onPickDate(date);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
            className
          )}
          {...rest}>
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "dd.MM.yyyy HH:mm") : <span>{label ?? ""}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col gap-2 p-0">
        <Calendar
          mode="single"
          selected={date ?? undefined}
          onSelect={d =>
            setDate(
              d !== undefined
                ? new Date(
                    `${format(d, "yyyy-MM-dd")}T${format(date ?? new Date(), "HH:mm")}`
                  )
                : null
            )
          }
          initialFocus
        />
        <Input
          className="mx-auto w-[90%]"
          type="time"
          value={format(date ?? new Date(), "HH:mm")}
          onChange={e =>
            setDate(
              new Date(
                `${format(date ?? new Date(), "yyyy-MM-dd")}T${e.target.value}`
              )
            )
          }
        />
        <PopoverClose asChild>
          <Button
            className="mx-auto mb-4 w-[90%]"
            onClick={() => {
              handleSelectDate(date);
            }}>
            {date ? "Odaberi" : "Zatvori"}
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
};

export default DatePickerButton;
