import Link from "next/link";

import Anchor from "../logic/anchor";

import type { NextPage } from "next";

const Index: NextPage = () => (
  <div className="container mx-auto flex h-screen flex-row items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl text-gray-700">Hello, world!</h1>
      <h2 className="pt-4">
        This is{" "}
        <span className="text-blue-500 hover:text-blue-700">
          <Link href="https://twitter.com/ziyadedher" passHref>
            <Anchor shouldOpenInNewPage>@ziyadedher</Anchor>
          </Link>
        </span>
        &rsquo;s webapp template.
      </h2>
      <h3 className="pt-3">
        Check this template out on{" "}
        <span className="text-blue-500 hover:text-blue-700">
          <Link href="https://github.com/ziyadedher/webdev-template" passHref>
            <Anchor shouldOpenInNewPage>GitHub</Anchor>
          </Link>
        </span>
        !
      </h3>
    </div>
  </div>
);

export default Index;
