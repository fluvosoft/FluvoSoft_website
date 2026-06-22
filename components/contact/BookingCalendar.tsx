"use client";

import { useMemo, useState } from "react";

const TIME_SLOTS = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export type BookingSelection = {
  date: Date;
  time: string;
};

type BookingCalendarProps = {
  selection: BookingSelection | null;
  onSelect: (selection: BookingSelection | null) => void;
};

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function formatBookingSlot(selection: BookingSelection) {
  return `${selection.date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  })}, ${selection.time} (Bangladesh Time GMT+6)`;
}

export default function BookingCalendar({ selection, onSelect }: BookingCalendarProps) {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [viewDate, setViewDate] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));

  const monthLabel = viewDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const calendarDays = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const cells: Array<Date | null> = [];
    for (let i = 0; i < firstDay; i += 1) cells.push(null);
    for (let day = 1; day <= daysInMonth; day += 1) {
      cells.push(new Date(year, month, day));
    }
    return cells;
  }, [viewDate]);

  const goMonth = (delta: number) => {
    setViewDate((current) => new Date(current.getFullYear(), current.getMonth() + delta, 1));
  };

  const handleDateClick = (date: Date) => {
    if (date < today) return;
    const time = selection && isSameDay(selection.date, date) ? selection.time : TIME_SLOTS[0];
    onSelect({ date, time });
  };

  const handleTimeClick = (time: string) => {
    if (!selection) return;
    onSelect({ date: selection.date, time });
  };

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => goMonth(-1)}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-foreground/80 transition hover:border-white/20 hover:bg-white/[0.04]"
              aria-label="Previous month"
            >
              ‹
            </button>
            <p className="text-sm font-medium text-foreground">{monthLabel}</p>
            <button
              type="button"
              onClick={() => goMonth(1)}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-foreground/80 transition hover:border-white/20 hover:bg-white/[0.04]"
              aria-label="Next month"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-medium uppercase tracking-wide text-accent">
            {WEEKDAYS.map((day) => (
              <span key={day} className="py-1">
                {day}
              </span>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-1">
            {calendarDays.map((date, index) => {
              if (!date) {
                return <span key={`empty-${index}`} aria-hidden />;
              }

              const disabled = date < today;
              const selected = selection ? isSameDay(selection.date, date) : false;

              return (
                <button
                  key={date.toISOString()}
                  type="button"
                  disabled={disabled}
                  onClick={() => handleDateClick(date)}
                  className={`flex h-9 items-center justify-center rounded-md text-sm transition ${
                    selected
                      ? "bg-cta font-medium text-white"
                      : disabled
                        ? "cursor-not-allowed text-foreground/25"
                        : "text-foreground/85 hover:bg-white/[0.06]"
                  }`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-accent">Available times</p>
          <div className="grid grid-cols-2 gap-1.5">
            {TIME_SLOTS.map((time) => {
              const active = selection?.time === time;
              return (
                <button
                  key={time}
                  type="button"
                  disabled={!selection}
                  onClick={() => handleTimeClick(time)}
                  className={`rounded-md border px-2.5 py-2 text-center text-xs transition sm:text-sm ${
                    active
                      ? "border-cta bg-cta font-medium text-white"
                      : selection
                        ? "border-white/10 bg-white/[0.02] text-foreground hover:border-white/20 hover:bg-white/[0.05]"
                        : "cursor-not-allowed border-white/5 text-foreground/35"
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-[11px] uppercase tracking-wider text-accent">
        Bangladesh Time (GMT+6) · 30 min · Google Meet
      </p>
    </div>
  );
}
