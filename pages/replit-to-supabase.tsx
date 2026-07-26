import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import { replitToSupabase } from "@/lib/services";

export default function Page() {
  return <ServiceLandingPage config={replitToSupabase} />;
}
