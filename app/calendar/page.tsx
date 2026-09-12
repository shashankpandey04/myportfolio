"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  X,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Category = {
  id: string;
  name: string;
  slug: string;
  color: string;
};

type Event = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  start_time: string;
  end_time: string | null;
  is_all_day: boolean;
  location: string | null;
  image_url: string | null;
  registration_url: string | null;
  is_public: boolean;
  categories: Category | null;
};

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function fetchEvents() {
    const supabase = createClient();

    const { data, error } = await supabase
      .from("events")
      .select(`
        *,
        categories (
          id,
          name,
          slug,
          color
        )
      `)
      .eq("is_public", true)
      .order("start_time", { ascending: true });

    console.log("EVENT DATA:", data);
    console.log("EVENT ERROR:", error);

    if (data) {
      setEvents(data as Event[]);
    }

    setLoading(false);
  }

  fetchEvents();
}, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getEventsForDate = (date: Date) => {
    return events.filter((event) => {
      const startDate = new Date(event.start_time);

      const endDate = event.end_time
        ? new Date(event.end_time)
        : startDate;

      const currentDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );

      const eventStartDay = new Date(
        startDate.getFullYear(),
        startDate.getMonth(),
        startDate.getDate()
      );

      const eventEndDay = new Date(
        endDate.getFullYear(),
        endDate.getMonth(),
        endDate.getDate()
      );

      return (
        currentDay >= eventStartDay &&
        currentDay <= eventEndDay
      );
    });
  };

  const isToday = (date: Date) => {
    const today = new Date();

    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const calendarDays: (Date | null)[] = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(new Date(year, month, day));
  }

  const selectedEvents = selectedDate
    ? getEventsForDate(selectedDate)
    : [];

  return (
    <main className="h-screen overflow-hidden px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs">
            <CalendarDays className="w-4 h-4" />

            <span className="tracking-[0.2em]">
              MY SCHEDULE
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">

          <button
            onClick={previousMonth}
            className="
              p-2
              text-gray-500
              hover:text-cyan-400
              hover:scale-110
              transition
            "
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h1>

          <button
            onClick={nextMonth}
            className="
              p-2
              text-gray-500
              hover:text-cyan-400
              hover:scale-110
              transition
            "
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        <div className="grid grid-cols-7 mb-3">

          {weekDays.map((day) => (
            <div
              key={day}
              className="
                text-center
                text-[10px]
                md:text-xs
                uppercase
                tracking-[0.15em]
                text-gray-600
              "
            >
              <span className="hidden md:inline">
                {day}
              </span>

              <span className="md:hidden">
                {day.charAt(0)}
              </span>
            </div>
          ))}

        </div>

        {loading ? (

          <div className="py-16 text-center text-sm text-gray-600">
            Loading events...
          </div>

        ) : (

          <div className="grid grid-cols-7">

            {calendarDays.map((date, index) => {

              if (!date) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="min-h-14 md:min-h-20"
                  />
                );
              }

              const dayEvents = getEventsForDate(date);

              return (
                <button
                  key={date.toISOString()}
                  onClick={() => setSelectedDate(date)}
                  className="
                    relative
                    min-h-14
                    md:min-h-20
                    p-1
                    md:p-2
                    text-left
                    group
                    transition
                  "
                >

                  <div
                    className={`
                      inline-flex
                      items-center
                      justify-center
                      w-7
                      h-7
                      md:w-8
                      md:h-8
                      rounded-full
                      text-xs
                      md:text-sm
                      transition-all
                      ${
                        isToday(date)
                          ? "bg-cyan-400 text-black font-semibold shadow-lg shadow-cyan-400/20"
                          : dayEvents.length > 0
                          ? "text-white"
                          : "text-gray-500 group-hover:text-white"
                      }
                    `}
                  >
                    {date.getDate()}
                  </div>

                  <div className="mt-1 md:mt-2 space-y-1">

                    {dayEvents.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        className="
                          hidden
                          md:flex
                          items-center
                          gap-1.5
                          text-[10px]
                          transition
                        "
                        style={{
                          color: event.categories?.color || "#94a3b8",
                        }}
                      >

                        <span
                          className="
                            w-1.5
                            h-1.5
                            rounded-full
                            shrink-0
                          "
                          style={{
                            backgroundColor:
                              event.categories?.color || "#94a3b8",
                          }}
                        />

                        <span className="truncate">
                          {event.title}
                        </span>

                      </div>
                    ))}

                    {dayEvents.length > 0 && (
                      <div className="md:hidden flex gap-1 mt-1">

                        {dayEvents.slice(0, 3).map((event) => (
                          <span
                            key={event.id}
                            className="
                              w-1.5
                              h-1.5
                              rounded-full
                            "
                            style={{
                              backgroundColor:
                                event.categories?.color || "#94a3b8",
                            }}
                          />
                        ))}

                      </div>
                    )}

                    {dayEvents.length > 2 && (
                      <span className="hidden md:block text-[10px] text-gray-600 pl-2.5">
                        +{dayEvents.length - 2}
                      </span>
                    )}

                  </div>

                  <div
                    className="
                      absolute
                      left-1
                      right-1
                      md:left-2
                      md:right-2
                      bottom-0
                      h-px
                      bg-white/[0.04]
                    "
                  />

                </button>
              );
            })}

          </div>
        )}

      </div>

      {selectedDate && (

        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            p-4
            bg-black/70
            backdrop-blur-md
          "
          onClick={() => setSelectedDate(null)}
        >

          <div
            className="
              relative
              w-full
              max-w-xl
              max-h-[80vh]
              overflow-y-auto
              rounded-3xl
              bg-[#0a0f14]/95
              border
              border-white/10
              backdrop-blur-2xl
              p-6
              md:p-8
              shadow-[0_0_80px_rgba(34,211,238,0.08)]
            "
            onClick={(event) => event.stopPropagation()}
          >

            <button
              onClick={() => setSelectedDate(null)}
              className="
                absolute
                right-5
                top-5
                p-2
                text-gray-500
                hover:text-cyan-400
                transition
              "
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-8">

              <p className="text-cyan-400 text-xs tracking-wide mb-2">
                {selectedDate.toLocaleDateString("default", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              <h2 className="text-2xl font-semibold">

                {selectedEvents.length === 0
                  ? "Nothing Scheduled"
                  : selectedEvents.length === 1
                  ? "1 Event"
                  : `${selectedEvents.length} Events`}

              </h2>

            </div>

            {selectedEvents.length === 0 ? (

              <div className="py-10 text-center">

                <CalendarDays className="w-8 h-8 text-gray-700 mx-auto mb-3" />

                <p className="text-sm text-gray-500">
                  Nothing happening on this date.
                </p>

              </div>

            ) : (

              <div className="space-y-7">

                {selectedEvents.map((event) => (

                  <article
                    key={event.id}
                    className="relative pl-5 border-l"
                    style={{
                      borderColor:
                        event.categories?.color || "#94a3b8",
                    }}
                  >

                    <div
                      className="
                        absolute
                        -left-1.5
                        top-1
                        w-3
                        h-3
                        rounded-full
                      "
                      style={{
                        backgroundColor:
                          event.categories?.color || "#94a3b8",
                        boxShadow: `0 0 12px ${
                          event.categories?.color || "#94a3b8"
                        }`,
                      }}
                    />

                    {event.categories && (
                      <p
                        className="text-[10px] tracking-[0.15em] uppercase mb-2"
                        style={{
                          color: event.categories.color,
                        }}
                      >
                        {event.categories.name}
                      </p>
                    )}

                    <h3 className="text-lg font-semibold">
                      {event.title}
                    </h3>

                    {event.description && (
                      <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                        {event.description}
                      </p>
                    )}

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-400">

                      {!event.is_all_day && (
                        <div className="flex items-center gap-2">

                          <Clock
                            className="w-3.5 h-3.5"
                            style={{
                              color:
                                event.categories?.color || "#22d3ee",
                            }}
                          />

                          <span>
                            {new Date(
                              event.start_time
                            ).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}

                            {event.end_time && (
                              <>
                                {" "}
                                —
                                {" "}
                                {new Date(
                                  event.end_time
                                ).toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </>
                            )}
                          </span>

                        </div>
                      )}

                      {event.is_all_day && (
                        <div className="flex items-center gap-2">

                          <CalendarDays
                            className="w-3.5 h-3.5"
                            style={{
                              color:
                                event.categories?.color || "#22d3ee",
                            }}
                          />

                          <span>
                            All Day
                          </span>

                        </div>
                      )}

                      {event.location && (

                        <div className="flex items-center gap-2">

                          <MapPin
                            className="w-3.5 h-3.5"
                            style={{
                              color:
                                event.categories?.color || "#22d3ee",
                            }}
                          />

                          <span>
                            {event.location}
                          </span>

                        </div>

                      )}

                    </div>

                    {event.registration_url && (

                      <a
                        href={event.registration_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-5 text-sm hover:opacity-80 transition"
                        style={{
                          color:
                            event.categories?.color || "#22d3ee",
                        }}
                      >
                        View Event →
                      </a>

                    )}

                  </article>

                ))}

              </div>

            )}

          </div>

        </div>

      )}

    </main>
  );
}