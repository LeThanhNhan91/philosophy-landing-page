"use client";
import React, { useState } from 'react';
import EventComponent from '@/components/mission/event/EventComponent';
import { eventsData } from '@/components/mission/event/EventData';
import MissionPage from '@/components/mission/Misson';
import LandingPage from '@/components/mission/intro/Intro';



export default function Home() {
    // State để quản lý trang hiện tại: 'landing', 'mission', hoặc 'event'
    const [currentPage, setCurrentPage] = useState('landing');
    
    // State để lưu ID của sự kiện được chọn để hiển thị
    const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

    // Hàm điều hướng đến trang Mission
    const handleNavigateToMission = () => {
        setCurrentPage('mission');
    };

    // Hàm điều hướng đến trang chi tiết sự kiện
    const handleNavigateToEvent = (id: string) => {
        setSelectedEventId(id);
        setCurrentPage('event');
    };

    // Hàm quay trở lại trang Mission từ trang chi tiết
    const handleBackToMission = () => {
        setSelectedEventId(null);
        setCurrentPage('mission');
    };
    
    // Tìm dữ liệu của sự kiện đã được chọn
    const selectedEvent = eventsData.find(event => event.id === selectedEventId);

    // Hàm render component tương ứng với trang hiện tại
    const renderPage = () => {
        switch (currentPage) {
            case 'mission':
                return <MissionPage onNavigateToEvent={handleNavigateToEvent} />;
            case 'event':
                if (selectedEvent) {
                    return <EventComponent event={selectedEvent} onBack={handleBackToMission} />;
                }
                // Nếu không tìm thấy sự kiện, quay lại trang mission
                setCurrentPage('mission'); 
                return <MissionPage onNavigateToEvent={handleNavigateToEvent} />;
            case 'landing':
            default:
                return <LandingPage onNavigate={handleNavigateToMission} />;
        }
    };

    return (
        <div>
            {renderPage()}
        </div>
    );
}

