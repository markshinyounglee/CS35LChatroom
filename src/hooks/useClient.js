import { useEffect } from "react";

export const useClient = ({apiKey, userData, tokenOrProvider}) => {
    const [chatClient, setChatClient] = useState(null);

    useEffect(() => {
        const client = new StreamChat(apiKey); // create client using api key

        let didUserConnectInterrupt = false;

        const connectionPromise = client.connectUser(userData, tokenOrProvider)
        .then(() => 
        {
            if (!didUserConnectInterrupt) setChatClient(client);
        });

        return () => {
            didUserConnectInterrupt = true;
            setChatClient(null); 

            connectionPromise
            .then(() => client.disconnectUser())
            .then(() => {
                console.log("Connection closed");
            });
        };
    }, [apiKey, userData.id, tokenOrProvider]);

    return chatClient;
}