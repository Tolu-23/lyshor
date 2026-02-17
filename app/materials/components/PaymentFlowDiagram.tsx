"use client";

interface PaymentFlowDiagramProps {
  lang: "en" | "ru";
}

const content = {
  en: {
    step1: {
      title: "Buyer",
      lines: ["Bank account in the Russian Federation", "Non-cash RUB payment"],
    },
    step2: {
      title: "Lyschor Real Estate LLC (RF)",
      lines: [
        "Acceptance of non-cash RUB payments",
        "Agency / Escrow Agreement",
        "Payment executed within the contractual framework",
      ],
    },
    step3: {
      title: "Lyschor Real Estate LLC (UAE)",
      lines: ["Official settlement in Dubai"],
    },
    step4: {
      title: "Property Seller",
      lines: ["Off-plan or secondary market", "Receipt of funds in the UAE"],
    },
    bottomLine:
      "Bottom line: One contract. One legal structure. Transparent flow of funds from the buyer's bank account in the Russian Federation to the seller in Dubai. No cash. No workaround schemes.",
  },
  ru: {
    step1: {
      title: "Покупатель",
      lines: ["Счёт в банке РФ", "Безналичный рублёвый платёж"],
    },
    step2: {
      title: "Lyschor Real Estate LLC (РФ)",
      lines: [
        "Приём безналичных рублей",
        "Agency / Escrow Agreement",
        "Оплата в рамках договора",
      ],
    },
    step3: {
      title: "Lyschor Real Estate LLC (ОАЭ)",
      lines: ["Официальный расчёт в Дубае"],
    },
    step4: {
      title: "Продавец недвижимости",
      lines: ["Off-plan или вторичный рынок", "Получение средств в ОАЭ"],
    },
    bottomLine:
      "Один договор. Один юридический контур. Прозрачное движение средств от счёта покупателя в РФ до продавца в Дубае. Без наличных и обходных схем.",
  },
};

export default function PaymentFlowDiagram({ lang }: PaymentFlowDiagramProps) {
  const t = content[lang];
  const steps = [t.step1, t.step2, t.step3, t.step4];

  return (
    <div className="w-full">
      {/* Flow Diagram */}
      <div className="flex flex-col items-center gap-0">
        {/* Top row: Step 1 -> Step 2 */}
        <div className="flex items-stretch justify-center gap-0 w-full">
          <div className="flex-1 max-w-[260px] bg-amber-400 p-5 border-2 border-amber-500">
            <p className="font-extrabold text-black text-[15px] leading-tight">
              {steps[0].title}
            </p>
            {steps[0].lines.map((l, i) => (
              <p key={i} className="text-black text-[13px] leading-snug mt-1">
                {l}
              </p>
            ))}
          </div>
          <div className="flex items-center px-3 print:px-2">
            <svg
              width="48"
              height="24"
              viewBox="0 0 48 24"
              className="text-blue-700">
              <polygon
                points="0,8 34,8 34,0 48,12 34,24 34,16 0,16"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex-1 max-w-[320px] bg-amber-400 p-5 border-2 border-amber-500">
            <p className="font-extrabold text-black text-[15px] leading-tight">
              {steps[1].title}
            </p>
            {steps[1].lines.map((l, i) => (
              <p key={i} className="text-black text-[13px] leading-snug mt-1">
                {l}
              </p>
            ))}
          </div>
          <div className="flex items-center px-3 print:px-2">
            <svg
              width="48"
              height="24"
              viewBox="0 0 48 24"
              className="text-blue-700">
              <polygon
                points="0,8 34,8 34,0 48,12 34,24 34,16 0,16"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex-1 max-w-[260px] bg-amber-400 p-5 border-2 border-amber-500">
            <p className="font-extrabold text-black text-[15px] leading-tight">
              {steps[2].title}
            </p>
            {steps[2].lines.map((l, i) => (
              <p key={i} className="text-black text-[13px] leading-snug mt-1">
                {l}
              </p>
            ))}
          </div>
        </div>

        {/* Connecting arrow down-right */}
        <div className="flex justify-end w-full max-w-[920px] pr-[120px]">
          <svg
            width="24"
            height="48"
            viewBox="0 0 24 48"
            className="text-blue-700">
            <polygon
              points="8,0 16,0 16,34 24,34 12,48 0,34 8,34"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Bottom row: Step 3 (already shown above) -> Step 4 */}
        <div className="flex items-stretch justify-center gap-0 w-full pl-[200px] print:pl-[160px]">
          <div className="flex items-center px-3 print:px-2">
            <svg
              width="48"
              height="24"
              viewBox="0 0 48 24"
              className="text-blue-700">
              <polygon
                points="0,8 34,8 34,0 48,12 34,24 34,16 0,16"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex-1 max-w-[280px] bg-amber-400 p-5 border-2 border-amber-500">
            <p className="font-extrabold text-black text-[15px] leading-tight">
              {steps[3].title}
            </p>
            {steps[3].lines.map((l, i) => (
              <p key={i} className="text-black text-[13px] leading-snug mt-1">
                {l}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line / Key Message */}
      <div className="mt-8 bg-amber-400 border-2 border-amber-500 p-5">
        <p className="text-black text-[14px] leading-relaxed">
          <span className="font-extrabold">
            {lang === "en" ? "Bottom line: " : "(ключевая формула) "}
          </span>
          {t.bottomLine.replace("Bottom line: ", "")}
        </p>
      </div>
    </div>
  );
}
