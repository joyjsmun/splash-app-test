import { Box, Text, Image, Flex, Button, Link } from "@chakra-ui/react";
import Video from "./Video";
import VideoHistory from "./VideoHistory";

const MyProfileActivity: React.FC = () => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"space-between"}
      paddingY={"15"}
      marginY={"10"}
      gap={"10"}
    >
      <Box
        background="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)"
        backdropFilter="blur(2px)"
        borderRadius={"12px"}
        paddingX={"40px"}
        paddingY={"30px"}
        width={"full"}
      >
        <Text fontSize={"2xl"} fontWeight={"500"}>
          Today - Februrary 10, 2023
        </Text>
        <VideoHistory
          videoImage="/images/video-list-bg7.svg"
          videoEarn="25"
          videoTitle="The Impact of Distributed Ledger Technology on the Healthcare Industry"
          videoAvatar="/images/video-avatar-1.svg"
          avatarName="Mastermind"
          views="1.23k"
          time="05:15"
          uploadDate="14 hours"
        />
        <VideoHistory
          videoImage="/images/video-list-bg9.svg"
          videoEarn="25"
          videoTitle="Owning the Future: The Cultural Significance and Impact of NFTs"
          videoAvatar="/images/video-avatar-6.svg"
          avatarName="The Adventure"
          views="555K"
          time="13:34"
          uploadDate="18 hours"
        />
      </Box>
      <Box
        background="linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)"
        backdropFilter="blur(2px)"
        borderRadius={"12px"}
        paddingX={"40px"}
        paddingY={"30px"}
        width={"full"}
      >
        <Text fontSize={"2xl"} fontWeight={"500"}>
          Yesterday - Februrary 9, 2023
        </Text>
        <VideoHistory
          videoImage="/images/video-list-bg4.svg"
          videoEarn="25"
          videoTitle="The Art History of NFTs"
          videoAvatar="https://bit.ly/dan-abramov"
          avatarName="NFT Nerd"
          views="1.2M"
          time="13:34"
          uploadDate="14 hours"
        />
        <VideoHistory
          videoImage="/images/video-list-bg3.svg"
          videoEarn="25"
          videoTitle="A Personal Look at the Life of an Independent Tech Creator"
          videoAvatar="/images/video-avatar-2.svg"
          avatarName="Akio Nakamura"
          views="555K"
          time="13:34"
          uploadDate="2 Months"
        />
        <VideoHistory
          videoImage="/images/video-list-bg8.svg"
          videoEarn="25"
          videoTitle="Space-Based Blockchain: The Possibilities of Decentralized Systems in the Final Frontier"
          videoAvatar="/images/video-avatar-5.svg"
          avatarName="Kingmaking"
          views="1.4M"
          time="14:45"
          uploadDate="2 Months"
        />
      </Box>
    </Flex>
  );
};

export default MyProfileActivity;
