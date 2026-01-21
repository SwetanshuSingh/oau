import * as React from "react";

import { cn } from "@/lib/utils";

export type TimelineItem = {
  id: string;
  date: string;
  description?: React.ReactNode;
};

export type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn("relative", className)}>
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;

        return (
          <li key={item.id} className="relative flex gap-4">
            {/* Left rail (time + dot + line) */}
            <div className="min-w-44 w-fit shrink-0 pb-6 text-right">
              <div
                className={cn(
                  "text-base font-medium tabular-nums text-neutral-800"
                )}
              >
                {item.date}
              </div>
            </div>

            <div className="relative flex w-5 shrink-0 justify-center">
              <span
                className={cn(
                  "mt-1.5 h-3 w-3 rounded-full border-2 bg-white border-neutral-400"
                )}
                aria-hidden="true"
              />
              {!isLast && (
                <span
                  className={cn("absolute top-5 bottom-0 w-px bg-neutral-300")}
                  aria-hidden="true"
                />
              )}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1 pb-6">
              <div className="bg-white">
                <div>
                  {item.description ? (
                    <span className="text-neutral-600 tracking-tight">{item.description}</span>
                  ) : null}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
