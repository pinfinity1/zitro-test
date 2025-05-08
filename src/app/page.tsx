import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";

export default function Home() {
  return (
    <main className={"flex flex-col items-center px-4"}>
      <Breadcrumb />
      <Container />
    </main>
  );
}
