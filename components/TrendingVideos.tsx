import { Box, Center, Flex } from "@chakra-ui/react";
import Video from "./Video";

export default function TrendingVideos() {
  return (
    <Flex
      py="10"
      flexDirection={"row"}
      justifyContent={"space-between"}
      paddingTop={"30px"}
      gap={"10"}
    >
      <Video
        videoImage="/images/video-list-bg4.svg"
        videoEarn="25"
        videoTitle="The Art History of NFTs"
        videoAvatar="https://bit.ly/dan-abramov"
        avatarName="NFT Nerd"
        views="1.2M"
        time="13:34"
        uploadDate="1 week"
      />
      <Video
        videoImage="/images/video-list-bg5.svg"
        videoEarn="33"
        videoTitle="The Digital Revolution: Understanding Cryptocurrency, Web3 and De-Fi"
        videoAvatar="/images/video-avatar-5.svg"
        avatarName="Benjamin Lee"
        views="748K"
        time="19:46"
        uploadDate="1 week"
      />
      <Video
        videoImage="/images/video-list-bg10.svg"
        videoEarn="17"
        videoTitle="Owning the Future: The Cultural Significance and Impact of NFTs on the Arts and Collectibles"
        videoAvatar="/images/video-avatar-6.svg"
        avatarName="The Adventure"
        views="555K"
        time="10:15"
        uploadDate="18 hours"
      />
    </Flex>
  );
}
