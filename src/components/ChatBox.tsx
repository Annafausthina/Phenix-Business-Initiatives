import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Bot, Sparkles } from 'lucide-react';

interface Message {
    role: 'ai' | 'user';
    text: string;
}

const ChatBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'ai', text: "Hello! I'm your PBI AI Assistant. How can I help you with our BPO and healthcare services today?" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulated AI response
        setTimeout(() => {
            setIsTyping(false);
            const responses = [
                "That's a great question about our Revenue Cycle Management. We offer 99.9% accuracy guarantee.",
                "Our medical coding specialists are fully HIPAA compliant and available 24/7.",
                "I can help you schedule a consultation with our project managers. Would you like to proceed?",
                "Our data entry solutions use advanced AI capture to ensure zero manual errors."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            setMessages(prev => [...prev, { role: 'ai', text: randomResponse }]);
        }, 1500);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] font-['Inter']">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-[350px] h-[520px] rounded-[2.5rem] overflow-hidden border border-gray-100 bg-white shadow-[0_32px_64px_-16px_rgba(20,145,132,0.25)] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-5 bg-gradient-to-r from-[#149184] to-[#0d6b61] text-white flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full border-2 border-white/20 overflow-hidden bg-white/20 shadow-lg">
                                    <img src="/ai-avatar.png" alt="AI Agent" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm leading-none">PBI Assistant</h4>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-white/40 animate-pulse" />
                                        <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">AI Core Active</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Message Area */}
                        <div
                            ref={scrollRef}
                            className="flex-grow overflow-y-auto p-5 space-y-4 scrollbar-hide bg-gray-50/50"
                        >
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {m.role === 'ai' && (
                                        <div className="h-6 w-6 rounded-full overflow-hidden mr-2 mt-1 border border-gray-100 shrink-0">
                                            <img src="/ai-avatar.png" alt="" className="w-full h-full object-cover" />
                                        </div>
                                    )}
                                    <div className={`max-w-[80%] p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${m.role === 'user'
                                            ? 'bg-[#149184] text-white font-medium rounded-tr-none'
                                            : 'bg-white border border-gray-100 text-foreground/90 rounded-tl-none font-medium'
                                        }`}>
                                        {m.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
                                        <div className="flex gap-1.5">
                                            <div className="h-1.5 w-1.5 bg-[#149184]/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <div className="h-1.5 w-1.5 bg-[#149184]/50 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                                            <div className="h-1.5 w-1.5 bg-[#149184]/50 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Form */}
                        <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2 items-center">
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything..."
                                className="flex-grow bg-transparent border-none px-2 py-1 text-sm focus:outline-none placeholder:text-gray-400 text-gray-700 font-medium"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="h-10 w-10 flex items-center justify-center bg-[#149184] text-white rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 shadow-lg shadow-[#149184]/20"
                            >
                                <Send className="h-4 w-4" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`h-16 w-16 rounded-full shadow-[0_20px_40px_-10px_rgba(20,145,132,0.4)] flex items-center justify-center relative group overflow-hidden transition-all duration-500 ${isOpen ? 'bg-white border border-gray-100' : 'bg-[#149184]'
                    }`}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                        >
                            <X className="h-7 w-7 text-[#149184]" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-white/20 rounded-full scale-150 animate-ping opacity-20" />
                            <img src="/ai-avatar.png" alt="Chat" className="h-12 w-12 rounded-full object-cover relative z-10 border-2 border-white/20" />
                            <div className="absolute -top-1 -right-1 h-5 w-5 bg-white rounded-full border-[3px] border-[#149184] z-20 flex items-center justify-center">
                                <Sparkles className="h-2 w-2 text-[#149184]" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default ChatBox;
