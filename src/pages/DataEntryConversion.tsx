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
        <Hero title="Data Entry / Conversion Services" />

        <Section>
            <div className="mx-auto max-w-4xl space-y-6">
                <ScrollReveal>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        PBI offers a wide range of data services such as data entry, data processing, data conversion, data mining, etc. We assure you outstanding quality at optimal costs and on-time delivery at all times. We work with a diverse set of clients from various industries including healthcare, retail, finance, real estate, lodging, insurance, mortgage, and more.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p className="text-muted-foreground leading-relaxed">
                        Our Data Entry/Conversion/Mining services have been widely used by a variety of clients across multi-various industries helping them to cut down on their operational costs significantly. What makes us the coveted choice is our security compliant, round-the-clock services that are nominally priced but highly reliable.
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <p className="text-muted-foreground leading-relaxed">
                        Our impeccable quality of work and delivery will help you to add a lot of value to your business processes and achieve fast and predictable results for your organization.
                    </p>
                </ScrollReveal>
            </div>
        </Section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[hsl(222,47%,8%)]">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-10">
                        <span className="tag mb-4 inline-flex">Full Portfolio</span>
                        <h2 className="text-white">Data Entry &amp; Conversion Services</h2>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {entryServices.map((service, i) => (
                        <ScrollReveal key={i} delay={i * 0.03}>
                            <div className="group flex items-center gap-3 p-4 rounded-xl border border-white/8 bg-[hsl(222,47%,10%)] hover:border-amber-400/30 transition-all duration-300">
                                <div className="h-9 w-9 rounded-lg bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400/20 transition-colors shrink-0">
                                    <service.icon className="h-4 w-4" />
                                </div>
                                <h3 className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors leading-snug">
                                    {service.title}
                                </h3>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default DataEntryConversion;
