import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import { bubbleToSupabase } from "@/lib/services";

export default function Page() {
  return <ServiceLandingPage config={bubbleToSupabase} />;
}
