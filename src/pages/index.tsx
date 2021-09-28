import Link from "next/link";

import type { NextPage } from "next";

const Index: NextPage = () => (
  <div className="container flex flex-row justify-center items-center mx-auto h-screen">
    <div className="text-center">
      <h1 className="text-6xl text-gray-700">Hello, world!</h1>
      <h2 className="pt-4">
        This is{" "}
        <Link href="https://twitter.com/ziyadedher">
          <a
            href="https://twitter.com/ziyadedher"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            @ziyadedher
          </a>
        </Link>
        &rsquo;s webapp template.
      </h2>
    </div>
  </div>
);

export default Index;
