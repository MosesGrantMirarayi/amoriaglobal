'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Amoria Global Tech assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response with delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! Welcome to Amoria Global Tech. I'm here to help you with information about our services and products.";
    }
    
    if (input.includes('service') || input.includes('what do you do')) {
      return "We offer Software Publishing, Web Portals, Computer Programming, Computer Consultancy & Facilities Management, TV Programming & Broadcasting Activities, and Memories Storage solutions.";
    }
    
    if (input.includes('product') || input.includes('solution')) {
      return "Our products include USSD Mobile Banking, Clearing and Payment Solutions, Android Based Agency Banking, Digital Payment Gateway, Security Management System, and Cloud Infrastructure Suite.";
    }
    
    if (input.includes('contact') || input.includes('phone') || input.includes('email')) {
      return "You can reach us at +250 788 437 347 or email us at info@amoriaglobal.com. We're located in Kigali, Rwanda and available Mon-Fri: 8am - 6pm.";
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('pricing')) {
      return "Our pricing varies by solution. We offer Basic plans starting at $15/month, Pro plans at $85/month, and Enterprise solutions at $125/month. Contact us for custom pricing.";
    }
    
    if (input.includes('location') || input.includes('where') || input.includes('address')) {
      return "We're located in Kigali, Rwanda. We serve clients across Africa and globally through our digital solutions.";
    }
    
    if (input.includes('team') || input.includes('about')) {
      return "Amoria Global Tech is led by experienced professionals specializing in technology innovation, software development, and digital transformation.";
    }
    
    if (input.includes('help') || input.includes('support')) {
      return "I can help you with information about our services, products, pricing, contact details, and general inquiries. What would you like to know more about?";
    }
    
    return "Thank you for your question! For detailed information about that topic, please contact our team at +250 788 437 347 or visit our services page. Is there anything else I can help you with?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What services do you offer?",
    "How can I contact you?",
    "What are your pricing plans?",
    "Tell me about your products"
  ];

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <i className="bi bi-robot"></i>
            </div>
            <div className="chatbot-title">
              <h4>Amoria Assistant</h4>
              <span className="chatbot-status">Online</span>
            </div>
          </div>
          <button className="chatbot-close" onClick={toggleChatbot}>
            <i className="bi bi-x"></i>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="message bot">
              <div className="message-content typing">
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="quick-questions">
            <p>Quick questions:</p>
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                className="quick-question-btn"
                onClick={() => {
                  setInputValue(question);
                  setTimeout(() => handleSendMessage(), 100);
                }}
              >
                {question}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chatbot-input">
          <div className="input-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isTyping}
            />
            <button 
              onClick={handleSendMessage} 
              disabled={!inputValue.trim() || isTyping}
              className="bg-[#31c92c] p-2 h-[40px] w-[40px] rounded-full text-white cursor-pointer transition-all duration-3s disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="bi bi-send-fill"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button className={`chatbot-toggle ${isOpen ? 'open' : ''}`} onClick={toggleChatbot}>
        {isOpen ? (
          <i className="bi bi-x"></i>
        ) : (
          <i className="bi bi-chat-dots-fill"></i>
        )}
        {!isOpen && <span className="notification-dot"></span>}
      </button>
    </div>
  );
}