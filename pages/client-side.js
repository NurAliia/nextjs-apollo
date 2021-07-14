import Head from "next/head";
import ClientOnly from "../components/ClientOnly";
import Characters from "../components/Characters";

export default function CharactersSide() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1><a href="#welcome-to-next-js" aria-hidden="true" class="aal_anchor" id="welcome-to-next-js"></a>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ClientOnly>
          <Characters />
        </ClientOnly>
      </main>
    </div>
  );
}
﻿
