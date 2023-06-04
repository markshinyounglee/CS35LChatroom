// API documentation: https://getstream.io/chat/docs/sdk/react/basics/getting_started/
// Using Stream Chat SDK into React Quick Start Video: https://www.youtube.com/watch?v=kGKq4giL4ok


// theming guide: https://getstream.io/chat/docs/sdk/react/guides/theming/
// customizing guide: https://getstream.io/chat/docs/sdk/react/guides/customization/

import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { 
  Chat, 
  Channel, 
  ChannelHeader, 
  ChannelList,
  LoadingIndicator,
  MessageList,
  MessageInput, 
  Thread, 
  Window, 
  useChatContext 
} from 'stream-chat-react';
import { useClient } from './hooks/useClient';
// import './layout.css'
import '@stream-io/stream-chat-css/dist/css/index.css';


const chatFilters = { type: 'messaging', members: { $in: ['rapid-voice-2']
} };
const chatOptions = {state: true, presence: true, limit: 10};
const chatSort = { last_message_at: -1 };
const api_key = 'edxmbfm8zpsd';
const api_secret = 'tfvyztgvrgvmkavemu8c4wnxfp5rwzqjnwkcn587kfmfbbd6qx6ssfcunfrgxcxh';
const user_id1 = 'msleeucla';
const user_id2 = 'armandurrani';
const user_name1 = 'Mark Lee';
const user_name2 = 'Arman Durrani';
const channel_id = 'Beef0'; // will be auto-generated if not supplied to channel() method 
let chatNumber = 0;


// how to initialize client and connect user: https://getstream.io/chat/docs/react/?language=javascript
const client = StreamChat.getInstance(api_key); // or new StreamChat(api_key);

await client.connectUser(
  {
    id: user_id1,
    name: user_name1,
    image: 'https://i.imgur.com/fR9Jz14.png',
  },
  api_secret, // more on client authentication at: https://getstream.io/chat/docs/react/tokens_and_authentication/?language=javascript
)

const channel = client.channel('messaging', 'travel', {
  members: ['abhi', 'taejus'],
  name: 'This channel is about traveling'
});

// fetch the channel state and get future updates
await channel.watch(); 

/*
// generating user token: https://getstream.io/chat/docs/javascript/tokens_and_authentication/?language=nodejs
// Initialize server client
const serverClient = StreamChat.getInstance(api_key, api_secret);
// Create user token
const userToken1 = serverClient.createToken(user_id1); // id is unique so token is also unique
const userToken2 = serverClient.createToken(user_id2); 

const App = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    const chatClient = new StreamChat(api_key); // custom API key from getstream.io

    const handleConnectionChange = ({ online = false }) => { // connection-lost handler
      if(!online) return console.log('connection lost');
      setClient(chatClient);
    };

    chatClient.on('connection.changed', handleConnectionChange);

    chatClient.connectUser( // client-side-generated tokens used to authenticate a user
      {
        id: user_id1,
        name: user_name1,
        // image: 'https://getstream.io/random_png/?id=rapid-rain-8&name=rapid',
      },
      userToken1,
    );

    chatClient.connectUser(
      {
        id: user_id2,
        name: user_name2,
      },
      userToken2,
    );
    
    const channel = chatClient.channel('messaging', channel_id, {
      // add as many custom fields as you'd like
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
      name: 'Beefreal Chat ' + chatNumber,
      members: [user_id1, user_id2],
    });

    return () => { // unmount when the even listener is removed
      chatClient.off('connection.changed', handleConnectionChange);
      chatClient.disconnectUser().then(() => console.log('connection closed'));
    };
  }, []);

  if(!client) return null;

  return (
    <Chat client={client}>
      <ChannelList filters={chatFilters} sort={chatSort} options={chatOptions}/>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;
*/


  // use context hook later (may be revisited)
  // const { client } = useChatContext(); // react context




  // I will figure out how to use this later
  /*
  await fetch(`/api/beef/"${user._id}`, {
    method: 'POST', // create a resource
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      votesForUser1: updatedCount + 1 // Include the current vote count
    })
  })
  */


  

  