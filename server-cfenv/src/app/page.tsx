import vcap from "@/app/config";

export const dynamic = "force-dynamic";

export default function HomePage() {
  console.log("Rendering new Home Page with new `cfenv` Variables");

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-3 font-bold">Next.js TAS</h1>
      <h2 className="mb-8 text-xl font-bold">(Server using Cf Env)</h2>
      <i>
        This server rendered page is just an example of how to use the `cfenv`
        package in a Next.js App Router application.
      </i>
      <i>
        Below are two different ways that a Next.js application can reference
        Cloud Foundry environment variables:
      </i>

      <div className="my-4 flex-col gap-2">
        <h3 className="text-2xl font-bold">
          1. VCAP Services Environment Variables
        </h3>
        <h5 className="my-2 italic">
          Can be parsed manually (using{" "}
          <code className="text-sm">JSON.parse(proces.env.VCAP_SERVICES)</code>{" "}
          or via <code className="text-sm">cfenv</code> package (like shown
          here)
        </h5>
        <p>
          <b>Fake Service URL: </b>
          <code className="font-mono">{vcap?.url}</code>
        </p>
        <p>
          <b>Fake Service Password: </b>
          <code className="font-mono">{vcap?.password}</code>
        </p>

        <h3 className="mt-6 text-2xl font-bold">
          2. User Provided Environment Variables
        </h3>
        <h5 className="my-2 italic">Can be used like `process.env.username`</h5>
        <p>
          <code className="font-mono font-bold">Fake `FAKE_ENV_VAR`</code>:{" "}
          <code className="font-mono">{process.env?.FAKE_ENV_VAR}</code>
        </p>
      </div>
    </main>
  );
}
