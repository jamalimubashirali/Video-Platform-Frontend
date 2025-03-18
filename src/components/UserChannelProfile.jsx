import React, { useState } from 'react'
import {Avatar, Button} from "./index";
import userServices from "../services/user.service";
import subscriptionService from '../services/subscriptions.service';

const UserChannelProfile = ({userId}) => {
    const [user , setUser] = useState({});
    const [subscriptions, setSubscriptions] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        ;(async () => {
            try {
                const user = await userServices.getUserById(userId);
                if(user){
                    setUser(user);
                    const subscription = await subscriptionService.getSubscription(userId);
                    setSubscriptions(subscription);
                    setLoading(false);
                }
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        })();
    });

    if(loading){
        return <p>Loading...</p>
    }

return error ? <p>Something went wrong</p> :  (
    <div>
        <div className="flex items-center mb-4">
            <Avatar imageUrl={user.avatar} size="lg" />
            <div className="ml-4">
                <h2 className="text-2xl font-bold">{user.username}</h2>
                <p className="text-gray-500">{subscriptions} subscribers</p>
            </div>
        </div>
        <div className="flex items-center mb-4">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Subscribe
            </Button>
        </div>
        <div className="mb-4">
            <img src={user.coverImage} alt="Cover Image" className="w-full" />
        </div>
    </div>
);
}

export default UserChannelProfile;
