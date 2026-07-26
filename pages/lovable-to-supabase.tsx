import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import { lovableToSupabase } from "@/lib/services";

export default function Page() {
  return <ServiceLandingPage config={lovableToSupabase} />;
}
