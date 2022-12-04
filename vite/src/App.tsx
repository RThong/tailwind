import React, { useState } from "react";
import Demo1 from "./pages/Demo1";
import Demo2 from "./pages/Demo2";

const COM_MAP = {
  "1": Demo1,
  "2": Demo2,
} as const;

const App = () => {
  const [type, setType] = useState<keyof typeof COM_MAP>("1");

  return (
    <div>
      <div>App</div>

      <div className="py-4 mb-4 border-b border-dashed flex gap-x-4 sm:justify-center gapx4 ">
        {Object.keys(COM_MAP).map((item) => (
          <a
            onClick={() => setType(item as keyof typeof COM_MAP)}
            key={item}
            href="#"
            className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
          >
            Demo {item}
            <span className="text-indigo-200" aria-hidden="true">
              &rarr;
            </span>
          </a>
        ))}
      </div>

      <div>{COM_MAP[type]()}</div>
    </div>
  );
};

export default App;
