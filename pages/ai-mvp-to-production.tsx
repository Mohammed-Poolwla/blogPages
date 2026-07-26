import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import { aiMvpToProduction } from "@/lib/services";

export default function Page() {
  return <ServiceLandingPage config={aiMvpToProduction} />;
}
