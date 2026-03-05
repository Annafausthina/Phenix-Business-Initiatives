import { Database, FileText, Code, Search, Globe, Layout, FileType, Zap, Shield, Image as ImageIcon, MessageSquare, Scale, Briefcase, ScanLine } from 'lucide-react';
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
    <div className="relative overflow-hidden">
        <Hero title="Data Entry & Conversion" subtitle="Intelligent automation meets high-volume precision." />

        <Section>
            <div className="mx-auto max-w-4xl space-y-6">
                <ScrollReveal>
                    <div className="line-accent mb-6" />
                    <p className="text-muted-foreground leading-relaxed text-lg">
                        PBI offers a wide range of data services including data entry, processing, conversion, and mining. Working with diverse industries—healthcare, retail, finance, and real estate—we deliver outstanding quality at optimal costs with advanced web-based technologies.
                    </p>
                </ScrollReveal>
            </div>
        </Section>

        {/* ── AI Intelligent Capture ── */}
        <section className="py-20 px-4 bg-primary/5 text-foreground overflow-hidden relative">
            <div className="absolute top-0 right-0 p-20 opacity-10">
                <ScanLine className="h-64 w-64 text-primary animate-[pulse_3s_ease-in-out_infinite]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-2xl">
                    <ScrollReveal>
                        <span className="text-primary font-black uppercase tracking-widest text-xs mb-4 block">Next-Gen Automation</span>
                        <h2 className="text-4xl font-['Syne'] font-bold mb-6">AI-Powered <span className="text-primary underline decoration-primary/30">Intelligent Capture</span></h2>
                        <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                            Move beyond simple OCR. Our AI/ML models understand context, extracting structured data from unformatted documents with 99.9% accuracy. We handle complex tabular data, handwritten notes, and legacy formats with ease.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            { title: "Smart OCR", desc: "Machine learning that improves with every scan." },
                            { title: "contextual extraction", desc: "Understanding data intent, not just text." }
                        ].map((feature, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="p-5 rounded-xl border border-black/5 bg-white/40 backdrop-blur-sm">
                                    <h4 className="font-bold text-primary mb-1 uppercase text-xs tracking-wider">{feature.title}</h4>
                                    <p className="text-foreground/40 text-xs leading-relaxed">{feature.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <Section>
            <ScrollReveal>
                <div className="text-center mb-12">
                    <span className="tag mb-4 inline-flex">Data Services</span>
                    <h2 className="text-foreground">Full Capability List</h2>
                </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {entryServices.map((service, i) => (
                    <ScrollReveal key={i} delay={i * 0.03}>
                        <div className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300">
                            <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                                <service.icon className="h-4 w-4" />
                            </div>
                            <h3 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                                {service.title}
                            </h3>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </Section>
    </div>
);

export default DataEntryConversion;
