import React from 'react';

// Declaration to inform TypeScript about the botpressWebChat object on the window
// FIX: Merged botpressWebChat interface to include both `init` and `send` methods, resolving type conflicts with other components.
declare global {
  interface Window {
    botpressWebChat?: {
      init: (config: object, target: HTMLElement) => void;
      send: (payload: { type: string }) => void;
    };
  }
}

const ChatbotButton: React.FC = () => {
  const openChat = () => {
    // Check if the Botpress script has loaded and added the object to the window
    if (window.botpressWebChat) {
      window.botpressWebChat.send({ type: 'show' });
    } else {
      console.error('Botpress webchat is not available. Make sure the script is loaded.');
    }
  };

  return (
    <button
      onClick={openChat}
      className="fixed bottom-6 right-6 bg-brand-primary text-white rounded-full p-4 shadow-lg hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-base-100 focus:ring-brand-primary transition-transform transform hover:scale-110 z-50"
      aria-label="Open chat"
      title="Chat with our assistant"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10zm-4-4H7v-2h10v2zm-2-4H7V5h8v2z" />
      </svg>
    </button>
  );
};

export default ChatbotButton;
