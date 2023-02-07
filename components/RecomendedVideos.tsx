import { Box, Center, Flex } from "@chakra-ui/react";
import Video from "./Video";

export default function RecomendedVideos() {
  return (
    <Flex
      py="10"
      flexDirection={"row"}
      justifyContent={"space-between"}
      paddingTop={"30px"}
      gap={"10"}
    >
      <Video
        videoImage="/images/video-list-bg1.svg"
        videoEarn="24"
        videoTitle="Web3 Unlocked: Decoding the Mysteries of Decentralized Technology"
        videoAvatar="/images/video-avatar-1.svg"
        avatarName="Mastermind"
        views="432K"
        time="13:12"
        uploadDate="3 days"
      />
      <Video
        videoImage="/images/video-list-bg2.svg"
        videoEarn="16"
        videoTitle="An Objective Look at the Pros and Cons of Decentralized Tech"
        videoAvatar="/images/video-avatar-2.svg"
        avatarName="Akio Nakamura"
        views="153K"
        time="09:20"
        uploadDate="1 month"
      />
      <Video
        videoImage="/images/video-list-bg3.svg"
        videoEarn="10"
        videoTitle="A Personal Look at the Life of an Independent Tech Creator"
        videoAvatar="/images/video-avatar-3.svg"
        avatarName="Tech Wizard"
        views="76K"
        time="08:55"
        uploadDate="3 days"
      />
    </Flex>
  );
}
