import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import subscriptionService from "../services/subscriptions.service";
import Button from "./Button";

const VideoDesAndChannel = ({
  channelId,
  username,
  desc,
  avatar,
  subscribed,
}) => {
  const [subscribers, setSubscribers] = useState(0);
  useEffect(() => {
    ;(async () => {
      const subscribers = await subscriptionService.getSubscribers(channelId);
      setSubscribers(subscribers);
    })();
  } , []);

  const handleSubscribe = async (channelId) => {
    await subscriptionService.addOrRemoveSubscription(
      channelId
    );
  };

  return (
    <div>
      <div>
        <div>
          <Avatar avatar={avatar} />
          <div>
            <h3>{username}</h3>
            <p>{`${subscribers} subscribers`}</p>
          </div>
        </div>
        <Button
          onClick={handleSubscribe}
          ref={ref}
          bgColor={subscribed ? "bg-gray-300" : "bg-gray-900"}
          textColor={subscribed ? "text-gray-900" : "text-gray-100"}
        >
          Subscribe
        </Button>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default VideoDesAndChannel;
