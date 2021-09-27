// eslint-disable-next-line import/no-unassigned-import, node/file-extension-in-import -- Tailwind CSS exception.
import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import type { ReactElement } from "react";

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types -- Next.js pattern.
const App = (appProps: AppProps): ReactElement => (
  // eslint-disable-next-line react/jsx-props-no-spreading -- Next.js pattern.
  <appProps.Component {...appProps.pageProps} />
);

export default App;
