"use client";

export default function LoadingPage(): JSX.Element {
  return (
    <main className="inset-0 flex items-center justify-center h-screen w-full">
      <span className="animate-spin h-12 w-12 border-t-4 border-primary rounded-full" />
    </main>
  );
}
