import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import { supabaseAudit } from "@/lib/services";

export default function Page() {
  return <ServiceLandingPage config={supabaseAudit} />;
}
