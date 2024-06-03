import React from "react";
import PropTypes from "prop-types";

function ConversationList({ conversations, selectConversation }) {
  return (
    <div className="conversation-list  p-4 rounded-lg bg-white shadow-md">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar p-2 mb-4 w-full bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:bg-white"
        aria-label="Search conversations"
      />
      {conversations.length > 0 ? (
        conversations.map((conv) => (
          <div
            key={conv.id}
            className="conversation-item p-4 mb-2 border border-gray-300 cursor-pointer hover:bg-gray-50 rounded-lg shadow-sm"
            onClick={() => selectConversation(conv.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                selectConversation(conv.id);
              }
            }}
          >
            <h4 className="text-lg font-semibold text-gray-900">{conv.name}</h4>
            <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No conversations found.</p>
      )}
    </div>
  );
}

ConversationList.propTypes = {
  conversations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      lastMessage: PropTypes.string,
    })
  ).isRequired,
  selectConversation: PropTypes.func.isRequired,
};

export default ConversationList;
