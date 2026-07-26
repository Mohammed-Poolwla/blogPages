import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import { supabaseConsulting } from "@/lib/services";

export default function Page() {
  return <ServiceLandingPage config={supabaseConsulting} />;
}
