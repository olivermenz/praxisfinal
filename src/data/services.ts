import { Stethoscope, Syringe, HeartPulse, Baby, Brain, MessageCircle, Microscope, Waves, Activity } from 'lucide-react';
import { ServiceType } from '../types/services';

export const services: ServiceType[] = [
  {
    Icon: Stethoscope,
    title: "Vorsorgeuntersuchungen",
    description: "Regelmäßige U-Untersuchungen zur Überwachung der gesunden Entwicklung Ihres Kindes."
  },
  {
    Icon: Syringe,
    title: "Impfungen",
    description: "Impfberatung für Jung und Alt. Alle empfohlenen Standardimpfungen nach STIKO sowie Reiseimpfungen."
  },
  {
    Icon: HeartPulse,
    title: "Akutsprechstunde",
    description: "Behandlung akuter Erkrankungen und Verletzungen mit kurzen Wartezeiten."
  },
  {
    Icon: Waves,
    title: "Sonographische Untersuchung",
    description: "Säuglingshüfte, Bauchorgane und Nieren sowie ableitende Harnwege und Weichteile."
  },
  {
    Icon: Microscope,
    title: "Labor & Allergietestung",
    description: "Allergietestung, Hyposensibilisierung, Blutentnahme, CrP-Bestimmung während der Sprechstunde."
  },
  {
    Icon: Activity,
    title: "Weitere Untersuchungen",
    description: "Kindergartenuntersuchung, Sportuntersuchung, Jugendarbeitsschutzuntersuchung."
  },
  {
    Icon: Baby,
    title: "Säuglingsbetreuung",
    description: "Intensive Betreuung und Beratung in der wichtigen ersten Lebensphase."
  },
  {
    Icon: Brain,
    title: "Entwicklungsdiagnostik",
    description: "Früherkennung und Förderung bei Entwicklungsverzögerungen."
  },
  {
    Icon: MessageCircle,
    title: "Beratung",
    description: "Eltern- und Stillberatung, Erziehungsberatung, Ernährungsberatung, Beratung zur Salutogenese."
  }
];