import ServiceLandingPage from "@/components/services/ServiceLandingPage";
import { lovableMigration } from "@/lib/services";

export default function Page() {
  return <ServiceLandingPage config={lovableMigration} />;
}
