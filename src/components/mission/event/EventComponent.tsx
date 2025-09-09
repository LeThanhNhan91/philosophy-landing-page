"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { EventData } from "./EventData";

// Định nghĩa kiểu cho props
interface EventComponentProps {
    event: EventData;
    onBack: () => void;
}

// Component hiển thị chi tiết một sự kiện
const EventComponent: FC<EventComponentProps> = ({ event, onBack }) => {
    return (
        <div className="bg-[#2a2726] text-[#e8e2d9] min-h-screen font-serif p-4 sm:p-8 md:p-12">
              <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
                body { background-color: #2a2726; font-family: 'Noto Sans', sans-serif; }
            `}</style>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Nút Back */}
                <button 
                    onClick={onBack} 
                    className="absolute top-18 left-4 text-sm uppercase tracking-widest hover:text-[#c5b8a5] transition-colors z-10"
                >
                    &larr; Back to Mission
                </button>

                {/* Header */}
                <header className="text-center my-12">
                    <h1 className="text-7xl md:text-9xl font-bold text-[#c5b8a5]" style={{fontFamily: "'Playfair Display', serif"}}>
                        YEAR {event.year}
                    </h1>
                </header>

                {/* Phần nội dung chính */}
                <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Cột trái */}
                    <div className="md:col-span-2 space-y-8">
                        <h2 className="text-4xl font-bold" style={{fontFamily: "'Playfair Display', serif"}}>{event.title}</h2>
                        <div className="relative">
                             <span className="absolute -top-4 -left-4 text-6xl text-[#c5b8a5] opacity-30">“</span>
                             <p className="text-xl italic">{event.mainQuote}</p>
                        </div>
                        <div className="border-l-2 border-[#c5b8a5]/30 pl-4">
                            <p className="mb-4">{event.description.paragraph1}</p>
                            <p>{event.description.paragraph2}</p>
                        </div>
                    </div>

                    {/* Cột phải (Hình ảnh chính) */}
                    <div className="md:col-span-3">
                        <img 
                            src={event.imageUrl} 
                            alt={event.title} 
                            className="w-full h-auto object-cover border-4 border-black/20 shadow-lg"
                        />
                    </div>
                </main>

                 {/* Thư viện ảnh và trích dẫn cuối */}
                 <section className="max-w-7xl mx-auto mt-16 space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-4">
                            <img src={event.gallery.image1} alt={event.gallery.caption1} className="w-full h-auto object-cover"/>
                            <p className="text-center text-sm italic text-[#c5b8a5]">{event.gallery.caption1}</p>
                        </div>
                        <div className="space-y-4">
                             <img src={event.gallery.image2} alt={event.gallery.caption2} className="w-full h-auto object-cover"/>
                            <p className="text-center text-sm italic text-[#c5b8a5]">{event.gallery.caption2}</p>
                        </div>
                    </div>
                    
                    <div className="text-center py-12">
                         <div className="relative max-w-3xl mx-auto">
                             <span className="absolute -top-8 left-0 text-8xl text-[#c5b8a5] opacity-20">“</span>
                             <p className="text-2xl md:text-3xl italic leading-relaxed">{event.finalQuote.text}</p>
                             <span className="absolute -bottom-8 right-0 text-8xl text-[#c5b8a5] opacity-20">”</span>
                         </div>
                         <p className="mt-6 text-lg text-[#c5b8a5]">-- {event.finalQuote.author} --</p>
                    </div>
                 </section>

            </motion.div>
        </div>
    );
};

export default EventComponent;
