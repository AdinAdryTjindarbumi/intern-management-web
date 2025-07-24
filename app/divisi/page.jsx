import DivisionPageClient from "@/components/DivisionPageClient";
import ProtectedRoute from "@/components/ProtectedRoutes";

async function getInterns() {
  try {
    const res = await fetch("https://magnet-bps.vercel.app/api/intern", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Gagal mengambil data intern");
    return res.json();
  } catch (error) {
    console.error(error);
    return { interns: [] };
  }
}

export default async function DivisiPage() {
  const { interns } = await getInterns();

  return (
    <ProtectedRoute>
      <DivisionPageClient interns={interns} />;
    </ProtectedRoute>
  );
}
