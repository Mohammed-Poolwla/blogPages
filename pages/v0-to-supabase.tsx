import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import { v0ToSupabase } from "@/lib/services";

export default function Page() {
  return <ServiceLandingPage config={v0ToSupabase} />;
}
