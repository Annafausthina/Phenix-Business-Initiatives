import { Database, FileText, Code, Search, Globe, Layout, FileType, Zap, Shield, Image as ImageIcon, MessageSquare, Scale, Briefcase } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ScrollReveal from '@/components/ScrollReveal';

const entryServices = [
    { icon: FileText, title: "Enrollment Forms Data Entry" },
    { icon: Database, title: "Legal MS Access Data Entry" },
    { icon: Search, title: "Mailing List Data Entry" },
    { icon: Globe, title: "Yellow Pages Data Entry" },
    { icon: MessageSquare, title: "CRM Data Entry" },
    { icon: Code, title: "Conversion to Mark-up languages" },
    { icon: FileType, title: "Word Processing" },
    { icon: Layout, title: "Classified Data Entry" },
    { icon: Shield, title: "Insurance Claims Data Entry" },
    { icon: FileText, title: "Dictionaries, Manuals & Encyclopaedias" },
    { icon: Zap, title: "OCR Data Entry" },
    { icon: Zap, title: "Coupon Code Data Entry" },
    { icon: Search, title: "High volume Data Scanning" },
    { icon: FileText, title: "Data Transcription" },
    { icon: ImageIcon, title: "All kinds of Graphic Design work" },
    { icon: Search, title: "Web Mining" },
    { icon: Code, title: "XML Conversion" },
    { icon: MessageSquare, title: "Surveys/Questionnaires Entry" },
    { icon: FileType, title: "PDF conversion" },
    { icon: Scale, title: "Litigation support services" },
    { icon: Briefcase, title: "KPO services" },
];

const DataEntryConversion = () => (
    <>
        <Hero title="Data Entry/Conversion Services" />

        <Section>
            <div className="mx-auto max-w-4xl space-y-8">
                <ScrollReveal>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        PBI offers a wide range of data services such as data entry, data processing, data conversion, data mining, etc. We assure you outstanding quality at optimal costs and on-time delivery at all times. We work with a diverse set of clients from various industries including, but not limited to, healthcare, retail, finance, real estate, lodging, insurance, mortgage, yellow pages, pharmacies, etc. We offer cost-effective Data Entry/Conversion services at unsurpassed quality at desired turnaround time of our clients. We facilitate our clients with advanced and contemporary web based application technology to innovate the workflow making it more simple and sustainable.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <p className="text-muted-foreground leading-relaxed">
                        Our Data Entry/Conversion/Mining services have been widely used by a variety of clients across multi-various industries helping them to cut down on their operational costs significantly. Our diligent efforts in providing the most secure environment for client's information have been widely commended. What makes us the coveted choice is our security compliant, round-the-clock services that are nominally priced but highly reliable.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p className="text-muted-foreground leading-relaxed">
                        Our impeccable quality of work and delivery will help you to add a lot of value to your business processes and achieve fast and predictable results for your organization. We do this with a winning combination of the best people and the most trusted technologies. Following are some of our services in this segment of business:
                    </p>
                </ScrollReveal>
            </div>
        </Section>

        <Section className="bg-card/50 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {entryServices.map((service, i) => (
                    <ScrollReveal key={i} delay={i * 0.03}>
                        <div className="group relative flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 hover:border-primary/30">
                            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-inner transition-transform duration-500 group-hover:scale-110">
                                <service.icon className="h-5 w-5" />
                            </div>
                            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {service.title}
                            </h3>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </Section>
    </>
);

export default DataEntryConversion;
