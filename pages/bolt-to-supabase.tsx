import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import { boltToSupabase } from "@/lib/services";

export default function Page() {
  return <ServiceLandingPage config={boltToSupabase} />;
}
