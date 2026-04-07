import AppLayout from "@component/layout/layout-1";
import Navbar from "@component/navbar/Navbar";
import Market1Home from "@sections/market-1/Market1Home";

export default function Home() {
  return (
    <AppLayout navbar={<Navbar navListOpen />}>
      <Market1Home />
    </AppLayout>
  );
}
