import React from "react";
import PropTypes from "prop-types";

function ConversationList({ conversations, selectConversation }) {
  return (
    <div className="conversation-list w-96 p-2 fixed h-full rounded-lg bg-white shadow-md max-h-[575px] overflow-y-auto">
      <input
        type="text"
        placeholder="Search..."
        className="search-bar p-2 mb-2 w-full bg-gray-200 text-gray-800 rounded-lg focus:outline-none focus:bg-white"
        aria-label="Search conversations"
      />
      <div className="conversation-list-inner">
        {conversations.length > 0 ? (
          conversations.map((conv) => (
            <div
              key={conv.id}
              className="conversation-item p-2 mb-2 border border-gray-300 cursor-pointer hover:bg-gray-100 rounded-lg transition duration-300"
              onClick={() => selectConversation(conv.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  selectConversation(conv.id);
                }
              }}
            >
              <h4 className="text-sm font-semibold text-gray-900">
                {conv.name}
              </h4>
              <p className="text-xs text-gray-600 truncate">
                {conv.lastMessage}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No conversations found.</p>
        )}
      </div>
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
