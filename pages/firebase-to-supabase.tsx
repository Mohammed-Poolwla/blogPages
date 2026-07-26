import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import { firebaseToSupabase } from "@/lib/services";

export default function Page() {
  return <ServiceLandingPage config={firebaseToSupabase} />;
}
