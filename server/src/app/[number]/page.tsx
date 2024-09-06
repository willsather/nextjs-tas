export const dynamic = "force-dynamic";

export default function NumberPage({ params }: { params: { number: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="my-8 font-bold">This is page number {params?.number}!</h1>
    </main>
  );
}
